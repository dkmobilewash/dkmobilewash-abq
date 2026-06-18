/*
  # Create Database Trigger for Email Notifications

  1. Purpose
    - Automatically send email notification when new booking request is submitted
    - Calls the notify-new-booking Edge Function for each new row

  2. Changes
    - Create trigger function to invoke Edge Function
    - Create trigger on booking_requests table for INSERT operations
    - Uses Supabase's http extension to call Edge Function

  3. How It Works
    - When a new row is inserted into booking_requests table
    - The trigger automatically calls the notify-new-booking Edge Function
    - Edge Function sends formatted email to diego@detailvice.com
*/

-- Enable the http extension if not already enabled
CREATE EXTENSION IF NOT EXISTS http WITH SCHEMA extensions;

-- Create function to call the Edge Function
CREATE OR REPLACE FUNCTION notify_new_booking()
RETURNS TRIGGER AS $$
DECLARE
  request_id bigint;
  function_url text;
BEGIN
  -- Get the Supabase project URL from environment
  function_url := current_setting('app.settings.supabase_url', true) || '/functions/v1/notify-new-booking';
  
  -- If setting not available, construct from known URL
  IF function_url IS NULL OR function_url = '' THEN
    function_url := 'https://tfbmmnwyoraaealnfsfw.supabase.co/functions/v1/notify-new-booking';
  END IF;

  -- Make async HTTP POST request to Edge Function
  SELECT INTO request_id http_post(
    function_url,
    json_build_object(
      'id', NEW.id,
      'name', NEW.name,
      'phone', NEW.phone,
      'year', NEW.year,
      'make_model', NEW.make_model,
      'created_at', NEW.created_at
    )::text,
    'application/json'
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger that fires after INSERT on booking_requests
DROP TRIGGER IF EXISTS on_booking_request_created ON booking_requests;

CREATE TRIGGER on_booking_request_created
  AFTER INSERT ON booking_requests
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_booking();
