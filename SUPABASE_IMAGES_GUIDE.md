# Supabase Images Bucket Guide

Your `website-images` storage bucket has been created successfully! 🎉

## Bucket Details

- **Bucket Name:** `website-images`
- **Access:** Public (anyone can view images)
- **Max File Size:** 5MB per image
- **Allowed Formats:** JPG, JPEG, PNG, GIF, WEBP, SVG

## How to Upload Images

### Option 1: Upload via Supabase Dashboard (Recommended for manual uploads)

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Click **Storage** in the left sidebar
4. Click on the **website-images** bucket
5. Click **Upload files** button
6. Drag and drop your images or browse to select them
7. Your images will be uploaded and publicly accessible

### Option 2: Upload Programmatically

You can upload images from your React app using the Supabase client:

```typescript
import { supabase } from './lib/supabase';

async function uploadImage(file: File) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from('website-images')
    .upload(filePath, file);

  if (error) {
    console.error('Error uploading image:', error);
    return null;
  }

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('website-images')
    .getPublicUrl(filePath);

  return publicUrl;
}
```

## How to Use Images on Your Website

Once uploaded, you can reference images using their public URL:

### URL Format:
```
https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/YOUR_IMAGE_NAME.jpg
```

### Example in React:
```tsx
<img
  src="https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/hero-image.jpg"
  alt="Hero Image"
/>
```

### Get Public URL Programmatically:
```typescript
const { data } = supabase.storage
  .from('website-images')
  .getPublicUrl('your-image.jpg');

console.log(data.publicUrl);
```

## Organizing Your Images

You can organize images in folders by uploading with paths:

```typescript
// Upload to a subfolder
await supabase.storage
  .from('website-images')
  .upload('gallery/car1.jpg', file);

// URL will be:
// .../website-images/gallery/car1.jpg
```

Suggested folder structure:
- `hero/` - Hero section images
- `gallery/` - Gallery images
- `services/` - Service page images
- `blog/` - Blog post images
- `logos/` - Logo and branding images

## Image Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG, ImageOptim)
2. **Use appropriate formats:**
   - JPG for photos
   - PNG for images with transparency
   - WEBP for best compression and quality
   - SVG for logos and icons
3. **Keep file sizes under 500KB** when possible for faster loading
4. **Use descriptive filenames** for better organization

## Managing Images

### List all images:
```typescript
const { data, error } = await supabase.storage
  .from('website-images')
  .list();
```

### Delete an image:
```typescript
const { error } = await supabase.storage
  .from('website-images')
  .remove(['image-name.jpg']);
```

## Security

- ✅ Anyone can **view** images (perfect for public website)
- ✅ Only authenticated users can **upload** images
- ✅ Only the owner can **update/delete** their uploads

## Need Help?

- Supabase Storage Docs: https://supabase.com/docs/guides/storage
- Your Supabase Project: https://supabase.com/dashboard/project/tsybcnnjylmvhsxzknug
