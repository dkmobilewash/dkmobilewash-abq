/*
  # Mobile Detailing Business Database Schema

  ## Overview
  This migration creates the complete database structure for DK Mobile Wash, including customer management, booking system, service catalog, vehicle tracking, and review management.

  ## New Tables
  
  ### 1. customers
  - `id` (uuid, primary key) - Unique customer identifier
  - `email` (text, unique, required) - Customer email address
  - `full_name` (text, required) - Customer full name
  - `phone` (text, required) - Customer phone number
  - `address` (text) - Customer address
  - `city` (text) - Customer city
  - `zip_code` (text) - Customer zip code
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. services
  - `id` (uuid, primary key) - Unique service identifier
  - `name` (text, required) - Service name
  - `slug` (text, unique, required) - URL-friendly service identifier
  - `description` (text) - Service description
  - `base_price` (decimal, required) - Base service price
  - `duration_minutes` (integer, required) - Estimated service duration
  - `is_active` (boolean) - Whether service is currently offered
  - `created_at` (timestamptz) - Service creation timestamp

  ### 3. vehicles
  - `id` (uuid, primary key) - Unique vehicle identifier
  - `customer_id` (uuid, foreign key) - Associated customer
  - `make` (text, required) - Vehicle make (e.g., Honda)
  - `model` (text, required) - Vehicle model (e.g., Accord)
  - `year` (integer, required) - Vehicle year
  - `color` (text) - Vehicle color
  - `license_plate` (text) - Vehicle license plate
  - `notes` (text) - Additional vehicle notes
  - `created_at` (timestamptz) - Record creation timestamp

  ### 4. bookings
  - `id` (uuid, primary key) - Unique booking identifier
  - `customer_id` (uuid, foreign key) - Associated customer
  - `vehicle_id` (uuid, foreign key) - Associated vehicle
  - `service_id` (uuid, foreign key) - Associated service
  - `scheduled_date` (date, required) - Booking date
  - `scheduled_time` (time, required) - Booking time
  - `location_address` (text, required) - Service location address
  - `location_city` (text, required) - Service location city
  - `status` (text, required) - Booking status (pending, confirmed, in_progress, completed, cancelled)
  - `total_price` (decimal, required) - Total booking price
  - `notes` (text) - Additional booking notes
  - `created_at` (timestamptz) - Booking creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 5. reviews
  - `id` (uuid, primary key) - Unique review identifier
  - `booking_id` (uuid, foreign key) - Associated booking
  - `customer_id` (uuid, foreign key) - Associated customer
  - `rating` (integer, required) - Rating (1-5)
  - `comment` (text) - Review comment
  - `is_published` (boolean) - Whether review is visible on website
  - `created_at` (timestamptz) - Review creation timestamp

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Customers can view and update their own data
  - Public can view published reviews and active services
  - Bookings are private to the customer who created them
*/

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  phone text NOT NULL,
  address text,
  city text,
  zip_code text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  base_price decimal(10,2) NOT NULL,
  duration_minutes integer NOT NULL DEFAULT 120,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create vehicles table
CREATE TABLE IF NOT EXISTS vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  make text NOT NULL,
  model text NOT NULL,
  year integer NOT NULL,
  color text,
  license_plate text,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  vehicle_id uuid REFERENCES vehicles(id) ON DELETE SET NULL,
  service_id uuid NOT NULL REFERENCES services(id) ON DELETE RESTRICT,
  scheduled_date date NOT NULL,
  scheduled_time time NOT NULL,
  location_address text NOT NULL,
  location_city text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
  total_price decimal(10,2) NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid REFERENCES bookings(id) ON DELETE CASCADE,
  customer_id uuid NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text,
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_vehicles_customer_id ON vehicles(customer_id);
CREATE INDEX IF NOT EXISTS idx_bookings_customer_id ON bookings(customer_id);
CREATE INDEX IF NOT EXISTS idx_bookings_scheduled_date ON bookings(scheduled_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_reviews_booking_id ON reviews(booking_id);
CREATE INDEX IF NOT EXISTS idx_reviews_is_published ON reviews(is_published);

-- Enable Row Level Security
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Customers policies
CREATE POLICY "Customers can view own data"
  ON customers FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

CREATE POLICY "Customers can update own data"
  ON customers FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id::text)
  WITH CHECK (auth.uid()::text = id::text);

CREATE POLICY "Anyone can create customer account"
  ON customers FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid()::text = id::text);

-- Services policies (public read for active services)
CREATE POLICY "Anyone can view active services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Vehicles policies
CREATE POLICY "Customers can view own vehicles"
  ON vehicles FOR SELECT
  TO authenticated
  USING (customer_id::text = auth.uid()::text);

CREATE POLICY "Customers can create own vehicles"
  ON vehicles FOR INSERT
  TO authenticated
  WITH CHECK (customer_id::text = auth.uid()::text);

CREATE POLICY "Customers can update own vehicles"
  ON vehicles FOR UPDATE
  TO authenticated
  USING (customer_id::text = auth.uid()::text)
  WITH CHECK (customer_id::text = auth.uid()::text);

CREATE POLICY "Customers can delete own vehicles"
  ON vehicles FOR DELETE
  TO authenticated
  USING (customer_id::text = auth.uid()::text);

-- Bookings policies
CREATE POLICY "Customers can view own bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (customer_id::text = auth.uid()::text);

CREATE POLICY "Customers can create own bookings"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (customer_id::text = auth.uid()::text);

CREATE POLICY "Customers can update own bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (customer_id::text = auth.uid()::text)
  WITH CHECK (customer_id::text = auth.uid()::text);

-- Reviews policies
CREATE POLICY "Anyone can view published reviews"
  ON reviews FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Customers can view own reviews"
  ON reviews FOR SELECT
  TO authenticated
  USING (customer_id::text = auth.uid()::text);

CREATE POLICY "Customers can create own reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (customer_id::text = auth.uid()::text);

CREATE POLICY "Customers can update own unpublished reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (customer_id::text = auth.uid()::text AND is_published = false)
  WITH CHECK (customer_id::text = auth.uid()::text);

-- Insert sample services
INSERT INTO services (name, slug, description, base_price, duration_minutes, is_active) VALUES
  ('Mobile Auto Detailing', 'mobile-auto-detailing', 'Complete interior and exterior detail at your location', 150.00, 180, true),
  ('Interior Detailing', 'interior-detailing', 'Deep clean interior, vacuum, leather conditioning', 100.00, 120, true),
  ('Exterior Detailing & Wax', 'exterior-detailing', 'Wash, clay bar, wax, tire shine', 120.00, 120, true),
  ('Paint Correction', 'paint-correction', 'Multi-stage paint correction to remove swirls and scratches', 350.00, 360, true),
  ('Ceramic Coating', 'ceramic-coating', 'Professional ceramic coating application', 500.00, 480, true),
  ('Headlight Restoration', 'headlight-restoration', 'Restore cloudy or yellowed headlights', 80.00, 60, true),
  ('Engine Bay Detailing', 'engine-bay-detailing', 'Deep clean and dress engine bay', 100.00, 90, true),
  ('Fleet & Commercial', 'fleet-commercial-detailing', 'Fleet and commercial vehicle detailing services', 200.00, 180, true)
ON CONFLICT (slug) DO NOTHING;