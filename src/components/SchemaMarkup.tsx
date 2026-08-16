import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DK_MOBILE_WASH_NAP } from '../config/business';

const SITE_URL = 'https://www.dkmobilewash.com';

function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoDetailing',
    '@id': `${SITE_URL}/#organization`,
    name: DK_MOBILE_WASH_NAP.fullName,
    alternateName: DK_MOBILE_WASH_NAP.name,
    description: 'Professional mobile car wash and auto detailing services in the Albuquerque metro area, NM. Specializing in interior detailing, ceramic coating, paint correction, headlight restoration, and fleet detailing.',
    url: SITE_URL,
    telephone: DK_MOBILE_WASH_NAP.telephoneRaw,
    email: DK_MOBILE_WASH_NAP.email,
    image: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Untitled_design-removebg-preview.png',
    logo: {
      '@type': 'ImageObject',
      url: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Untitled_design-removebg-preview.png',
      width: 200,
      height: 200,
    },
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Venmo, Zelle',
    address: {
      '@type': 'PostalAddress',
      streetAddress: DK_MOBILE_WASH_NAP.streetAddress,
      addressLocality: DK_MOBILE_WASH_NAP.addressLocality,
      addressRegion: DK_MOBILE_WASH_NAP.addressRegion,
      postalCode: DK_MOBILE_WASH_NAP.postalCode,
      addressCountry: DK_MOBILE_WASH_NAP.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.0853,
      longitude: -106.6056,
    },
    areaServed: [
      { '@type': 'City', name: 'Albuquerque', addressRegion: 'NM', addressCountry: 'US' },
      { '@type': 'City', name: 'Rio Rancho', addressRegion: 'NM', addressCountry: 'US' },
      { '@type': 'City', name: 'North Albuquerque Acres', addressRegion: 'NM', addressCountry: 'US' },
      { '@type': 'City', name: 'Corrales', addressRegion: 'NM', addressCountry: 'US' },
      { '@type': 'City', name: 'Los Ranchos De Albuquerque', addressRegion: 'NM', addressCountry: 'US' },
      { '@type': 'City', name: 'Tanoan', addressRegion: 'NM', addressCountry: 'US' },
      { '@type': 'City', name: 'Paradise Hills', addressRegion: 'NM', addressCountry: 'US' },
      { '@type': 'City', name: 'North Valley', addressRegion: 'NM', addressCountry: 'US' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    slogan: 'Premier Mobile Car Wash & Auto Detailing in Albuquerque',
    sameAs: [
      'https://www.facebook.com/dkmobilewash',
      'https://www.instagram.com/dkmobilewash',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Marcus T.' },
        datePublished: '2025-11-12',
        reviewBody: 'They came to my driveway in Rio Rancho and did an incredible job on both the interior and exterior. My car looked brand new. Will definitely be a repeat customer.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        itemReviewed: {
          '@type': 'AutoDetailing',
          '@id': `${SITE_URL}/#organization`,
          name: DK_MOBILE_WASH_NAP.fullName,
        },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Sarah L.' },
        datePublished: '2025-12-03',
        reviewBody: 'I have three kids and two dogs — the interior of my SUV was a disaster. DK Mobile Wash got it completely clean. I couldn\'t believe the difference. Super easy to book.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        itemReviewed: {
          '@type': 'AutoDetailing',
          '@id': `${SITE_URL}/#organization`,
          name: DK_MOBILE_WASH_NAP.fullName,
        },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'David R.' },
        datePublished: '2026-01-18',
        reviewBody: 'Got the ceramic coating done before a cross-country move. The prep work and finish were flawless. Worth every penny for long-term protection.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        itemReviewed: {
          '@type': 'AutoDetailing',
          '@id': `${SITE_URL}/#organization`,
          name: DK_MOBILE_WASH_NAP.fullName,
        },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Jessica M.' },
        datePublished: '2026-02-07',
        reviewBody: 'Booked the Gold Standard package for my SUV and was blown away. The team was on time, professional, and the interior looked and smelled brand new. Great value for mobile detailing in Albuquerque.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        itemReviewed: {
          '@type': 'AutoDetailing',
          '@id': `${SITE_URL}/#organization`,
          name: DK_MOBILE_WASH_NAP.fullName,
        },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mobile Auto Detailing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/service/mobile-auto-detailing#service`, name: 'Mobile Auto Detailing' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/service/interior-detailing#service`, name: 'Interior Car Detailing' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/service/exterior-detailing#service`, name: 'Exterior Car Detailing' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/ceramic-coating#service`, name: 'Ceramic Coating' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/service/paint-correction#service`, name: 'Paint Correction' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/service/headlight-restoration#service`, name: 'Headlight Restoration' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/service/engine-bay-detailing#service`, name: 'Engine Bay Detailing' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/fleet#service`, name: 'Fleet & Dealership Detailing' },
        },
      ],
    },
  };
}

function getServiceSchemas() {
  const provider = {
    '@type': 'AutoDetailing',
    '@id': `${SITE_URL}/#organization`,
    name: DK_MOBILE_WASH_NAP.fullName,
  };

  const areaServed = {
    '@type': 'City',
    name: 'Albuquerque',
    addressRegion: 'NM',
    addressCountry: 'US',
  };

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/service/mobile-auto-detailing#service`,
      name: 'Mobile Auto Detailing',
      description: 'Professional mobile auto detailing brought directly to your home, office, or apartment in Albuquerque. Fully self-contained unit with water and power. Interior and exterior detailing available.',
      provider,
      areaServed,
      serviceType: 'Auto Detailing',
      url: `${SITE_URL}/service/mobile-auto-detailing`,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '150',
        highPrice: '500',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/service/interior-detailing#service`,
      name: 'Interior Car Detailing',
      description: 'Deep interior cleaning including carpet shampoo, leather conditioning, stain removal, UV protectant application, and vent cleaning for vehicles in Albuquerque metro area.',
      provider,
      areaServed,
      serviceType: 'Interior Auto Detailing',
      url: `${SITE_URL}/service/interior-detailing`,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '120',
        highPrice: '400',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/service/exterior-detailing#service`,
      name: 'Exterior Car Detailing',
      description: 'Hand wash, clay bar decontamination, wheel and tire cleaning, and wax or sealant application for vehicles in the Albuquerque metro area.',
      provider,
      areaServed,
      serviceType: 'Exterior Auto Detailing',
      url: `${SITE_URL}/service/exterior-detailing`,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '100',
        highPrice: '350',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/ceramic-coating#service`,
      name: 'Ceramic Coating',
      description: 'Professional ceramic coating application providing 5-10 years of paint protection against UV, hard water, and environmental contaminants. Includes full paint prep, decontamination, and polish before application.',
      provider,
      areaServed,
      serviceType: 'Ceramic Coating',
      url: `${SITE_URL}/ceramic-coating`,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '500',
        highPrice: '2500',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/service/paint-correction#service`,
      name: 'Paint Correction',
      description: 'Multi-stage machine polishing to remove swirl marks, scratches, water spots, and oxidation. Restores original paint depth and gloss for vehicles in Albuquerque.',
      provider,
      areaServed,
      serviceType: 'Paint Correction',
      url: `${SITE_URL}/service/paint-correction`,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '300',
        highPrice: '1200',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/service/headlight-restoration#service`,
      name: 'Headlight Restoration',
      description: 'Professional headlight polishing and UV sealant application to restore clarity, improve nighttime visibility, and protect against future yellowing caused by Albuquerque UV exposure.',
      provider,
      areaServed,
      serviceType: 'Headlight Restoration',
      url: `${SITE_URL}/service/headlight-restoration`,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '75',
        highPrice: '200',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/service/engine-bay-detailing#service`,
      name: 'Engine Bay Detailing',
      description: 'Safe degreasing, cleaning, and dressing of engine compartment surfaces. Makes maintenance issues visible and adds resale value.',
      provider,
      areaServed,
      serviceType: 'Engine Bay Detailing',
      url: `${SITE_URL}/service/engine-bay-detailing`,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '75',
        highPrice: '200',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/fleet#service`,
      name: 'Fleet & Dealership Detailing',
      description: 'On-site fleet and dealership detailing with flexible recurring schedules and volume pricing. Serving commercial vehicles, delivery fleets, and car dealerships in the Albuquerque metro area.',
      provider,
      areaServed,
      serviceType: 'Fleet Detailing',
      url: `${SITE_URL}/fleet`,
    },
  ];
}

const BREADCRUMB_MAP: Record<string, { name: string; parent?: string }> = {
  '/': { name: 'Home' },
  '/car-detailing': { name: 'Car Detailing' },
  '/ceramic-coating': { name: 'Ceramic Coating' },
  '/fleet': { name: 'Fleet & Dealership Detailing' },
  '/about': { name: 'About Us' },
  '/contact': { name: 'Contact' },
  '/service-areas': { name: 'Service Areas' },
  '/gallery': { name: 'Gallery' },
  '/faq': { name: 'FAQ' },
  '/blog': { name: 'Blog' },
  '/locations': { name: 'Locations' },
  '/service/mobile-auto-detailing': { name: 'Mobile Auto Detailing', parent: '/car-detailing' },
  '/service/interior-detailing': { name: 'Interior Detailing', parent: '/car-detailing' },
  '/service/exterior-detailing': { name: 'Exterior Detailing', parent: '/car-detailing' },
  '/service/paint-correction': { name: 'Paint Correction', parent: '/car-detailing' },
  '/service/headlight-restoration': { name: 'Headlight Restoration', parent: '/car-detailing' },
  '/service/engine-bay-detailing': { name: 'Engine Bay Detailing', parent: '/car-detailing' },
  '/mobile-auto-detailing-albuquerque-nm': { name: 'Mobile Auto Detailing Albuquerque' },
  '/interior-car-detailing-albuquerque': { name: 'Interior Car Detailing Albuquerque' },
  '/paint-enhancement-protection-albuquerque': { name: 'Paint Enhancement & Protection' },
  '/car-detailing-prices-albuquerque': { name: 'Car Detailing Prices' },
  '/albuquerque': { name: 'Albuquerque', parent: '/service-areas' },
  '/rio-rancho': { name: 'Rio Rancho', parent: '/service-areas' },
  '/corrales': { name: 'Corrales', parent: '/service-areas' },
  '/north-valley': { name: 'North Valley', parent: '/service-areas' },
  '/tanoan': { name: 'Tanoan', parent: '/service-areas' },
  '/paradise-hills': { name: 'Paradise Hills', parent: '/service-areas' },
  '/los-ranchos-de-albuquerque': { name: 'Los Ranchos', parent: '/service-areas' },
  '/albuquerque-acres': { name: 'Albuquerque Acres', parent: '/service-areas' },
};

function getBreadcrumbSchema(pathname: string) {
  const items: { name: string; url: string }[] = [{ name: 'Home', url: SITE_URL }];

  const entry = BREADCRUMB_MAP[pathname];
  if (!entry || pathname === '/') return null;

  if (entry.parent && BREADCRUMB_MAP[entry.parent]) {
    items.push({
      name: BREADCRUMB_MAP[entry.parent].name,
      url: `${SITE_URL}${entry.parent}`,
    });
  }

  items.push({ name: entry.name, url: `${SITE_URL}${pathname}` });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function getHomeFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best mobile car wash in Albuquerque?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "DK Mobile Wash is Albuquerque's top-rated mobile car wash and auto detailing company, serving Albuquerque, Rio Rancho, North Albuquerque Acres, Corrales, Los Ranchos De Albuquerque, Tanoan, Paradise Hills, and North Valley.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do you come to my home or work in Albuquerque?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes! We are 100% mobile and come directly to your preferred location anywhere in the Albuquerque metro area, whether that's your home, office, apartment complex, or another convenient spot.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long does mobile auto detailing take in Albuquerque?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Service times vary depending on the package selected and vehicle condition. Our Full Refresh package takes 2-3 hours, the Gold Standard package takes 3-4 hours, and the Masterpiece Detail takes 4-6 hours. Ceramic coating services typically take 6-8 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to provide water or power for mobile car wash service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No! Our mobile detailing units are completely self-contained with their own water supply, power generation, and professional equipment. We bring everything needed to detail your vehicle at your location.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does mobile car detailing cost in Albuquerque?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our packages range from the Full Refresh for basic maintenance to the Masterpiece Detail for the ultimate experience. Prices vary by vehicle size and condition. Contact us for a free quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does ceramic coating last in Albuquerque?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our professional ceramic coating provides protection for 5-10 years when properly maintained. The desert climate in Albuquerque makes ceramic coating especially valuable for protecting against UV rays, dust, and environmental contaminants.',
        },
      },
    ],
  };
}

function getCeramicCoatingFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a ceramic coating and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "A professional ceramic coating is a liquid polymer that chemically bonds with your vehicle's clear coat. Once cured, it creates a semi-permanent hydrophobic coating surface that is significantly harder than wax and highly UV-resistant. Water beads up and rolls off, taking dirt and contaminants with it. The coating sits on top of your paint and absorbs environmental damage so your factory paint does not have to.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a ceramic coating last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our Level 1 coating carries a 3-year base warranty, or a 10-year warranty if maintained with yearly appointments. Level 2 offers a 5-year base warranty, or an unlimited warranty with annual maintenance. Longevity depends heavily on proper washing routines and avoiding harsh automatic car washes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ceramic coating make my car scratch-proof?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. While it adds hardness and light scratch resistance, it will not prevent rock chips, key scratches, or heavy contact damage. It excels at providing UV ray protection for paint, resisting chemical etching from bird droppings and water spots, and delivering self-cleaning properties that make routine washing safer and easier. For physical scratch protection, paint protection film is the correct solution.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need paint correction before ceramic coating?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "If your paint has swirl marks, scratches, or water spot etching, yes. Ceramic coating locks in whatever is on the surface when applied. We always perform a thorough surface decontamination and prep inspection before recommending a package. If correction is needed, we will recommend our paint correction service first to ensure flawless results.",
        },
      },
      {
        '@type': 'Question',
        name: 'What type of maintenance is required after ceramic coating?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ceramic coatings are lower maintenance than uncoated paint, but they still require regular washing. Use pH-neutral soap, avoid automatic tunnel washes with abrasive brushes, and dry properly to prevent water spots. A yearly maintenance appointment extends your warranty and keeps the hydrophobic coating surface performing at its peak.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is ceramic coating worth it in Albuquerque?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "For most Albuquerque drivers, absolutely. The Albuquerque high desert climate accelerates UV fading, dust abrasion, and hard water etching faster than most U.S. regions. A professional ceramic coating resists all three. Vehicles parked outside year-round in ABQ see measurable protection, easier washing, and long-term paint preservation.",
        },
      },
    ],
  };
}

function getRioRanchoFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does a full detail take in Rio Rancho?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Maintenance packages take 2-3 hours, while comprehensive paint correction or ceramic coating services require 6-8 hours. We work efficiently on-site and keep you updated throughout the process.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you remove West Mesa construction dust?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our multi-stage decontamination process safely lifts embedded concrete dust, silica, and job-site grime without scratching your clear coat. We highly recommend pairing this with a protective sealant for ongoing defense.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you service Northern Meadows and Cabezon areas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We cover all Rio Rancho neighborhoods including Northern Meadows, Cabezon, Enchanted Hills, and Mariposa. Our licensed and insured mobile detailing teams dispatch daily throughout the area.',
        },
      },
      {
        '@type': 'Question',
        name: 'What about desert sun paint damage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'New Mexico UV exposure accelerates clear coat oxidation and dashboard fading. Our paint correction service restores lost gloss, while our ceramic coating packages provide 5-10 years of UV defense and hydrophobic protection.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does detailing cost in Rio Rancho?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing varies by vehicle size and service tier. Check our transparent pricing guide or call (505) 604-8058 for a fast, no-obligation quote tailored to your vehicle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you detail commercial vehicles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We offer volume pricing and flexible scheduling for fleet detailing, contractor trucks, and business vehicles. We come directly to your lot or job site to minimize operational downtime.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you work in gated communities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Just provide gate access information or visitor passes when booking. Our self-contained mobile detailing unit requires only a flat parking spot to operate safely.',
        },
      },
    ],
  };
}

function getMobileAutoDetailingFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you bring your own water and power for mobile detailing?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our mobile unit is fully self-contained with its own water supply and power generation. You do not need to provide access to a hose, outdoor spigot, or electrical outlet. We carry everything needed to perform a professional detail at your location.' },
      },
      {
        '@type': 'Question',
        name: 'How long does a mobile detail take?',
        acceptedAnswer: { '@type': 'Answer', text: 'A basic exterior-focused detail takes 1.5 to 2.5 hours. A full interior and exterior package takes 3 to 5 hours depending on vehicle size and condition. Paint correction and ceramic coating services are more involved and typically require 6 to 10 hours scheduled as a dedicated appointment.' },
      },
      {
        '@type': 'Question',
        name: 'Can you come to my office or apartment?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly service vehicles at office parking lots, apartment complexes, and commercial properties throughout Albuquerque. We need approximately two parking spaces worth of flat clearance next to your vehicle. No hookups required.' },
      },
      {
        '@type': 'Question',
        name: 'What areas of Albuquerque do you serve?',
        acceptedAnswer: { '@type': 'Answer', text: 'We serve all Albuquerque neighborhoods plus Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos de Albuquerque, and Albuquerque Acres. Call or text (505) 604-8058 to confirm coverage for your specific address.' },
      },
    ],
  };
}

function getInteriorDetailingFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you remove pet hair from car seats and carpet?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We use a multi-tool process combining rubber extraction brushes, compressed air agitation, and HEPA vacuuming to remove embedded pet hair from seats, carpets, door panels, and trunk liners. For heavy pet hair cases, we recommend our full interior deep-clean package.' },
      },
      {
        '@type': 'Question',
        name: 'Can you remove smoke smell or pet odors from my car?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. For smoke and strong organic odors we use ozone treatment and enzyme-based neutralizers that break down odor molecules at the source rather than masking them. Results depend on how deeply the odor has penetrated materials like foam padding and headliner. We assess severity at the start of service and recommend the right approach.' },
      },
      {
        '@type': 'Question',
        name: 'Do you condition leather seats?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our interior detailing process includes cleaning leather with a pH-balanced leather cleaner, then applying a conditioner that restores moisture and flexibility to prevent cracking. In Albuquerque dry climate, leather conditioning is especially important for preventing premature aging.' },
      },
      {
        '@type': 'Question',
        name: 'How long does an interior detail take?',
        acceptedAnswer: { '@type': 'Answer', text: 'A standard interior detail takes 2 to 3 hours for a sedan or compact SUV. Larger vehicles like full-size SUVs, minivans, and trucks take 3 to 4 hours. Deep-clean packages with heavy staining, pet hair, or odor treatment take 4 to 5 hours.' },
      },
    ],
  };
}

function getExteriorDetailingFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between an exterior detail and a regular car wash?',
        acceptedAnswer: { '@type': 'Answer', text: 'A regular car wash removes surface dirt. An exterior detail goes further: we perform chemical decontamination, clay bar treatment to remove bonded contaminants, machine polish if needed, and finish with a protective sealant or wax. The result lasts significantly longer and protects the paint surface rather than just cleaning it.' },
      },
      {
        '@type': 'Question',
        name: 'Is clay bar treatment included in exterior detailing?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our full exterior detail includes iron decontamination spray and clay bar treatment to remove bonded fallout, road tar, tree sap, and industrial contamination from the paint surface. This step is essential before applying any protective product and makes a visible difference in paint smoothness and gloss.' },
      },
      {
        '@type': 'Question',
        name: 'How long does exterior detailing take?',
        acceptedAnswer: { '@type': 'Answer', text: 'A standard exterior detail including decontamination and protection takes 2 to 3 hours for a sedan. Larger vehicles take 2.5 to 4 hours. Add-on services like paint correction or ceramic coating extend the appointment significantly.' },
      },
      {
        '@type': 'Question',
        name: 'Can you remove hard water spots from my paint?',
        acceptedAnswer: { '@type': 'Answer', text: 'It depends on severity. Light water spots from irrigation overspray can often be removed with chemical treatment during a standard exterior detail. Severe etched water spots that have damaged the clear coat require paint correction to remove. We assess your paint during the initial walkaround and let you know which approach applies.' },
      },
    ],
  };
}

function getHeadlightRestorationFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does headlight restoration take?',
        acceptedAnswer: { '@type': 'Answer', text: 'A professional headlight restoration for a standard vehicle with two headlights takes approximately 45 minutes to 1.5 hours depending on severity of oxidation. We can perform it as a standalone service or as an add-on to any full detail appointment.' },
      },
      {
        '@type': 'Question',
        name: 'How long do headlight restoration results last?',
        acceptedAnswer: { '@type': 'Answer', text: 'Our professional restoration process includes a UV sealant application after polishing. In Albuquerque UV conditions, this protects restored lenses for 2 to 3 years on average. DIY kits that skip the sealant step typically yellow again within a few months.' },
      },
      {
        '@type': 'Question',
        name: 'Can all headlights be restored?',
        acceptedAnswer: { '@type': 'Answer', text: 'Most polycarbonate headlights with surface oxidation and yellowing can be successfully restored. Lenses with deep internal crazing, cracks, or moisture infiltration may not respond fully to restoration. We assess both headlights at the start of service and will tell you honestly if replacement is a better option for your situation.' },
      },
      {
        '@type': 'Question',
        name: 'Is headlight restoration worth it compared to replacement?',
        acceptedAnswer: { '@type': 'Answer', text: 'In most cases yes. OEM headlight replacement for modern vehicles often costs $200 to $800 per side. Professional restoration typically runs $75 to $150 for both headlights and restores 80 to 90 percent of original clarity in most cases. If your lenses are structurally sound, restoration is the better value.' },
      },
    ],
  };
}

function getEngineBayDetailingFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is engine bay detailing safe for electronics?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, when done correctly. We protect all electrical connectors, the fuse box, alternator, and sensitive sensors before any moisture is introduced. We use low-pressure rinsing rather than high-pressure blasting and allow the engine to dry thoroughly before completing service. We have cleaned hundreds of modern engine bays without electrical issues.' },
      },
      {
        '@type': 'Question',
        name: 'How long does engine bay detailing take?',
        acceptedAnswer: { '@type': 'Answer', text: 'Engine bay cleaning typically takes 1 to 1.5 hours as part of a larger detail appointment. As a standalone service it takes approximately 1 hour. We allow drying time before the vehicle is driven.' },
      },
      {
        '@type': 'Question',
        name: 'How often should I have my engine bay detailed?',
        acceptedAnswer: { '@type': 'Answer', text: 'For most vehicles, once or twice a year is sufficient. If you do a lot of off-road driving, live on unpaved roads, or work in dusty environments like Albuquerque construction zones, quarterly cleaning helps prevent dust and debris from accumulating around heat sources and rubber components.' },
      },
      {
        '@type': 'Question',
        name: 'Do you come to my location to detail the engine bay?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Engine bay detailing is available as part of our mobile service. We come to your home, office, or any parking location throughout the Albuquerque metro. No shop visit required.' },
      },
    ],
  };
}

function getAlbuquerqueFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you serve all Albuquerque neighborhoods?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We cover all Albuquerque neighborhoods including the Northeast Heights, North Valley, South Valley, Downtown, Westside, and surrounding areas. Our mobile unit comes to your specific address — no matter where you are in the city.' },
      },
      {
        '@type': 'Question',
        name: 'How do I book mobile detailing in Albuquerque?',
        acceptedAnswer: { '@type': 'Answer', text: 'You can book online at dkmobilewash.com or call and text (505) 604-8058. We offer flexible morning and afternoon appointment windows and confirm most bookings within 24 hours.' },
      },
      {
        '@type': 'Question',
        name: 'Do you need water or power at my Albuquerque address?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Our mobile unit is fully self-contained with its own water supply and power generation. We do not need access to your hose, outdoor spigot, or electrical outlet.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer ceramic coating in Albuquerque?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer professional-grade ceramic coating services in Albuquerque with warranties up to 10 years with annual maintenance. Given the high-altitude UV exposure and desert dust environment in Albuquerque, ceramic coating is one of the best investments for long-term paint protection.' },
      },
    ],
  };
}

function getCorrallesFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you detail vehicles at rural Corrales properties?',
        acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Our mobile unit is fully self-contained and requires no utility hookups. We regularly service rural properties, horse farms, and large-lot estates throughout Corrales. We need approximately two parking spaces of flat clearance next to your vehicle.' },
      },
      {
        '@type': 'Question',
        name: 'How do you handle cottonwood pollen on paint?',
        acceptedAnswer: { '@type': 'Answer', text: 'Cottonwood pollen is slightly acidic and can etch clear coat if left on paint during warm weather. We use clay bar decontamination and chemical iron remover to safely lift pollen and bonded organic debris without inducing scratches. We strongly recommend pairing this with a ceramic coating to prevent future adhesion.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer interior detailing for horse trailers and work trucks in Corrales?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly clean work trucks, agricultural vehicles, and trailers in Corrales. Our interior packages include heavy-duty extraction for mud, hay, and livestock debris, and our team is experienced working around farm equipment and property animals.' },
      },
      {
        '@type': 'Question',
        name: 'How far in advance do I need to book in Corrales?',
        acceptedAnswer: { '@type': 'Answer', text: 'Most Corrales appointments are available within 3 to 5 business days. For same-week bookings, call or text (505) 604-8058 directly as our team may have openings not yet shown online. We recommend booking 5 to 7 days ahead for weekend appointments.' },
      },
    ],
  };
}

function getNorthValleyFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you service North Valley properties along the Rio Grande?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We cover all North Valley locations including properties near the Rio Grande bosque, Old Town adjacent areas, and rural residential lots. Our self-contained mobile unit requires no utility hookups and works on any flat parking surface.' },
      },
      {
        '@type': 'Question',
        name: 'Can you remove bosque pollen and cottonwood debris?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. The bosque environment deposits a combination of cottonwood pollen, organic debris, and bird droppings that bond to paint surfaces. Our decontamination process uses clay bar and chemical iron removal to safely lift all of this without inducing scratches.' },
      },
      {
        '@type': 'Question',
        name: 'How long does a full detail take in North Valley?',
        acceptedAnswer: { '@type': 'Answer', text: 'Standard packages take 2 to 4 hours depending on vehicle size and condition. Full paint correction or ceramic coating services require 6 to 8 hours and are scheduled as dedicated appointments. We communicate timing clearly at booking.' },
      },
      {
        '@type': 'Question',
        name: 'Do you handle hard water spots from irrigation systems?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Irrigation overspray is one of the most common paint issues in North Valley. Light water spots respond to chemical treatment during a standard detail. Etched spots that have penetrated the clear coat require paint correction. We assess severity during the initial walkaround and recommend the right service.' },
      },
    ],
  };
}

function getTanoanFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does a full detail take in Tanoan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Standard luxury details take 3 to 4 hours, while multi-stage paint correction or ceramic coating services require 6 to 10 hours. We never rush exotic paintwork and provide detailed progress updates throughout.' },
      },
      {
        '@type': 'Question',
        name: 'Do you handle exotic and luxury vehicles?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our technicians are trained in high-desert vehicle care for Porsche, Ferrari, Lamborghini, Bentley, and Mercedes-Benz. We use paint-safe compounds, microfiber protocols, and professional ceramic coating systems designed for delicate finishes.' },
      },
      {
        '@type': 'Question',
        name: 'Can you access gated communities?',
        acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We coordinate gate codes, visitor passes, and security protocols during booking. Our licensed insured mobile detailing team operates discreetly and respects all community guidelines.' },
      },
      {
        '@type': 'Question',
        name: 'What about golf course dust and desert grime?',
        acceptedAnswer: { '@type': 'Answer', text: 'Our clay bar and chemical decontamination process safely lifts embedded silica and organic debris without inducing swirl marks. We follow up with a hydrophobic ceramic layer that repels dust and simplifies maintenance washes.' },
      },
    ],
  };
}

function getParadiseHillsFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer pet hair removal in Paradise Hills?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We use a multi-tool process combining rubber extraction brushes, HEPA vacuuming, and compressed air to remove embedded pet hair from seats, carpets, and trunk liners. We follow up with enzyme treatment to neutralize pet odors at the source.' },
      },
      {
        '@type': 'Question',
        name: 'Can you detail SUVs and minivans in Paradise Hills?',
        acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. SUVs and minivans are the most common vehicles we detail in Paradise Hills. Our interior packages include all rows, cargo areas, door panels, and headliners. Exterior packages cover the full paint surface, wheel wells, and glass. We size pricing to vehicle type.' },
      },
      {
        '@type': 'Question',
        name: 'How do I book a mobile detailing appointment in Paradise Hills?',
        acceptedAnswer: { '@type': 'Answer', text: 'You can book online at dkmobilewash.com or call or text (505) 604-8058. We offer flexible morning and afternoon appointment windows. Most bookings are confirmed within 24 hours and we send a reminder the day before your appointment.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer interior-only detailing in Paradise Hills?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our interior-only package covers vacuuming, hot-water extraction on carpets and seats, surface cleaning, window cleaning, and UV conditioning on leather or vinyl. It is a popular option for families who need a deep clean without the full exterior service.' },
      },
    ],
  };
}

function getLosRanchosFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you come to an estate property in Los Ranchos without water hookups?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our mobile unit is fully self-contained with its own water supply, power source, and professional-grade products. We do not need access to your hose, outlet, or any utility connection. We arrive ready to work regardless of your property layout.' },
      },
      {
        '@type': 'Question',
        name: 'Do you have experience with luxury and classic vehicles?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly work on Porsche, Ferrari, Mercedes-Benz, vintage classics, and collector vehicles in Los Ranchos. Our technicians use paint-safe compounds, microfiber-only protocols, and gentle decontamination methods that protect delicate finishes and aged clear coat.' },
      },
      {
        '@type': 'Question',
        name: 'Does bosque pollen damage car paint?',
        acceptedAnswer: { '@type': 'Answer', text: 'It can. Cottonwood and bosque pollen is mildly acidic and can bond to clear coat during the wet season. Left unremoved, it etches the surface over time. Our clay bar and chemical decontamination process safely lifts pollen without scratching, and a ceramic coating prevents future adhesion.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer recurring detail schedules for Los Ranchos residents?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer monthly, bimonthly, and quarterly maintenance packages for Los Ranchos residents and estate owners. Recurring clients receive priority scheduling and consistent technicians who learn your vehicles. Call (505) 604-8058 to set up a maintenance plan.' },
      },
    ],
  };
}

function getAlbuquerqueAcresFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you come to Albuquerque Acres for mobile detailing?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Albuquerque Acres is in our regular service area. We come directly to your property with a fully self-contained mobile detailing unit. No need to drive anywhere or arrange a ride — we handle everything at your location.' },
      },
      {
        '@type': 'Question',
        name: 'Can you detail multiple vehicles on the same visit?',
        acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Many Albuquerque Acres households have multiple vehicles. We can detail two or more vehicles in a single visit and offer multi-vehicle pricing. Just let us know at booking so we can allocate the right amount of time for your appointment.' },
      },
      {
        '@type': 'Question',
        name: 'Do you need access to a water hookup at my property?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Our mobile unit is fully self-contained and carries its own water supply and power generation. We do not need access to your hose, outdoor spigot, or electrical outlet. This makes us ideal for larger lots and rural-adjacent properties like those found throughout Albuquerque Acres.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer fleet detailing for small businesses in Albuquerque Acres?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We service small business fleets including work trucks, vans, and SUVs in Albuquerque Acres. We offer recurring maintenance schedules — weekly, biweekly, or monthly — and come to your business location or storage lot. Call (505) 604-8058 to discuss fleet pricing.' },
      },
    ],
  };
}

function getFleetCommercialDetailingFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you service our entire fleet at our lot?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our mobile unit comes to your lot, warehouse, or job site fully self-contained. We need no water hookups or power access. We work through your vehicles systematically, minimizing downtime and keeping your fleet operational.' },
      },
      {
        '@type': 'Question',
        name: 'What vehicle types do you detail for fleets?',
        acceptedAnswer: { '@type': 'Answer', text: 'We handle all commercial vehicle types including pickup trucks, cargo vans, service vans, SUVs, box trucks, and passenger sedans. We do not currently service semi-trucks or vehicles requiring specialized lift equipment.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer recurring fleet detailing contracts?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer weekly, biweekly, and monthly recurring service agreements for Albuquerque businesses. Recurring fleet clients receive priority scheduling, consistent technicians, and volume pricing. Call (505) 604-8058 to discuss contract terms.' },
      },
      {
        '@type': 'Question',
        name: 'How do I set up a fleet detailing account?',
        acceptedAnswer: { '@type': 'Answer', text: 'Call or text (505) 604-8058 or use the booking form at dkmobilewash.com. We will assess your fleet size, vehicle types, service frequency, and location to build a custom recurring schedule. Most fleet accounts are set up and have their first service completed within one week of initial contact.' },
      },
    ],
  };
}

function getServiceAreasFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you travel outside the Albuquerque metro area?',
        acceptedAnswer: { '@type': 'Answer', text: 'Our standard service area covers Albuquerque, Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos de Albuquerque, and Albuquerque Acres. For locations beyond the metro area, call (505) 604-8058 and we will confirm availability and any applicable travel fee.' },
      },
      {
        '@type': 'Question',
        name: 'What do you need at my location to perform a mobile detail?',
        acceptedAnswer: { '@type': 'Answer', text: 'Very little. Our mobile unit is fully self-contained with its own water supply and power generation. We need approximately two parking spaces worth of flat clearance next to your vehicle. No water hookup, outdoor outlet, or other utility access is required.' },
      },
      {
        '@type': 'Question',
        name: 'Is there a travel fee for locations outside central Albuquerque?',
        acceptedAnswer: { '@type': 'Answer', text: 'Most locations within the service area have no travel fee. For addresses at the outer edges of our coverage zone, a small travel fee may apply. We will always tell you about any fee before confirming your appointment. Call or text (505) 604-8058 to check your specific address.' },
      },
      {
        '@type': 'Question',
        name: 'How do I find out if my address is in your service area?',
        acceptedAnswer: { '@type': 'Answer', text: 'The fastest way is to call or text (505) 604-8058. You can also use the booking form at dkmobilewash.com to enter your address and we will confirm availability within one business day. Most Albuquerque metro addresses are covered without any issue.' },
      },
    ],
  };
}

function getLocationsFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is DK Mobile Wash located?',
        acceptedAnswer: { '@type': 'Answer', text: 'DK Mobile Wash is a mobile-only operation — there is no physical shop to visit. We come to you. Our service area covers the entire Albuquerque metro including Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos de Albuquerque, and Albuquerque Acres.' },
      },
      {
        '@type': 'Question',
        name: 'Do I need to come to a shop for detailing?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. DK Mobile Wash comes directly to your driveway, apartment parking lot, office garage, or wherever your vehicle is parked. You do not need to drive anywhere or arrange a ride. Our self-contained mobile unit carries its own water and power.' },
      },
      {
        '@type': 'Question',
        name: 'How do I book a mobile detail in my area?',
        acceptedAnswer: { '@type': 'Answer', text: 'You can book online at dkmobilewash.com or call and text (505) 604-8058. We offer flexible morning and afternoon appointments. Most bookings are confirmed within 24 hours and we send a reminder the day before your service.' },
      },
      {
        '@type': 'Question',
        name: 'Do you serve areas outside Albuquerque?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly serve Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos de Albuquerque, and Albuquerque Acres in addition to all Albuquerque neighborhoods. For locations beyond the standard service area, call (505) 604-8058 and we will confirm availability.' },
      },
    ],
  };
}

function getFleetFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the minimum fleet size you service?',
        acceptedAnswer: { '@type': 'Answer', text: 'We work with businesses starting at two vehicles. There is no minimum fleet size requirement. Whether you have two company trucks or a twenty-vehicle service fleet, we provide the same professional service and can build a recurring schedule that works for your operation.' },
      },
      {
        '@type': 'Question',
        name: 'How much does fleet washing cost per vehicle?',
        acceptedAnswer: { '@type': 'Answer', text: 'Fleet washing rates depend on vehicle type, size, and service frequency. Most exterior fleet washes range from $40 to $90 per vehicle with volume discounts for larger fleets and recurring schedules. Call (505) 604-8058 for a custom fleet quote.' },
      },
      {
        '@type': 'Question',
        name: 'Can you service our vehicles overnight or on weekends?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer flexible scheduling including early mornings, evenings, and weekends to avoid disrupting your business operations. Many fleet clients prefer overnight or weekend service so their vehicles are clean and ready Monday morning.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer both basic fleet washing and full fleet detailing?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fleet washing is a regular maintenance service — exterior wash, tires and wheels, glass, and a quick interior wipe-down. Fleet detailing is a deeper periodic service that includes paint decontamination, interior extraction, leather conditioning, and optional paint protection. Most fleet clients use regular washing monthly and schedule a full detail quarterly or biannually.' },
      },
    ],
  };
}

function getFAQSchema(pathname: string) {
  if (pathname === '/ceramic-coating') return getCeramicCoatingFAQSchema();
  if (pathname === '/rio-rancho') return getRioRanchoFAQSchema();
  if (pathname === '/service/mobile-auto-detailing') return getMobileAutoDetailingFAQSchema();
  if (pathname === '/service/interior-detailing') return getInteriorDetailingFAQSchema();
  if (pathname === '/service/exterior-detailing') return getExteriorDetailingFAQSchema();
  if (pathname === '/service/headlight-restoration') return getHeadlightRestorationFAQSchema();
  if (pathname === '/service/engine-bay-detailing') return getEngineBayDetailingFAQSchema();
  if (pathname === '/albuquerque') return getAlbuquerqueFAQSchema();
  if (pathname === '/corrales') return getCorrallesFAQSchema();
  if (pathname === '/north-valley') return getNorthValleyFAQSchema();
  if (pathname === '/tanoan') return getTanoanFAQSchema();
  if (pathname === '/paradise-hills') return getParadiseHillsFAQSchema();
  if (pathname === '/los-ranchos-de-albuquerque') return getLosRanchosFAQSchema();
  if (pathname === '/albuquerque-acres') return getAlbuquerqueAcresFAQSchema();
  if (pathname === '/albuquerque/fleet-commercial-detailing') return getFleetCommercialDetailingFAQSchema();
  if (pathname === '/service-areas') return getServiceAreasFAQSchema();
  if (pathname === '/locations') return getLocationsFAQSchema();
  if (pathname === '/fleet') return getFleetFAQSchema();
  return getHomeFAQSchema();
}

export default function SchemaMarkup() {
  const location = useLocation();

  useEffect(() => {
    const localBusinessSchema = getLocalBusinessSchema();
    const serviceSchemas = getServiceSchemas();
    const faqSchema = getFAQSchema(location.pathname);
    const breadcrumbSchema = getBreadcrumbSchema(location.pathname);

    // LocalBusiness
    let script = document.querySelector('script[data-schema="local-business"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-schema', 'local-business');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(localBusinessSchema);

    // Service schemas (combined as array)
    let serviceScript = document.querySelector('script[data-schema="services"]');
    if (!serviceScript) {
      serviceScript = document.createElement('script');
      serviceScript.setAttribute('type', 'application/ld+json');
      serviceScript.setAttribute('data-schema', 'services');
      document.head.appendChild(serviceScript);
    }
    serviceScript.textContent = JSON.stringify(serviceSchemas);

    // FAQ
    let faqScript = document.querySelector('script[data-schema="faq"]');
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.setAttribute('type', 'application/ld+json');
      faqScript.setAttribute('data-schema', 'faq');
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqSchema);

    // Breadcrumb (route-specific)
    let breadcrumbScript = document.querySelector('script[data-schema="breadcrumb"]');
    if (breadcrumbSchema) {
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    } else if (breadcrumbScript) {
      breadcrumbScript.remove();
    }
  }, [location.pathname]);

  return null;
}
