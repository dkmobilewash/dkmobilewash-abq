/*
  # Create Website Images Storage Bucket

  1. New Storage Bucket
    - `website-images` bucket for storing website images
    - Public bucket with read access for all users
    - Allows authenticated users to upload images

  2. Security Policies
    - Public read access for all images (anyone can view)
    - Authenticated users can upload images
    - Authenticated users can update/delete their own uploads
    - Supports common image formats (jpg, jpeg, png, gif, webp, svg)

  3. Configuration
    - Max file size: 5MB per image
    - Public bucket for easy access to images on the website
*/

-- Create the website-images bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'website-images',
  'website-images',
  true,
  5242880, -- 5MB in bytes
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
) ON CONFLICT (id) DO NOTHING;

-- Allow public read access to all images in the bucket
CREATE POLICY "Public read access for website images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'website-images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload website images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'website-images');

-- Allow authenticated users to update their own uploads
CREATE POLICY "Authenticated users can update their own images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'website-images' AND auth.uid() = owner)
  WITH CHECK (bucket_id = 'website-images' AND auth.uid() = owner);

-- Allow authenticated users to delete their own uploads
CREATE POLICY "Authenticated users can delete their own images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'website-images' AND auth.uid() = owner);