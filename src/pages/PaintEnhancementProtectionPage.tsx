import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Sun, Droplets, Shield, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { useBookingModal } from '../App';
import ServiceAreasGrid from '../components/ServiceAreasGrid';
import RelatedServices from '../components/RelatedServices';

export default function PaintEnhancementProtectionPage() {
  const { openBookingModal } = useBookingModal();

  const faqs = [
    {
      question: 'What exactly is paint enhancement polish and how does it differ from correction?',
      answer: 'Paint enhancement polish is a precision machine-polishing process designed to remove light surface imperfections, fine swirl marks, and minor scratches while restoring your paint\'s original gloss and depth. Unlike aggressive paint correction that removes heavier defects, enhancement uses finer abrasives to safely refine the clear coat without compromising its thickness. It\'s the ideal solution for daily drivers or well-maintained vehicles that need a noticeable clarity boost before applying long-term protection.',
    },
    {
      question: 'How long does wax or sealant protection last in Albuquerque\'s climate?',
      answer: 'In Albuquerque\'s high-desert environment, premium carnauba wax typically provides 2-3 months of defense before UV exposure and dust break it down. Advanced synthetic sealants extend that window to 4-6 months by creating a more resilient polymer barrier. For drivers seeking multi-year defense against intense sun, hard water, and monsoon fallout, our professional ceramic coating delivers 5-10 years of bonded protection with significantly easier maintenance.',
    },
    {
      question: 'Why does Albuquerque\'s high-desert climate demand specialized paint protection?',
      answer: 'Albuquerque sits at over 5,000 feet elevation, meaning UV radiation is significantly more intense than at sea level. This accelerated UV exposure rapidly oxidizes clear coats, fades pigments, and dries out protective layers. Combined with abrasive desert dust, seasonal monsoon moisture, and mineral-heavy sprinkler water, unprotected paint suffers cumulative micro-damage that eventually leads to clear coat failure. Professional protection creates a sacrificial barrier that absorbs this environmental abuse instead of your factory finish.',
    },
    {
      question: 'What is the real difference between traditional wax and ceramic coating?',
      answer: 'Traditional wax sits on top of your paint as a temporary sacrificial layer, offering decent gloss but limited durability against heat, UV, and chemicals. Ceramic coating, however, chemically bonds with your clear coat at a molecular level, creating a semi-permanent, hydrophobic shield that repels water, dirt, and contaminants. While wax requires reapplication every few months, ceramic coating maintains its protective properties and self-cleaning effect for 5-10 years, making it the most cost-effective long-term investment for New Mexico drivers.',
    },
    {
      question: 'Can paint enhancement or polishing fix deep scratches and rock chips?',
      answer: 'Paint enhancement safely removes light to moderate surface scratches, spider webbing, and swirl marks that haven\'t penetrated through the clear coat. However, deep scratches, rock chips, or damage that catches your fingernail has reached the base paint or primer and cannot be polished out. For those defects, we recommend professional touch-up paint or localized repainting. Our team will always perform a honest paint assessment before starting any service to ensure realistic expectations.',
    },
    {
      question: 'How often should I schedule paint protection services for my vehicle?',
      answer: 'For optimal defense in Albuquerque, we recommend reapplying premium wax every 3 months and synthetic sealants every 4-6 months. If your vehicle is parked outdoors daily or frequently exposed to construction dust and direct sun, shortening that interval to 2-3 months is highly beneficial. Alternatively, investing in a professional ceramic coating eliminates the need for frequent reapplications and only requires routine maintenance washes to keep the hydrophobic properties active.',
    },
    {
      question: 'Do you perform paint enhancement and protection services at my location?',
      answer: 'Absolutely. Every paint enhancement, wax, sealant, and ceramic coating service we offer is performed as a fully mobile, on-site car cleaning experience. Our self-contained detailing units carry independent water tanks, power generators, climate-controlled product storage, and professional machine polishers. We only need a flat parking spot at your home, office, or apartment complex—no hoses, no electrical hookups, and zero disruption to your daily schedule.',
    },
    {
      question: 'Is paint enhancement necessary before applying ceramic coating?',
      answer: 'Yes, it is highly recommended and often required for optimal results. Ceramic coating permanently locks in whatever condition your paint is in at the time of application. If swirls, water spots, or oxidation are left on the surface, the coating will seal those imperfections underneath, reducing clarity and gloss. Our <strong>paint enhancement polish</strong> step ensures your clear coat is perfectly refined, contaminant-free, and ready to form a strong molecular bond with the coating, maximizing both aesthetics and longevity.',
    },
  ];

  return (
    <>
      <SEO
        title="Paint Enhancement & Protection Albuquerque NM | Mobile Polishing & Ceramic Coating | DK Mobile Wash"
        description="Professional mobile paint enhancement, wax, sealant & ceramic coating in Albuquerque. Defend against high-desert UV, dust & hard water. Licensed & insured. Call (505) 604-8058"
        keywords="paint enhancement Albuquerque, paint protection Albuquerque, car wax Rio Rancho, ceramic coating Corrales, paint polishing ABQ, UV protection car paint, mobile paint protection service"
        canonical="https://dkmobilewash.com/paint-enhancement-protection-albuquerque"
      />

      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Paint Enhancement & Protection in Albuquerque, NM | Mobile Service
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-4">
                Albuquerque's high-desert climate is brutal on factory paint. Our <strong>mobile paint protection service</strong> brings expert machine polishing, premium wax, synthetic sealants, and long-lasting ceramic coatings directly to your driveway. Defend your clear coat against intense UV radiation, abrasive desert dust, and hard water etching without ever visiting a shop.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Need deeper defect removal? Explore our{" "}
                <Link to="/service/paint-correction" className="text-white underline hover:text-gray-200 font-semibold">
                  professional paint correction service
                </Link>{" "}
                for heavy swirl and scratch restoration, or review our{" "}
                <Link to="/car-detailing-prices-albuquerque" className="text-white underline hover:text-gray-200 font-semibold">
                  transparent Albuquerque pricing guide
                </Link>{" "}
                to find the perfect protection tier for your vehicle and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openBookingModal}
                  className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  Get Free Quote
                </button>
                <a
                  href="tel:5056048058"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (505) 604-8058</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Albuquerque's Climate Demands Protection */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Albuquerque’s High-Desert Climate Demands Professional Paint Protection
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your vehicle faces unique environmental stressors in New Mexico that accelerate clear coat degradation, pigment fading, and surface contamination far faster than in moderate climates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-orange-50 p-8 rounded-xl border-2 border-orange-200 text-center">
                <Sun className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Intense High-Altitude UV Exposure</h3>
                <p className="text-gray-700">
                  At over 5,000 feet elevation, Albuquerque receives significantly stronger UV radiation than sea-level cities. This constant solar bombardment breaks down polymer chains in your clear coat, causing rapid oxidation, chalky fading, and eventual clear coat failure. Consistent <strong>high-desert UV protection</strong> is not optional—it's essential for preserving your paint's structural integrity and resale value.
                </p>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-200 text-center">
                <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Abrasive Desert Dust & Monsoon Moisture</h3>
                <p className="text-gray-700">
                  Fine silica dust from the West Mesa and seasonal monsoon humidity create a perfect storm for paint damage. Dry dust acts like sandpaper when wiped incorrectly, while sudden rain mixes with airborne pollutants to create acidic water spots that chemically etch into unprotected clear coats within hours of drying in the sun.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200 text-center">
                <Shield className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Biological & Industrial Contaminants</h3>
                <p className="text-gray-700">
                  Cottonwood sap, bird droppings, brake dust, and industrial fallout contain highly acidic or alkaline compounds that rapidly eat through factory wax. Without a dedicated protective barrier, these contaminants bond permanently to your paint, requiring aggressive machine polishing or wet sanding to safely remove.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                The True Cost of Neglecting Paint Protection in New Mexico
              </h3>
              <p className="text-gray-700 text-center mb-4">
                Skipping regular paint protection doesn't just affect aesthetics—it directly impacts your vehicle's long-term value and structural paint health. Unprotected clear coats rapidly oxidize, leading to irreversible fading, deep water spot etching, and micro-cracking that exposes base paint to the elements. Once the clear coat fails, the only remedy is a costly professional repaint that rarely matches factory durability.
              </p>
              <p className="text-gray-700 text-center">
                Investing in routine <Link to="/service/exterior-detailing" className="text-[#0052CC] hover:underline font-semibold">professional exterior detailing</Link> and layered protection preserves your factory finish, simplifies weekly washing, and saves thousands in future repaint costs. Prevention is always more affordable than restoration.
              </p>
            </div>
          </div>
        </section>

        {/* Paint Enhancement Polish */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Paint Enhancement Polish: Restore Gloss, Clarity & Depth
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Professional machine polishing</strong> is the bridge between a basic wash and long-term protection. Our paint enhancement process utilizes dual-action polishers, fine abrasive compounds, and premium finishing pads to safely level micro-imperfections in your clear coat. This removes light swirl marks, spider webbing, and minor scratches while dramatically restoring your paint's original reflectivity and wet-look depth. It's the perfect solution for vehicles with moderate wear that don't require heavy cutting or multi-stage correction.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Safely removes light swirl marks, spider webbing, and wash-induced marring',
                    'Eliminates shallow water spots and surface mineral deposits',
                    'Restores factory gloss, clarity, and color depth to faded paint',
                    'Creates a perfectly smooth foundation for wax, sealant, or ceramic coating',
                    '100% safe for all modern clear coats, single-stage paints, and wrap finishes',
                    'Performed with calibrated dual-action machines and professional-grade abrasives',
                    'Fully mobile service delivered to your home, office, or HOA parking area',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={openBookingModal}
                  className="bg-[#0052CC] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-lg"
                >
                  Book Paint Enhancement
                </button>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <Sparkles className="w-12 h-12 text-[#0052CC] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  When Should You Schedule Paint Enhancement?
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Before Ceramic Coating Application:</p>
                    <p className="text-gray-600 text-sm">
                      Ceramic coating magnifies whatever is underneath it. Polishing first ensures you're sealing flawless, high-gloss paint rather than trapping existing swirls and defects under a semi-permanent layer.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Preparing for Private Sale or Trade-In:</p>
                    <p className="text-gray-600 text-sm">
                      First impressions directly impact offer prices. A single enhancement session can make a 5-year-old vehicle look showroom-fresh, often increasing resale value by $500-$2,000 depending on the market.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Annual Clear Coat Maintenance:</p>
                    <p className="text-gray-600 text-sm">
                      Even garage-kept vehicles accumulate micro-marring from routine washing. An annual enhancement polish resets your paint's clarity and removes bonded contaminants before they cause long-term damage.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Post-Monsoon or Winter Recovery:</p>
                    <p className="text-gray-600 text-sm">
                      Albuquerque's seasonal shifts leave behind acidic rain spots, road film, and embedded dust. Enhancement polishing safely strips this contamination and restores your paint's hydrophobic behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wax and Protection Packages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Wax, Sealant & Ceramic Protection Packages for Albuquerque Drivers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the ideal protection tier based on your parking situation, driving habits, and long-term maintenance goals in the New Mexico climate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Premium Wax */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#0052CC] transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Premium Carnauba Wax</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-600">Essential</span>
                </div>
                <p className="text-gray-600 mb-4">3-4 months protection</p>
                <p className="text-gray-700 mb-6">
                  Our premium carnauba blend delivers a warm, deep gloss and reliable short-term defense for vehicles that are garage-parked or experience moderate sun exposure. It enhances color richness and provides a sacrificial layer that absorbs UV and light contamination before it reaches your clear coat.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Rich, showroom-quality gloss and depth enhancement',
                    'Reliable UV ray shielding for daily drivers',
                    'Hydrophobic water beading for easier rinsing',
                    'Smooth surface that repels light dust and pollen',
                    'Ideal for quarterly maintenance schedules',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#0052CC] flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={openBookingModal}
                  className="w-full bg-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003D99] transition-all"
                >
                  Book Wax Service
                </button>
              </div>

              {/* Synthetic Sealant */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#0052CC]">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Advanced Synthetic Sealant</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-600">Popular</span>
                </div>
                <p className="text-gray-600 mb-4">4-6 months protection</p>
                <p className="text-gray-700 mb-6">
                  Engineered specifically for high-desert conditions, our polymer-based sealant creates a resilient, cross-linked barrier that outlasts traditional wax. It offers superior heat resistance, stronger UV deflection, and enhanced chemical resistance against hard water and road grime.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Extended 4-6 month durability in intense sun',
                    'Advanced UV and thermal protection technology',
                    'Highly hydrophobic surface that sheds mud and dust',
                    'Resists water spot etching better than natural wax',
                    'Perfect for outdoor parking and daily commuters',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#0052CC] flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={openBookingModal}
                  className="w-full bg-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003D99] transition-all"
                >
                  Book Sealant Service
                </button>
              </div>

              {/* Ceramic Coating */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#0052CC] transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Professional Ceramic Coating</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-600">Ultimate</span>
                </div>
                <p className="text-gray-600 mb-4">5-10 years protection</p>
                <p className="text-gray-700 mb-6">
                  The gold standard in automotive paint defense. Our professional-grade ceramic coating chemically bonds with your clear coat, creating a semi-permanent, glass-like shield that repels water, dirt, UV rays, and chemical contaminants. It dramatically reduces washing frequency and maintains a flawless finish for years.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Semi-permanent 5-10 year bonded protection',
                    'Maximum UV, heat, and oxidation defense',
                    'Extreme hydrophobic self-cleaning properties',
                    'Locks in enhanced gloss and paint clarity',
                    'Cuts routine wash time by over 50%',
                    'Significantly boosts long-term resale value',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#0052CC] flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/ceramic-coating"
                  className="block w-full bg-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003D99] transition-all text-center"
                >
                  Learn About Ceramic Coating
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Tips */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              How to Maintain Your Paint Protection Between Professional Services
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Essential At-Home Care Guidelines</h3>
                  <div className="space-y-3">
                    {[
                      'Wash your vehicle every 2 weeks to prevent abrasive dust and acidic contaminants from bonding to the protection layer.',
                      'Always use pH-neutral, wax-safe car shampoo. Household dish soaps strip protective oils and accelerate coating breakdown.',
                      'Dry exclusively with clean, plush microfiber towels using a pat-dry or dragging motion to eliminate water spot etching.',
                      'Park in shaded areas or use a breathable car cover whenever possible to minimize direct UV degradation and heat cycling.',
                      'Remove bird droppings, tree sap, and bug splatter within 24 hours. These contain uric acid and enzymes that rapidly eat through wax and sealants.',
                      'Never use automatic tunnel washes with spinning brushes. They are the #1 cause of swirl marks and will severely compromise your protection.',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Professional Maintenance Tip</h4>
                  <p className="text-gray-700 text-sm">
                    Even with a premium ceramic coating, routine maintenance washes are non-negotiable. While the coating prevents contaminants from chemically bonding to your clear coat, dirt, pollen, and road film will still accumulate on the surface. If left unwashed, this buildup creates a dull film that masks the coating's hydrophobic properties and gloss. A simple bi-weekly rinse and hand wash keeps your protection performing at 100% capacity year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions About Paint Enhancement & Protection in ABQ
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#0052CC] transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Protect Your Vehicle’s Paint with Mobile Enhancement & Coating Services
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Don't let Albuquerque's sun and dust ruin your factory finish. Our licensed, insured, and fully self-contained mobile units bring dealership-level paint enhancement, wax, sealant, and ceramic coating services directly to your home or office. Zero downtime, zero hookups, and guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openBookingModal}
                className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Free Quote
              </button>
              <a
                href="tel:5056048058"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </section>

        <RelatedServices
          services={[
            {
              title: 'Paint Correction',
              slug: 'paint-correction',
              description: 'Remove deep scratches, heavy swirls, and oxidation to restore showroom condition'
            },
            {
              title: 'Full Refresh Package',
              slug: 'car-detailing',
              description: 'Complete interior and exterior detailing with premium wax protection included'
            },
            {
              title: 'Masterpiece Detail',
              slug: 'car-detailing',
              description: 'Ultimate inside-out restoration featuring paint enhancement and deep cleaning'
            }
          ]}
        />

        <ServiceAreasGrid
          title="Paint Protection Available Across Albuquerque Metro Area"
          description="Mobile paint enhancement and ceramic coating services brought directly to your location"
        />
      </main>
    </>
  );
}
