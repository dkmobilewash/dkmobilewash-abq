/**
 * DK MOBILE WASH - BUSINESS CONFIGURATION
 *
 * IMPORTANT: Keep this NAP (Name, Address, Phone) information synchronized with:
 * - Google Business Profile
 * - All marketing materials
 * - Social media profiles
 * - Schema markup in SchemaMarkup.tsx
 *
 * Any changes here should be reflected across all platforms to maintain
 * consistent local SEO signals.
 */

// === PRIMARY BUSINESS INFORMATION (NAP) ===
export const DK_MOBILE_WASH_NAP = {
  name: 'DK Mobile Wash Albuquerque',
  fullName: 'DK Mobile Wash Albuquerque - Mobile Auto Detailing & Ceramic Coating',
  streetAddress: '1507 Callens Rd H',
  addressLocality: 'Albuquerque',
  addressRegion: 'NM',
  postalCode: '87102',
  addressCountry: 'US',
  telephone: '(505) 604-8058',
  telephoneRaw: '+1-505-604-8058',
  email: 'info@dkmobilewash.com',
  website: 'https://dkmobilewashalbuquerque.com/',
} as const;

// === TARGET KEYWORDS (for reference in copy) ===
export const PRIMARY_KEYWORDS = [
  'mobile car wash Albuquerque',
  'mobile auto detailing Albuquerque',
  'mobile car wash Albuquerque NM',
  'interior car detailing Albuquerque',
  'ceramic coating Albuquerque',
  'fleet and dealership washing Albuquerque',
  'headlight restoration Albuquerque',
] as const;

// === SERVICE AREAS (Albuquerque Metro Areas) ===
// IMPORTANT: Keep this list synchronized with:
// - Schema markup areaServed
// - Service Areas page content
// - Google Business Profile service area settings
export const SERVICE_AREAS = [
  { name: 'Albuquerque', slug: 'albuquerque' },
  { name: 'Rio Rancho', slug: 'rio-rancho' },
  { name: 'North Albuquerque Acres', slug: 'north-albuquerque-acres' },
  { name: 'Corrales', slug: 'corrales' },
  { name: 'Los Ranchos De Albuquerque', slug: 'los-ranchos-de-albuquerque' },
  { name: 'Tanoan', slug: 'tanoan' },
  { name: 'Paradise Hills', slug: 'paradise-hills' },
  { name: 'North Valley', slug: 'north-valley' },
] as const;

// === BUSINESS HOURS ===
// IMPORTANT: Update Google Business Profile when these change
export const BUSINESS_HOURS = {
  monday: { open: '08:00', close: '18:00' },
  tuesday: { open: '08:00', close: '18:00' },
  wednesday: { open: '08:00', close: '18:00' },
  thursday: { open: '08:00', close: '18:00' },
  friday: { open: '08:00', close: '18:00' },
  saturday: { open: '08:00', close: '18:00' },
  sunday: { open: null, close: null }, // Closed
} as const;

// === SOCIAL MEDIA PROFILES ===
// IMPORTANT: Keep these URLs updated and ensure they link back to this website
export const SOCIAL_PROFILES = {
  facebook: 'https://www.facebook.com/dkmobilewash',
  instagram: 'https://www.instagram.com/dkmobilewash',
  // Add other profiles as they become available
} as const;

// === GOOGLE BUSINESS PROFILE ===
// Update this URL with your actual Google Business Profile short name or place ID
export const GOOGLE_BUSINESS_PROFILE = {
  url: 'https://g.page/dkmobilewash', // UPDATE: Replace with actual GBP short URL
  placeId: '', // Optional: Add your Google Place ID for API integrations
} as const;

// === SERVICES OFFERED ===
export const SERVICES = [
  {
    name: 'Mobile Car Wash',
    slug: 'mobile-car-wash',
    description: 'Professional mobile car wash service brought to your location',
  },
  {
    name: 'Interior Car Detailing',
    slug: 'interior-detailing',
    description: 'Deep interior cleaning, vacuuming, and upholstery treatment',
  },
  {
    name: 'Exterior Detailing',
    slug: 'exterior-detailing',
    description: 'Hand wash, clay bar, polish, and wax protection',
  },
  {
    name: 'Ceramic Coating',
    slug: 'ceramic-coating',
    description: 'Professional ceramic coating for long-lasting paint protection',
  },
  {
    name: 'Paint Correction',
    slug: 'paint-correction',
    description: 'Multi-stage paint correction to remove swirls and scratches',
  },
  {
    name: 'Headlight Restoration',
    slug: 'headlight-restoration',
    description: 'Professional headlight restoration for improved visibility',
  },
  {
    name: 'Fleet & Dealership Detailing',
    slug: 'fleet-detailing',
    description: 'Commercial fleet washing and dealership detailing services',
  },
] as const;

// === UTILITY FUNCTIONS ===

/**
 * Format phone number for display
 */
export const formatPhoneDisplay = (phone: string = DK_MOBILE_WASH_NAP.telephone): string => {
  return phone;
};

/**
 * Get tel: link for phone numbers
 */
export const getPhoneLink = (): string => {
  return `tel:${DK_MOBILE_WASH_NAP.telephoneRaw}`;
};

/**
 * Get full address string
 */
export const getFullAddress = (): string => {
  return `${DK_MOBILE_WASH_NAP.streetAddress}, ${DK_MOBILE_WASH_NAP.addressLocality}, ${DK_MOBILE_WASH_NAP.addressRegion} ${DK_MOBILE_WASH_NAP.postalCode}`;
};

/**
 * Get Google Maps link for address
 */
export const getGoogleMapsLink = (): string => {
  const address = encodeURIComponent(getFullAddress());
  return `https://maps.google.com/?q=${address}`;
};

/**
 * Get list of service area cities as string
 */
export const getServiceAreasString = (): string => {
  return SERVICE_AREAS.map(area => area.name).join(', ');
};
