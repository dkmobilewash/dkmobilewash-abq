import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface BookingRequest {
  id: string;
  name: string;
  phone: string;
  year: string;
  make_model: string;
  created_at: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const booking: BookingRequest = await req.json();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #0052CC; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Booking Request</h1>
        </div>

        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #0052CC; margin-top: 0;">Customer Details</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${booking.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="tel:${booking.phone}" style="color: #0052CC; text-decoration: none;">${booking.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Vehicle Year:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${booking.year}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Make/Model:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${booking.make_model}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Submitted:</td>
              <td style="padding: 10px 0;">${new Date(booking.created_at).toLocaleString()}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 20px; background-color: #f0f7ff; border-left: 4px solid #0052CC; border-radius: 4px;">
            <p style="margin: 0; color: #333;">
              <strong>Action Required:</strong> Call ${booking.name} at ${booking.phone} within 24 hours to schedule their detailing service.
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
            <p>This is an automated notification from DK Mobile Wash booking system.</p>
          </div>
        </div>
      </div>
    `;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const emailBody = {
      from: "DK Mobile Wash <notifications@dkmobilewashalbuquerque.com>",
      to: ["diego@detailvice.com"],
      subject: `New Booking Request - ${booking.year} ${booking.make_model}`,
      html: htmlContent,
    };

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailBody),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend error:", errorText);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: errorText }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Error in notify-new-booking function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
