-- ============================================================
-- PASTE THIS ENTIRE SCRIPT INTO SUPABASE SQL EDITOR AND RUN IT
-- It will fix all form submission issues
-- ============================================================

-- 1. Create booking_requests table if it doesn't exist
CREATE TABLE IF NOT EXISTS booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  year text NOT NULL,
  make_model text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE booking_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert booking requests
DO $$ BEGIN
  CREATE POLICY "Anyone can submit booking requests"
    ON booking_requests FOR INSERT TO anon, authenticated
    WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Allow authenticated users to read
DO $$ BEGIN
  CREATE POLICY "Authenticated users can read all booking requests"
    ON booking_requests FOR SELECT TO authenticated
    USING (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Allow authenticated users to update
DO $$ BEGIN
  CREATE POLICY "Authenticated users can update booking requests"
    ON booking_requests FOR UPDATE TO authenticated
    USING (true) WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 2. Fix the trigger so it never blocks inserts
DROP TRIGGER IF EXISTS on_booking_request_created ON booking_requests;
DROP FUNCTION IF EXISTS notify_new_booking();

-- Try to enable pg_net (may already be enabled)
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

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

CREATE TRIGGER on_booking_request_created
  AFTER INSERT ON booking_requests
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_booking();

-- 3. Fix contact form constraint
ALTER TABLE contact_form_submissions
DROP CONSTRAINT IF EXISTS contact_form_submissions_service_interest_check;

-- 4. Create other tables if missing
CREATE TABLE IF NOT EXISTS contact_form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service_interest text NOT NULL,
  created_at timestamptz DEFAULT now(),
  contacted boolean DEFAULT false
);
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "Anyone can submit contact form"
    ON contact_form_submissions FOR INSERT TO anon
    WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS quote_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  vehicle text NOT NULL,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE quote_submissions ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "Anyone can submit quotes"
    ON quote_submissions FOR INSERT TO anon
    WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS cost_guide_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact text NOT NULL,
  contact_type text NOT NULL CHECK (contact_type IN ('email', 'phone')),
  source_page text DEFAULT 'homepage',
  created_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text
);
ALTER TABLE cost_guide_leads ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "Anyone can submit cost guide leads"
    ON cost_guide_leads FOR INSERT TO anon
    WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Done! All tables and policies are set up.
-- Test by submitting the form on your website.
