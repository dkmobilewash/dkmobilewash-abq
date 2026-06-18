/*
  # Create Cost Guide Leads Table

  1. New Tables
    - `cost_guide_leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `contact` (text) - Email or phone number provided by the lead
      - `contact_type` (text) - Type of contact (email or phone)
      - `source_page` (text) - Page where the form was submitted
      - `created_at` (timestamptz) - Timestamp of submission
      - `ip_address` (text, optional) - IP address for tracking
      - `user_agent` (text, optional) - Browser user agent
  
  2. Security
    - Enable RLS on `cost_guide_leads` table
    - Add policy for service role to insert leads
    - Public can submit but not read
*/

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

CREATE POLICY "Anyone can submit cost guide leads"
  ON cost_guide_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read all leads"
  ON cost_guide_leads
  FOR SELECT
  TO service_role
  USING (true);