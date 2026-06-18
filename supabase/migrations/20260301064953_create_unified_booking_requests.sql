/*
  # Create Unified Booking Requests Table

  1. New Tables
    - `booking_requests`
      - `id` (uuid, primary key) - Unique identifier for each booking request
      - `name` (text) - Customer's full name
      - `phone` (text) - Customer's phone number
      - `year` (text) - Vehicle year (e.g., "2023")
      - `make_model` (text) - Vehicle make and model (e.g., "BMW M4")
      - `status` (text, default 'new') - Request status for tracking
      - `created_at` (timestamptz) - Timestamp of submission
  
  2. Security
    - Enable RLS on `booking_requests` table
    - Add policy for inserting booking requests (public access for form submissions)
    - Add policy for authenticated admin users to read all requests

  3. Purpose
    - Single unified table for ALL booking/quote requests across the entire site
    - Replaces multiple form submission tables with one centralized system
*/

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

-- Allow anyone to insert booking requests (public form submissions)
CREATE POLICY "Anyone can submit booking requests"
  ON booking_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read all booking requests (for admin dashboard)
CREATE POLICY "Authenticated users can read all booking requests"
  ON booking_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update booking status
CREATE POLICY "Authenticated users can update booking requests"
  ON booking_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);