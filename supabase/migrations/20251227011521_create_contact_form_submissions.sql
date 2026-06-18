/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_form_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Customer's full name
      - `phone` (text) - Customer's phone number
      - `service_interest` (text) - Service they're interested in (Detailing, Paint Correction, or Ceramic Coating)
      - `created_at` (timestamptz) - When the form was submitted
      - `contacted` (boolean) - Whether the customer has been contacted (defaults to false)

  2. Security
    - Enable RLS on `contact_form_submissions` table
    - Add policy for service role to read all submissions
    - Add policy for anonymous users to insert their own submissions

  ## Notes
  - Allows anonymous users to submit contact forms
  - Business owners can view all submissions through service role
  - Tracks when submissions were created and whether they've been contacted
*/

CREATE TABLE IF NOT EXISTS contact_form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service_interest text NOT NULL CHECK (service_interest IN ('Detailing', 'Paint Correction', 'Ceramic Coating')),
  created_at timestamptz DEFAULT now(),
  contacted boolean DEFAULT false
);

ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact form
CREATE POLICY "Anyone can submit contact form"
  ON contact_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role to read all submissions
CREATE POLICY "Service role can read all submissions"
  ON contact_form_submissions
  FOR SELECT
  TO service_role
  USING (true);