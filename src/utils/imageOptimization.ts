const SUPABASE_STORAGE_BASE = 'tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/';

export function optimizeImageUrl(url: string, options?: { width?: number; quality?: number }): string {
  if (!url.includes(SUPABASE_STORAGE_BASE)) {
    return url;
  }

  const width = options?.width || 800;
  const quality = options?.quality || 75;

  return url.replace(
    '/storage/v1/object/public/',
    '/storage/v1/render/image/public/'
  ) + `?width=${width}&resize=contain&format=origin&quality=${quality}`;
}
