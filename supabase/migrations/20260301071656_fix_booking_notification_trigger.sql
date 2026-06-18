/*
  # Fix Database Trigger for Email Notifications

  1. Changes
    - Update trigger function to not wait for HTTP response
    - Use pg_net extension for async background requests
    - This prevents errors from blocking the booking insertion

  2. How It Works
    - Trigger fires after booking is successfully inserted
    - Makes async HTTP request in background
    - Booking insertion completes regardless of email status
*/

-- Drop old function and trigger
DROP TRIGGER IF EXISTS on_booking_request_created ON booking_requests;
DROP FUNCTION IF EXISTS notify_new_booking();

-- Enable pg_net extension for async HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Create function to call the Edge Function asynchronously
CREATE OR REPLACE FUNCTION notify_new_booking()
RETURNS TRIGGER AS $$
DECLARE
  function_url text;
BEGIN
  function_url := 'https://tfbmmnwyoraaealnfsfw.supabase.co/functions/v1/notify-new-booking';

  -- Make async HTTP POST request (fire and forget)
  PERFORM net.http_post(
    url := function_url,
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

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger that fires after INSERT on booking_requests
CREATE TRIGGER on_booking_request_created
  AFTER INSERT ON booking_requests
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_booking();
