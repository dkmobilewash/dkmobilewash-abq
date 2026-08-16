import { Link, useParams, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const locationData: Record<string, {
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  seoTitle: string;
  seoDescription: string;
  whyDKParagraph1: string;
  whyDKParagraph2: string;
  clientStory1Title: string;
  clientStory1Text: string;
  clientStory1Quote: string;
  clientStory2Title: string;
  clientStory2Text: string;
  clientStory2Quote: string;
  clientStory3Title: string;
  clientStory3Text: string;
  clientStory3Quote: string;
  whatSetsApartText: string;
  processList: string[];
  founderText: string;
  faqs: { question: string; answer: string; }[];
}> = {
  'albuquerque': {
    name: 'Albuquerque',
    heroTitle: 'Mobile Car Detailing in Albuquerque, NM — Professional Service at Your Door',
    heroSubtitle: 'Top-rated mobile auto detailing delivered to your home, office, or apartment. Licensed, insured, self-contained, and built for New Mexico conditions.',
    seoTitle: 'Car Detailing Albuquerque NM | Mobile Service at Your Door | DK Mobile Wash',
    seoDescription: 'Top-rated mobile car detailing in Albuquerque, NM. Ceramic coating, paint correction, interior and exterior detailing at your home or office. Call (505) 604-8058.',
    whyDKParagraph1: "Albuquerque vehicles face one of the harshest environments for paint in the United States. The city sits at 5,300 feet of elevation, where UV radiation is measurably more intense than at sea level — fading paint, cracking dashboards, and oxidizing clear coats faster than owners expect. High-desert silica dust coats vehicles between washes and creates abrasive surface contamination that standard car washes cannot safely remove. Hard water from Albuquerque's municipal system and irrigation overspray leaves mineral deposits that etch into unprotected clear coat. DK Mobile Wash is built for this environment. Our self-contained mobile unit brings commercial-grade decontamination, pH-safe chemistry, and long-term ceramic protection directly to your driveway.",
    whyDKParagraph2: "We serve all of Albuquerque — from Tanoan and the Northeast Heights to Nob Hill, the North Valley, Paradise Hills, and every neighborhood in between. Our mobile units require only a flat parking space near your vehicle. No water hookup, no power outlet, no shop visit. Whether you are a daily commuter on I-25, a remote worker with a mud-covered vehicle, or a luxury vehicle owner who expects concours-level results, DK delivers the same professional standard every time.",
    clientStory1Title: "Mickey's M4",
    clientStory1Text: "We paint corrected, extracted mats, and ceramic coated this stunning black 2017 M4.",
    clientStory1Quote: "These guys don't miss. My black 2017 M4 looks better than the day I got it. Expert level attention to detail and customer service. They even vacuumed BMW logos into the driver and passenger footwell carpets.",
    clientStory2Title: "Sarah's Tesla - Nob Hill Bird Lime Removal",
    clientStory2Text: "Bird droppings from neighborhood cottonwood trees etched into the white paint. Full exterior decontamination + interior steam.",
    clientStory2Quote: "Flawless. My Tesla shines like delivery day. The team removed stains I thought were permanent.",
    clientStory3Title: "Ferrari Club Member - UNM Area Water Spot Elimination",
    clientStory3Text: "Albuquerque's hard water ruined the red paint after wash attempts. Iron removal + ceramic coating.",
    clientStory3Quote: "Ferrari-level service at my Albuquerque home. DK understands exotic paint.",
    whatSetsApartText: "Unlike typical Albuquerque detailing companies (long waits at shops near I-40, basic washes that miss swirls, water spots left behind), DK is mobile with zero-downtime service using pro-grade tools.",
    processList: [
      'Book appointment online or call',
      'We arrive at your home/office with full utilities and water supply',
      'Quick walkaround to confirm vehicle condition',
      'Precision detail complete in 4-8 hours',
      'Enjoy your spotless vehicle'
    ],
    founderText: "DK Mobile Wash was launched after years in luxury auto care, frustrated by Albuquerque's subpar options. Mission: Ferrari-level detailing for every NM driveway. Proudly serving Albuquerque.",
    faqs: [
      {
        question: 'Do you serve all Albuquerque neighborhoods?',
        answer: 'Yes. We serve the entire city of Albuquerque including Tanoan, Northeast Heights, Nob Hill, North Valley, Paradise Hills, Los Ranchos de Albuquerque, Journal Center, Four Hills, Corrales border areas, and every neighborhood in between. Call (505) 604-8058 to confirm your specific address.'
      },
      {
        question: 'Do you bring your own water and power to my Albuquerque home?',
        answer: 'Yes. Our mobile detailing unit carries onboard water tanks and an independent power generation system. You never need to supply a hose, an outlet, or any utility hookup. This makes our service fully compliant with HOA restrictions and ideal for driveways, office lots, apartment complexes, and communities with outdoor washing rules.'
      },
      {
        question: 'How do I book mobile detailing in Albuquerque?',
        answer: 'Call (505) 604-8058 or submit a free quote request online. We will confirm your address, discuss your vehicle and service needs, and schedule an appointment that fits your calendar. Most Albuquerque bookings are available within a few days.'
      },
      {
        question: 'What is the most popular service for Albuquerque customers?',
        answer: 'Our most popular service for Albuquerque customers is the full interior and exterior mobile detail — a comprehensive clean that addresses the dust, hard water spots, and UV damage that accumulate on vehicles driven in the high-desert climate. Ceramic coating is our most requested upgrade for customers who want long-term paint protection.'
      },
      {
        question: 'How much does car detailing cost in Albuquerque?',
        answer: 'Pricing depends on vehicle size, condition, and selected service. Visit our Albuquerque detailing prices page for transparent tier breakdowns, or call (505) 604-8058 for a personalized free quote.'
      },
      {
        question: 'Do you remove Albuquerque monsoon dust and hard water spots?',
        answer: 'Yes. Monsoon dust and hard water mineral deposits are among the most common issues we address for Albuquerque vehicles. Our clay bar decontamination process safely removes bonded particulate, and our water spot treatment dissolves mineral etching without scratching the clear coat.'
      },
      {
        question: 'Can you service gated communities and HOA neighborhoods?',
        answer: 'Yes. We regularly service gated neighborhoods, apartments, and HOA communities throughout the metro area. Simply provide gate codes or visitor access details when booking and our team handles the rest.'
      },
      {
        question: 'Are you licensed and insured in New Mexico?',
        answer: 'Yes. DK Mobile Wash is fully licensed and insured. Every technician is trained in paint-safe techniques and held to strict quality standards.'
      }
    ]
  },
  'rio-rancho': {
    name: 'Rio Rancho',
    heroTitle: 'Mobile Car Detailing in Rio Rancho, NM — We Come to Your Home or Business',
    heroSubtitle: 'Professional mobile auto detailing at your Rio Rancho driveway. Self-contained, licensed, insured, and built for Westside mesa conditions.',
    seoTitle: 'Mobile Auto Detailing Rio Rancho NM | At-Home Service | DK Mobile Wash',
    seoDescription: 'Professional mobile car detailing in Rio Rancho, NM. Ceramic coating, interior and exterior detailing at your door. Licensed and insured. Call (505) 604-8058.',
    whyDKParagraph1: "Rio Rancho is one of the fastest-growing cities in New Mexico, but professional mobile detailing has not kept pace with the population. Most Rio Rancho residents still have to drive 20 to 30 minutes into Albuquerque to find a quality detail shop — losing half a day to drop-off, waiting, and pickup. DK Mobile Wash eliminates that entirely. Our self-contained mobile unit comes directly to your Cabezon cul-de-sac, your Enchanted Hills driveway, or your Mariposa business lot with everything needed to deliver a professional result. No shop trip, no wait time, no downtime.",
    whyDKParagraph2: "The Westside mesa environment creates specific vehicle challenges that our process addresses directly. Ongoing construction across Rio Rancho generates concrete dust, silica, and metallic particulate that embeds in paint and glass between washes. Rio Rancho municipal hard water leaves calcium deposits on vehicles parked outside. Intense desert sun at West Mesa elevation accelerates UV fading and dashboard cracking. Our decontamination process, UV-protective sealants, and ceramic coating options are the right answer for every one of these problems.",
    clientStory1Title: "Miguel's GMC - Northern Meadows Construction Fix",
    clientStory1Text: "Concrete dust from nearby builds caked into black paint. We clay barred, polished, and ceramic coated.",
    clientStory1Quote: "My truck sat in construction zones daily. DK made it look showroom-new. Can't believe the difference.",
    clientStory2Title: "Jennifer's Lexus - Desert Sun Fade Prevention",
    clientStory2Text: "Desert parking at work faded the clear coat. Full paint correction + ceramic coating for UV protection.",
    clientStory2Quote: "My Lexus looks incredible. The ceramic coat keeps dust from sticking now. Best investment.",
    clientStory3Title: "Fleet Manager - 10-Vehicle Commercial Detail",
    clientStory3Text: "Rio Rancho construction fleet needed cleaning. We detailed all trucks in one day at their site.",
    clientStory3Quote: "DK handled our entire fleet professionally. Mobile service saved us days of downtime.",
    whatSetsApartText: "Unlike typical Rio Rancho detailing companies (long waits at Westside shops, basic washes that miss construction dust, water spots left behind), DK is mobile with zero-downtime service using pro-grade tools.",
    processList: [
      'Book appointment online or call',
      'We arrive at your Rio Rancho home/office with full utilities',
      'Quick walkaround to assess construction dust or damage',
      'Precision detail complete in 4-8 hours',
      'Enjoy your spotless vehicle'
    ],
    founderText: "DK Mobile Wash was launched after years in luxury auto care, frustrated by Rio Rancho's limited options. Mission: Ferrari-level detailing for every NM driveway. Proudly serving Rio Rancho.",
    faqs: [
      {
        question: 'Do you service all of Rio Rancho, NM?',
        answer: 'Yes. We cover all Rio Rancho neighborhoods including Cabezon, Loma Colorado, Northern Meadows, Enchanted Hills, Riverview, and Mariposa. Our mobile units dispatch daily throughout the city. Call (505) 604-8058 to confirm your specific address.'
      },
      {
        question: 'How far in advance do I need to book in Rio Rancho?',
        answer: 'Most Rio Rancho appointments are available within a few days. For ceramic coating and paint correction services that require a full day, booking a week or two in advance is recommended during busy seasons. We work to accommodate urgent requests when possible.'
      },
      {
        question: 'Do you offer ceramic coating in Rio Rancho?',
        answer: 'Yes. Ceramic coating is one of our most requested services for Rio Rancho vehicles. The combination of construction dust, hard municipal water, and intense West Mesa sun makes ceramic coating especially practical here. Our Gtechniq Crystal Serum packages carry 3-year base warranties up to unlimited warranty with annual maintenance.'
      },
      {
        question: 'What is the most popular service for Rio Rancho customers?',
        answer: 'The most popular service for Rio Rancho customers is the full interior and exterior mobile detail, which addresses the construction dust and hard water buildup common on vehicles parked outside on the West Mesa. Ceramic coating is the most requested upgrade given Rio Rancho\'s year-round UV and dust exposure.'
      },
      {
        question: 'How much does detailing cost in Rio Rancho?',
        answer: 'Pricing varies by vehicle size and service tier. Visit our detailing prices page for transparent breakdowns, or call (505) 604-8058 for a fast, no-obligation quote tailored to your vehicle.'
      },
      {
        question: 'Do you detail commercial vehicles in Rio Rancho?',
        answer: 'Yes. We offer volume pricing and flexible scheduling for fleet detailing, contractor trucks, and business vehicles in Rio Rancho. We come directly to your lot or job site to minimize operational downtime.'
      },
      {
        question: 'Can you work in gated communities in Rio Rancho?',
        answer: 'Yes. Just provide gate access information or visitor passes when booking. Our self-contained mobile detailing unit requires only a flat parking spot to operate and complies with HOA and community property rules.'
      }
    ]
  },
  'corrales': {
    name: 'Corrales',
    heroTitle: 'Mobile Car Detailing in Corrales, NM — Rural Property Service at Your Door',
    heroSubtitle: 'Professional mobile auto detailing for Corrales homes, ranches, and estates. Self-contained, no hookups required, and experienced with rural environments.',
    seoTitle: 'Mobile Car Detailing Corrales NM | At-Home Service | DK Mobile Wash',
    seoDescription: 'Mobile auto detailing in Corrales, NM. We come to your rural property. Ceramic coating, paint correction, interior and exterior detailing. Call (505) 604-8058.',
    whyDKParagraph1: "Corrales is one of the most unique communities in New Mexico — a rural village of farms, horse properties, acequia-fed land, and cottonwood bosque situated between Rio Rancho and Albuquerque. It is also one of the most challenging environments for vehicle paint in the region. Cottonwood pollen is mildly acidic and bonds to clear coat surfaces in spring, creating a yellow film that etches paint if left untreated. Dirt road grime from unpaved streets creates constant abrasive buildup. Acequia irrigation and hard well water leave mineral-dense deposits on paint and glass. Organic debris from large bosque trees drops onto vehicles parked outside year-round.",
    whyDKParagraph2: "DK Mobile Wash is perfectly suited for Corrales because our service model requires nothing from you but a parking spot. We bring our own water in onboard tanks and run on our own power generation — no city water connection, no outdoor outlet, no infrastructure requirement. For residents who moved to Corrales precisely to escape the bustle of Albuquerque, mobile detailing means you never have to drive into the city just to get your vehicle cleaned.",
    clientStory1Title: "Robert's Range Rover - Cottonwood Pollen Attack",
    clientStory1Text: "Yellow pollen embedded in black paint every spring. We clay barred, polished, and applied pollen-resistant ceramic.",
    clientStory1Quote: "Living near cottonwoods meant constant yellow film. DK's ceramic coating changed everything. Pollen wipes off now.",
    clientStory2Title: "Maria's Suburban - Horse Farm Dust Deep Clean",
    clientStory2Text: "Interior filled with farm dust from daily ranch visits. Full extraction, steam clean, leather conditioning.",
    clientStory2Quote: "My Suburban looked like a barn inside. DK's team made it pristine. Even the kids noticed!",
    clientStory3Title: "Collector's Vintage Mustang - Bosque Storage Detail",
    clientStory3Text: "Stored near the bosque, dust accumulated under covers. Full detail before car show.",
    clientStory3Quote: "My '67 Mustang won Best in Show. DK's attention to detail made the difference.",
    whatSetsApartText: "Unlike typical Corrales detailing options (driving to Albuquerque shops, basic washes that miss pollen, water spots from hard well water), DK is mobile with zero-downtime service using pro-grade tools.",
    processList: [
      'Book appointment online or call',
      'We arrive at your Corrales property with full utilities',
      'Quick walkaround to assess pollen or rural dust',
      'Precision detail complete in 4-8 hours',
      'Enjoy your spotless vehicle'
    ],
    founderText: "DK Mobile Wash was launched after years in luxury auto care, frustrated by Corrales' lack of premium options. Mission: Ferrari-level detailing for every NM driveway. Proudly serving Corrales.",
    faqs: [
      {
        question: 'Can you come to a rural property in Corrales without city water access?',
        answer: 'Yes. This is exactly what our self-contained mobile unit is built for. We carry onboard fresh water tanks and independent power generation — no connection to your home water supply or electrical system is needed. We operate successfully on rural properties, ranches, and estates throughout Corrales with zero infrastructure requirements from you.'
      },
      {
        question: 'Does cottonwood pollen damage car paint?',
        answer: 'Yes. Cottonwood pollen is mildly acidic and bonds to clear coat surfaces when wet. If left on the paint surface, it can etch into the clear coat over time, creating dull spots that require polish to remove. Our clay bar decontamination process safely lifts bonded pollen before it causes permanent damage. Ceramic coating provides an ongoing hydrophobic barrier that prevents pollen from bonding as aggressively between washes.'
      },
      {
        question: 'Do you offer ceramic coating in Corrales?',
        answer: 'Yes. Ceramic coating is particularly valuable for Corrales vehicles given the combination of cottonwood pollen, acequia hard water, and dirt road abrasive dust. Our Gtechniq Crystal Serum coating creates a hydrophobic barrier that repels pollen, prevents mineral etching, and makes routine washing significantly easier. We offer 3-year and 5-year warranty packages.'
      },
      {
        question: 'How often should Corrales residents detail their vehicles?',
        answer: 'For Corrales vehicles, we recommend exterior decontamination and protective treatment 3 to 4 times per year aligned with seasonal changes. Spring cottonwood pollen season requires prompt decontamination before the pollen etches into paint. Fall organic debris from bosque trees creates another heavy deposit period. Interior detailing once or twice per year addresses dust and allergen buildup in the cabin.'
      },
      {
        question: 'How long does a full detail take in Corrales?',
        answer: 'Standard packages take 2 to 4 hours depending on vehicle size. Paint correction or ceramic coating services require 6 to 8 hours. We work efficiently at your rural property and coordinate timing around your schedule.'
      },
      {
        question: 'Can you detail classic cars and collector vehicles?',
        answer: 'Yes. We have experience with vintage, collector, and show cars including Porsche, classic Mustangs, and other high-value vehicles. Our paint correction and ceramic coating services are performed with concours-level precision using paint-safe technique and products appropriate for each vehicle.'
      },
      {
        question: 'Do you service properties with animals?',
        answer: 'Yes. We work on rural properties with horses, livestock, and pets regularly. Our team is respectful of animals, secures all equipment safely, and uses pet-safe cleaning products throughout the process.'
      }
    ]
  },
  'north-valley': {
    name: 'North Valley',
    heroTitle: 'Mobile Car Detailing in North Valley, Albuquerque — Service at Your Driveway',
    heroSubtitle: 'Professional mobile auto detailing for North Valley homes, estates, and bosque properties. Self-contained, licensed, and built for riverine and agricultural environments.',
    seoTitle: 'Mobile Car Detailing North Valley Albuquerque | DK Mobile Wash',
    seoDescription: 'Mobile auto detailing in North Valley, Albuquerque. Ceramic coating, paint correction, and interior detailing at your door. Licensed and insured. Call (505) 604-8058.',
    whyDKParagraph1: "North Valley is one of Albuquerque's most distinctive neighborhoods — established estates, agricultural properties, equestrian land, and historic homes along the Rio Grande bosque corridor. Vehicles kept here face a combination of environmental challenges that most detailing companies are not equipped to address. Bosque cottonwood pollen deposits acidic film on paint during spring. Acequia irrigation systems and gravity-fed water delivery create hard water overspray on vehicles parked near landscaping. Rio Grande Valley dust and I-25 highway proximity combine fine particulate with road grime and tar on lower panels. Shaded driveways under large trees accumulate organic debris year-round.",
    whyDKParagraph2: "North Valley also has a higher concentration of luxury, classic, and collector vehicles than most Albuquerque neighborhoods. DK Mobile Wash has the product knowledge, technique discipline, and paint-correct chemistry to handle Porsche, Mercedes, Ferrari, Land Rover, and vintage vehicles safely. Our white-glove process respects both the vehicle and the property — we set up, work, and clean up without leaving anything behind.",
    clientStory1Title: "Carlos' F-150 - Los Griegos Farm Dust Fix",
    clientStory1Text: "Work truck covered in agricultural dust from vineyard routes. Full exterior wash, clay bar, wax protection.",
    clientStory1Quote: "My truck looked 10 years younger after DK's work. They got dust out of every crevice. Impressive.",
    clientStory2Title: "Amanda's Audi - I-25 Commute Grime Removal",
    clientStory2Text: "Daily I-25 commute left tar spots and brake dust. Paint correction + ceramic coating.",
    clientStory2Quote: "My Audi's black paint was dull from highway grime. Now it's mirror-finish. Worth every penny.",
    clientStory3Title: "Bosque Home - Tesla Model Y Interior Detail",
    clientStory3Text: "Kids and cottonwood pollen destroyed white interior. Deep extraction and steam treatment.",
    clientStory3Quote: "I thought we'd need new seats. DK saved them. White interior looks factory-new.",
    whatSetsApartText: "Unlike typical North Valley detailing options (driving to Uptown shops, basic washes that miss agricultural dust, water spots from irrigation water), DK is mobile with zero-downtime service using pro-grade tools.",
    processList: [
      'Book appointment online or call',
      'We arrive at your North Valley home with full utilities',
      'Quick walkaround to assess dust and grime',
      'Precision detail complete in 4-8 hours',
      'Enjoy your spotless vehicle'
    ],
    founderText: "DK Mobile Wash was launched after years in luxury auto care, frustrated by North Valley's limited detailing options. Mission: Ferrari-level detailing for every NM driveway. Proudly serving North Valley.",
    faqs: [
      {
        question: 'Do you service gated and private properties in North Valley?',
        answer: 'Yes. We regularly service private estates, gated driveways, and large North Valley properties. Simply provide gate codes or access information when booking. Our self-contained mobile unit operates quietly and respectfully on residential properties without requiring any hookups or facility access beyond a flat parking area.'
      },
      {
        question: 'Is cottonwood pollen a real threat to car paint in North Valley?',
        answer: 'Yes. North Valley properties near the bosque experience heavy spring cottonwood pollen deposits. The pollen is mildly acidic and bonds to clear coat surfaces when it gets wet. If left on the paint, it can etch into the clear coat and create dull spots requiring professional polish to correct. We recommend a spring decontamination detail for all North Valley vehicles parked under or near cottonwood trees.'
      },
      {
        question: 'Do you offer paint correction for older vehicles with oxidized paint?',
        answer: 'Yes. Paint correction is one of our most frequently requested services for North Valley residents, where many classic and older vehicles live. Machine polishing safely removes UV oxidation, wash-induced swirl marks, and light scratches, restoring depth and gloss to paint that has dulled over years of New Mexico sun exposure.'
      },
      {
        question: 'Can you handle luxury and classic vehicles?',
        answer: 'Yes. DK Mobile Wash has extensive experience with Porsche, Mercedes-Benz, Land Rover, Ferrari, and classic American vehicles. We use paint-safe chemistry, proper machine polishing technique, and handling protocols appropriate for high-value and exotic paint systems. Every vehicle receives the same careful single-technician attention.'
      },
      {
        question: 'How much does detailing cost in North Valley?',
        answer: 'Pricing varies by vehicle size and service tier. Check our transparent pricing guide or call (505) 604-8058 for a fast, accurate quote.'
      },
      {
        question: 'Can you detail farm and agricultural vehicles?',
        answer: 'Yes. We regularly service work trucks, agricultural equipment cabs, and commercial vehicles used on North Valley farms. Our interior deep extraction and exterior decontamination processes handle heavy soil, livestock dust, and organic debris safely.'
      },
      {
        question: 'Do you service Los Griegos and Alameda areas?',
        answer: 'Yes. We cover all North Valley neighborhoods including Los Griegos, Alameda, the Corrales Road corridor, and surrounding rural routes. Our self-contained mobile unit operates anywhere with a flat parking spot.'
      }
    ]
  },
  'tanoan': {
    name: 'Tanoan',
    heroTitle: 'Mobile Car Detailing in Tanoan, NM — White-Glove Service for Luxury Vehicles',
    heroSubtitle: 'Concours-level mobile detailing for Tanoan estates and exotic vehicle collections. Discreet, licensed, and built for high-desert paint care.',
    seoTitle: 'Mobile Auto Detailing Tanoan NM | Luxury & Exotic Service | DK Mobile Wash',
    seoDescription: 'Premium mobile car detailing in Tanoan. Self-contained unit, licensed and insured. Ceramic coating, paint correction, and interior care for luxury vehicles. Call (505) 604-8058.',
    whyDKParagraph1: "Tanoan is one of Albuquerque's most prestigious neighborhoods — a gated community at the Sandia foothills with a high concentration of luxury and exotic vehicles, multi-car collections, and owners who demand a standard of care that most local detailers cannot provide. DK Mobile Wash was built around exactly this standard. Our founder has years of experience in luxury auto care, working with Porsche, Ferrari, Lamborghini, Bentley, and Mercedes-Benz. We bring that expertise directly to your Tanoan garage.",
    whyDKParagraph2: "Tanoan's elevated location at the Sandia foothills means vehicles face foothills dust, intense UV exposure at altitude, and the golf course particulate that settles on paint after rounds at the Tanoan Country Club. Our multi-stage decontamination, precision machine polishing, and professional ceramic coating systems handle all of it with the white-glove process your collection deserves.",
    clientStory1Title: "Member's Porsche 911 - Golf Course Detail",
    clientStory1Text: "Desert dust from golf course parking dulled the Guards Red paint. Paint correction + ceramic coating.",
    clientStory1Quote: "DK understands exotic cars. My 911 looks better than when I bought it. Finally, Tanoan-quality service.",
    clientStory2Title: "Executive's Mercedes S-Class - Foothills Dust Removal",
    clientStory2Text: "Sandia foothills dust embedded in black paint. Clay bar, polish, and ceramic protection applied.",
    clientStory2Quote: "Concierge-level service at my home. The S-Class is immaculate. DK is my go-to now.",
    clientStory3Title: "Collection Owner - 3-Car Garage Detail",
    clientStory3Text: "Ferrari, Bentley, and Range Rover all needed show-quality detailing. Full-day service.",
    clientStory3Quote: "DK personally handled my collection. Meticulous work. This is the standard Tanoan deserves.",
    whatSetsApartText: "Unlike typical detailing services (driving to shops that don't understand luxury standards, basic washes that leave swirls, detailers who rush through exotic vehicles), DK brings Ferrari Club-level expertise to your Tanoan garage.",
    processList: [
      'Book appointment online or call',
      'We arrive at your Tanoan home with full professional equipment',
      'Detailed walkaround to discuss your luxury vehicle',
      'Precision detail complete in 4-8 hours',
      'Enjoy your immaculate vehicle'
    ],
    founderText: "DK Mobile Wash was launched after years in luxury auto care, frustrated by New Mexico's lack of exotic-quality detailing. Mission: Ferrari-level service for every premium vehicle. Proudly serving Tanoan.",
    faqs: [
      {
        question: 'How long does a full detail take in Tanoan?',
        answer: 'Standard luxury details take 3-4 hours, while multi-stage paint correction or ceramic coating services require 6-10 hours. We never rush exotic paintwork and provide detailed progress updates throughout.'
      },
      {
        question: 'Do you handle exotic and luxury vehicles?',
        answer: 'Yes. Our technicians are trained in high-desert vehicle care for Porsche, Ferrari, Lamborghini, Bentley, and Mercedes-Benz. We use paint-safe compounds, microfiber protocols, and professional ceramic coating systems designed for delicate finishes.'
      },
      {
        question: 'Can you access gated communities?',
        answer: 'Absolutely. We coordinate gate codes, visitor passes, and security protocols during booking. Our licensed insured mobile detailing team operates discreetly and respects all community guidelines.'
      },
      {
        question: 'What about golf course dust and desert grime?',
        answer: 'Our clay bar and chemical decontamination process safely lifts embedded silica and organic debris without inducing swirl marks. We follow up with a hydrophobic ceramic layer that repels dust and simplifies maintenance washes.'
      },
    ]
  },
  'paradise-hills': {
    name: 'Paradise Hills',
    heroTitle: 'Mobile Car Detailing in Paradise Hills, NM — Family Vehicle Service at Your Door',
    heroSubtitle: 'Professional mobile detailing for Paradise Hills families. Interior cleaning, pet hair removal, and UV protection — we come to your driveway.',
    seoTitle: 'Mobile Car Detailing Paradise Hills NM | DK Mobile Wash',
    seoDescription: 'Mobile auto detailing in Paradise Hills, NM. Ceramic coating, interior detailing, and paint correction at your door. Licensed and insured. Call (505) 604-8058.',
    whyDKParagraph1: "Paradise Hills sits in Northwest Albuquerque, far from central detailing shops — which makes mobile service the clear choice for busy families. DK Mobile Wash arrives at your driveway fully self-contained with commercial-grade extractors, paint-safe decontamination tools, and ceramic coating equipment. No driving across town. No waiting. We work around your schedule.",
    whyDKParagraph2: "Family vehicles take real punishment: kid spills, food stains, pet hair embedded in upholstery, and the constant volcanic mesa dust that rolls in off the West Mesa. Our interior deep-cleaning process uses hot-water extraction, enzyme treatments, and multi-tool pet hair removal to restore your SUV, minivan, or daily driver to a genuinely clean standard. Exterior treatments include decontamination and optional ceramic protection that holds up against Northwest Albuquerque wind-driven grit.",
    clientStory1Title: "Amar's 911 - Exotic Paint Perfection",
    clientStory1Text: "West Mesa dust and sun exposure dulled the Porsche's paint. Full paint correction, ceramic coating, and interior detail brought it back to showroom condition.",
    clientStory1Quote: "DK's attention to detail on my 911 is unmatched. The paint looks better than the day I bought it. Worth every penny.",
    clientStory2Title: "Ranae's Porsche Macan - Paradise Hills Luxury Detail",
    clientStory2Text: "Desert dust and daily family use dulled the Macan's elegance. Complete paint correction, ceramic coating, and premium interior restoration.",
    clientStory2Quote: "DK transformed my Macan into a showpiece. The ceramic protection keeps it pristine between details. Exceptional work!",
    clientStory3Title: "Chris's Wrapped Mercedes AMG - Wrap Protection Detail",
    clientStory3Text: "Custom wrap needed specialized care to maintain its finish. Professional wrap-safe cleaning, decontamination, and protection treatment.",
    clientStory3Quote: "DK knows how to care for wrapped vehicles. My AMG's wrap looks flawless and protected. True professionals.",
    whatSetsApartText: "Unlike typical Paradise Hills detailing options (driving to Taylor Ranch shops, basic washes that miss West Mesa dust, no UV protection for desert sun), DK is mobile with zero-downtime service using pro-grade tools.",
    processList: [
      'Book appointment online or call',
      'We arrive at your Paradise Hills home with full utilities',
      'Quick walkaround to assess condition and sun damage',
      'Precision detail complete in 4-8 hours',
      'Enjoy your spotless, protected vehicle'
    ],
    founderText: "DK Mobile Wash was launched after years in luxury auto care, frustrated by Westside's limited premium detailing. Mission: Ferrari-level detailing for every NM driveway. Proudly serving Paradise Hills.",
    faqs: [
      {
        question: 'Do you offer pet hair removal in Paradise Hills?',
        answer: 'Yes. We use a multi-tool process combining rubber extraction brushes, HEPA vacuuming, and compressed air to remove embedded pet hair from seats, carpets, and trunk liners. We follow up with enzyme treatment to neutralize pet odors at the source.'
      },
      {
        question: 'Can you detail SUVs and minivans in Paradise Hills?',
        answer: 'Absolutely. SUVs and minivans are the most common vehicles we detail in Paradise Hills. Our interior packages include all rows, cargo areas, door panels, and headliners. Exterior packages cover the full paint surface, wheel wells, and glass. We size pricing to vehicle type.'
      },
      {
        question: 'How do I book a mobile detailing appointment in Paradise Hills?',
        answer: 'You can book online at dkmobilewash.com or call or text (505) 604-8058. We offer flexible morning and afternoon appointment windows. Most bookings are confirmed within 24 hours and we send a reminder the day before your appointment.'
      },
      {
        question: 'Do you offer interior-only detailing in Paradise Hills?',
        answer: 'Yes. Our interior-only package covers vacuuming, hot-water extraction on carpets and seats, surface cleaning, window cleaning, and UV conditioning on leather or vinyl. It is a popular option for families who need a deep clean without the full exterior service.'
      }
    ]
  },
  'los-ranchos-de-albuquerque': {
    name: 'Los Ranchos de Albuquerque',
    heroTitle: 'Mobile Car Detailing in Los Ranchos de Albuquerque — Estate & Bosque Service',
    heroSubtitle: 'Self-contained mobile detailing for Los Ranchos estates and classic vehicles. We handle bosque pollen, dirt roads, and hard water — no hookups needed.',
    seoTitle: 'Mobile Auto Detailing Los Ranchos NM | Rural & Estate Service | DK Mobile Wash',
    seoDescription: 'Professional mobile car detailing in Los Ranchos de Albuquerque. Self-contained unit, licensed & insured. Interior cleaning, paint correction & ceramic coating. Call (505) 604-8058',
    whyDKParagraph1: "Los Ranchos de Albuquerque is one of the most distinctive communities in the Albuquerque metro — a historic village of estates, bosque properties, and rural lots where a standard drive-through car wash simply does not exist and is not appropriate. DK Mobile Wash brings a fully self-contained mobile detailing unit to your property with zero utility hookups required. We carry our own water, power, and all professional-grade products.",
    whyDKParagraph2: "The Los Ranchos environment presents specific vehicle challenges: cottonwood and bosque pollen that embeds in paint and air filters, acequia-side particulate, hard water from irrigation overspray, and unpaved road dust. Our clay bar decontamination, multi-stage paint correction, and ceramic coating systems address all of these. We also have experience with classic and vintage vehicles that require extra care — the kind of care that older Porsches, collectors, and estate owners expect.",
    clientStory1Title: "Tony's 911 - Los Ranchos Exotic Detail",
    clientStory1Text: "His Porsche needed expert care after collecting dust from Los Ranchos dirt roads. We did a full paint correction, clay bar, ceramic coating, and meticulous interior detail.",
    clientStory1Quote: "My 911 deserves the best, and DK delivered. The paint is flawless and the interior is pristine. True professionals.",
    clientStory2Title: "John's Vintage 911 Targa - Classic Porsche Restoration",
    clientStory2Text: "His classic 911 Targa needed careful attention to preserve its vintage character. We performed paint correction, clay bar treatment, and ceramic coating to protect the iconic paint.",
    clientStory2Quote: "My vintage 911 Targa is my pride and joy. DK treated it with the care it deserves. The paint has never looked this good.",
    clientStory3Title: "Michelle's G-Wagon - Luxury SUV Detailing",
    clientStory3Text: "Her Mercedes G-Wagon needed premium detailing to match its luxury status. We performed complete paint correction, ceramic coating, and interior deep cleaning.",
    clientStory3Quote: "DK knows how to handle luxury vehicles. My G-Wagon looks showroom perfect. Highly recommend!",
    whatSetsApartText: "Most Los Ranchos people drive to Albuquerque shops for detailing. Basic car washes dont remove farm dust or pollen. We bring professional tools and products to your location. No driving needed.",
    processList: [
      'Call us or book online',
      'We drive to your Los Ranchos home with all our equipment',
      'Walk around your car to check whats needed',
      'Detail your vehicle in 4-8 hours depending on size',
      'Your car is clean and ready to go'
    ],
    founderText: "DK Mobile Wash was started after working in car detailing for years. Los Ranchos didnt have good mobile options. Now we bring high-end detailing to every driveway in the village.",
    faqs: [
      {
        question: 'Can you come to an estate property in Los Ranchos without water hookups?',
        answer: 'Yes. Our mobile unit is fully self-contained with its own water supply, power source, and professional-grade products. We do not need access to your hose, outlet, or any utility connection. We arrive ready to work regardless of your property layout.'
      },
      {
        question: 'Do you have experience with luxury and classic vehicles?',
        answer: 'Yes. We regularly work on Porsche, Ferrari, Mercedes-Benz, vintage classics, and collector vehicles in Los Ranchos. Our technicians use paint-safe compounds, microfiber-only protocols, and gentle decontamination methods that protect delicate finishes and aged clear coat.'
      },
      {
        question: 'Does bosque pollen damage car paint?',
        answer: 'It can. Cottonwood and bosque pollen is mildly acidic and can bond to clear coat during the wet season. Left unremoved, it etches the surface over time. Our clay bar and chemical decontamination process safely lifts pollen without scratching, and a ceramic coating prevents future adhesion.'
      },
      {
        question: 'Do you offer recurring detail schedules for Los Ranchos residents?',
        answer: 'Yes. We offer monthly, bimonthly, and quarterly maintenance packages for Los Ranchos residents and estate owners. Recurring clients receive priority scheduling and consistent technicians who learn your vehicles. Call (505) 604-8058 to set up a maintenance plan.'
      }
    ]
  }
};

export default function LocationPage() {
  const { location: locationParam } = useParams<{ location: string }>();
  const locationHook = useLocation();

  const location = locationParam || locationHook.pathname.replace('/', '');
  const data = location ? locationData[location] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          <Link to="/locations" className="text-[#007BFF] hover:underline">
            View All Locations
          </Link>
        </div>
      </div>
    );
  }

  if (location === 'los-ranchos-de-albuquerque') {
    return (
      <>
        <SEO
          title={data.seoTitle}
          description={data.seoDescription}
          keywords={`mobile detailing ${data.name}, car detailing ${data.name}, auto detailing ${data.name}, ceramic coating ${data.name}`}
          canonical={`https://www.dkmobilewash.com/${location}`}
        />

        <div className="min-h-screen bg-white pt-16">
          {/* Hero with Image Background */}
          <section style={{
            minHeight: '60vh',
            background: 'linear-gradient(rgba(0, 123, 255, 0.9), rgba(0, 86, 179, 0.9)), url("https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/los%20ranchos%20page/796CFBF2-C048-46EC-A786-E999C6BE257F_1_105_c.jpeg") center/cover',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            padding: '4rem'
          }}>
            <div style={{ maxWidth: '1400px', margin: 'auto', width: '100%' }}>
              <div style={{ maxWidth: '700px' }}>
                <div style={{ fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '1rem', opacity: 0.9 }}>
                  MOBILE DETAILING
                </div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                  Los Ranchos De Albuquerque
                </h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6, opacity: 0.95 }}>
                  {data.heroSubtitle}
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                  <a
                    href="tel:5056048058"
                    style={{
                      background: 'white',
                      color: '#007BFF',
                      padding: '1rem 2.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}
                  >
                    Call Now
                  </a>
                  <Link
                    to="/contact"
                    style={{
                      background: 'transparent',
                      color: 'white',
                      padding: '1rem 2.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      border: '2px solid white'
                    }}
                  >
                    Book Online
                  </Link>
                </div>
                <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem' }}>
                  <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>5+ Years</div>
                    <div style={{ opacity: 0.9 }}>Experience</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>100%</div>
                    <div style={{ opacity: 0.9 }}>Mobile</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Licensed</div>
                    <div style={{ opacity: 0.9 }}>& Insured</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose DK - Magazine Style with Image */}
          <section style={{ padding: '4rem', background: 'white' }}>
            <div style={{ maxWidth: '1400px', margin: 'auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0056b3', marginBottom: '1rem' }}>
                  Los Ranchos Mobile Detailing
                </h2>
                <div style={{ width: '80px', height: '4px', background: '#007BFF', margin: '0 auto' }}></div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                  <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#374151', marginBottom: '1.5rem' }}>
                    {data.whyDKParagraph1}
                  </p>
                  <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#374151', marginBottom: '2rem' }}>
                    {data.whyDKParagraph2}
                  </p>
                  <div style={{ background: '#e3f2fd', padding: '1.5rem', borderRadius: '12px', border: '3px solid #007BFF' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#007BFF', marginBottom: '1rem' }}>
                      Los Ranchos Dirt Problems
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Dirt Roads',
                        'Agricultural Pollen',
                        'Cottonwood Debris',
                        'Bosque Dust',
                        'Farm Equipment Grime'
                      ].map((item, i) => (
                        <li key={i} style={{ padding: '0.5rem 0', borderBottom: i < 4 ? '1px solid #bbdefb' : 'none', color: '#0056b3', fontSize: '1rem' }}>
                          ✓ {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div style={{
                  height: '500px',
                  background: 'url("https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/los%20ranchos%20page/744570D7-4ED9-47CF-847A-A329B029D8EE_1_105_c.jpeg") center/cover',
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
                }}></div>
              </div>
            </div>
          </section>

          {/* Client Stories - Compact with Images */}
          <section style={{ padding: '4rem', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1400px', margin: 'auto' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0056b3', marginBottom: '2.5rem', textAlign: 'center' }}>
                Los Ranchos Customer Stories
              </h2>

              {/* Story 1 */}
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', marginBottom: '2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 350px' }}>
                  <div style={{
                    background: 'url("https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/los%20ranchos%20page/IMG_955E62B9B28D-1.jpeg") center/cover'
                  }}></div>
                  <div style={{ background: '#007BFF', padding: '2rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '1.5px', marginBottom: '0.75rem', opacity: 0.9 }}>
                      CUSTOMER STORY
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                      {data.clientStory1Title}
                    </h3>
                    <p style={{ fontSize: '1rem', lineHeight: 1.5, opacity: 0.95 }}>
                      {data.clientStory1Text}
                    </p>
                  </div>
                  <div style={{ padding: '2rem', display: 'flex', alignItems: 'center', background: '#f8f9fa' }}>
                    <blockquote style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#374151', lineHeight: 1.6, borderLeft: '4px solid #007BFF', paddingLeft: '1.5rem' }}>
                      "{data.clientStory1Quote}"
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Story 2 - Reversed */}
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', marginBottom: '2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr 300px' }}>
                  <div style={{ padding: '2rem', display: 'flex', alignItems: 'center', background: '#f8f9fa' }}>
                    <blockquote style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#374151', lineHeight: 1.6, borderLeft: '4px solid #007BFF', paddingLeft: '1.5rem' }}>
                      "{data.clientStory2Quote}"
                    </blockquote>
                  </div>
                  <div style={{ background: 'linear-gradient(135deg, #0056b3 0%, #003d82 100%)', padding: '2rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '1.5px', marginBottom: '0.75rem', opacity: 0.9 }}>
                      CUSTOMER STORY
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                      {data.clientStory2Title}
                    </h3>
                    <p style={{ fontSize: '1rem', lineHeight: 1.5, opacity: 0.95 }}>
                      {data.clientStory2Text}
                    </p>
                  </div>
                  <div style={{
                    background: 'url("https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/los%20ranchos%20page/IMG_7F625CF70B16-1.jpeg") center/cover'
                  }}></div>
                </div>
              </div>

              {/* Story 3 */}
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 350px' }}>
                  <div style={{
                    background: 'url("https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/los%20ranchos%20page/IMG_379F763CAE79-1.jpeg") center/cover'
                  }}></div>
                  <div style={{ background: '#0056b3', padding: '2rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '1.5px', marginBottom: '0.75rem', opacity: 0.9 }}>
                      CUSTOMER STORY
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                      {data.clientStory3Title}
                    </h3>
                    <p style={{ fontSize: '1rem', lineHeight: 1.5, opacity: 0.95 }}>
                      {data.clientStory3Text}
                    </p>
                  </div>
                  <div style={{ padding: '2rem', display: 'flex', alignItems: 'center', background: '#f8f9fa' }}>
                    <blockquote style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#374151', lineHeight: 1.6, borderLeft: '4px solid #007BFF', paddingLeft: '1.5rem' }}>
                      "{data.clientStory3Quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Buttons Section */}
          <section style={{ background: '#f8f9fa', padding: '4rem 2rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#333' }}>
              DK's Detailing Services for {data.name}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: 'auto' }}>
              {[
                { name: `${data.name} Detailing`, slug: 'mobile-auto-detailing', desc: 'Full exterior/interior refresh at your door.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-detailing.jpeg' },
                { name: 'Ceramic Coating', slug: 'ceramic-coating', desc: 'Long-lasting paint protection and shine.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-ceramiccoating.jpeg' },
                { name: 'Paint Correction', slug: 'paint-correction', desc: 'Remove swirls and restore mirror finish.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-paintcorrection.jpeg' },
                { name: 'Interior Detailing', slug: 'interior-detailing', desc: 'Deep clean carpets, seats, and surfaces.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-interiodetailing.jpeg' },
                { name: 'Exterior Detailing', slug: 'exterior-detailing', desc: 'Professional wash, clay bar, and wax.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-exteriodetailng.jpeg' },
                { name: 'Monthly Maintenance', slug: 'monthly-maintenance', desc: 'Keep your vehicle pristine year-round.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-monthlymaintenance.jpeg' },
                { name: 'Fleet & Commercial', slug: 'fleet-commercial-detailing', desc: 'Multi-vehicle business detailing.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-fleet&commercial.jpeg' },
                { name: 'Car Waxing', slug: 'car-waxing', desc: 'Premium wax protection and gloss.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-carwaxing.jpeg' },
                { name: 'Engine Detailing', slug: 'engine-bay-detailing', desc: 'Clean and degrease engine bay.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-enginedetailing.jpeg' },
                { name: 'Headlight Polishing', slug: 'headlight-restoration', desc: 'Restore clarity and brightness.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-headlightpolishing.jpeg' }
              ].map((service) => (
                <div key={service.slug} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <div style={{ height: '120px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
                    <img
                      src={service.image}
                      alt={`${service.name} service`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      loading="lazy"
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                      <Link to={`/${location}/${service.slug}`} style={{ color: '#007BFF', textDecoration: 'none' }}>
                        {service.name}
                      </Link>
                    </h3>
                    <p style={{ color: '#666', fontSize: '0.95rem' }}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process Timeline with Image */}
          <section style={{ padding: '4rem', background: 'white' }}>
            <div style={{ maxWidth: '1400px', margin: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0056b3', marginBottom: '0.5rem' }}>
                    How It Works
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '2.5rem' }}>
                    Easy steps from booking to clean car
                  </p>

                  <div style={{ position: 'relative' }}>
                    {data.processList.map((step, index) => (
                      <div key={index} style={{ display: 'flex', marginBottom: '2rem', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #007BFF, #0056b3)',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.25rem',
                          fontWeight: 'bold',
                          flexShrink: 0,
                          marginRight: '1.5rem'
                        }}>
                          {index + 1}
                        </div>
                        <div style={{ flex: 1, paddingTop: '0.5rem' }}>
                          <p style={{ fontSize: '1.1rem', color: '#374151', fontWeight: '500' }}>
                            {step}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{
                  height: '500px',
                  background: 'url("https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/los%20ranchos%20page/IMG_90C612B5DAFC-1.jpeg") center/cover',
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
                }}></div>
              </div>
            </div>
          </section>

          {/* FAQ - Two Column */}
          <section style={{ padding: '4rem', background: '#e3f2fd' }}>
            <div style={{ maxWidth: '1400px', margin: 'auto' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0056b3', marginBottom: '0.5rem', textAlign: 'center' }}>
                Common Questions
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#0056b3', textAlign: 'center', marginBottom: '3rem' }}>
                What Los Ranchos customers ask us
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {data.faqs.map((faq, index) => (
                  <div key={index} style={{ background: 'white', padding: '1.75rem', borderRadius: '12px', border: '1px solid #bbdefb' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#007BFF', marginBottom: '0.75rem' }}>
                      {faq.question}
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.6 }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section style={{
            padding: '4rem',
            background: 'linear-gradient(rgba(0, 123, 255, 0.95), rgba(0, 86, 179, 0.95)), url("https://images.pexels.com/photos/3354675/pexels-photo-3354675.jpeg?auto=compress&cs=tinysrgb&w=1920") center/cover',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{ maxWidth: '800px', margin: 'auto' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Get Your Car Detailed Today
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.95, lineHeight: 1.6 }}>
                We come to your Los Ranchos property. Professional mobile detailing without the drive to town.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <a
                  href="tel:5056048058"
                  style={{
                    background: 'white',
                    color: '#007BFF',
                    padding: '1.25rem 2.5rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                  }}
                >
                  Call (505) 604-8058
                </a>
                <Link
                  to="/contact"
                  style={{
                    background: 'transparent',
                    color: 'white',
                    padding: '1.25rem 2.5rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    border: '3px solid white'
                  }}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  if (location === 'paradise-hills') {
    return (
      <>
        <SEO
          title={data.seoTitle}
          description={data.seoDescription}
          keywords={`mobile detailing ${data.name}, car detailing ${data.name}, auto detailing ${data.name}, ceramic coating ${data.name}`}
          canonical={`https://www.dkmobilewash.com/${location}`}
        />

        <div className="min-h-screen bg-white pt-16">
          <section style={{
            minHeight: '50vh',
            background: 'linear-gradient(to right, #1e3a8a, #3b82f6)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4rem 2rem',
            textAlign: 'center'
          }}>
            <h1 style={{ fontSize: '3.5rem', margin: 0, marginBottom: '1.5rem', fontWeight: 'bold', maxWidth: '900px' }}>
              Paradise Hills' Premier Mobile Detailing
            </h1>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', maxWidth: '700px', lineHeight: '1.6' }}>
              Family vehicles. Desert protection. Westside convenience.
            </p>
            <a
              href="tel:5056048058"
              style={{
                background: '#fff',
                color: '#1e3a8a',
                padding: '1.2rem 3rem',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              Call (505) 604-8058
            </a>
          </section>

          <section style={{ padding: '5rem 2rem', background: '#ffffff' }}>
            <div style={{ maxWidth: '1400px', margin: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
                <div>
                  <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1e3a8a' }}>
                    West Mesa Dust Meets Its Match
                  </h2>
                  <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: '#555', marginBottom: '1.5rem' }}>
                    {data.whyDKParagraph1}
                  </p>
                  <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: '#555' }}>
                    {data.whyDKParagraph2}
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: '#f0f7ff', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>5+</div>
                    <p style={{ color: '#555', fontSize: '1rem' }}>Years Experience</p>
                  </div>
                  <div style={{ background: '#f0f7ff', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>100+</div>
                    <p style={{ color: '#555', fontSize: '1rem' }}>5-Star Reviews</p>
                  </div>
                  <div style={{ background: '#f0f7ff', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>Mobile</div>
                    <p style={{ color: '#555', fontSize: '1rem' }}>To Your Door</p>
                  </div>
                  <div style={{ background: '#f0f7ff', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>UV</div>
                    <p style={{ color: '#555', fontSize: '1rem' }}>Protection Coating</p>
                  </div>
                </div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', padding: '4rem', borderRadius: '16px', color: 'white', textAlign: 'center', marginBottom: '5rem' }}>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                  The Paradise Hills Difference
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', maxWidth: '1100px', margin: 'auto' }}>
                  <div>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏠</div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>We Come to You</h4>
                    <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: '1.6' }}>
                      No more driving to Taylor Ranch shops. We detail at your Paradise Hills home.
                    </p>
                  </div>
                  <div>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☀️</div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Desert Sun Shield</h4>
                    <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: '1.6' }}>
                      UV-blocking ceramic coatings protect against West Mesa sun damage.
                    </p>
                  </div>
                  <div>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍👩‍👧‍👦</div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Family Specialists</h4>
                    <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: '1.6' }}>
                      Expert at removing kid stains, pet hair, and sports equipment messes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ background: '#f8fafc', padding: '5rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: 'auto' }}>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center', color: '#1e3a8a' }}>
                Real Paradise Hills Transformations
              </h2>
              <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '4rem' }}>
                See how we've helped Westside families restore their vehicles
              </p>

              <div style={{ display: 'grid', gap: '3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                  <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                    <div style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                      EXOTIC VEHICLE
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e3a8a' }}>
                      {data.clientStory1Title}
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                      {data.clientStory1Text}
                    </p>
                    <blockquote style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '1.5rem', fontStyle: 'italic', color: '#333', fontSize: '1rem' }}>
                      "{data.clientStory1Quote}"
                    </blockquote>
                  </div>
                  <div style={{ height: '350px', borderRadius: '12px', overflow: 'hidden' }}>
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/tanoan%20page/Screenshot%202026-02-28%20at%206.59.48%20PM.jpeg"
                      alt="Amar's Porsche 911 detail in Paradise Hills"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                  <div style={{ height: '350px', borderRadius: '12px', overflow: 'hidden' }}>
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/paradise%20hills/Screenshot%202026-02-28%20at%207.14.21%20PM.jpeg"
                      alt="Ranae's Porsche Macan detail in Paradise Hills"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                  <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                    <div style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                      LUXURY SUV
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e3a8a' }}>
                      {data.clientStory2Title}
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                      {data.clientStory2Text}
                    </p>
                    <blockquote style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '1.5rem', fontStyle: 'italic', color: '#333', fontSize: '1rem' }}>
                      "{data.clientStory2Quote}"
                    </blockquote>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                  <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                    <div style={{ display: 'inline-block', background: '#fee2e2', color: '#991b1b', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                      WRAPPED VEHICLE
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e3a8a' }}>
                      {data.clientStory3Title}
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                      {data.clientStory3Text}
                    </p>
                    <blockquote style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '1.5rem', fontStyle: 'italic', color: '#333', fontSize: '1rem' }}>
                      "{data.clientStory3Quote}"
                    </blockquote>
                  </div>
                  <div style={{ height: '350px', borderRadius: '12px', overflow: 'hidden' }}>
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/paradise%20hills/IMG_1540BFFBF4CD-1.jpeg"
                      alt="Chris's wrapped Mercedes AMG detail in Paradise Hills"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: '5rem 2rem', background: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: 'auto' }}>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '4rem', textAlign: 'center', color: '#1e3a8a' }}>
                Our Paradise Hills Process
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2rem' }}>
                {data.processList.map((step, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #3b82f6, #1e3a8a)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </div>
                    <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ background: '#f8f9fa', padding: '4rem 2rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#333' }}>
              DK's Detailing Services for {data.name}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: 'auto' }}>
              {[
                { name: `${data.name} Detailing`, slug: 'mobile-auto-detailing', desc: 'Full exterior/interior refresh at your door.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-detailing.jpeg' },
                { name: 'Ceramic Coating', slug: 'ceramic-coating', desc: 'Long-lasting paint protection and shine.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-ceramiccoating.jpeg' },
                { name: 'Paint Correction', slug: 'paint-correction', desc: 'Remove swirls and restore mirror finish.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-paintcorrection.jpeg' },
                { name: 'Interior Detailing', slug: 'interior-detailing', desc: 'Deep clean carpets, seats, and surfaces.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-interiodetailing.jpeg' },
                { name: 'Exterior Detailing', slug: 'exterior-detailing', desc: 'Professional wash, clay bar, and wax.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-exteriodetailng.jpeg' },
                { name: 'Monthly Maintenance', slug: 'monthly-maintenance', desc: 'Keep your vehicle pristine year-round.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-monthlymaintenance.jpeg' },
                { name: 'Fleet & Commercial', slug: 'fleet-commercial-detailing', desc: 'Multi-vehicle business detailing.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-fleet&commercial.jpeg' },
                { name: 'Car Waxing', slug: 'car-waxing', desc: 'Premium wax protection and gloss.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-carwaxing.jpeg' },
                { name: 'Engine Detailing', slug: 'engine-bay-detailing', desc: 'Clean and degrease engine bay.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-enginedetailing.jpeg' },
                { name: 'Headlight Polishing', slug: 'headlight-restoration', desc: 'Restore clarity and brightness.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-headlightpolishing.jpeg' }
              ].map((service) => (
                <div key={service.slug} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <div style={{ height: '120px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
                    <img
                      src={service.image}
                      alt={`${service.name} service`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      loading="lazy"
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                      <Link to={`/${location}/${service.slug}`} style={{ color: '#007BFF', textDecoration: 'none' }}>
                        {service.name}
                      </Link>
                    </h3>
                    <p style={{ color: '#666', fontSize: '0.95rem' }}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ padding: '5rem 2rem', background: 'white' }}>
            <div style={{ maxWidth: '900px', margin: 'auto' }}>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '4rem', textAlign: 'center', color: '#1e3a8a' }}>
                Paradise Hills FAQ
              </h2>
              {data.faqs.map((faq, index) => (
                <details key={index} style={{ marginBottom: '1.5rem', background: '#f8fafc', borderRadius: '8px', padding: '1.5rem', border: 'none' }}>
                  <summary style={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1.15rem', color: '#1e3a8a', listStyle: 'none' }}>
                    <span style={{ marginRight: '1rem' }}>→</span>
                    {faq.question}
                  </summary>
                  <p style={{ marginTop: '1.5rem', paddingLeft: '2rem', color: '#555', lineHeight: '1.7', fontSize: '1.05rem' }}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section style={{ background: 'linear-gradient(to right, #1e3a8a, #3b82f6)', padding: '5rem 2rem', textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Ready to Transform Your Vehicle?
            </h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
              Call now for same-week service in Paradise Hills
            </p>
            <a
              href="tel:5056048058"
              style={{
                background: '#fff',
                color: '#1e3a8a',
                padding: '1.5rem 4rem',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: 'bold',
                fontSize: '1.3rem',
                transition: 'all 0.3s',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
              }}
            >
              (505) 604-8058
            </a>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={data.seoTitle}
        description={data.seoDescription}
        keywords={`mobile detailing ${data.name}, car detailing ${data.name}, auto detailing ${data.name}, ceramic coating ${data.name}`}
        canonical={`https://www.dkmobilewash.com/${location}`}
      />

      <div className="min-h-screen bg-white pt-16">
        <section style={{
          height: '60vh',
          background: 'linear-gradient(135deg, #007BFF, #0056b3)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '2rem',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '800px', zIndex: 10 }}>
            <h1 style={{ fontSize: '3rem', margin: 0, marginBottom: '1rem', fontWeight: 'bold' }}>
              {data.heroTitle}
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              {data.heroSubtitle}
            </p>
            <a
              href="#booking"
              style={{
                background: '#fff',
                color: '#007BFF',
                padding: '1rem 2rem',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: 'bold',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Book Now
            </a>
          </div>
          {location === 'albuquerque' ? (
            <div style={{
              width: '500px',
              height: '400px',
              marginLeft: 'auto',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <img
                src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/abq%20service%20page/85576833-9EF8-4091-B163-E007A680F93A_1_105_c.jpeg"
                alt="Albuquerque mobile auto detailing service"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 30%'
                }}
                loading="lazy"
              />
            </div>
          ) : location === 'rio-rancho' ? (
            <div style={{
              width: '500px',
              height: '400px',
              marginLeft: 'auto',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <img
                src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/why-trust-dkmobilewash-riorancho.jpeg"
                alt="Why trust DK Mobile Wash in Rio Rancho"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                loading="lazy"
              />
            </div>
          ) : location === 'corrales' ? (
            <div style={{
              width: '500px',
              height: '400px',
              marginLeft: 'auto',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <img
                src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/corrales%20service%20pge/ADAFE70B-5C87-40EE-9D70-E6671374907F_1_105_c.jpeg"
                alt="Premium auto detailing in Corrales"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                loading="lazy"
              />
            </div>
          ) : location === 'north-valley' ? (
            <div style={{
              width: '500px',
              height: '400px',
              marginLeft: 'auto',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <img
                src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/north%20valley%20page/3E1F3018-2CCB-45D3-AD2D-DFDC529299A7_1_105_c.jpeg"
                alt="Premium auto detailing in North Valley"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                loading="lazy"
              />
            </div>
          ) : location === 'tanoan' ? (
            <div style={{
              width: '500px',
              height: '400px',
              marginLeft: 'auto',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <img
                src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/tanoan%20page/79367ADA-1A19-460C-A545-7CDB350E7F56_1_102_o.jpeg"
                alt="Premium luxury detailing in Tanoan"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                loading="lazy"
              />
            </div>
          ) : (
            <div style={{
              width: '400px',
              height: '300px',
              background: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              marginLeft: 'auto',
              borderRadius: '8px'
            }}>
              HERO IMAGE: {data.name} Detail Scene
            </div>
          )}
        </section>

        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: 'auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#333' }}>
            Ready for Detailing That Transforms Your Ride in {data.name}?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
            <div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem', color: '#555' }}>
                {data.whyDKParagraph1}
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                {data.whyDKParagraph2}
              </p>
            </div>
            {location === 'albuquerque' ? (
              <div style={{
                height: '250px',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img
                  src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/abq%20service%20page/D64FC309-5FF2-454E-A25E-495A6BD0BD86_1_105_c.jpeg"
                  alt="Professional auto detailing work in Albuquerque"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
              </div>
            ) : location === 'rio-rancho' ? (
              <div style={{
                height: '250px',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img
                  src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/1A0071E8-9435-49E1-9118-9DD78F5E7BD2.JPG"
                  alt="Professional auto detailing in Rio Rancho"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
              </div>
            ) : location === 'corrales' ? (
              <div style={{
                height: '250px',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img
                  src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/corrales%20service%20pge/4FB7A7F2-4609-43CF-90C0-61033E73B044_1_105_c.jpeg"
                  alt="Professional auto detailing work in Corrales"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
              </div>
            ) : location === 'north-valley' ? (
              <div style={{
                height: '250px',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img
                  src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/north%20valley%20page/E2D369A4-7486-4503-8EAA-DB726578BB85_1_102_o.jpeg"
                  alt="Professional auto detailing work in North Valley"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
              </div>
            ) : location === 'tanoan' ? (
              <div style={{
                height: '250px',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img
                  src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/tanoan%20page/64A444A2-6C8D-44A8-92C9-42B5BD408366_1_105_c.jpeg"
                  alt="Professional luxury auto detailing work in Tanoan"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
              </div>
            ) : (
              <div style={{
                height: '250px',
                background: '#ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                fontWeight: 'bold'
              }}>
                WHY DK? PHOTO
              </div>
            )}
          </div>
        </section>

        {location !== 'corrales' && location !== 'tanoan' && (
          <section style={{ background: '#f8f9fa', padding: '4rem 2rem' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', color: '#333' }}>
              {data.name} Clients We've Made Shine
            </h2>
            <div style={{ maxWidth: '1200px', margin: 'auto', display: 'grid', gap: '2rem' }}>
              <article style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#007BFF' }}>
                  {data.clientStory1Title}
                </h3>
                <p style={{ marginBottom: '1rem', color: '#555', lineHeight: '1.6' }}>
                  {data.clientStory1Text} <em style={{ color: '#333', fontStyle: 'italic' }}>"{data.clientStory1Quote}"</em>
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', borderRadius: '8px', overflow: 'hidden' }}>
                  {location === 'rio-rancho' ? (
                    <>
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/8C0C5583-8897-45AC-A562-AFF0E0287E63_1_102_o.jpeg"
                        alt="Miguel's GMC detail - image 1"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/CF5FF9BC-4CAF-4163-B397-C7D8F9BE1A9F_1_102_o.jpeg"
                        alt="Miguel's GMC detail - image 2"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/FB1FA2EA-DDE7-4436-AA57-D50E2486B68A_4_5005_c.jpeg"
                        alt="Miguel's GMC detail - image 3"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                    </>
                  ) : location === 'north-valley' ? (
                    <>
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/north%20valley%20page/IMG_5341CCCB7D3B-1.jpeg"
                        alt="Carlos' F-150 detail - image 1"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/north%20valley%20page/IMG_8E6D2FC0F1E9-1.jpeg"
                        alt="Carlos' F-150 detail - image 2"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/north%20valley%20page/View%20recent%20photos%205.jpeg"
                        alt="Carlos' F-150 detail - image 3"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src="https://lh3.googleusercontent.com/geougc-cs/ABOP9pt_CMkHPW02uN5muEN6bmHIGLaeDhja_y2vpPVHQgWkNE0VrHGTURoQj5pu-gVuTvVFuAxuHJhw9wjAH-60bExSjgouDmmjHWvOl048O9wqCwvhXjdl8bDCdlTtXjQEaszm_U4X=s250-p-k-rw"
                        alt="Mickey's BMW M4 detail - image 1"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://lh3.googleusercontent.com/geougc-cs/ABOP9pt5EOIfv-rEM4H3Yq7pO6IWiA0BlirENdLDFXIixam7cBwDCWbc_bWJtfVO0a9w6ZnO-2jESr_EZmwEsqsY13GXlxJZ2d3dpsu0-V6edJm2iKFNo9ThOMlE5ytx3v5IgCZ2w9nWhg=s250-p-k-rw"
                        alt="Mickey's BMW M4 detail - image 2"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://lh3.googleusercontent.com/geougc-cs/ABOP9pukchLfIWv3mSPM-O2Ie94Kymncy8fTLAHVLQePdcPRBozsZfwlJuimgiPkmpoZiO070qwD5NSDV5kXhVmk_FzDrImX7QGyC6O62o4le6JV6_UC6yiuJZBA2Vlj51t5saUQOxg=s250-p-k-rw"
                        alt="Mickey's BMW M4 detail - image 3"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                    </>
                  )}
                </div>
              </article>

              <article style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#007BFF' }}>
                  {data.clientStory2Title}
                </h3>
                <p style={{ marginBottom: '1rem', color: '#555', lineHeight: '1.6' }}>
                  {data.clientStory2Text} <em style={{ color: '#333', fontStyle: 'italic' }}>"{data.clientStory2Quote}"</em>
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', borderRadius: '8px', overflow: 'hidden' }}>
                  {location === 'rio-rancho' ? (
                    <>
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/IMG_4574.jpg"
                        alt="Jennifer's Lexus detail - image 1"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/IMG_4575.jpg"
                        alt="Jennifer's Lexus detail - image 2"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/IMG_4576.jpg"
                        alt="Jennifer's Lexus detail - image 3"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                    </>
                  ) : location === 'north-valley' ? (
                    <>
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/north%20valley%20page/IMG_5E9FA4BD62F5-1.jpeg"
                        alt="Amanda's Audi detail - image 1"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/north%20valley%20page/View%20recent%20photos%206.jpeg"
                        alt="Amanda's Audi detail - image 2"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/north%20valley%20page/View%20recent%20photos%207.jpeg"
                        alt="Amanda's Audi detail - image 3"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/abq%20service%20page/8051E5A3-90C2-4918-B130-C5B95E3E4E23_1_105_c.jpeg"
                        alt="Sarah's Tesla bird lime removal - image 1"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/abq%20service%20page/1A708D50-A3F7-4DF4-8B94-09479D7C12F5_1_102_o.jpeg"
                        alt="Sarah's Tesla bird lime removal - image 2"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/abq%20service%20page/BD2E2C02-8375-4127-9F7A-C1D6E2546073_4_5005_c.jpeg"
                        alt="Sarah's Tesla bird lime removal - image 3"
                        style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                        loading="lazy"
                      />
                    </>
                  )}
                </div>
              </article>

              <article style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#007BFF' }}>
                  {data.clientStory3Title}
                </h3>
                <p style={{ marginBottom: '1rem', color: '#555', lineHeight: '1.6' }}>
                  {data.clientStory3Text} <em style={{ color: '#333', fontStyle: 'italic' }}>"{data.clientStory3Quote}"</em>
                </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', borderRadius: '8px', overflow: 'hidden' }}>
                {location === 'rio-rancho' ? (
                  <>
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/IMG_4577%202.jpg"
                      alt="Fleet vehicle commercial detail - image 1"
                      style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                      loading="lazy"
                    />
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/IMG_4578.jpg"
                      alt="Fleet vehicle commercial detail - image 2"
                      style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                      loading="lazy"
                    />
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/IMG_4579.jpg"
                      alt="Fleet vehicle commercial detail - image 3"
                      style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                      loading="lazy"
                    />
                  </>
                ) : location === 'north-valley' ? (
                  <>
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/north%20valley%20page/IMG_7B45C71E0DE8-1.jpeg"
                      alt="Tesla Model Y interior detail - image 1"
                      style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                      loading="lazy"
                    />
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/north%20valley%20page/IMG_968FDDD7716B-1.jpeg"
                      alt="Tesla Model Y interior detail - image 2"
                      style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                      loading="lazy"
                    />
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/north%20valley%20page/IMG_E367A9E3F6C7-1.jpeg"
                      alt="Tesla Model Y interior detail - image 3"
                      style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                      loading="lazy"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/abq%20service%20page/2023-08-09-1.jpg"
                      alt="Ferrari water spot elimination - image 1"
                      style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                      loading="lazy"
                    />
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/abq%20service%20page/C626FBFE-585B-4C64-8D11-18A3A9D639D8_1_105_c.jpeg"
                      alt="Ferrari water spot elimination - image 2"
                      style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                      loading="lazy"
                    />
                    <img
                      src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/abq%20service%20page/BE52CD6D-1BAF-4ECA-B11B-AEF0821E01E3_1_105_c.jpeg"
                      alt="Ferrari water spot elimination - image 3"
                      style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f5f5f5' }}
                      loading="lazy"
                    />
                  </>
                )}
              </div>
            </article>
          </div>
          </section>
        )}

        {location === 'tanoan' && (
          <>
            <section style={{ background: '#f8f9fa', padding: '4rem 2rem' }}>
              <div style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#333' }}>
                  Elite Detailing Services for Tanoan Residents
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                  <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#007BFF' }}>
                      Exotic & Luxury Vehicle Specialists
                    </h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#555', marginBottom: '1rem' }}>
                      DK personally handles every Porsche, Ferrari, Lamborghini, and Bentley. With over 5 years specializing in exotic detailing and trusted by the Ferrari Club of America, your collection receives concours-level care.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: '#555' }}>
                      <li style={{ padding: '0.4rem 0' }}>✓ Paint correction by certified technicians</li>
                      <li style={{ padding: '0.4rem 0' }}>✓ Premium ceramic coating protection</li>
                      <li style={{ padding: '0.4rem 0' }}>✓ Show car preparation</li>
                      <li style={{ padding: '0.4rem 0' }}>✓ Multi-vehicle collection packages</li>
                    </ul>
                  </div>

                  <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#007BFF' }}>
                      White-Glove Mobile Service
                    </h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#555', marginBottom: '1rem' }}>
                      We bring Ferrari-level detailing directly to your Tanoan garage. No need to trust valet services or risk your vehicle in transit. Our fully-equipped mobile units provide the same quality as top-tier stationary shops.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: '#555' }}>
                      <li style={{ padding: '0.4rem 0' }}>✓ Gated community access coordination</li>
                      <li style={{ padding: '0.4rem 0' }}>✓ Flexible scheduling around your calendar</li>
                      <li style={{ padding: '0.4rem 0' }}>✓ Discreet, professional service</li>
                      <li style={{ padding: '0.4rem 0' }}>✓ Same-day availability for priority clients</li>
                    </ul>
                  </div>
                </div>

                <div style={{ background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', color: '#007BFF' }}>
                    Premium Protection Packages
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                    <div style={{ textAlign: 'center', padding: '1rem', borderRight: '1px solid #e0e0e0' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007BFF', marginBottom: '0.5rem' }}>
                        Platinum
                      </div>
                      <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '0.5rem', lineHeight: '1.5' }}>
                        Full exterior detail, paint correction, ceramic coating, interior deep clean, engine bay detailing
                      </p>
                      <p style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>8-12 hours</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1rem', borderRight: '1px solid #e0e0e0' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007BFF', marginBottom: '0.5rem' }}>
                        Collection
                      </div>
                      <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '0.5rem', lineHeight: '1.5' }}>
                        Multi-vehicle package with priority scheduling, storage prep, show car detailing
                      </p>
                      <p style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Custom timeline</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007BFF', marginBottom: '0.5rem' }}>
                        Maintenance
                      </div>
                      <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '0.5rem', lineHeight: '1.5' }}>
                        Monthly concierge service to keep your vehicles in pristine condition year-round
                      </p>
                      <p style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Recurring</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section style={{ padding: '3rem 2rem', background: 'white' }}>
              <div style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', color: '#333' }}>
                  Trusted by Tanoan's Finest
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                  <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '1rem', height: '180px', borderRadius: '8px', overflow: 'hidden' }}>
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/tanoan%20page/94C3DD4F-D1D1-4801-9A2B-B6A6E09622A2_1_105_c.jpeg"
                        alt="Member's Porsche 911 Golf Course Detail"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#007BFF' }}>
                      {data.clientStory1Title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.75rem', lineHeight: '1.5' }}>
                      {data.clientStory1Text}
                    </p>
                    <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#333' }}>
                      "{data.clientStory1Quote}"
                    </p>
                  </div>

                  <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '1rem', height: '180px', borderRadius: '8px', overflow: 'hidden' }}>
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/tanoan%20page/IMG_CEDCBA03BD01-1.jpeg"
                        alt="Executive's Mercedes S-Class Foothills Dust Removal"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#007BFF' }}>
                      {data.clientStory2Title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.75rem', lineHeight: '1.5' }}>
                      {data.clientStory2Text}
                    </p>
                    <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#333' }}>
                      "{data.clientStory2Quote}"
                    </p>
                  </div>

                  <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '1rem', height: '180px', borderRadius: '8px', overflow: 'hidden' }}>
                      <img
                        src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/tanoan%20page/IMG_BBDA445BF2FC-1.jpeg"
                        alt="Collection Owner 3-Car Garage Detail"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#007BFF' }}>
                      {data.clientStory3Title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.75rem', lineHeight: '1.5' }}>
                      {data.clientStory3Text}
                    </p>
                    <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#333' }}>
                      "{data.clientStory3Quote}"
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        <section style={{ padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#333' }}>
            What Makes DK #1 in {data.name}?
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555', lineHeight: '1.8' }}>
            {data.whatSetsApartText}
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#555', lineHeight: '1.8' }}>
            Our 1-of-1 advantage: <strong>HydraFlex hybrid ceramic coatings + P&S chemical line + waterless process</strong>. See our process diagrams:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              {location === 'rio-rancho' || location === 'corrales' || location === 'tanoan' ? (
                <div style={{ height: '100px', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                  <img
                    src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/View%20recent%20photos%204.jpeg"
                    alt="Paint correction steps"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div style={{ height: '100px', background: '#ddd', marginBottom: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  PAINT CORRECTION STEPS
                </div>
              )}
              <p style={{ fontWeight: 'bold', color: '#333' }}>3-stage swirl removal</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              {location === 'rio-rancho' || location === 'corrales' || location === 'tanoan' ? (
                <div style={{ height: '100px', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                  <img
                    src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/IMG_4581.jpg"
                    alt="Ceramic application"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div style={{ height: '100px', background: '#ddd', marginBottom: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  CERAMIC APPLICATION
                </div>
              )}
              <p style={{ fontWeight: 'bold', color: '#333' }}>Hybrid protection</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              {location === 'rio-rancho' || location === 'corrales' || location === 'tanoan' ? (
                <div style={{ height: '100px', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                  <img
                    src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/rio%20rancho%20service%20page/IMG_7CDF80374D14-1.jpeg"
                    alt="Interior steam cleaning"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div style={{ height: '100px', background: '#ddd', marginBottom: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  INTERIOR STEAM
                </div>
              )}
              <p style={{ fontWeight: 'bold', color: '#333' }}>Deep extraction</p>
            </div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.5rem 0', fontSize: '1.1rem', color: '#555' }}>✓ 100+ five-star Google reviews</li>
            <li style={{ padding: '0.5rem 0', fontSize: '1.1rem', color: '#555' }}>✓ Trusted by Ferrari Club of America</li>
            <li style={{ padding: '0.5rem 0', fontSize: '1.1rem', color: '#555' }}>✓ BMW CCA New Mexico chapter</li>
            <li style={{ padding: '0.5rem 0', fontSize: '1.1rem', color: '#555' }}>✓ ADT Security fleets</li>
            <li style={{ padding: '0.5rem 0', fontSize: '1.1rem', color: '#555' }}>✓ 10 Tanker Air Bosses</li>
          </ul>
        </section>

        <section style={{ background: '#f8f9fa', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#333' }}>
            DK's Detailing Services for {data.name}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: 'auto' }}>
            {[
              { name: `${data.name} Detailing`, slug: 'mobile-auto-detailing', desc: 'Full exterior/interior refresh at your door.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-detailing.jpeg' },
              { name: 'Ceramic Coating', slug: 'ceramic-coating', desc: 'Long-lasting paint protection and shine.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-ceramiccoating.jpeg' },
              { name: 'Paint Correction', slug: 'paint-correction', desc: 'Remove swirls and restore mirror finish.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-paintcorrection.jpeg' },
              { name: 'Interior Detailing', slug: 'interior-detailing', desc: 'Deep clean carpets, seats, and surfaces.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-interiodetailing.jpeg' },
              { name: 'Exterior Detailing', slug: 'exterior-detailing', desc: 'Professional wash, clay bar, and wax.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-exteriodetailng.jpeg' },
              { name: 'Monthly Maintenance', slug: 'monthly-maintenance', desc: 'Keep your vehicle pristine year-round.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-monthlymaintenance.jpeg' },
              { name: 'Fleet & Commercial', slug: 'fleet-commercial-detailing', desc: 'Multi-vehicle business detailing.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-fleet&commercial.jpeg' },
              { name: 'Car Waxing', slug: 'car-waxing', desc: 'Premium wax protection and gloss.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-carwaxing.jpeg' },
              { name: 'Engine Detailing', slug: 'engine-bay-detailing', desc: 'Clean and degrease engine bay.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-enginedetailing.jpeg' },
              { name: 'Headlight Polishing', slug: 'headlight-restoration', desc: 'Restore clarity and brightness.', image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-headlightpolishing.jpeg' }
            ].map((service) => (
              <div key={service.slug} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ height: '120px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
                  <img
                    src={service.image}
                    alt={`${service.name} service`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    <Link to={`/${location}/${service.slug}`} style={{ color: '#007BFF', textDecoration: 'none' }}>
                      {service.name}
                    </Link>
                  </h3>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#333' }}>
            How DK Details Your Car in {data.name}
          </h2>
          <ol style={{ maxWidth: '800px', margin: 'auto', fontSize: '1.1rem', textAlign: 'left', lineHeight: '2', color: '#555' }}>
            {data.processList.map((step, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{step}</li>
            ))}
          </ol>
          <a
            href="#booking"
            style={{
              fontSize: '1.2rem',
              background: '#007BFF',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '5px',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '2rem',
              fontWeight: 'bold',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.background = '#007BFF'}
          >
            Book Now in {data.name}
          </a>
        </section>

        <section style={{ background: '#007BFF', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Meet Local {data.name} Founder
          </h2>
          <img
            src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/headshot/IMG_94E65C848736-1.jpeg"
            alt="Diego - DK Mobile Wash Founder"
            style={{
              width: '200px',
              height: '200px',
              margin: '1rem auto',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block'
            }}
            loading="lazy"
          />
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            {data.founderText}
          </p>
        </section>

        <section style={{ padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', color: '#333' }}>
            {data.name} Detailing FAQ
          </h2>
          <div style={{ maxWidth: '900px', margin: 'auto' }}>
            {data.faqs.map((faq, index) => (
              <details key={index} style={{ marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
                <summary style={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem', color: '#007BFF' }}>
                  {faq.question}
                </summary>
                <p style={{ marginTop: '1rem', color: '#555', lineHeight: '1.6' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section id="booking" style={{ background: '#f8f9fa', padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
            Ready to Book in {data.name}?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#555' }}>
            Call now for a free quote and premium mobile detailing service
          </p>
          <a
            href="tel:5056048058"
            style={{
              fontSize: '1.5rem',
              background: '#007BFF',
              color: 'white',
              padding: '1.5rem 3rem',
              borderRadius: '5px',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 'bold',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.background = '#007BFF'}
          >
            (505) 604-8058
          </a>
        </section>
      </div>
    </>
  );
}
