/*
  # Self-Assessment Survey Submissions

  1. New Tables
    - `self_assessment_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `first_name` (text) - Customer's first name
      - `phone` (text) - Customer's mobile phone number
      - `question_1` (boolean) - Do you notice odors in your vehicle even after cleaning?
      - `question_2` (boolean) - Are your seats, carpets, or floor mats darker than they used to be?
      - `question_3` (boolean) - When it rains or you wash your car, does water still bead on the paint?
      - `question_4` (boolean) - Do you eat or transport kids, pets, or work gear in your vehicle weekly?
      - `yes_count` (integer) - Number of "yes" answers (for quick filtering)
      - `assessment_result` (text) - Computed result: "Overdue", "Maintenance", or "Good"
      - `created_at` (timestamptz) - When the assessment was submitted
      - `contacted` (boolean) - Whether the customer has been contacted

  2. Security
    - Enable RLS on `self_assessment_submissions` table
    - Add policy for anonymous users to insert their own submissions
    - Add policy for service role to read all submissions

  ## Notes
  - Stores diagnostic self-assessment data for lead qualification
  - Anonymous users can submit assessments
  - Business can view all submissions and track follow-up status
*/

CREATE TABLE IF NOT EXISTS self_assessment_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  phone text NOT NULL,
  question_1 boolean NOT NULL DEFAULT false,
  question_2 boolean NOT NULL DEFAULT false,
  question_3 boolean NOT NULL DEFAULT false,
  question_4 boolean NOT NULL DEFAULT false,
  yes_count integer NOT NULL DEFAULT 0,
  assessment_result text NOT NULL,
  created_at timestamptz DEFAULT now(),
  contacted boolean DEFAULT false
);

ALTER TABLE self_assessment_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to submit assessments
CREATE POLICY "Anyone can submit self-assessment"
  ON self_assessment_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role to read all submissions
CREATE POLICY "Service role can read all assessments"
  ON self_assessment_submissions
  FOR SELECT
  TO service_role
  USING (true);