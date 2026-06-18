import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';

const locationData: Record<string, { name: string; issue: string; }> = {
  'albuquerque': { name: 'Albuquerque', issue: 'monsoon dust, I-25 highway grime, and Balloon Fiesta residue' },
  'rio-rancho': { name: 'Rio Rancho', issue: 'construction dust, West Mesa grime, and development traffic' },
  'corrales': { name: 'Corrales', issue: 'cottonwood pollen, horse farm dust, and rural road grime' },
  'north-valley': { name: 'North Valley', issue: 'agricultural dust, I-25 highway grime, and bosque pollen' },
  'tanoan': { name: 'Tanoan', issue: 'golf course dust, desert exposure, and luxury vehicle standards' },
  'paradise-hills': { name: 'Paradise Hills', issue: 'West Mesa dust, desert sun, and family vehicle messes' },
  'los-ranchos-de-albuquerque': { name: 'Los Ranchos de Albuquerque', issue: 'cottonwood pollen, agricultural dust, and bosque environment exposure' }
};

const baseUrl = 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures';

const locationImageMap: Record<string, {
  hero: string;
  process: string;
  results: [string, string, string];
  features: [string, string, string, string];
}> = {
  'albuquerque': {
    hero: `${baseUrl}/abq%20service%20page/85576833-9EF8-4091-B163-E007A680F93A_1_105_c.jpeg`,
    process: `${baseUrl}/abq%20service%20page/D64FC309-5FF2-454E-A25E-495A6BD0BD86_1_105_c.jpeg`,
    results: [
      `${baseUrl}/abq%20service%20page/8051E5A3-90C2-4918-B130-C5B95E3E4E23_1_105_c.jpeg`,
      `${baseUrl}/abq%20service%20page/1A708D50-A3F7-4DF4-8B94-09479D7C12F5_1_102_o.jpeg`,
      `${baseUrl}/abq%20service%20page/BD2E2C02-8375-4127-9F7A-C1D6E2546073_4_5005_c.jpeg`
    ],
    features: [
      `${baseUrl}/abq%20service%20page/2023-08-09-1.jpg`,
      `${baseUrl}/abq%20service%20page/C626FBFE-585B-4C64-8D11-18A3A9D639D8_1_105_c.jpeg`,
      `${baseUrl}/abq%20service%20page/BE52CD6D-1BAF-4ECA-B11B-AEF0821E01E3_1_105_c.jpeg`,
      `${baseUrl}/abq%20service%20page/85576833-9EF8-4091-B163-E007A680F93A_1_105_c.jpeg`
    ]
  },
  'rio-rancho': {
    hero: `${baseUrl}/rio%20rancho%20service%20page/why-trust-dkmobilewash-riorancho.jpeg`,
    process: `${baseUrl}/rio%20rancho%20service%20page/1A0071E8-9435-49E1-9118-9DD78F5E7BD2.JPG`,
    results: [
      `${baseUrl}/rio%20rancho%20service%20page/8C0C5583-8897-45AC-A562-AFF0E0287E63_1_102_o.jpeg`,
      `${baseUrl}/rio%20rancho%20service%20page/CF5FF9BC-4CAF-4163-B397-C7D8F9BE1A9F_1_102_o.jpeg`,
      `${baseUrl}/rio%20rancho%20service%20page/FB1FA2EA-DDE7-4436-AA57-D50E2486B68A_4_5005_c.jpeg`
    ],
    features: [
      `${baseUrl}/rio%20rancho%20service%20page/IMG_4574.jpg`,
      `${baseUrl}/rio%20rancho%20service%20page/IMG_4575.jpg`,
      `${baseUrl}/rio%20rancho%20service%20page/IMG_4576.jpg`,
      `${baseUrl}/rio%20rancho%20service%20page/IMG_4577%202.jpg`
    ]
  },
  'corrales': {
    hero: `${baseUrl}/corrales%20service%20pge/ADAFE70B-5C87-40EE-9D70-E6671374907F_1_105_c.jpeg`,
    process: `${baseUrl}/corrales%20service%20pge/4FB7A7F2-4609-43CF-90C0-61033E73B044_1_105_c.jpeg`,
    results: [
      `${baseUrl}/corrales%20service%20pge/ADAFE70B-5C87-40EE-9D70-E6671374907F_1_105_c.jpeg`,
      `${baseUrl}/corrales%20service%20pge/4FB7A7F2-4609-43CF-90C0-61033E73B044_1_105_c.jpeg`,
      `${baseUrl}/abq%20service%20page/85576833-9EF8-4091-B163-E007A680F93A_1_105_c.jpeg`
    ],
    features: [
      `${baseUrl}/abq%20service%20page/D64FC309-5FF2-454E-A25E-495A6BD0BD86_1_105_c.jpeg`,
      `${baseUrl}/abq%20service%20page/8051E5A3-90C2-4918-B130-C5B95E3E4E23_1_105_c.jpeg`,
      `${baseUrl}/abq%20service%20page/1A708D50-A3F7-4DF4-8B94-09479D7C12F5_1_102_o.jpeg`,
      `${baseUrl}/abq%20service%20page/BD2E2C02-8375-4127-9F7A-C1D6E2546073_4_5005_c.jpeg`
    ]
  },
  'north-valley': {
    hero: `${baseUrl}/north%20valley%20page/3E1F3018-2CCB-45D3-AD2D-DFDC529299A7_1_105_c.jpeg`,
    process: `${baseUrl}/north%20valley%20page/E2D369A4-7486-4503-8EAA-DB726578BB85_1_102_o.jpeg`,
    results: [
      `${baseUrl}/north%20valley%20page/IMG_5341CCCB7D3B-1.jpeg`,
      `${baseUrl}/north%20valley%20page/IMG_8E6D2FC0F1E9-1.jpeg`,
      `${baseUrl}/north%20valley%20page/View%20recent%20photos%205.jpeg`
    ],
    features: [
      `${baseUrl}/north%20valley%20page/IMG_5E9FA4BD62F5-1.jpeg`,
      `${baseUrl}/north%20valley%20page/View%20recent%20photos%206.jpeg`,
      `${baseUrl}/north%20valley%20page/View%20recent%20photos%207.jpeg`,
      `${baseUrl}/north%20valley%20page/IMG_7B45C71E0DE8-1.jpeg`
    ]
  },
  'tanoan': {
    hero: `${baseUrl}/tanoan%20page/79367ADA-1A19-460C-A545-7CDB350E7F56_1_102_o.jpeg`,
    process: `${baseUrl}/tanoan%20page/64A444A2-6C8D-44A8-92C9-42B5BD408366_1_105_c.jpeg`,
    results: [
      `${baseUrl}/tanoan%20page/94C3DD4F-D1D1-4801-9A2B-B6A6E09622A2_1_105_c.jpeg`,
      `${baseUrl}/tanoan%20page/IMG_CEDCBA03BD01-1.jpeg`,
      `${baseUrl}/tanoan%20page/IMG_BBDA445BF2FC-1.jpeg`
    ],
    features: [
      `${baseUrl}/tanoan%20page/Screenshot%202026-02-28%20at%206.59.48%20PM.jpeg`,
      `${baseUrl}/tanoan%20page/79367ADA-1A19-460C-A545-7CDB350E7F56_1_102_o.jpeg`,
      `${baseUrl}/tanoan%20page/64A444A2-6C8D-44A8-92C9-42B5BD408366_1_105_c.jpeg`,
      `${baseUrl}/tanoan%20page/94C3DD4F-D1D1-4801-9A2B-B6A6E09622A2_1_105_c.jpeg`
    ]
  },
  'paradise-hills': {
    hero: `${baseUrl}/paradise%20hills/Screenshot%202026-02-28%20at%207.14.21%20PM.jpeg`,
    process: `${baseUrl}/paradise%20hills/IMG_1540BFFBF4CD-1.jpeg`,
    results: [
      `${baseUrl}/paradise%20hills/Screenshot%202026-02-28%20at%207.14.21%20PM.jpeg`,
      `${baseUrl}/paradise%20hills/IMG_1540BFFBF4CD-1.jpeg`,
      `${baseUrl}/rio%20rancho%20service%20page/why-trust-dkmobilewash-riorancho.jpeg`
    ],
    features: [
      `${baseUrl}/rio%20rancho%20service%20page/8C0C5583-8897-45AC-A562-AFF0E0287E63_1_102_o.jpeg`,
      `${baseUrl}/rio%20rancho%20service%20page/CF5FF9BC-4CAF-4163-B397-C7D8F9BE1A9F_1_102_o.jpeg`,
      `${baseUrl}/rio%20rancho%20service%20page/FB1FA2EA-DDE7-4436-AA57-D50E2486B68A_4_5005_c.jpeg`,
      `${baseUrl}/rio%20rancho%20service%20page/IMG_4574.jpg`
    ]
  },
  'los-ranchos-de-albuquerque': {
    hero: `${baseUrl}/los%20ranchos%20page/796CFBF2-C048-46EC-A786-E999C6BE257F_1_105_c.jpeg`,
    process: `${baseUrl}/los%20ranchos%20page/744570D7-4ED9-47CF-847A-A329B029D8EE_1_105_c.jpeg`,
    results: [
      `${baseUrl}/los%20ranchos%20page/IMG_955E62B9B28D-1.jpeg`,
      `${baseUrl}/los%20ranchos%20page/IMG_7F625CF70B16-1.jpeg`,
      `${baseUrl}/los%20ranchos%20page/IMG_379F763CAE79-1.jpeg`
    ],
    features: [
      `${baseUrl}/los%20ranchos%20page/IMG_90C612B5DAFC-1.jpeg`,
      `${baseUrl}/los%20ranchos%20page/796CFBF2-C048-46EC-A786-E999C6BE257F_1_105_c.jpeg`,
      `${baseUrl}/los%20ranchos%20page/744570D7-4ED9-47CF-847A-A329B029D8EE_1_105_c.jpeg`,
      `${baseUrl}/los%20ranchos%20page/IMG_955E62B9B28D-1.jpeg`
    ]
  }
};

const serviceData: Record<string, any> = {
  'mobile-auto-detailing': {
    name: 'Mobile Auto Detailing',
    shortDesc: 'complete interior and exterior detailing',
    whyDKBase: 'demands expert mobile detailing. Typical shops require you to drop off your vehicle and wait hours',
    dkAdvantage: 'premium P&S chemicals, hybrid ceramic sealants, and professional steam extraction',
    problem1: 'Construction Dust Deep Clean',
    problem1Desc: 'Weeks of dust embedded in every crevice. Full interior extraction, exterior clay bar, and protection.',
    problem2: 'Family SUV Transformation',
    problem2Desc: 'Kids, pets, and daily chaos destroyed the interior. Deep clean, stain removal, and odor elimination.',
    problem3: 'Luxury Sedan Maintenance',
    problem3Desc: 'High-end vehicle needed premium care. Full detail with leather conditioning and paint protection.',
    process: [
      'Thorough exterior hand wash and decontamination',
      'Deep interior vacuuming and surface cleaning',
      'Steam cleaning and extraction for carpets and seats',
      'Leather conditioning and trim dressing',
      'Exterior wax or sealant protection',
      'Final inspection and quality check'
    ],
    faqs: [
      { q: 'How long does mobile detailing take', a: '3-6 hours depending on vehicle size and condition. We work efficiently at your location.' },
      { q: 'Do you bring your own water and power', a: 'Yes, our mobile units are completely self-sufficient with water, power, and all equipment.' },
      { q: 'Can you detail in my garage or driveway', a: 'Either works great. We just need access to your vehicle and adequate working space.' },
      { q: 'What if I have pet hair everywhere', a: 'We specialize in pet hair removal using professional tools and techniques. Even severe cases come out clean.' },
      { q: 'How much does full mobile detailing cost', a: 'Pricing varies by vehicle size and condition. Call (505) 604-8058 for a personalized quote.' },
      { q: 'Do you detail trucks and SUVs', a: 'Absolutely. We handle all vehicle types from compact cars to full-size trucks and SUVs.' },
      { q: 'Can you remove stains from seats', a: 'Most stains can be removed with our professional extraction and steam cleaning process.' },
      { q: 'How often should I get my car detailed', a: 'We recommend every 3-4 months for optimal protection and appearance in harsh conditions.' }
    ]
  },
  'ceramic-coating': {
    name: 'Ceramic Coating',
    shortDesc: 'long-lasting paint protection with hydrophobic properties',
    whyDKBase: 'demands serious paint protection. Typical shops use cheap DIY coatings that fail within months',
    dkAdvantage: 'professional-grade HydraFlex hybrid ceramic coatings, multi-stage paint correction, and lifetime support',
    problem1: 'Sun-Faded Paint Revival',
    problem1Desc: 'Years of UV exposure destroyed the clear coat. Paint correction then 5-year ceramic coating.',
    problem2: 'New Car Protection',
    problem2Desc: 'Brand new vehicle needed maximum protection. Ceramic coating applied for long-term defense.',
    problem3: 'Exotic Sports Car Coating',
    problem3Desc: 'High-end paint needed premium protection. Multi-stage correction and ceramic application.',
    process: [
      'Complete paint inspection and measurement',
      'Multi-stage paint correction to remove all defects',
      'Paint decontamination with iron remover and clay bar',
      'Panel-by-panel ceramic coating application',
      'Curing period with controlled environment',
      'Final inspection and maintenance instructions'
    ],
    faqs: [
      { q: 'How long does ceramic coating last', a: '2-5+ years depending on product and maintenance. Our premium coatings come with warranties.' },
      { q: 'Do I still need to wash my car', a: 'Yes, but washing becomes much easier. Dirt and grime rinse off with less effort.' },
      { q: 'Can ceramic coating be applied to any car', a: 'Yes, after proper paint correction. We prep all paint types for optimal bonding.' },
      { q: 'What about water spots', a: 'Ceramic coating makes water bead off reducing spots, but you should still dry your vehicle after washing.' },
      { q: 'How much does ceramic coating cost', a: 'Varies by vehicle size and coating tier. Call (505) 604-8058 for detailed pricing.' },
      { q: 'Is paint correction included', a: 'Yes, proper paint correction is essential before coating application and is always included.' },
      { q: 'Can scratches appear after coating', a: 'Ceramic coating provides scratch resistance but is not scratch-proof. It protects against light swirls and chemicals.' },
      { q: 'How long does application take', a: 'Full process takes 1-2 days including correction, coating, and proper curing time.' }
    ]
  },
  'paint-correction': {
    name: 'Paint Correction',
    shortDesc: 'multi-stage polishing to remove swirls and scratches',
    whyDKBase: 'demands expert paint correction. Typical shops use single-stage polish that barely improves appearance',
    dkAdvantage: 'professional Rupes polishers, graduated pad system, and paint depth gauges for safe correction',
    problem1: 'Swirl Mark Elimination',
    problem1Desc: 'Automatic car washes destroyed black paint with swirls. Multi-stage correction restored mirror finish.',
    problem2: 'Oxidation Removal',
    problem2Desc: 'Years of sun exposure faded the paint to chalky finish. Compounding brought back deep gloss.',
    problem3: 'Scratch Repair',
    problem3Desc: 'Shopping cart scratches and key marks marred the doors. Careful correction removed visible damage.',
    process: [
      'Paint inspection with high-intensity lights',
      'Paint thickness measurement for safety',
      'Heavy cutting compound for deep defects',
      'Medium polish to refine surface',
      'Final finishing polish for mirror gloss',
      'Protective sealant or ceramic coating application'
    ],
    faqs: [
      { q: 'How long does paint correction take', a: '4-12 hours depending on paint condition and defect severity. Quality work cannot be rushed.' },
      { q: 'Will correction remove all scratches', a: 'We remove or significantly reduce most light to moderate scratches. Deep scratches reaching primer may need touch-up.' },
      { q: 'Is paint correction safe for my car', a: 'Yes, we measure paint thickness and never remove more than safe limits. Professional equipment prevents damage.' },
      { q: 'Do I need ceramic coating after', a: 'Highly recommended. Paint correction perfects the surface, and coating locks in that perfection long-term.' },
      { q: 'How much does paint correction cost', a: 'Varies by vehicle size and defect severity. Call (505) 604-8058 for assessment and quote.' },
      { q: 'Can you fix automatic car wash damage', a: 'Yes, swirls from automatic washes are exactly what paint correction removes. Avoid them after correction.' },
      { q: 'What about clear coat failure', a: 'If clear coat is failing or peeling, correction cannot fix it. Full paint refinishing would be needed.' },
      { q: 'Will my car look brand new', a: 'Properly corrected paint often looks better than new. We remove defects that accumulate from factory to now.' }
    ]
  },
  'interior-detailing': {
    name: 'Interior Detailing',
    shortDesc: 'deep cleaning for carpets, seats, and all interior surfaces',
    whyDKBase: 'demands thorough interior cleaning. Typical shops vacuum quickly and wipe down, missing embedded dirt',
    dkAdvantage: 'professional steam extractors, pH-balanced cleaners, and premium leather conditioning products',
    problem1: 'Coffee Stain Extraction',
    problem1Desc: 'Spilled latte soaked into cloth seats. Steam extraction removed stains completely.',
    problem2: 'Smoker Vehicle Odor Removal',
    problem2Desc: 'Years of smoke embedded in fabrics. Deep cleaning and ozone treatment eliminated odors.',
    problem3: 'Muddy Work Truck Clean',
    problem3Desc: 'Construction site mud caked into floor mats and seats. Pressure extraction restored interior.',
    process: [
      'Complete interior vacuuming including crevices',
      'Steam cleaning for all fabric surfaces',
      'Leather cleaning and conditioning treatment',
      'Dashboard and console detailed cleaning',
      'Window and mirror streak-free cleaning',
      'Odor elimination and air freshening'
    ],
    faqs: [
      { q: 'How long does interior detailing take', a: '2-4 hours depending on vehicle size and condition. Thorough cleaning takes time.' },
      { q: 'Can you remove pet odors', a: 'Yes, we use enzyme cleaners and can provide ozone treatment for severe pet odor cases.' },
      { q: 'What about leather seats', a: 'We clean and condition leather with premium products to prevent cracking and maintain suppleness.' },
      { q: 'Do you clean under the seats', a: 'Yes, we vacuum thoroughly including under seats, between crevices, and all hard-to-reach areas.' },
      { q: 'Can you remove mold', a: 'Mild mold can be cleaned and treated. Severe mold may require professional mold remediation services.' },
      { q: 'How much does interior detailing cost', a: 'Varies by vehicle size and condition. Call (505) 604-8058 for personalized pricing.' },
      { q: 'Will the seats be wet after', a: 'Minimal dampness from extraction dries within 2-4 hours. We use high-power extraction to minimize moisture.' },
      { q: 'Can you detail while I am at work', a: 'Yes, many customers have us detail at their workplace. We just need vehicle access.' }
    ]
  },
  'exterior-detailing': {
    name: 'Exterior Detailing',
    shortDesc: 'complete exterior wash, decontamination, and protection',
    whyDKBase: 'demands thorough exterior care. Typical shops spray and rinse, leaving bonded contaminants',
    dkAdvantage: 'professional foam cannons, clay bar treatment, and premium carnauba wax protection',
    problem1: 'Tar and Bug Removal',
    problem1Desc: 'Highway road tar and splattered bugs covered the front end. Chemical treatment and clay bar removed all.',
    problem2: 'Water Spot Elimination',
    problem2Desc: 'Hard water spots etched into paint from sprinkler overspray. Polish and wax restored shine.',
    problem3: 'Brake Dust Deep Clean',
    problem3Desc: 'Months of brake dust baked onto premium wheels. Professional cleaning restored factory finish.',
    process: [
      'Pre-rinse to remove loose dirt and debris',
      'Foam cannon application and dwell time',
      'Hand wash with two-bucket method',
      'Clay bar decontamination of paint surface',
      'Machine polish for enhanced depth and shine',
      'Premium wax or sealant protection application'
    ],
    faqs: [
      { q: 'How long does exterior detailing take', a: '2-4 hours depending on vehicle size and contamination level. Quality work requires time.' },
      { q: 'Do you clean the wheels', a: 'Yes, wheels and wheel wells are cleaned thoroughly with professional products.' },
      { q: 'What is clay bar treatment', a: 'Clay bar removes bonded contaminants like tar, sap, and industrial fallout that washing cannot remove.' },
      { q: 'Will you damage my paint', a: 'No, we use proper techniques and quality products. Our methods are completely paint-safe.' },
      { q: 'How often should I wax my car', a: 'Every 3-4 months for optimal protection in harsh conditions. Ceramic coating lasts much longer.' },
      { q: 'Can you remove scratches', a: 'Light scratches may improve with polishing. Deep scratches require paint correction service.' },
      { q: 'Do you detail the door jambs', a: 'Yes, complete exterior detailing includes door jambs, trunk, and fuel door areas.' },
      { q: 'How much does exterior detailing cost', a: 'Pricing varies by vehicle size. Call (505) 604-8058 for accurate quote.' }
    ]
  },
  'monthly-maintenance': {
    name: 'Monthly Maintenance',
    shortDesc: 'regular maintenance to keep your vehicle pristine year-round',
    whyDKBase: 'demands consistent care. Typical shops lack recurring service programs and forget your needs',
    dkAdvantage: 'scheduled maintenance plans, priority booking, and discounted rates for loyal customers',
    problem1: 'Luxury Fleet Maintenance',
    problem1Desc: 'Executive kept three vehicles showroom-perfect with monthly service. Never a dirty car.',
    problem2: 'Busy Professional Program',
    problem2Desc: 'Monthly details while at work kept vehicle pristine despite hectic schedule.',
    problem3: 'Classic Car Preservation',
    problem3Desc: 'Vintage collector maintained investment with regular professional care.',
    process: [
      'Scheduled recurring appointment setup',
      'Exterior wash and decontamination',
      'Interior vacuum and wipe down',
      'Wheel and tire cleaning',
      'Protective wax or coating maintenance',
      'Inspection and condition reporting'
    ],
    faqs: [
      { q: 'How does monthly maintenance work', a: 'We schedule recurring appointments at your convenience. Same day, same time each month.' },
      { q: 'Can I skip a month', a: 'Yes, plans are flexible. Just let us know and we will reschedule.' },
      { q: 'Is there a discount for monthly service', a: 'Yes, recurring customers receive discounted rates and priority scheduling.' },
      { q: 'What is included each visit', a: 'Full exterior wash, interior vacuum and wipe down, wheel cleaning, and protective treatment.' },
      { q: 'Can I add services occasionally', a: 'Absolutely. Add paint correction, ceramic coating, or deep cleaning anytime at member rates.' },
      { q: 'How much does monthly maintenance cost', a: 'Varies by vehicle type and services. Call (505) 604-8058 for plan pricing.' },
      { q: 'Do you service multiple vehicles', a: 'Yes, we offer multi-vehicle plans for households or businesses with discounted rates.' },
      { q: 'Can I cancel anytime', a: 'Yes, no long-term contracts. Cancel anytime with simple notice.' }
    ]
  },
  'fleet-commercial-detailing': {
    name: 'Fleet & Commercial Detailing',
    shortDesc: 'volume detailing services for business vehicles and fleets',
    whyDKBase: 'demands efficient fleet management. Typical shops cannot handle volume or work around business hours',
    dkAdvantage: 'flexible scheduling, volume pricing, and on-site service to minimize business disruption',
    problem1: 'Construction Fleet Weekly Service',
    problem1Desc: '15 work trucks detailed weekly at job site. Clean professional image maintained.',
    problem2: 'Dealership Inventory Prep',
    problem2Desc: 'Monthly detail of pre-owned inventory before lot display. Faster sales with pristine vehicles.',
    problem3: 'Corporate Fleet Maintenance',
    problem3Desc: 'Executive fleet of 8 vehicles kept showroom-perfect with bi-weekly service.',
    process: [
      'Fleet assessment and custom package creation',
      'Flexible scheduling around business operations',
      'On-site service at your business location',
      'Efficient multi-vehicle processing',
      'Quality inspection of each vehicle',
      'Detailed service reporting and invoicing'
    ],
    faqs: [
      { q: 'Do you offer volume discounts', a: 'Yes, fleet pricing provides significant discounts for multiple vehicles serviced regularly.' },
      { q: 'Can you work after hours', a: 'Absolutely. We schedule around your business hours to minimize disruption.' },
      { q: 'How many vehicles can you handle', a: 'We have capacity for fleets of any size from 3 to 30+ vehicles.' },
      { q: 'Do you detail work trucks', a: 'Yes, we detail all commercial vehicles including work trucks, vans, and equipment.' },
      { q: 'Can you come to our business location', a: 'Yes, on-site service is our specialty. We bring everything needed to your location.' },
      { q: 'How do you invoice for fleet service', a: 'Simple monthly invoicing for all services. We track each vehicle serviced with detailed reports.' },
      { q: 'What about service vehicles with equipment', a: 'We work around equipment and tools. Vehicles do not need to be emptied.' },
      { q: 'How much does fleet detailing cost', a: 'Custom pricing based on fleet size and service frequency. Call (505) 604-8058 for quote.' }
    ]
  },
  'car-waxing': {
    name: 'Car Waxing',
    shortDesc: 'premium wax protection for enhanced shine and protection',
    whyDKBase: 'demands quality wax protection. Typical shops use cheap spray wax that lasts weeks',
    dkAdvantage: 'premium carnauba paste wax, machine application for even coverage, and hand-buffed finish',
    problem1: 'Sun Fade Prevention',
    problem1Desc: 'Regular waxing protected paint from UV damage. Vehicle maintained deep gloss for years.',
    problem2: 'Show Car Preparation',
    problem2Desc: 'Multiple coats of premium wax created mirror finish for car show. Took home first place.',
    problem3: 'New Car Protection',
    problem3Desc: 'Immediate wax protection on delivery day. Paint stayed perfect from day one.',
    process: [
      'Complete exterior wash and dry',
      'Clay bar treatment to smooth surface',
      'Machine application of premium wax',
      'Dwell time for proper bonding',
      'Hand buffing to high-gloss finish',
      'Final inspection and touch-up'
    ],
    faqs: [
      { q: 'How long does wax last', a: '2-4 months depending on conditions and maintenance. Ceramic coating lasts much longer.' },
      { q: 'What is the difference between wax and sealant', a: 'Wax provides warmer glow and shorter protection. Sealant offers longer lasting synthetic protection.' },
      { q: 'Can you wax in hot weather', a: 'We control application conditions. Hot weather requires working in shade or cooler times.' },
      { q: 'Do you wax by hand or machine', a: 'Machine application ensures even coverage, hand buffing creates final high-gloss finish.' },
      { q: 'Should I wax before winter', a: 'Yes, pre-winter wax protection helps defend against salt, moisture, and harsh conditions.' },
      { q: 'Can you wax black cars without haze', a: 'Yes, proper buffing removes all haze leaving perfect gloss on any color.' },
      { q: 'How often should I wax my car', a: 'Every 3-4 months for optimal protection. Monthly maintenance plans include wax service.' },
      { q: 'How much does car waxing cost', a: 'Varies by vehicle size. Call (505) 604-8058 for pricing on your specific vehicle.' }
    ]
  },
  'engine-bay-detailing': {
    name: 'Engine Bay Detailing',
    shortDesc: 'professional engine bay cleaning and degreasing',
    whyDKBase: 'demands careful engine cleaning. Typical shops spray water everywhere risking electrical damage',
    dkAdvantage: 'safe degreasing methods, electrical component protection, and proper dressing application',
    problem1: 'Oil Leak Cleanup',
    problem1Desc: 'Years of oil leaks created grimy engine bay. Degreasing and cleaning revealed actual leak source.',
    problem2: 'Pre-Sale Detailing',
    problem2Desc: 'Detailed engine bay before selling vehicle. Cleanliness helped justify asking price.',
    problem3: 'Classic Car Restoration',
    problem3Desc: 'Vintage engine bay cleaned to show quality. Perfect for car show display.',
    process: [
      'Electrical component protection and covering',
      'Application of professional degreaser',
      'Gentle agitation of stubborn buildup',
      'Low-pressure rinse with minimal water',
      'Compressed air drying of all components',
      'Dressing application to hoses and plastics'
    ],
    faqs: [
      { q: 'Is engine detailing safe', a: 'Yes, we protect electrical components and use proper techniques. Professional methods prevent damage.' },
      { q: 'Will water damage my engine', a: 'We use minimal water and proper drying. Modern engines handle moisture when cleaned correctly.' },
      { q: 'Can you clean very dirty engines', a: 'Yes, even severely neglected engine bays can be cleaned with professional degreasing.' },
      { q: 'Do you dress the engine after', a: 'Yes, we apply dressing to hoses, plastics, and appropriate surfaces for restored appearance.' },
      { q: 'How often should I detail my engine', a: 'Once or twice yearly maintains cleanliness and allows for easier maintenance inspection.' },
      { q: 'Will cleaning help find leaks', a: 'Yes, clean engine makes it much easier to spot new oil, coolant, or fluid leaks.' },
      { q: 'Can you detail modified engines', a: 'Yes, we work with modified engines and high-performance vehicles regularly.' },
      { q: 'How much does engine detailing cost', a: 'Pricing depends on engine condition. Call (505) 604-8058 for assessment and quote.' }
    ]
  },
  'headlight-restoration': {
    name: 'Headlight Restoration',
    shortDesc: 'restoration of clarity to yellowed and oxidized headlights',
    whyDKBase: 'demands professional restoration. Typical shops use DIY kits that yellow again in months',
    dkAdvantage: 'professional wet-sanding system, multi-stage polishing, and UV-blocking sealant',
    problem1: 'Safety Restoration',
    problem1Desc: 'Yellowed headlights reduced night visibility 50%. Restoration brought back full brightness.',
    problem2: 'Pre-Sale Improvement',
    problem2Desc: 'Foggy headlights made car look old. Crystal clear restoration added value for sale.',
    problem3: 'Failed Inspection Fix',
    problem3Desc: 'Vehicle failed inspection due to poor headlight output. Restoration fixed issue immediately.',
    process: [
      'Headlight assessment and masking',
      'Wet sanding starting with 1000 grit',
      'Progressive sanding to 3000 grit',
      'Machine polishing for crystal clarity',
      'UV-blocking sealant application',
      'Final buffing and inspection'
    ],
    faqs: [
      { q: 'How long does restoration last', a: '1-3 years with UV sealant. Longevity depends on sun exposure and maintenance.' },
      { q: 'Will headlights yellow again', a: 'Eventually yes, UV exposure degrades plastic. Our sealant significantly extends clarity.' },
      { q: 'Can all headlights be restored', a: 'Most can be restored. Severely damaged or cracked headlights may need replacement.' },
      { q: 'Is restoration cheaper than replacement', a: 'Yes, restoration costs fraction of new headlight assemblies which can be $300-1000+ each.' },
      { q: 'How much better will they look', a: 'Most restored headlights go from 40-60% clarity to 90-95% clarity. Dramatic improvement.' },
      { q: 'Do you restore plastic or glass', a: 'Process is for plastic headlights. Glass headlights rarely need restoration.' },
      { q: 'Will restoration help me see better', a: 'Yes, improved clarity means better light output and safer night driving.' },
      { q: 'How much does headlight restoration cost', a: 'Pricing per pair of headlights. Call (505) 604-8058 for exact quote.' }
    ]
  }
};

export default function LocationServicePage() {
  const { location, service } = useParams<{ location: string; service: string }>();
  const loc = location ? locationData[location] : null;
  const svc = service ? serviceData[service] : null;
  const images = location ? locationImageMap[location] : null;

  if (!loc || !svc || !images) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <Link to="/locations" className="text-[#007BFF] hover:underline">
            View All Locations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${svc.name} in ${loc.name} | DK Mobile Wash`}
        description={`Professional ${svc.name.toLowerCase()} in ${loc.name}. DK Mobile Wash comes to your ${loc.name} home/office. Book premium ${svc.name.toLowerCase()} today.`}
        keywords={`${svc.name.toLowerCase()} ${loc.name}, mobile ${svc.name.toLowerCase()} ${loc.name}, car detailing ${loc.name}`}
        canonical={`https://dkmobilewashalbuquerque.com/${location}/${service}`}
      />

      <div className="min-h-screen bg-white pt-16">
        {/* SECTION 1: HERO */}
        <section style={{
          height: '60vh',
          background: 'linear-gradient(135deg, #007BFF, #0056b3)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '2rem',
          gap: '2rem'
        }}>
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
              {svc.name} in {loc.name}
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>
              DK Mobile Wash delivers professional {svc.shortDesc} directly to your {loc.name} driveway. Showroom results, zero hassle.
            </p>
            <a
              href="#booking"
              style={{
                background: '#fff',
                color: '#007BFF',
                padding: '1rem 2rem',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block'
              }}
            >
              Book {svc.name} in {loc.name}
            </a>
          </div>
          <img
            src={images.hero}
            alt={`${svc.name} in ${loc.name}`}
            style={{
              width: '400px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '8px',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
            loading="lazy"
          />
        </section>

        {/* SECTION 2: WHY DK FOR THIS SERVICE */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: 'auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#333' }}>
            Why {loc.name} Chooses DK for {svc.name}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
            <div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem', color: '#555' }}>
                {loc.name}'s {loc.issue} {svc.whyDKBase}. DK brings {svc.dkAdvantage} directly to you.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                Our obsessive attention to detail means perfect results every time. 5+ years serving {loc.name}'s vehicles with professional mobile service that saves you hours of time.
              </p>
            </div>
            <img
              src={images.process}
              alt={`${svc.name} process in ${loc.name}`}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
              loading="lazy"
            />
          </div>
        </section>

        {/* SECTION 3: REAL RESULTS */}
        <section style={{ background: '#f8f9fa', padding: '4rem 2rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', color: '#333' }}>
            {loc.name} {svc.name} Success Stories
          </h2>
          <div style={{ maxWidth: '1200px', margin: 'auto', display: 'grid', gap: '2rem' }}>
            <article style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#007BFF' }}>
                {svc.problem1} - {loc.name}
              </h3>
              <p style={{ marginBottom: '1rem', color: '#555', lineHeight: '1.6' }}>
                {svc.problem1Desc} <em style={{ fontStyle: 'italic', color: '#333' }}>"Five stars. DK's mobile service saved me time and my vehicle looks incredible. Worth every dollar."</em>
              </p>
              <img
                src={images.results[0]}
                alt={`${svc.problem1} result in ${loc.name}`}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
                loading="lazy"
              />
            </article>

            <article style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#007BFF' }}>
                {svc.problem2} - {loc.name}
              </h3>
              <p style={{ marginBottom: '1rem', color: '#555', lineHeight: '1.6' }}>
                {svc.problem2Desc} <em style={{ fontStyle: 'italic', color: '#333' }}>"The DK team are professionals. Mobile service is so convenient. My car has never looked better."</em>
              </p>
              <img
                src={images.results[1]}
                alt={`${svc.problem2} result in ${loc.name}`}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
                loading="lazy"
              />
            </article>

            <article style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#007BFF' }}>
                {svc.problem3} - {loc.name}
              </h3>
              <p style={{ marginBottom: '1rem', color: '#555', lineHeight: '1.6' }}>
                {svc.problem3Desc} <em style={{ fontStyle: 'italic', color: '#333' }}>"Best detailing I've ever had. Meticulous work. DK understands luxury vehicles. Highly recommend."</em>
              </p>
              <img
                src={images.results[2]}
                alt={`${svc.problem3} result in ${loc.name}`}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
                loading="lazy"
              />
            </article>
          </div>
        </section>

        {/* SECTION 4: DK'S PROCESS */}
        <section style={{ padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#333' }}>
            Our 1-of-1 {svc.name} Process
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#555', lineHeight: '1.8' }}>
            Unlike typical {loc.name} detailing shops (long waits, rushed work, inconsistent results), DK's mobile process brings professional equipment and expertise to your location:
          </p>
          <ol style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '2', color: '#555', marginBottom: '2rem' }}>
            {svc.process.map((step: string, idx: number) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>{step}</li>
            ))}
          </ol>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <img
                src={images.features[0]}
                alt="Professional Equipment"
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                  borderRadius: '8px'
                }}
                loading="lazy"
              />
              <p style={{ fontWeight: 'bold', color: '#333' }}>Professional Equipment</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <img
                src={images.features[1]}
                alt="Premium Products"
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                  borderRadius: '8px'
                }}
                loading="lazy"
              />
              <p style={{ fontWeight: 'bold', color: '#333' }}>Premium Products</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <img
                src={images.features[2]}
                alt="Expert Technique"
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                  borderRadius: '8px'
                }}
                loading="lazy"
              />
              <p style={{ fontWeight: 'bold', color: '#333' }}>Expert Technique</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <img
                src={images.features[3]}
                alt="Quality Guarantee"
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                  borderRadius: '8px'
                }}
                loading="lazy"
              />
              <p style={{ fontWeight: 'bold', color: '#333' }}>Quality Guarantee</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: RELATED SERVICES */}
        <section style={{ background: '#f8f9fa', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#333' }}>
            More DK Services for {loc.name}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: 'auto' }}>
            {Object.keys(serviceData).filter(s => s !== service).slice(0, 6).map((s, idx) => {
              const getServiceImage = (serviceSlug: string, index: number) => {
                const serviceImageMap: Record<string, number> = {
                  'mobile-auto-detailing': 0,
                  'ceramic-coating': 1,
                  'paint-correction': 2,
                  'interior-detailing': 3,
                  'exterior-detailing': 0,
                  'monthly-maintenance': 1,
                  'fleet-commercial-detailing': 2,
                  'car-waxing': 3,
                  'engine-bay-detailing': 0,
                  'headlight-restoration': 1
                };
                const imageIndex = serviceImageMap[serviceSlug] ?? (index % 4);
                return images.features[imageIndex];
              };

              return (
                <Link
                  key={s}
                  to={`/${location}/${s}`}
                  style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s'
                  }}
                >
                  <img
                    src={getServiceImage(s, idx)}
                    alt={serviceData[s].name}
                    style={{
                      width: '100%',
                      height: '120px',
                      objectFit: 'cover',
                      marginBottom: '1rem',
                      borderRadius: '8px'
                    }}
                    loading="lazy"
                  />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#007BFF', marginBottom: '0.5rem' }}>
                    {serviceData[s].name}
                  </h3>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>
                    {serviceData[s].shortDesc}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* SECTION 6: 5-STEP BOOKING */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#333' }}>
            Book {svc.name} in {loc.name} (5 Steps)
          </h2>
          <ol style={{ maxWidth: '800px', margin: 'auto', fontSize: '1.1rem', textAlign: 'left', lineHeight: '2', color: '#555', marginBottom: '2rem' }}>
            <li>Book online or call (505) 604-8058</li>
            <li>We arrive at your {loc.name} location with full equipment</li>
            <li>Quick walkaround to confirm scope</li>
            <li>{svc.name} service completed to perfection</li>
            <li>Drive away with pristine vehicle</li>
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
              fontWeight: 'bold'
            }}
          >
            Book Now
          </a>
        </section>

        {/* SECTION 7: FAQ + FOUNDER */}
        <section style={{ padding: '4rem 2rem', background: '#f8f9fa' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '4rem', maxWidth: '1400px', margin: 'auto' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#333' }}>
                {loc.name} {svc.name} FAQ
              </h2>
              <div>
                {svc.faqs.map((faq: any, idx: number) => (
                  <details key={idx} style={{ marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', background: 'white' }}>
                    <summary style={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem', color: '#007BFF' }}>
                      {faq.q} in {loc.name}?
                    </summary>
                    <p style={{ marginTop: '1rem', color: '#555', lineHeight: '1.6' }}>
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
            <div style={{ background: '#007BFF', color: 'white', padding: '2rem', borderRadius: '10px', height: 'fit-content' }}>
              <h3 style={{ marginTop: 0, fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                Meet Your {loc.name} Detailer
              </h3>
              <img
                src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/headshot/IMG_94E65C848736-1.jpeg"
                alt="Diego - DK Mobile Wash Founder"
                style={{
                  width: '150px',
                  height: '150px',
                  margin: '1rem auto',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                loading="lazy"
              />
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                DK Mobile Wash founder. Serving {loc.name}'s premium vehicles with 5+ years of professional detailing expertise. Ferrari Club approved.
              </p>
              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.3)' }}>
                <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>Book your service today:</p>
                <a
                  href="tel:5056048058"
                  style={{
                    display: 'block',
                    background: 'white',
                    color: '#007BFF',
                    padding: '1rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.3rem',
                    textAlign: 'center'
                  }}
                >
                  (505) 604-8058
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL BOOKING CTA */}
        <section id="booking" style={{ background: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
            Ready to Book {svc.name} in {loc.name}?
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
              fontWeight: 'bold'
            }}
          >
            (505) 604-8058
          </a>
        </section>
      </div>
    </>
  );
}
