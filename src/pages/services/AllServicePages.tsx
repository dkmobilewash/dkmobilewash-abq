import { Link } from 'react-router-dom';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export function InteriorDetailingPage() {
  return (
    <ServicePageTemplate
      title="Interior Car Detailing"
      subtitle={<>Professional deep interior car detailing in Albuquerque — pet hair removal, odor elimination, leather conditioning, and hot-water extraction delivered to your driveway. Pair with <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] font-semibold hover:underline">mobile auto detailing</Link> for a complete interior and exterior refresh.</>}
      metaTitle="Interior Car Detailing Albuquerque NM | Deep Clean | DK Mobile Wash"
      metaDescription="Deep interior car detailing in Albuquerque. Pet hair removal, odor elimination, leather conditioning, steam cleaning. Mobile service at your home. Call (505) 604-8058."
      keywords="interior car detailing albuquerque, interior detailing albuquerque, deep interior cleaning, pet hair removal car albuquerque, odor removal car, interior detail car"
      canonical="https://www.dkmobilewash.com/service/interior-detailing"
      imageUrl="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-interiodetailing.jpeg"
      imageAlt="Interior car detailing Albuquerque - professional deep clean at your home by DK Mobile Wash"
      h1Override="Interior Car Detailing in Albuquerque, NM — Deep Clean at Your Driveway"
      sectionHeadings={{
        whatIncluded: "What's Included in Our Deep Interior Detail",
        benefits: 'Why Interior Detailing Matters in New Mexico',
        whoFor: 'Who Needs Interior Detailing Most',
        faqs: 'Frequently Asked Questions About Interior Detailing',
        cta: 'Schedule Interior Detailing at Your Home',
      }}
      introText={
        <div className="space-y-5">
          <p className="text-lg text-gray-700 leading-relaxed">
            Your vehicle's cabin accumulates more contamination than most people realize. Dust, pet dander, food residue, bacteria, pollen, and odor-causing compounds build up in carpets, seats, and ventilation systems over months of daily use. A professional deep interior detail removes all of it — not just the surface layer, but the embedded contamination that regular vacuuming misses.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Albuquerque's climate makes interior care especially important. The high-desert sun at 5,300 feet elevation degrades dashboard plastics and fades upholstery faster than most U.S. cities. UV-protective conditioning slows this damage significantly. The dry desert air also desiccates leather seats, causing cracking and peeling that shortens their lifespan. Regular conditioning with professional leather products maintains suppleness and prevents premature aging.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're dealing with pet hair embedded in every fabric surface, smoke odor that no air freshener can mask, or a family SUV that hasn't had a deep clean in years, DK Mobile Wash performs the full process at your location. Our self-contained unit brings hot-water extraction equipment, enzyme treatments, and steam tools to your driveway without requiring any hookups.
          </p>
        </div>
      }
      whatIncluded={[
        'Complete multi-tool vacuuming of all surfaces including crevices, under seats, and cargo areas',
        'Hot-water extraction shampooing for fabric seats, carpets, floor mats, and cargo liners',
        'Targeted stain removal treatment for food, beverage, pet accidents, and ink',
        'Steam cleaning for hard surfaces, consoles, door panels, seat rails, and AC vents',
        'Dashboard, center console, and trim cleaning with pH-balanced, UV-safe conditioners',
        'Interior glass and mirror cleaning for streak-free clarity',
        'Leather seat cleaning, conditioning, and UV protectant application',
        'Fabric and upholstery protectant application to resist future staining',
        'Odor treatment and neutralization at the source',
        'Headliner spot cleaning and deodorizing',
      ]}
      benefits={[
        {
          title: 'Pet Hair Removal — the Multi-Tool Process',
          description: (
            <p className="text-gray-600 leading-relaxed">
              Pet hair is one of the most stubborn interior contaminants. It weaves into carpet fibers, embeds in seat seams, and resurfaces hours after a standard vacuum. Our pet hair removal process uses specialized rubber blade tools, high-suction HEPA-filter extraction, compressed air for crevices, and a final detail pass with lint tools. The result is genuinely hair-free — not just surface-clean. For full vehicle protection, consider <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] font-semibold hover:underline">mobile auto detailing</Link> with interior and exterior care.
            </p>
          ),
        },
        {
          title: 'Odor Elimination — Not Masking',
          description: (
            <p className="text-gray-600 leading-relaxed">
              Air fresheners cover odors temporarily. Professional odor elimination breaks down the organic compounds causing the smell at a molecular level. We use enzyme-based treatments for pet, food, and biological odors, and ozone treatment for smoke, mildew, and deeply embedded smells. Ozone treatment floods the cabin with activated oxygen that neutralizes odor molecules in fabrics, vents, and behind panels — areas topical treatments can never reach. After treatment, your cabin smells clean, not perfumed.
            </p>
          ),
        },
        {
          title: 'UV Protection and Leather Care',
          description: 'Albuquerque receives more than 300 days of intense sun per year. Dashboard plastics crack, leather fades, and fabric UV-degrades faster at our elevation than in most U.S. cities. Professional UV protectant applied to all dash and trim surfaces creates a blocking barrier that dramatically slows this degradation. Leather conditioning restores moisture lost to the dry desert air and prevents surface cracking.',
        },
      ]}
      whoFor={[
        {
          title: 'Families with Children',
          description: 'Daily school runs and road trips leave behind crumbs, juice spills, mud, and embedded grime. Our hot-water extraction and enzyme-based stain treatment handles all of it. We also apply fabric protectant after cleaning to help resist the next round of spills.',
        },
        {
          title: 'Pet Owners',
          description: 'Pet hair, dander, and odor require specialist tools and techniques that consumer products cannot replicate. Our multi-tool removal process leaves seats and carpets genuinely hair-free. Enzymatic odor treatment eliminates pet smell rather than masking it.',
        },
        {
          title: 'Daily Commuters on I-25 and I-40',
          description: 'Long commutes accumulate fast food wrappers, coffee spills, and fine road dust through air vents. A periodic deep interior detail removes this buildup, improves cabin air quality, and protects long-term resale value by keeping interior surfaces in excellent condition.',
        },
        {
          title: 'Pre-Sale Vehicle Preparation',
          description: <>A professionally detailed interior significantly increases buyer confidence and perceived value. Before listing your vehicle for sale or trade-in, a deep interior detail combined with <Link to="/service/exterior-detailing" className="text-[#0052CC] font-semibold hover:underline">exterior detailing</Link> delivers the best possible presentation.</>,
        },
      ]}
      faqs={[
        {
          question: 'Can you remove pet hair from car seats and carpets?',
          answer: 'Yes. We use a multi-tool process including specialized rubber blade tools, high-suction HEPA extraction, and compressed air to remove pet hair from all fabric surfaces, seam channels, and carpet fibers. Standard vacuums miss the embedded layers — our process gets all of it.',
        },
        {
          question: 'How do you remove smoke or odor from a car interior?',
          answer: 'For standard food and pet odors, we use enzyme-based treatments that break down organic odor compounds at the source. For smoke and deeply embedded smells, we apply ozone treatment — an activated oxygen process that neutralizes odor molecules throughout the entire cabin including vents, headliner, and behind panels. We do not mask odors with fragrance.',
        },
        {
          question: 'Do you condition leather seats?',
          answer: 'Yes. Leather cleaning and conditioning is included in our interior detailing service. We clean with a pH-balanced leather cleaner, apply professional-grade conditioner to restore moisture and prevent cracking, and finish with a UV protectant to slow sun-related fading and drying. Albuquerque vehicles benefit especially from conditioning given the dry desert climate.',
        },
        {
          question: 'How long does interior detailing take?',
          answer: 'A standard deep interior detail takes 2 to 3 hours for a passenger sedan or coupe. Larger vehicles like full-size SUVs, trucks, and minivans take 3 to 4 hours. Vehicles with heavy pet hair, severe staining, or odor treatment add time. We give accurate estimates at booking.',
        },
      ]}
      relatedServices={[
        { title: 'Exterior Detailing', slug: 'exterior-detailing', description: 'Complete hand wash, clay bar decontamination, and premium wax protection' },
        { title: 'Mobile Auto Detailing', slug: 'mobile-auto-detailing', description: 'Full interior and exterior mobile detailing packages at your doorstep' },
        { title: 'Engine Bay Detailing', slug: 'engine-bay-detailing', description: 'Safe under-hood degreasing, cleaning, and professional dressing' },
        { title: 'Paint Correction', slug: 'paint-correction', description: 'Multi-stage machine polishing to remove swirls and restore gloss' },
      ]}
    />
  );
}

export function ExteriorDetailingPage() {
  return (
    <ServicePageTemplate
      title="Exterior Car Detailing"
      subtitle={<>Professional exterior car detailing in Albuquerque — clay bar decontamination, iron removal, hand wash, wax, and paint prep delivered to your driveway. The foundation for <Link to="/ceramic-coating" className="text-[#0052CC] font-semibold hover:underline">ceramic coating</Link> and <Link to="/service/paint-correction" className="text-[#0052CC] font-semibold hover:underline">paint correction</Link>.</>}
      metaTitle="Exterior Car Detailing Albuquerque NM | Mobile Service | DK Mobile Wash"
      metaDescription="Professional exterior detailing in Albuquerque. Clay bar, iron decontamination, hand wash, wax, and paint prep delivered to your driveway. Call (505) 604-8058."
      keywords="exterior detailing albuquerque, exterior car detailing, car mobile detailing, exterior detail car, car detailing albuquerque, professional car detailing"
      canonical="https://www.dkmobilewash.com/service/exterior-detailing"
      imageUrl="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/exterior%20detailing%20page/IMG_1DB764255801-1.jpeg"
      h1Override="Exterior Car Detailing in Albuquerque, NM — Mobile Service at Your Door"
      sectionHeadings={{
        whatIncluded: 'What Exterior Detailing Includes — Step by Step',
        benefits: 'Why Albuquerque Vehicles Need Professional Exterior Decontamination',
        whoFor: 'The Foundation for Coating and Correction',
        faqs: 'Frequently Asked Questions About Exterior Detailing',
        cta: 'Schedule Exterior Detailing at Your Location',
      }}
      introText={
        <div className="space-y-5">
          <p className="text-lg text-gray-700 leading-relaxed">
            An exterior detail is not a car wash. A car wash removes surface dirt. An exterior detail decontaminates, restores, and protects your paint system at a level no automatic tunnel or driveway hose can approach. The process involves multiple stages performed in a precise sequence, each one building on the last to produce paint that is genuinely clean, smooth, and protected against future damage.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In Albuquerque's high-desert environment, professional exterior decontamination is more than an aesthetic upgrade — it is practical paint preservation. Road grit, iron fallout from brake dust, mineral-heavy irrigation overspray, and monsoon dust all accumulate on your clear coat. Without proper removal, these contaminants etch into the paint surface over time, causing damage that eventually requires paint correction to fix.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            DK Mobile Wash performs exterior detailing using the P&S chemical line, a professional foam cannon pre-wash system, and a two-bucket hand wash method that protects your paint from contact scratches. Every step is performed safely, without the swirl marks that automatic washes routinely inflict.
          </p>
        </div>
      }
      whatIncluded={[
        'Pre-wash foam cannon application to loosen and lubricate surface contamination before contact',
        'pH-balanced two-bucket hand wash method to prevent swirl marks and micro-scratches',
        'Iron decontamination spray to dissolve embedded brake dust and metallic fallout from the paint surface',
        'Clay bar treatment to remove bonded contaminants including tree sap, industrial fallout, and road tar',
        'Paint inspection for swirl marks, water spots, and oxidation',
        'Wheel, tire, and wheel arch deep cleaning with dedicated brushes',
        'Tire dressing application for a clean, non-greasy finish',
        'Exterior window and mirror cleaning for streak-free visibility',
        'Trim and plastic restoration and dressing',
        'Premium synthetic paint sealant or carnauba wax application for UV and water protection',
      ]}
      benefits={[
        {
          title: 'Clay Bar and Iron Decontamination — Why They Matter',
          description: (
            <p className="text-gray-600 leading-relaxed">
              Run your finger across your paint after a regular wash. If it feels rough or gritty rather than glass-smooth, you have bonded surface contamination. Clay bar treatment is the only method that physically removes this layer — paint-safe clay captures and strips away particles that wash chemicals cannot dissolve. Iron decontamination spray precedes the clay bar by dissolving metallic brake dust particles that embed in clear coats at a microscopic level. After both steps, paint feels genuinely smooth and is ready to accept a sealant, wax, or <Link to="/ceramic-coating" className="text-[#0052CC] font-semibold hover:underline">ceramic coating</Link>.
            </p>
          ),
        },
        {
          title: 'Why Albuquerque Vehicles Require More Thorough Decontamination',
          description: 'High-desert vehicles accumulate contamination faster than most. Silica dust from the surrounding terrain coats paint after every windstorm. Hard water from irrigation systems leaves calcium deposits that etch into unprotected clear coat. I-25 and I-40 highway grime deposits tar and oil road film on lower panels. Monsoon season follows dry months of accumulation with acidic rain that activates and embeds everything sitting on the surface. Professional decontamination before each wax or sealant application removes all of this rather than sealing it in.',
        },
        {
          title: 'Exterior Detailing as the Foundation for Ceramic Coating',
          description: <>Ceramic coating bonds chemically to your clear coat — which means anything on the surface at application time gets preserved under the coating permanently. Swirl marks, water spot etching, oxidation, and contamination will all be locked in if the paint is not properly prepared first. Our exterior detailing service, often paired with <Link to="/service/paint-correction" className="text-[#0052CC] font-semibold hover:underline">paint correction</Link>, ensures the surface is clean, smooth, and defect-free before any coating is applied.</>,
        },
      ]}
      whoFor={[
        {
          title: 'Daily Drivers and Commuters',
          description: 'Regular exterior detailing every 3 to 4 months prevents the accumulation of damage that requires expensive correction later. Maintaining a fresh sealant layer on Albuquerque paint is the most cost-effective way to preserve your vehicle long-term.',
        },
        {
          title: 'Pre-Sale Preparation',
          description: 'First impressions sell vehicles. A professionally detailed exterior with clean paint, dressed tires, and streak-free glass commands more buyer confidence and a higher transaction price than a vehicle that shows weather damage and water spots.',
        },
        {
          title: 'Ceramic Coating Candidates',
          description: 'Any vehicle scheduled for ceramic coating must receive thorough exterior decontamination and typically paint correction before the coating is applied. We perform this as part of every coating service, but standalone exterior detailing is also available for vehicles being evaluated before deciding on a protection upgrade.',
        },
      ]}
      faqs={[
        {
          question: 'What is the difference between a car wash and exterior detailing?',
          answer: 'A car wash removes surface dirt with soap and water. Exterior detailing includes iron decontamination to dissolve brake dust embedded in the paint, clay bar treatment to strip bonded surface contamination that cannot be washed off, paint inspection, and a protective sealant or wax application. Detailing takes significantly longer and produces results that a car wash cannot replicate.',
        },
        {
          question: 'Is clay bar treatment included in exterior detailing?',
          answer: 'Yes. Clay bar treatment is a core step in our exterior detailing process. After the iron decontamination spray dissolves metallic fallout, the clay bar physically removes the remaining bonded contamination from the paint surface, leaving it glass-smooth and ready for protection application.',
        },
        {
          question: 'How long does exterior detailing take?',
          answer: 'A thorough exterior detail takes 2 to 4 hours depending on vehicle size and paint condition. Larger vehicles like trucks and full-size SUVs take longer. Vehicles with heavy contamination, water spot etching, or tar buildup require additional time for proper decontamination.',
        },
        {
          question: 'Do you remove water spots and hard water stains?',
          answer: 'Yes. Light to moderate water spot etching from Albuquerque irrigation overspray and sprinkler runoff is removed during the exterior detailing process using professional water spot remover compounds. Severe mineral etching that has penetrated deeper into the clear coat requires paint correction. We assess your vehicle and recommend the appropriate service.',
        },
      ]}
      relatedServices={[
        { title: 'Paint Correction', slug: 'paint-correction', description: 'Multi-stage swirl and scratch removal for a mirror-like finish' },
        { title: 'Ceramic Coating', slug: 'ceramic-coating', description: 'Long-term, semi-permanent paint protection against UV and contaminants' },
        { title: 'Headlight Restoration', slug: 'headlight-restoration', description: 'Professional wet-sanding and UV sealing for cloudy or yellow lenses' },
        { title: 'Fleet Detailing', slug: 'fleet', description: 'Volume-based commercial exterior care for business vehicles' },
      ]}
    />
  );
}

export function PaintCorrectionPage() {
  return (
    <ServicePageTemplate
      title="Paint Correction"
      subtitle={<>Professional paint correction in Albuquerque to safely remove swirl marks, light scratches, and UV oxidation. Multi-stage machine polishing restores a reflective mirror finish and prepares your paint for <Link to="/ceramic-coating" className="text-[#0052CC] font-semibold hover:underline">ceramic coating</Link> application.</>}
      metaTitle="Car Paint Correction Service Albuquerque | Restore Mirror Finish ⭐"
      metaDescription="Expert car paint correction service in Albuquerque, NM. Fix swirl marks, scratches and oxidation. Restore your car's gloss. Call for a quote: (505) 604-8058."
      keywords="car paint correction service, paint correction albuquerque, swirl mark removal service"
      canonical="https://www.dkmobilewash.com/service/paint-correction"
      imageUrl="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/paint%20correction%20page/paint-correction-albuqueruqe%20.webp"
      h1Override="Professional Paint Correction in Albuquerque, NM | Restore Mirror Finish"
      sectionHeadings={{
        whatIncluded: 'Paint Correction Services — What We Offer',
        benefits: 'Why Albuquerque Paint Needs Correction',
        whoFor: 'The Essential Prep for Ceramic Coating',
        faqs: 'Frequently Asked Questions About Paint Correction',
        cta: 'Get Your Free Paint Correction Estimate',
      }}
      whatIncluded={[
        'Paint depth measurement and clear coat assessment to ensure safe polishing without burn-through',
        'Single-stage paint correction to remove 60 to 70 percent of surface defects in one pass',
        'Multi-stage paint correction for maximum defect removal using compound and polish combinations',
        'Swirl mark and wash-induced marring removal using dual-action and rotary machine polishers',
        'Water spot removal for mineral etching from Albuquerque irrigation systems and hard water',
        'Oxidation correction for paint dulled by UV exposure at New Mexico elevation',
        'Final panel wipe-down and paint inspection before sealant or coating application',
      ]}
      benefits={[
        {
          title: 'UV Oxidation at Albuquerque Elevation',
          description: <>Albuquerque sits at 5,300 feet — significantly higher than most U.S. cities. UV radiation is more intense at altitude, and the 300-plus days of direct sun per year accelerate clear coat breakdown faster than most owners expect. Dull, chalky, hazy paint is oxidized paint. Our correction process removes the damaged surface layer and reveals the healthy, glossy clear coat underneath. Maintain results with <Link to="/service/exterior-detailing" className="text-[#0052CC] font-semibold hover:underline">exterior detailing</Link> and UV-protective sealants.</>,
        },
        {
          title: 'Desert Grit Swirl Marks',
          description: 'Fine silica dust from the high desert gets dragged across paint by improper washing, automatic car wash brushes, and dry wiping. Over time, this creates a web of micro-scratches visible in direct sunlight. Machine polishing safely removes this marring without reducing clear coat thickness beyond safe limits.',
        },
        {
          title: 'Hard Water Spot Removal',
          description: 'Albuquerque irrigation systems and monsoon rain leave calcium and mineral deposits that etch into unprotected clear coat when allowed to dry. Light etching responds to chemical treatments and light polishing. Deeper etching requires more aggressive compound work. We assess every vehicle and recommend the minimum intervention needed.',
        },
      ]}
      whoFor={[
        {
          title: 'Ceramic Coating Preparation',
          description: <>Ceramic coating is permanent — it locks in everything on the paint surface at the time of application. Swirl marks, oxidation, and water spot etching get preserved under the coating if the paint is not corrected first. Professional correction before coating ensures the finish under the ceramic layer is as close to flawless as possible. Learn more about our <Link to="/ceramic-coating" className="text-[#0052CC] font-semibold hover:underline">Gtechniq Crystal Serum coating packages</Link>.</>,
        },
        {
          title: 'Enthusiasts and Show Car Owners',
          description: 'Multi-stage correction producing a true reflective mirror finish is the starting point for concours presentation. We assess paint thickness, select the appropriate compound and polish combination, and work panel by panel to eliminate every detectable defect.',
        },
        {
          title: 'Pre-Sale Preparation',
          description: 'Corrected paint photographs dramatically better and holds up to buyer inspection in a way that faded or scratched paint does not. A correction service before listing a higher-value vehicle typically returns more than its cost in the final transaction price.',
        },
      ]}
      faqs={[
        { question: 'Will paint correction remove all scratches?', answer: 'Paint correction safely removes swirl marks, wash-induced marring, water spot etching, and light oxidation — defects that are in the clear coat layer rather than through it. Scratches that have penetrated the clear coat into the color base coat or primer cannot be corrected by polishing and require touch-up paint. We measure paint thickness before beginning to ensure safe removal margins.' },
        { question: 'How long does the process take?', answer: 'A thorough single-stage paint correction takes 4 to 6 hours. Multi-stage correction for severe defects or pre-coating preparation takes 6 to 10 hours. We never rush correction work — the goal is maximum defect removal while keeping adequate clear coat thickness for long-term durability.' },
        { question: 'How long do paint correction results last?', answer: 'Without a protective coating on top, corrected paint will accumulate new swirl marks and contamination over time, especially in Albuquerque\'s abrasive environment. We always recommend applying ceramic coating or at minimum a durable paint sealant immediately after correction to protect the work.' },
        { question: 'Can paint correction fix oxidation?', answer: 'Yes. Single and multi-stage machine polishing removes the dull, chalky oxidized surface layer to reveal the glossy, healthy clear coat underneath. The extent of recovery depends on the depth of oxidation. Severe, long-neglected oxidation that has penetrated through the clear coat may have limits on how fully it can be corrected.' },
      ]}
      relatedServices={[
        { title: 'Ceramic Coating', slug: 'ceramic-coating', description: 'Lock in your corrected finish with 5+ years of hydrophobic protection' },
        { title: 'Exterior Detailing', slug: 'exterior-detailing', description: 'Routine maintenance wash and wax to preserve your corrected paint' },
        { title: 'Headlight Restoration', slug: 'headlight-restoration', description: 'Restore cloudy lenses to match your newly corrected exterior' },
        { title: 'Mobile Auto Detailing', slug: 'mobile-auto-detailing', description: 'Complete interior and exterior care for a full vehicle transformation' },
      ]}
    />
  );
}

export function HeadlightRestorationPage() {
  return (
    <ServicePageTemplate
      title="Headlight Restoration"
      subtitle={<>Professional mobile headlight restoration in Albuquerque — wet sanding, multi-stage polishing, and UV-resistant coating to restore clarity and safety. Mobile service at your door. Combine with <Link to="/service/exterior-detailing" className="text-[#0052CC] font-semibold hover:underline">exterior detailing</Link> for a complete front-end refresh.</>}
      metaTitle="Headlight Restoration Albuquerque NM | Mobile Service | DK Mobile Wash"
      metaDescription="Restore foggy, yellowed headlights in Albuquerque. Mobile headlight restoration service — we come to your home. Improves visibility and appearance. Call (505) 604-8058."
      keywords="headlight restoration albuquerque, headlight cleaning service, foggy headlight restoration, headlight restoration near me, headlights restoration service"
      canonical="https://www.dkmobilewash.com/service/headlight-restoration"
      imageUrl="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/headlight%20restoration%20page/albuquerque-headlight-restoration.jpg"
      h1Override="Headlight Restoration in Albuquerque, NM — Clarity Restored at Your Door"
      sectionHeadings={{
        whatIncluded: 'Our Headlight Restoration Process — Step by Step',
        benefits: 'The Real Cost of Yellowed Headlights',
        whoFor: 'Why DK Beats DIY Kits for Headlight Restoration',
        faqs: 'Frequently Asked Questions About Headlight Restoration',
        cta: 'Restore Your Headlights Today',
      }}
      introText={
        <div className="space-y-5">
          <p className="text-lg text-gray-700 leading-relaxed">
            Headlights yellow and cloud over for a specific reason: the factory UV-protective coating on polycarbonate plastic lenses degrades over time under direct sun exposure. Once that coating breaks down, UV radiation attacks the lens material itself, creating a yellow, hazy layer that diffuses and blocks the light beam. In Albuquerque, where vehicles face 300-plus days of intense high-altitude sun, this process happens faster than in most U.S. cities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The safety impact is significant. Yellowed headlights can reduce nighttime light output by up to 80 percent compared to new lenses. This translates directly to shorter stopping distances and reduced reaction time in the dark — a genuine safety issue, not just an aesthetic one.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Professional restoration removes the degraded surface layer through progressive wet sanding, then polishes back to optical clarity, and seals the lens with a durable UV-resistant coating to prevent rapid re-yellowing. The process takes under two hours at your location and delivers like-new results at a fraction of the cost of headlight replacement.
          </p>
        </div>
      }
      whatIncluded={[
        'Panel masking to protect surrounding paint during the sanding process',
        'Progressive wet sanding starting at 800 grit through 2000 and 3000 grit to remove the oxidized surface layer',
        'Multi-stage machine polishing to restore full optical clarity after sanding',
        'Final hand polishing and lens inspection',
        'Application of professional UV-resistant sealant coating to protect against re-yellowing',
        'Final wipe-down and clarity check',
      ]}
      benefits={[
        {
          title: 'Headlight Replacement vs. Restoration',
          description: 'Factory headlight assemblies for most vehicles cost $300 to $800 per unit — sometimes more for luxury and European vehicles. Replacement does not prevent the new lens from yellowing under Albuquerque sun without ongoing UV protection. Professional restoration at a fraction of that cost delivers the same clarity with a protective coating applied as part of the process.',
        },
        {
          title: 'Safety — the Real Argument for Restoration',
          description: 'Yellowed lenses do not just look bad — they reduce nighttime visibility by as much as 80 percent. The beam pattern becomes diffused and weakened rather than focused and directed. For Albuquerque drivers navigating unlit roads in the East Mountains or driving back from Rio Rancho late at night, this is a measurable safety deficit. Restoration returns the lens to full output efficiency.',
        },
        {
          title: 'Resale Value and Curb Appeal',
          description: <>Clear headlights make a vehicle look newer, cleaner, and better maintained. Yellow or foggy lenses make even a clean vehicle look neglected. For pre-sale preparation, headlight restoration combined with <Link to="/service/exterior-detailing" className="text-[#0052CC] font-semibold hover:underline">exterior detailing</Link> delivers one of the highest-ROI combinations available.</>,
        },
      ]}
      whoFor={[
        {
          title: 'Why Professional Restoration Beats DIY Kits',
          description: 'Consumer headlight restoration kits sold at auto parts stores lack proper sanding progression, use weak sealants that wash off within weeks, and miss the polishing stages needed to achieve true optical clarity. Professional restoration uses industrial wet-sand grits in sequence, machine polishing compounds, and aerospace-grade UV sealants that last 1 to 3 years. The results are not comparable.',
        },
        {
          title: 'How Long Results Last',
          description: 'With professional UV-resistant coating applied after polishing, restored clarity typically holds for 1 to 3 years depending on sun exposure and parking habits. Vehicles stored in garages or shaded parking last longer between treatments. For maximum longevity, ceramic coating of the headlens is available as an add-on.',
        },
        {
          title: 'Mobile Convenience',
          description: 'We perform headlight restoration at your home, office, or apartment. The job takes less than two hours and requires no shop visit. You simply confirm your parking location at booking.',
        },
      ]}
      faqs={[
        {
          question: 'How long does headlight restoration take?',
          answer: 'The full process — masking, wet sanding through multiple grits, machine polishing, and UV sealant application — takes approximately 1 to 2 hours for a pair of headlights. We perform the service at your location with no shop visit required.',
        },
        {
          question: 'How long will my headlights stay clear after restoration?',
          answer: 'With professional UV-resistant sealant applied as part of the restoration, clarity typically lasts 1 to 3 years. Longevity depends on sun exposure intensity, parking habits, and how often the vehicle is washed. Albuquerque vehicles benefit from garage parking when possible given the intense UV environment.',
        },
        {
          question: 'Can all headlights be restored, or are some too far gone?',
          answer: 'Most polycarbonate headlights can be fully restored regardless of how yellow or cloudy they appear. The degraded surface layer is physically removed during the sanding process, revealing undamaged lens material underneath. In rare cases where the lens plastic has been physically cracked or deeply pitted beyond what sanding can address, restoration may have limits. We assess each lens before beginning.',
        },
        {
          question: 'Is headlight restoration worth it compared to replacement?',
          answer: 'In almost every case, yes. Professional restoration costs a fraction of OEM replacement cost, delivers equivalent or better clarity, and includes a UV-protective coating that helps prevent rapid re-yellowing. For vehicles where the headlight assembly design is simple and replacement is very inexpensive, it is a closer comparison — but for most vehicles, restoration wins on both cost and results.',
        },
      ]}
      relatedServices={[
        { title: 'Exterior Detailing', slug: 'exterior-detailing', description: 'Full exterior wash, clay bar treatment, and premium wax protection' },
        { title: 'Paint Correction', slug: 'paint-correction', description: 'Remove swirls and oxidation for a flawless, mirror-like finish' },
        { title: 'Ceramic Coating', slug: 'ceramic-coating', description: 'Semi-permanent protection for paint, trim, and restored lenses' },
        { title: 'Mobile Auto Detailing', slug: 'mobile-auto-detailing', description: 'Complete interior and exterior care delivered to your location' },
      ]}
    />
  );
}

export function EngineBayDetailingPage() {
  return (
    <ServicePageTemplate
      title="Engine Bay Cleaning"
      subtitle={<>Professional engine bay cleaning in Albuquerque — safe degreasing, hand cleaning, and dressing at your home or business. Our controlled process protects sensitive electronics while removing abrasive desert dust and grime. Add to any <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] font-semibold hover:underline">mobile auto detailing</Link> package.</>}
      metaTitle="Engine Bay Cleaning Albuquerque NM | Mobile Service | DK Mobile Wash"
      metaDescription="Professional engine bay cleaning in Albuquerque. Mobile service at your home or business. Safe degreasing, hand cleaning, and dressing. Call (505) 604-8058."
      keywords="engine bay cleaning albuquerque, engine bay detailing albuquerque, engine cleaning service, engine bay detail near me"
      canonical="https://www.dkmobilewash.com/service/engine-bay-detailing"
      imageUrl="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/engine-bay-detail-albuquerque.webp"
      h1Override="Engine Bay Cleaning in Albuquerque, NM — Professional Mobile Service"
      sectionHeadings={{
        whatIncluded: 'What Engine Bay Cleaning Includes',
        benefits: 'Why Engine Bay Cleaning Matters',
        whoFor: 'Who Benefits from Engine Bay Cleaning',
        faqs: 'Frequently Asked Questions About Engine Bay Cleaning',
        cta: 'Schedule Engine Bay Cleaning at Your Location',
      }}
      introText={
        <div className="space-y-5">
          <p className="text-lg text-gray-700 leading-relaxed">
            Most drivers never look under the hood outside of fluid checks and oil changes. Years of desert dust, oil seepage, road grime, and degraded rubber deposits accumulate in the engine bay unnoticed. This buildup is not just cosmetic — it insulates components, traps heat, accelerates rubber drying, and makes it harder to spot developing problems like fluid leaks and worn hoses before they become costly failures.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Professional engine bay cleaning removes this contamination safely without risking water damage to electrical components. The key distinction between professional service and improper DIY washing is process — covering sensitive electrical components first, applying biodegradable degreaser, agitating with soft brushes, and using controlled rinsing or wipe-down technique rather than direct high-pressure blasting.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In Albuquerque's high-desert climate, fine silica dust enters the engine bay through every opening and accumulates on hoses, sensors, and wiring. Dry conditions also accelerate rubber degradation in hoses and seals. A clean engine bay makes these issues immediately visible during routine inspection.
          </p>
        </div>
      }
      whatIncluded={[
        'Protection of sensitive electrical components including alternator, fuse boxes, and sensors before any cleaning begins',
        'Application of biodegradable, engine-safe degreaser to break down oil buildup and road grime',
        'Agitation with soft-bristle brushes on surfaces, hoses, and accessible components',
        'Controlled low-pressure rinse or hand wipe-down — no high-pressure blasting near electrical systems',
        'Compressed air drying of electrical connections and crevices',
        'Professional plastic, rubber, and vinyl dressing for a clean, satin finish',
        'Final inspection for visible fluid leaks, cracked hoses, or worn belts',
      ]}
      benefits={[
        {
          title: 'What DK Does Not Do — No High-Pressure Blasting',
          description: 'Many improper engine bay cleaning methods use high-pressure washers directly on electrical connectors, sensors, and fuse boxes. This forces water into sealed components and causes electrical failures and corrosion. Our process uses controlled low-pressure rinsing or hand wipe-down near sensitive areas. Your electronics are protected throughout.',
        },
        {
          title: 'Practical Benefits for Albuquerque Drivers',
          description: 'Desert dust accumulates in engine bays rapidly in New Mexico. This fine silica grit coats plastic and rubber surfaces and traps heat around components. In the extreme summer temperatures common in Albuquerque, this additional heat retention accelerates wear. Regular cleaning removes this insulating layer and allows proper heat dissipation. Dry conditions also crack rubber hoses and dry out plastic components faster — a clean bay allows these issues to be spotted early.',
        },
        {
          title: 'Resale Value and Maintenance Signals',
          description: <>A clean engine bay signals meticulous ownership to buyers and mechanics alike. Vehicles with documented maintenance history and a professionally maintained appearance sell faster and for more. For full pre-sale presentation, pair engine bay cleaning with <Link to="/service/exterior-detailing" className="text-[#0052CC] font-semibold hover:underline">exterior detailing</Link> and interior cleaning.</>,
        },
      ]}
      whoFor={[
        {
          title: 'Vehicle Owners Preparing for Sale or Inspection',
          description: 'A clean engine bay is one of the first things a careful buyer or mechanic examines. Oil seepage is immediately visible, fluid levels are easier to check, and the overall impression of the vehicle shifts significantly from neglected to well-maintained.',
        },
        {
          title: 'Enthusiasts and Show Car Owners',
          description: 'A show-quality engine bay requires the same attention as exterior paint. We clean, dress, and present the engine compartment to concours standards using products that restore plastic and rubber to a clean, factory-correct appearance without over-dressing.',
        },
        {
          title: 'Commercial and Fleet Operators',
          description: <>Work trucks, service vans, and fleet vehicles accumulate significant engine contamination from job site dust and heavy use. Periodic engine bay cleaning keeps commercial vehicles in better working order and extends component life. Explore our <Link to="/fleet" className="text-[#0052CC] font-semibold hover:underline">fleet detailing</Link> program for volume pricing.</>,
        },
      ]}
      faqs={[
        {
          question: 'Is engine bay cleaning safe for my car\'s electronics?',
          answer: 'Yes, when done with the correct process. We protect all sensitive electrical components — alternator, fuse boxes, sensors, and wiring connectors — before beginning any cleaning. We use controlled low-pressure rinsing or hand wipe-down techniques rather than high-pressure blasting near electrical systems. Our process is safe for all modern vehicles including hybrids.',
        },
        {
          question: 'How long does engine bay cleaning take?',
          answer: 'A standard engine bay cleaning takes 45 minutes to 1.5 hours depending on the level of contamination and engine bay complexity. Heavily soiled bays with significant oil buildup take longer. We perform the service at your location with no shop visit required.',
        },
        {
          question: 'How often should I have my engine bay cleaned?',
          answer: 'For most Albuquerque drivers, once or twice per year is appropriate. The best timing is spring after monsoon dust season ends and fall before the dry winter months begin. Vehicles driven on unpaved roads, job sites, or dusty environments benefit from more frequent cleaning.',
        },
        {
          question: 'Do you come to my location for engine bay cleaning?',
          answer: 'Yes. Engine bay cleaning is performed at your home, office, apartment, or any flat parking location. Our self-contained mobile unit brings all necessary equipment and chemicals. You do not need to provide water, power, or any hookup.',
        },
      ]}
      relatedServices={[
        { title: 'Mobile Auto Detailing', slug: 'mobile-auto-detailing', description: 'Full interior and exterior mobile detailing packages' },
        { title: 'Exterior Detailing', slug: 'exterior-detailing', description: 'Hand wash, clay bar, and UV-protective wax application' },
        { title: 'Fleet Detailing', slug: 'fleet', description: 'Volume-based commercial cleaning for business vehicles' },
        { title: 'Interior Detailing', slug: 'interior-detailing', description: 'Deep cabin sanitization, stain removal, and leather conditioning' },
      ]}
    />
  );
}

export function FleetCommercialDetailingPage() {
  return (
    <ServicePageTemplate
      title="Fleet and Commercial Detailing"
      subtitle={<>On-site mobile fleet and commercial vehicle detailing in Albuquerque. Transparent volume pricing, flexible scheduling, and recurring maintenance plans designed to minimize vehicle downtime. Pair with <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] font-semibold hover:underline">mobile auto detailing</Link> for executive vehicles.</>}
      metaTitle="Fleet Detailing Albuquerque NM | Mobile Commercial Service | DK Mobile Wash"
      metaDescription="Mobile fleet and commercial vehicle detailing in Albuquerque. We come to your lot or job site. Flexible schedules, professional results. Call (505) 604-8058."
      keywords="fleet detailing albuquerque, fleet washing albuquerque, commercial vehicle detailing albuquerque, fleet vehicle cleaning, mobile fleet detailing near me, dealership detailing albuquerque"
      canonical="https://www.dkmobilewash.com/albuquerque/fleet-commercial-detailing"
      imageUrl="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/fleet%20%26%20dealership%20page/7FF36606-8F31-487C-A6FD-F37CBA4CC027_1_105_c.jpeg"
      h1Override="Fleet and Commercial Vehicle Detailing in Albuquerque, NM — We Come to Your Lot"
      sectionHeadings={{
        whatIncluded: 'What Fleet Detailing Includes',
        benefits: 'Why Albuquerque Businesses Choose DK Mobile Wash',
        whoFor: 'Industries We Serve in the Albuquerque Metro',
        faqs: 'Frequently Asked Questions About Fleet Detailing',
        cta: 'Get a Custom Fleet Quote',
      }}
      introText={
        <div className="space-y-5">
          <p className="text-lg text-gray-700 leading-relaxed">
            Every vehicle your business operates is a moving representation of your brand. A clean, well-maintained fleet signals professionalism, reliability, and attention to detail to every customer, partner, and prospect who sees it. A dirty fleet signals the opposite — regardless of how good your actual service is.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            DK Mobile Wash provides on-site fleet detailing for Albuquerque businesses across all industries. Our self-contained mobile units come to your lot, warehouse, or job site with everything needed — no vehicles removed from your operation, no shop drop-off, no scheduling disruption. We work around your hours, including early morning, evening, and weekend availability.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We handle everything from regular exterior maintenance washes to full interior and exterior detail cycles, ceramic coating for long-term paint protection that reduces future wash frequency, and engine bay cleaning for commercial vehicles where under-hood appearance matters. Fleet accounts receive custom pricing based on vehicle count and service frequency.
          </p>
        </div>
      }
      whatIncluded={[
        'Exterior hand wash with pH-balanced commercial cleaners safe for vehicle graphics and wraps',
        'Wheel and tire cleaning to remove brake dust and road grime',
        'Window and mirror cleaning for clear driver visibility',
        'Tire dressing application',
        'Interior vacuum and wipe-down of high-touch surfaces',
        'Dashboard and console cleaning with UV-safe conditioners',
        'Floor mat cleaning and reinstallation',
        'Odor neutralization available for client-ready interiors',
        'Full interior detail cycle available for deeper service',
        'Ceramic coating or paint sealant application for long-term protection and reduced maintenance',
      ]}
      benefits={[
        {
          title: 'On-Site Service — Zero Operational Disruption',
          description: <>Sending vehicles to a shop takes them off the road, requires driver time to drop off and pick up, and creates scheduling coordination headaches. Our mobile units come to your lot during off-hours, overnight, or on weekends and complete the work while your vehicles are idle. Vehicles are ready when your drivers need them. For individual executive vehicle care, see <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] font-semibold hover:underline">mobile auto detailing</Link>.</>,
        },
        {
          title: 'Business Case for Regular Fleet Detailing',
          description: 'Clean vehicles protect resale value. They also make it easier for drivers to spot damage, fluid leaks, and maintenance issues before they escalate. Clean interiors reduce driver fatigue and project a professional image on every customer call. Businesses that detail regularly see lower overall vehicle maintenance costs from earlier defect detection.',
        },
        {
          title: 'How Scheduling Works',
          description: 'Fleet accounts can be set up on weekly, biweekly, or monthly visit cycles. We assess your vehicle count, service requirements, and operational schedule at setup, then deliver consistent service at the agreed frequency. No need to call and rebook each cycle — we run on your schedule automatically.',
        },
      ]}
      whoFor={[
        {
          title: 'Construction Companies and Contractors',
          description: 'Albuquerque construction vehicles accumulate concrete dust, silica grit, and job site contamination that damages paint and corrodes metal over time. Regular professional washing removes this buildup and protects the vehicle finish and undercarriage. We service job sites directly.',
        },
        {
          title: 'Real Estate Agencies and Professional Services',
          description: 'Real estate agents, insurance adjusters, and professional services firms depend on vehicle appearance to reinforce their brand in client meetings. A consistently maintained fleet communicates reliability without requiring any effort from individual drivers.',
        },
        {
          title: 'HVAC, Plumbing, and Service Contractors',
          description: 'Service contractors operate vehicles that take significant interior abuse from tools, materials, and outdoor work. Regular interior cleaning and exterior maintenance keeps these vehicles presentable and functional.',
        },
        {
          title: 'Car Dealerships',
          description: <>Dealership inventory requires consistent preparation for lot presentation, photography, and test drives. We handle showroom-ready preparation for dealership fleets on a regular schedule. Pair with <Link to="/ceramic-coating" className="text-[#0052CC] font-semibold hover:underline">ceramic coating</Link> for inventory that holds up longer between preparation cycles.</>,
        },
      ]}
      faqs={[
        {
          question: 'Can you service our entire fleet on-site without us sending vehicles to a shop?',
          answer: 'Yes. That is the core of our fleet service model. Our self-contained mobile units arrive at your lot, job site, or business park fully equipped with their own water supply, power generation, and all necessary chemicals and equipment. Vehicles never leave your property. We work during your off-hours, overnight, or on weekends to minimize any operational impact.',
        },
        {
          question: 'What types of commercial vehicles do you detail?',
          answer: 'We detail passenger vehicles, SUVs, trucks, cargo vans, service vehicles, delivery vehicles, construction equipment cabs, and dealership inventory. We do not currently service full semi-trailers or heavy equipment. Call (505) 604-8058 to confirm your specific vehicle type.',
        },
        {
          question: 'Do you offer scheduled recurring fleet detailing contracts?',
          answer: 'Yes. Fleet accounts can be set up on weekly, biweekly, or monthly cycles. We design a recurring schedule at account setup and deliver consistent service automatically. Volume pricing applies based on vehicle count and frequency.',
        },
        {
          question: 'How do I set up a fleet account with DK Mobile Wash?',
          answer: 'Call (505) 604-8058 or submit a quote request online. We will discuss your vehicle count, service requirements, and operational schedule and provide a custom fleet pricing proposal. Most fleet accounts are active within one week of initial contact.',
        },
      ]}
      relatedServices={[
        { title: 'Mobile Auto Detailing', slug: 'mobile-auto-detailing', description: 'Individual executive vehicle care and full interior and exterior packages' },
        { title: 'Ceramic Coating', slug: 'ceramic-coating', description: 'Long-term fleet paint protection to reduce wash frequency and costs' },
        { title: 'Engine Bay Detailing', slug: 'engine-bay-detailing', description: 'Commercial engine cleaning for maintenance visibility and resale prep' },
        { title: 'Exterior Detailing', slug: 'exterior-detailing', description: 'Routine fleet wash, wax, and UV protection for commercial vehicles' },
      ]}
    />
  );
}
