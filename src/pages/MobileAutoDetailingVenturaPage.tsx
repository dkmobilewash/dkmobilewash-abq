import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, Clock, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import { useBookingModal } from '../App';

export default function MobileAutoDetailingAlbuquerquePage() {
  const { openBookingModal } = useBookingModal();

  const faqs = [
    {
      question: 'What areas of Albuquerque do you service?',
      answer: 'We provide comprehensive mobile detailing coverage across the entire Albuquerque metro area. This includes Nob Hill, Downtown, Uptown, Northeast Heights, Midtown, Westside, and all surrounding neighborhoods. Our service area also extends to Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, and Los Ranchos. If you\'re within the greater ABQ region, our self-contained mobile units can reach your home, office, apartment, or job site with zero hassle.',
    },
    {
      question: 'How long does mobile auto detailing take in Albuquerque?',
      answer: 'Service duration depends on your selected package and vehicle condition. Our Full Refresh package typically takes 2-3 hours, the Gold Standard takes 3-4 hours, and the Masterpiece Detail requires 4-6 hours for deep cleaning and paint enhancement. Advanced services like multi-stage paint correction or ceramic coating applications take 6-8 hours. We work efficiently on-site so you can continue with your work or family routine without interruption.',
    },
    {
      question: 'Do you need access to water or power at my location?',
      answer: 'Absolutely not. Our mobile detailing units are 100% self-contained with independent water tanks, onboard power generators, and climate-controlled product storage. We never require hoses, electrical hookups, or utility access from you. All we need is a flat parking spot at your home, office, or apartment complex. This makes our service ideal for HOA communities and apartments with strict car-washing restrictions.',
    },
    {
      question: 'Why choose mobile detailing over a traditional car wash in Albuquerque?',
      answer: 'Traditional drive-through washes use abrasive brushes, recycled water, and harsh chemicals that cause swirl marks, strip protective wax, and leave hard water spots. Mobile detailing delivers a meticulous, hand-washed finish using pH-balanced shampoos, dedicated microfiber towels, and professional-grade decontamination. Beyond superior results, you save hours by eliminating travel time, shop wait times, and ride arrangements. We bring dealership-level <strong>on-site car cleaning</strong> directly to your driveway while you relax or work.',
    },
    {
      question: 'How often should I detail my car in Albuquerque?',
      answer: 'Due to Albuquerque\'s intense high-desert UV exposure, abrasive dust, and seasonal monsoon fallout, we recommend professional detailing every 3-4 months for optimal paint and interior preservation. If your vehicle is parked outdoors daily, frequently exposed to construction dust, or used for family/pet transport, scheduling every 2-3 months is highly beneficial. Regular maintenance prevents cumulative clear coat damage, dashboard cracking, and fabric staining that drastically reduce resale value.',
    },
    {
      question: 'Do you offer ceramic coating in Albuquerque?',
      answer: 'Yes, and it\'s one of the smartest long-term investments for New Mexico drivers. Professional ceramic coating chemically bonds with your clear coat to create a semi-permanent, hydrophobic shield that repels water, dust, UV rays, and chemical contaminants. Unlike traditional wax that lasts 2-3 months, our ceramic coatings provide 5-10 years of defense against Albuquerque\'s harsh sun and hard water. We always perform paint enhancement before application to ensure flawless, swirl-free results.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards, cash, Venmo, and Zelle for your convenience. Payment is only collected after the service is completed and you\'ve had a chance to inspect the results. We also provide digital receipts and can accommodate fleet or commercial billing arrangements for business accounts.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, DK Mobile Wash is a fully licensed and insured mobile detailing company operating throughout New Mexico. Every technician is trained in paint-safe techniques, chemical handling, and interior preservation protocols. Your vehicle is protected under our comprehensive liability policy, giving you complete peace of mind whether we\'re working on a daily driver, luxury SUV, or commercial fleet.',
    },
  ];

  return (
    <>
      <SEO
        title="Mobile Auto Detailing Albuquerque NM | At-Home Service | DK Mobile Wash"
        description="Professional mobile car detailing in Albuquerque, NM. Self-contained unit, licensed & insured. Interior cleaning, exterior wash, paint correction & ceramic coating at your door. Call (505) 604-8058"
        keywords="mobile auto detailing Albuquerque, car detailing Albuquerque NM, mobile car wash Albuquerque, interior detailing Albuquerque, ceramic coating Albuquerque, self-contained mobile detailing"
        canonical="https://dkmobilewash.com/mobile-auto-detailing-albuquerque-nm"
      />

      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Mobile Auto Detailing in Albuquerque, NM | We Come to You
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-4">
                DK Mobile Wash delivers dealership-quality <strong>self-contained mobile detailing</strong> directly to your home, office, or apartment anywhere in the Albuquerque metro area. No shop visits, no utility hookups, and zero downtime. Our licensed technicians bring independent water, power, and professional-grade products to combat New Mexico\'s intense UV exposure, desert dust, and hard water etching.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Explore our comprehensive{" "}
                <Link to="/service/mobile-auto-detailing" className="text-white underline hover:text-gray-200 font-semibold">
                  mobile auto detailing service overview
                </Link>{" "}
                or visit our dedicated{" "}
                <Link to="/albuquerque" className="text-white underline hover:text-gray-200 font-semibold">
                  Albuquerque location page
                </Link>{" "}
                to discover neighborhood-specific solutions, pricing tiers, and seasonal protection packages tailored for ABQ drivers.
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

        {/* Why Choose Mobile Detailing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <MapPin className="w-8 h-8 text-[#0052CC] mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">We Come to You</h3>
                <p className="text-sm text-gray-600">Anywhere in Albuquerque, NM</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <Clock className="w-8 h-8 text-[#0052CC] mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Save Time</h3>
                <p className="text-sm text-gray-600">No shop visits required</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <Shield className="w-8 h-8 text-[#0052CC] mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-sm text-gray-600">Professional service</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <CheckCircle className="w-8 h-8 text-[#0052CC] mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Premium Results</h3>
                <p className="text-sm text-gray-600">Showroom quality</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                DK Mobile Wash eliminates the hassle of traditional detailing by bringing a fully equipped, climate-controlled service unit directly to your location in Albuquerque, NM. Whether you\'re working from home in Midtown, managing a busy schedule Downtown, or living in an HOA-restricted community, our <strong>licensed insured mobile detailing</strong> teams adapt to your environment. We handle everything from rapid maintenance washes to multi-stage paint correction and ceramic coating applications, ensuring your vehicle receives consistent, showroom-level care without ever leaving your driveway.
              </p>
            </div>
          </div>
        </section>

        {/* Enriched Local Content */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Albuquerque’s High-Desert Climate Demands Professional Mobile Detailing
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Albuquerque sits at 5,300 feet elevation and experiences over 300 days of intense sunshine annually. At this altitude, UV radiation is significantly stronger than in sea-level cities, rapidly breaking down clear coat polymers, fading pigments, and drying out leather and plastic interiors. When you combine this solar bombardment with abrasive high-desert dust, mineral-heavy sprinkler overspray, and acidic monsoon runoff, your vehicle faces a perfect storm of environmental degradation that accelerates wear far beyond national averages.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Automated tunnel washes and quick-lube drive-throughs only remove loose surface dirt. They do nothing to address bonded contaminants, oxidized clear coats, embedded cabin allergens, or hard water etching. In fact, recycled wash water and stiff bristle brushes often introduce heavy swirl marks and micro-scratches that dull your paint over time. Our professional mobile detailing process utilizes a strict two-bucket hand wash, clay bar decontamination, hot-water interior extraction, and pH-balanced conditioning to safely restore and protect every surface.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Drivers across the ABQ metro rely on our services for vastly different reasons. Northeast Heights families need deep sanitization for kid spills and pet hair. Nob Hill and University area residents battle heavy cottonwood pollen and street parking grime. Daily commuters on I-25 and I-40 deal with relentless brake dust, highway tar, and road film. Regardless of your routine, our on-site teams deliver customized care that fits your schedule and protects your investment against New Mexico\'s unique environmental stressors.
              </p>

              <div className="mt-8 bg-blue-50 p-6 rounded-xl border-l-4 border-[#0052CC]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Essential Maintenance Tips for Albuquerque Car Owners
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Rinse immediately after monsoon storms.</strong> Mud and acidic rainwater contain dissolved minerals that bond to clear coat within hours in ABQ\'s dry heat. A quick rinse prevents permanent water spot etching.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Keep a clean microfiber towel in your cabin.</strong> High-desert dust contains fine silica particles. Wiping dashboards and screens with dry hands or paper towels acts like sandpaper. A lightly dampened microfiber cloth safely lifts dust without scratching.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Use a reflective windshield sun shade daily.</strong> Interior cabin temperatures can exceed 140°F on clear summer days. Prolonged heat cycling cracks dashboards, fades upholstery, and dries out leather seals. A $20 shade extends interior life by years.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Exterior Mobile Detailing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Expert Exterior Mobile Detailing in Albuquerque | Paint Protection & Decontamination
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Your vehicle\'s exterior is the first line of defense against Albuquerque\'s harsh environment. Our exterior detailing process goes far beyond a basic soap-and-water rinse. We begin with a pH-neutral foam wash to safely lift loose grit, followed by a meticulous clay bar treatment that extracts embedded industrial fallout, brake dust, and silica particles from your clear coat. We then refine the surface with a light enhancement polish to restore optical clarity and depth, finishing with a premium wax or synthetic sealant that creates a hydrophobic barrier against UV rays and monsoon moisture.
                </p>
                <div className="space-y-4">
                  {[
                    'Professional two-bucket hand wash with grit guards & pH-balanced shampoo',
                    'Clay bar decontamination to remove bonded pollutants & industrial fallout',
                    'Light paint enhancement polish to reduce swirls and restore gloss',
                    'Premium carnauba wax or synthetic sealant for 3-6 month UV defense',
                    'Deep wheel, tire, and wheel-well cleaning with iron remover',
                    'Streak-free window and mirror polishing inside and out',
                    'Headlight restoration and trim conditioning available upon request',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Protect Your Factory Finish & Maximize Resale Value
                </h3>
                <p className="text-gray-700 mb-6">
                  Consistent exterior detailing isn\'t just about aesthetics—it\'s a critical preservation strategy. Unprotected clear coats rapidly oxidize under New Mexico\'s sun, leading to irreversible fading, micro-cracking, and costly repaints. By maintaining a sacrificial protective layer, you shield your paint from chemical etching, simplify weekly washing, and preserve thousands in resale value. For drivers seeking multi-year defense, our professional ceramic coating packages offer the ultimate hydrophobic shield against desert grit and hard water.
                </p>
                <Link
                  to="/ceramic-coating"
                  className="text-[#0052CC] font-semibold hover:underline"
                >
                  Learn about Ceramic Coating Protection →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Interior Mobile Detailing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Restore Cabin Health, Comfort & Air Quality
                </h3>
                <p className="text-gray-700 mb-6">
                  Albuquerque\'s dry climate and constant dust circulation mean your vehicle\'s interior acts as a filter for pollen, silica, pet dander, and road grime. Over time, these contaminants embed deep into carpet fibers, upholstery, and AC vents, triggering allergies and creating stubborn odors. Our interior detailing utilizes commercial-grade HEPA vacuuming, hot-water extraction, and enzyme-based cleaners to neutralize bacteria and lift stains at the source. We follow up with UV-protectant conditioning on all plastics and leather to prevent sun-induced cracking and fading.
                </p>
                <Link
                  to="/service/interior-detailing"
                  className="text-[#0052CC] font-semibold hover:underline"
                >
                  View Interior Detailing Services →
                </Link>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Deep Interior Mobile Detailing for Albuquerque Drivers | Sanitization & Odor Removal
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you\'re managing daily school runs, transporting pets, or simply want to reclaim that new-car freshness, our interior specialists deliver meticulous, surface-by-surface restoration. We disassemble floor mats for separate shampooing, steam-clean crevices and cup holders, condition leather seats to restore suppleness, and polish all glass to optical clarity. Every cabin we service leaves sanitized, deodorized, and protected against the next season of desert dust.
                </p>
                <div className="space-y-4">
                  {[
                    'Complete HEPA vacuuming of carpets, seats, trunk, and hard-to-reach crevices',
                    'Hot-water extraction & shampooing for fabric seats and floor mats',
                    'pH-balanced leather cleaning followed by premium conditioning treatment',
                    'Dashboard, console, and door panel detailing with UV protectant',
                    'Steam cleaning of vents, cup holders, and tight interior seams',
                    'Streak-free interior and exterior window polishing',
                    'Enzyme-based odor neutralization for pets, smoke, and food spills',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Detailing Packages */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Professional Mobile Detailing Packages for the Albuquerque Metro Area
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the protection tier that matches your driving habits, parking situation, and maintenance goals. Every package is performed at your location using commercial-grade equipment, pH-safe chemistry, and meticulous hand techniques. No shortcuts, no automated brushes, just consistent showroom results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#0052CC] transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Full Refresh</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-600">Essential</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Ideal for daily drivers and busy professionals who need a fast, thorough reset. Covers essential interior vacuuming, surface wiping, exterior hand wash, wheel cleaning, and a quick wax layer to maintain baseline protection between deeper details.
                </p>
                <button
                  onClick={openBookingModal}
                  className="w-full bg-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003D99] transition-all"
                >
                  Book Now
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#0052CC]">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Gold Standard</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-600">Most Popular</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Our most-booked package for a reason. Delivers a comprehensive inside-out restoration including double vacuuming, clay bar decontamination, plastic conditioning, and a premium 3-month wax sealant. Perfect for families, commuters, and pre-sale preparation.
                </p>
                <button
                  onClick={openBookingModal}
                  className="w-full bg-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003D99] transition-all"
                >
                  Book Now
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#0052CC] transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Masterpiece Detail</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-600">Ultimate</span>
                </div>
                <p className="text-gray-600 mb-6">
                  The definitive inside-out overhaul. Includes full carpet and seat shampooing, trunk detailing, paint enhancement polishing, and long-lasting protective wax. Designed for vehicles that have seen heavy use, road trips, or need maximum resale presentation.
                </p>
                <button
                  onClick={openBookingModal}
                  className="w-full bg-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003D99] transition-all"
                >
                  Book Now
                </button>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/"
                className="text-[#0052CC] font-semibold hover:underline text-lg"
              >
                View All Packages & Details →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Mobile Auto Detailing FAQs for Albuquerque Drivers
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
              Schedule Professional Mobile Auto Detailing in Albuquerque Today
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Stop wasting weekends in shop lobbies or risking your paint at automated tunnels. Our licensed, insured, and fully self-contained mobile units bring precision detailing, deep interior sanitization, and long-term paint protection directly to your driveway. Experience consistent, showroom-quality results without rearranging your schedule.
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
      </main>
    </>
  );
}
