/*
  # Make booking trigger non-blocking

  The previous trigger function would crash and roll back the INSERT if
  pg_net was unavailable or the Edge Function failed. This wraps the
  notification call in an EXCEPTION handler so bookings always succeed
  even if the email notification fails.
*/

-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_booking_request_created ON booking_requests;
DROP FUNCTION IF EXISTS notify_new_booking();

-- Recreate function with exception handling so inserts never fail
CREATE OR REPLACE FUNCTION notify_new_booking()
RETURNS TRIGGER AS $$
BEGIN
  BEGIN
    PERFORM net.http_post(
      url := 'https://tfbmmnwyoraaealnfsfw.supabase.co/functions/v1/notify-new-booking',
      body := json_build_object(
        'id', NEW.id,
        'name', NEW.name,
        'phone', NEW.phone,
        'year', NEW.year,
        'make_model', NEW.make_model,
        'created_at', NEW.created_at
      )::jsonb,
      headers := '{"Content-Type": "application/json"}'::jsonb
    );
  EXCEPTION WHEN OTHERS THEN
    RAISE WARNING 'notify_new_booking failed: %', SQLERRM;
  END;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate trigger
CREATE TRIGGER on_booking_request_created
  AFTER INSERT ON booking_requests
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_booking();
