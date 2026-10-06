import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Sparkles, Users, Dog, Coffee } from 'lucide-react';
import SEO from '../components/SEO';
import { useBookingModal } from '../App';

export default function InteriorCarDetailingAlbuquerquePage() {
  const { openBookingModal } = useBookingModal();

  const faqs = [
    {
      question: 'How long does professional interior detailing take in Albuquerque?',
      answer: 'Service duration depends on your vehicle\'s condition and selected package. A standard interior refresh takes 1-2 hours, while our deep shampooing, stain extraction, and leather conditioning services typically require 3-4 hours. Because we use commercial-grade hot-water extraction equipment, we remove the majority of moisture during the process. Surfaces will be slightly damp but never soaking, and full drying typically takes 2-4 hours depending on Albuquerque\'s temperature and humidity levels.',
    },
    {
      question: 'Can you completely remove embedded pet hair from carpets and seats?',
      answer: 'Absolutely. Pet hair is one of the most common requests we handle. Standard vacuums simply glide over embedded fur, but our technicians use specialized rubber extraction tools, stiff-bristle agitation brushes, and high-suction commercial vacuums to lift and remove hair woven deep into carpet fibers and upholstery seams. We also treat the cabin with enzyme-based deodorizers to neutralize pet dander and lingering odors at the source.',
    },
    {
      question: 'Do you remove tough stains and persistent odors?',
      answer: 'Yes. We utilize a multi-step stain extraction process tailored to the contaminant type. Organic spills like coffee, food, or pet accidents are treated with enzyme-based cleaners that break down proteins and sugars, while ink, grease, and dye transfers are addressed with pH-balanced solvent treatments. For odors, we don\'t mask them with heavy fragrances. Instead, we offer professional ozone generation that circulates through the cabin and HVAC system, neutralizing smoke, mildew, and biological odors at a molecular level.',
    },
    {
      question: 'How often should I schedule interior detailing in Albuquerque\'s climate?',
      answer: 'Due to Albuquerque\'s fine desert dust, intense UV exposure, and seasonal monsoon humidity, we recommend professional interior detailing every 3-4 months for most drivers. If you have children, transport pets regularly, or commute daily on I-25/I-40, scheduling every 2-3 months is highly beneficial to prevent permanent fabric staining, leather drying, and allergen buildup. Garage-kept vehicles with light use can safely extend to every 4-6 months.',
    },
    {
      question: 'Do you clean and condition leather seats safely?',
      answer: 'Yes, and it\'s critical in New Mexico\'s high-desert environment. Albuquerque\'s low humidity and 300+ days of sun rapidly dry out factory leather, leading to cracking, fading, and stiffening. We use pH-neutral leather cleaners to safely lift dirt and body oils from the pores, followed by a premium, non-greasy conditioner infused with UV blockers. This restores factory suppleness, prevents premature aging, and maintains a matte, OEM-correct finish.',
    },
    {
      question: 'Will my car interior be wet after shampooing and extraction?',
      answer: 'Our commercial hot-water extractors simultaneously inject cleaning solution and vacuum it back out at high pressure, removing over 85% of moisture instantly. Your carpets and seats will feel cool and slightly damp to the touch, but never wet. We recommend cracking windows or running the AC on fresh air mode for 30-60 minutes post-service to accelerate evaporation. In Albuquerque\'s dry climate, cabins are typically completely dry within 2-3 hours.',
    },
    {
      question: 'Can you eliminate heavy smoke or mildew smells permanently?',
      answer: 'Yes. Surface cleaning alone cannot remove smoke resin or mildew spores that have penetrated headliners, carpet padding, and AC evaporator cores. Our ozone treatment generates O3 gas that circulates through every vent, seam, and fabric layer, oxidizing and neutralizing odor-causing compounds at the molecular level. The process takes 30-45 minutes, leaves zero chemical residue, and permanently eliminates smoke, pet, and musty mildew odors when combined with our deep extraction service.',
    },
    {
      question: 'Do you perform all interior services at my location?',
      answer: 'Yes, every interior detailing, stain removal, and ozone treatment we offer is performed as a fully mobile, on-site service. Our self-contained units carry independent water tanks, power generators, commercial extractors, and climate-controlled chemical storage. We only need a flat parking spot at your home, office, or apartment complex. No hoses, no electrical hookups, and zero disruption to your daily routine.',
    },
  ];

  return (
    <>
      <SEO
        title="Professional Interior Car Detailing Albuquerque NM | Mobile Deep Cleaning & Odor Removal | DK Mobile Wash"
        description="Expert mobile interior detailing in Albuquerque, NM. Deep shampooing, pet hair removal, stain extraction & ozone odor treatment at your home. Licensed & insured. Call (505) 604-8058"
        keywords="interior car detailing Albuquerque, mobile interior cleaning ABQ, pet hair removal car Albuquerque, car upholstery shampooing Rio Rancho, odor elimination Corrales, on-site interior sanitization"
        canonical="https://www.dkmobilewash.com/interior-car-detailing-albuquerque"
      />

      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Interior Car Detailing in Albuquerque, NM | Mobile Deep Cleaning & Sanitization
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-4">
                DK Mobile Wash delivers dealership-quality <strong>mobile interior detailing</strong> directly to your home, office, or apartment anywhere in the Albuquerque metro area. Our licensed technicians utilize commercial-grade hot-water extraction, HEPA filtration, and enzyme-based cleaners to eliminate embedded dust, allergens, pet hair, and stubborn odors without you ever leaving your driveway.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Explore our comprehensive{" "}
                <Link to="/service/interior-detailing" className="text-white underline hover:text-gray-200 font-semibold">
                  interior detailing service page
                </Link>{" "}
                for step-by-step process breakdowns, or review our full{" "}
                <Link to="/service/mobile-auto-detailing" className="text-white underline hover:text-gray-200 font-semibold">
                  mobile auto detailing packages
                </Link>{" "}
                to find the perfect protection tier. For transparent, no-hidden-fee pricing, visit our{" "}
                <Link to="/car-detailing-prices-albuquerque" className="text-white underline hover:text-gray-200 font-semibold">
                  Albuquerque detailing prices guide
                </Link>
                .
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

        {/* Common Interior Problems */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Common Interior Challenges We Solve for Albuquerque Drivers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From family spills and embedded pet hair to abrasive red rock dust and monsoon humidity, Albuquerque metro vehicles face unique cabin contaminants. Our <strong>on-site interior sanitization</strong> protocols are engineered to handle them all safely and effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                <Users className="w-12 h-12 text-[#0052CC] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Family Vehicles & Daily Chaos</h3>
                <p className="text-gray-600">
                  Juice spills, crumbled snacks, sticky console surfaces, and ground-in dirt from sports gear. We perform deep shampooing, stain extraction, and hospital-grade sanitization to restore a hygienic, fresh-smelling cabin that's safe for kids and passengers.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                <Dog className="w-12 h-12 text-[#0052CC] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pet Owners & Fur Removal</h3>
                <p className="text-gray-600">
                  Pet hair weaves deep into carpet fibers and upholstery seams, while muddy paws and dander trigger allergies. Our specialized rubber extraction tools and high-suction commercial vacuums lift embedded fur, followed by enzyme deodorizers that neutralize pet odors at the source.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                <Coffee className="w-12 h-12 text-[#0052CC] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Commuters & Road Grime</h3>
                <p className="text-gray-600">
                  Coffee spills, fast-food grease, highway dust, and general wear from I-25/I-40 commutes rapidly degrade cabin aesthetics. We restore professional-grade cleanliness, condition high-touch surfaces, and eliminate lingering odors to keep your daily driver feeling brand new.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enriched Local Content */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Albuquerque’s High-Desert Climate Demands Professional Interior Detailing
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Interior detailing in Albuquerque isn't a one-size-fits-all service. Our high-desert environment introduces a unique set of contaminants that rapidly degrade cabin materials if left unaddressed. Fine silica dust from the West Mesa and Bosque areas infiltrates every crevice—sliding under seats, clogging HVAC vents, and grinding into carpet fibers with every step. Combined with New Mexico's intense UV radiation, which rapidly fades dashboards, cracks vinyl, and dries out factory leather, your interior faces accelerated aging compared to moderate climates. Add seasonal monsoon humidity, and you create the perfect environment for musty mildew, bacterial growth, and stubborn odor retention.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our professional interior detailing process is engineered specifically for these local stressors. We begin with a meticulous HEPA-grade vacuuming of all surfaces, seams, and hard-to-reach crevices. Next, we utilize commercial hot-water extraction to flush embedded dirt, allergens, and organic stains from carpets and upholstery. Leather surfaces receive pH-neutral cleaning followed by UV-blocking conditioners to restore suppleness and prevent sun-induced cracking. Every plastic, vinyl, and console surface is treated with non-greasy protectants, and all glass is polished to optical clarity. For persistent biological or smoke odors, we deploy medical-grade ozone treatment that neutralizes contaminants at a molecular level rather than masking them with heavy fragrances.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every step is performed at your location in Albuquerque, Rio Rancho, Corrales, or anywhere across the metro area. Our self-contained mobile units carry independent water, power, and climate-controlled chemical storage, meaning zero utility hookups and zero disruption to your schedule. Most comprehensive interior details take 2-4 hours, allowing you to work, relax, or manage family routines while we restore your cabin to showroom condition.
              </p>

              <div className="mt-8 bg-blue-50 p-6 rounded-xl border-l-4 border-[#0052CC]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Essential Cabin Maintenance Tips for Albuquerque Owners
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Wipe dashboards weekly with a damp microfiber cloth.</strong> Albuquerque's 300+ days of sun rapidly degrade unprotected vinyl and plastic. Dry wiping acts like sandpaper; a lightly dampened cloth safely lifts dust without inducing micro-scratches or accelerating UV fading.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Install all-weather rubber floor mats year-round.</strong> High-desert trail dust, monsoon mud, and road salt rapidly destroy factory carpeting. Removable mats trap 90% of contaminants and can be rinsed in seconds, preserving your vehicle's resale value and cabin air quality.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Treat spills within 24 hours.</strong> Cloth upholstery and carpet padding act like sponges. In ABQ's dry heat, liquids evaporate quickly, leaving behind concentrated sugars, dyes, and proteins that bond permanently to fibers. Immediate blotting prevents costly extraction later.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Interior Cleaning */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Deep Interior Cleaning & Hot-Water Extraction for Albuquerque Families
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Family vehicles endure constant abuse: spilled drinks, crumbled snacks, sports equipment dirt, and daily foot traffic. Surface vacuuming only removes what's visible, leaving behind embedded allergens, bacteria, and stain-causing residues deep within carpet padding and seat foam. Our mobile deep cleaning service utilizes commercial-grade extraction equipment to flush contaminants from the inside out, restoring a hygienic, fresh-smelling environment without you ever coordinating shop drop-offs or ride shares.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Complete HEPA vacuuming of seats, carpets, trunk, and tight crevices',
                    'Commercial hot-water shampooing & extraction for fabric surfaces',
                    'Targeted stain pre-treatment and enzymatic spot removal',
                    'Dashboard, console, and door panel detailing with UV protectant',
                    'pH-balanced leather cleaning followed by premium conditioning',
                    'Streak-free interior and exterior window polishing',
                    'Trunk cargo area vacuuming, wiping, and organization',
                    'HVAC vent dusting, crevice tool detailing, and trim restoration',
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
                  Book Deep Cleaning
                </button>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <Sparkles className="w-12 h-12 text-[#0052CC] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Professional Deep Cleaning Matters
                </h3>
                <p className="text-gray-700 mb-4">
                  Routine wiping and basic vacuuming only address surface-level debris. Over time, fine dust, skin cells, food particles, and moisture sink deep into carpet fibers and seat foam, creating a breeding ground for bacteria, dust mites, and allergens. Our hot-water extraction process injects heated, pH-safe cleaning solution under high pressure, then immediately vacuums it back out, lifting embedded contaminants that household vacuums simply cannot reach.
                </p>
                <p className="text-gray-700 mb-6">
                  Scheduling a deep interior detail every 3-6 months prevents permanent fabric degradation, eliminates hidden odor sources, and maintains a healthy cabin environment for your family. It's one of the most cost-effective ways to preserve your vehicle's interior resale value and ensure every drive feels fresh and comfortable.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Pro Tip:</strong> Schedule interior detailing in the morning on clear, sunny days. Albuquerque's low humidity and warm temperatures dramatically accelerate drying times, allowing your cabin to be completely ready for use within 2-3 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stain and Odor Removal */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Stain Extraction & Targeted Treatment
                </h3>
                <p className="text-gray-700 mb-6">
                  Not all stains are created equal, and using the wrong cleaner can permanently set a spill or discolor your upholstery. Our technicians are trained in fabric chemistry and utilize specialized, pH-balanced solutions tailored to each contaminant type. From tannin-based coffee spills to protein-heavy pet accidents and oil-based grease marks, we safely break down and extract stains without damaging factory dyes or weakening fabric fibers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0" />
                    <span className="text-gray-700">Coffee, soda, and beverage tannin stains</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0" />
                    <span className="text-gray-700">Food grease, dairy, and organic spills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0" />
                    <span className="text-gray-700">Ink, marker, and dye transfer marks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0" />
                    <span className="text-gray-700">Pet urine, vomit, and biological accidents</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0" />
                    <span className="text-gray-700">Mud, clay, and heavy dirt buildup</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Molecular Odor Elimination for Daily Drivers & Resale Prep
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're preparing your vehicle for private sale, trade-in, or simply want to reclaim a fresh cabin for your daily commute, professional odor removal makes a dramatic difference in comfort and perceived value. Masking smells with heavy air fresheners only creates a worse, cloying mixture over time. Our approach targets the root cause.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We utilize medical-grade enzyme treatments that digest organic matter at a molecular level, permanently neutralizing odors rather than covering them up. For severe cases involving smoke, mildew, or long-term pet exposure, we deploy commercial ozone generators that circulate O3 gas through every vent, seam, and fabric layer, oxidizing odor-causing compounds and leaving behind a genuinely clean, neutral scent.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Professional Ozone Odor Treatment</h4>
                  <p className="text-gray-700 text-sm">
                    Stubborn odors from cigarette smoke, wet carpets, or biological decay penetrate deep into headliners, carpet padding, and AC evaporator cores. Our 30-45 minute ozone treatment safely neutralizes these compounds at the source, leaving zero chemical residue and restoring factory-fresh cabin air quality.
                  </p>
                </div>
                <button
                  onClick={openBookingModal}
                  className="bg-[#0052CC] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-lg"
                >
                  Schedule Stain Removal
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Interior Maintenance */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Interior Maintenance Schedules for Albuquerque & Rio Rancho Commuters
              </h2>
              <p className="text-xl text-gray-600">
                Daily commuting, family routines, and New Mexico's dry climate accelerate interior wear. Following a structured maintenance schedule preserves fabric integrity, prevents permanent staining, and maximizes your vehicle's long-term resale value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Service Frequency</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Every 2-3 Months:</p>
                    <p className="text-gray-600 text-sm">
                      Ideal for daily commuters, families with young children, pet owners, or anyone who spends significant hours in their vehicle. Frequent service prevents embedded dirt from grinding into fibers and causing irreversible wear.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Every 4-6 Months:</p>
                    <p className="text-gray-600 text-sm">
                      Perfect for light users, garage-kept vehicles, or drivers without kids or pets. This interval maintains baseline cleanliness and protects against seasonal dust and UV degradation.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Before Private Sale or Trade-In:</p>
                    <p className="text-gray-600 text-sm">
                      A professionally detailed interior significantly boosts first impressions, eliminates buyer objections, and can increase resale value by $500-$1,500 depending on the vehicle class and market conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Between Professional Details</h3>
                <div className="space-y-3">
                  {[
                    'Vacuum high-traffic areas weekly to prevent abrasive dust from grinding into carpet fibers.',
                    'Blot spills immediately with a clean microfiber towel. Never rub, as this pushes liquids deeper into padding.',
                    'Use heavy-duty all-weather floor mats to trap mud, salt, and trail dust before it reaches factory carpet.',
                    'Keep a dedicated interior microfiber cloth in your console for quick dashboard and screen wipes.',
                    'Avoid eating messy or greasy foods in the cabin to prevent long-term odor retention and fabric staining.',
                    'Deploy a reflective windshield sun shade daily to reduce cabin temperatures and slow UV-induced dashboard cracking.',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/"
                className="text-[#0052CC] font-semibold hover:underline text-lg"
              >
                View All Mobile Detailing Packages →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions About Interior Car Detailing in Albuquerque
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
              Schedule Professional Mobile Interior Detailing in Albuquerque Today
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Stop breathing in recycled dust, allergens, and lingering odors. Our licensed, insured, and fully self-contained mobile units bring commercial-grade deep cleaning, stain extraction, and ozone odor treatment directly to your home, office, or apartment. Zero shop visits, zero utility hookups, and guaranteed showroom-fresh results.
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
