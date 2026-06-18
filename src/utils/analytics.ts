/**
 * ANALYTICS TRACKING HELPERS
 *
 * These are no-op functions by default. Wire them into your analytics platform
 * (Google Analytics 4, Meta Pixel, etc.) to track user interactions and conversions.
 *
 * Usage examples:
 * - Call trackPageView() on route changes
 * - Call trackLeadSubmit() when forms are submitted
 * - Call trackBookNowClick() when CTA buttons are clicked
 * - Call trackPhoneClick() when phone numbers are clicked
 */

/**
 * Track page view
 * @param path - The page path (e.g., '/ceramic-coating')
 * @param title - Optional page title
 */
export const trackPageView = (path: string, title?: string): void => {
  // TODO: Wire this to your analytics provider
  // Example for GA4:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', 'page_view', {
  //     page_path: path,
  //     page_title: title,
  //   });
  // }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Page View:', { path, title });
  }
};

/**
 * Track lead form submission
 * @param formId - Identifier for the form (e.g., 'contact-form', 'quote-form')
 * @param service - Optional service type selected
 */
export const trackLeadSubmit = (formId: string, service?: string): void => {
  // TODO: Wire this to your analytics provider
  // Example for GA4:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', 'generate_lead', {
  //     form_id: formId,
  //     service: service,
  //   });
  // }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Lead Submit:', { formId, service });
  }
};

/**
 * Track "Book Now" button clicks
 * @param source - Where the click originated (e.g., 'hero', 'package-card', 'nav')
 * @param packageName - Optional package/service selected
 */
export const trackBookNowClick = (source: string, packageName?: string): void => {
  // TODO: Wire this to your analytics provider
  // Example for GA4:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', 'begin_checkout', {
  //     source: source,
  //     package: packageName,
  //   });
  // }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Book Now Click:', { source, packageName });
  }
};

/**
 * Track phone number clicks
 * @param source - Where the click originated (e.g., 'header', 'footer', 'cta')
 */
export const trackPhoneClick = (source: string): void => {
  // TODO: Wire this to your analytics provider
  // Example for GA4:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', 'phone_click', {
  //     source: source,
  //   });
  // }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Phone Click:', { source });
  }
};

/**
 * Track service area clicks (when users click on city names)
 * @param cityName - The city clicked
 */
export const trackServiceAreaClick = (cityName: string): void => {
  // TODO: Wire this to your analytics provider

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Service Area Click:', { cityName });
  }
};

/**
 * Track navigation link clicks
 * @param destination - Where the link goes (e.g., '/ceramic-coating', '#contact')
 * @param source - Where the click originated
 */
export const trackNavigationClick = (destination: string, source: string): void => {
  // TODO: Wire this to your analytics provider

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Navigation Click:', { destination, source });
  }
};

/**
 * Track CTA clicks (generic Call-to-Action tracking)
 * @param ctaName - Name/description of the CTA
 * @param location - Where on the page it appears
 */
export const trackCTAClick = (ctaName: string, location: string): void => {
  // TODO: Wire this to your analytics provider
  // Example for GA4:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', 'cta_click', {
  //     cta_name: ctaName,
  //     location: location,
  //   });
  // }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] CTA Click:', { ctaName, location });
  }
};

/**
 * Track assessment/quiz starts
 * @param assessmentType - Type of assessment (e.g., 'vehicle-assessment', 'cost-guide')
 */
export const trackAssessmentStart = (assessmentType: string): void => {
  // TODO: Wire this to your analytics provider

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Assessment Start:', { assessmentType });
  }
};

/**
 * Track assessment/quiz completions
 * @param assessmentType - Type of assessment completed
 * @param results - Optional results data
 */
export const trackAssessmentComplete = (assessmentType: string, results?: unknown): void => {
  // TODO: Wire this to your analytics provider

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Assessment Complete:', { assessmentType, results });
  }
};

/**
 * Track social media link clicks
 * @param platform - Social platform (e.g., 'facebook', 'instagram')
 * @param location - Where the link appears (e.g., 'footer', 'header')
 */
export const trackSocialClick = (platform: string, location: string): void => {
  // TODO: Wire this to your analytics provider

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Social Click:', { platform, location });
  }
};
