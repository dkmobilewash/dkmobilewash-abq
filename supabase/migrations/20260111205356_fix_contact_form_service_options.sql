/*
  # Fix Contact Form Service Options

  1. Changes
    - Remove restrictive CHECK constraint on service_interest column
    - Allow any text value for service_interest to support all package options
  
  2. Security
    - RLS policies remain unchanged
    - Anonymous users can still submit forms
    - Service role can read all submissions
*/

-- Drop the existing check constraint
ALTER TABLE contact_form_submissions 
DROP CONSTRAINT IF EXISTS contact_form_submissions_service_interest_check;

-- The column now accepts any text value for flexibility with package names