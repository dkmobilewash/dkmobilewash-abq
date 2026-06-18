/*
  # Create quote submissions table

  1. New Tables
    - `quote_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Customer's full name
      - `phone` (text) - Customer's phone number
      - `vehicle` (text) - Vehicle year, make, and model
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `quote_submissions` table
    - Add policy for service role to insert and read data
*/

CREATE TABLE IF NOT EXISTS quote_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  vehicle text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert quote submissions"
  ON quote_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read quote submissions"
  ON quote_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Anon users can insert quote submissions"
  ON quote_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
