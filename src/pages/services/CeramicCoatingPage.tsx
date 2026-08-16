import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { useBookingModal } from '../../App';
import CeramicCoatingDiagram from '../../components/CeramicCoatingDiagram';

export default function CeramicCoatingPage() {
  const { openBookingModal } = useBookingModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonialImages = [
    'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/reviews/1.png',
    'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/reviews/2.png',
    'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/reviews/3.png',
    'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/reviews/4.png',
    'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/reviews/5.png',
    'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/reviews/6.png'
  ];

  const nextTestimonial = () => { setCurrentTestimonial((prev) => (prev + 1) % testimonialImages.length); };
  const prevTestimonial = () => { setCurrentTestimonial((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length); };

  const scrollToPackages = () => {
    const packagesSection = document.getElementById('ceramic-packages');
    if (packagesSection) { packagesSection.scrollIntoView({ behavior: 'smooth' }); }
  };

  const toggleFaq = (index: number) => { setOpenFaqIndex(openFaqIndex === index ? null : index); };

  const faqs = [
    {
      question: 'What is a ceramic coating and how does it work?',
      answer: 'A professional ceramic coating is a liquid polymer that chemically bonds with your vehicle\'s clear coat. Once cured, it creates a semi-permanent hydrophobic coating surface that is significantly harder than wax and highly UV-resistant. Water beads up and rolls off, taking dirt and contaminants with it. The coating sits on top of your paint and absorbs environmental damage so your factory paint doesn\'t have to.'
    },
    {
      question: 'How long does a ceramic coating last?',
      answer: 'Our Level 1 coating carries a 3-year base warranty, or a 10-year warranty if maintained with yearly appointments. Level 2 offers a 5-year base warranty, or an unlimited warranty with annual maintenance. Longevity depends heavily on proper washing routines and avoiding harsh automatic car washes. For drivers searching for ceramic coating services near me, our warranty-backed packages deliver long-term value.'
    },
    {
      question: 'Does ceramic coating make my car scratch-proof?',
      answer: 'No. While it adds hardness and light scratch resistance, it will not prevent rock chips, key scratches, or heavy contact damage. What it does excel at is providing uv ray protection for paint, resisting chemical etching from bird droppings and water spots, and delivering self-cleaning properties that make routine washing safer and easier. For physical scratch protection, paint protection film (PPF) is the correct solution.'
    },
    {
      question: 'Do I need paint correction before ceramic coating?',
      answer: 'If your paint has swirl marks, scratches, or water spot etching, yes. Ceramic coating locks in whatever is on the surface when applied — it preserves defects, it doesn\'t hide them. We always perform a thorough surface decontamination and prep inspection before recommending a package. If correction is needed, we\'ll recommend our paint correction service first to ensure flawless results.'
    },
    {
      question: 'What type of maintenance is required after ceramic coating?',
      answer: 'Ceramic coatings are lower maintenance than uncoated paint, but they still require regular washing. Use pH-neutral soap, avoid automatic tunnel washes with abrasive brushes, and dry properly to prevent water spots. A yearly maintenance appointment extends your warranty and keeps the hydrophobic coating surface performing at its peak. Avoid abrasive polishes or harsh chemicals on coated panels.'
    },
    {
      question: 'Is ceramic coating worth it in Albuquerque?',
      answer: 'For most Albuquerque drivers, absolutely. The albuquerque high desert climate accelerates UV fading, dust abrasion, and hard water etching faster than most U.S. regions. A professional ceramic coating resists all three. Vehicles parked outside year-round in ABQ see measurable protection, easier washing, and long-term paint preservation. It\'s one of the highest-ROI investments in car detailing ceramic coating available today.'
    }
  ];

  return (
    <>
      <SEO
        title="Professional Ceramic Coating Albuquerque | 5+ Year Protection | DK Mobile Wash"
        description="Top-rated ceramic coating services in Albuquerque, NM. 10H+ hydrophobic protection against UV, dust & hard water. Mobile service at your door! Free quote: (505) 604-8058"
        keywords="ceramic coating Albuquerque, ceramic coating services, car detailing ceramic coating, mobile ceramic coating near me, ceramic coating services near me, gtechniq crystal serum Albuquerque"
        canonical="https://www.dkmobilewash.com/ceramic-coating"
      />

      <div className="min-h-screen bg-white pt-20">
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Ceramic Coating in Albuquerque, NM | Professional Paint Protection
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                A properly applied <strong>professional ceramic coating</strong> bonds chemically to your paint and forms a hard, <strong>hydrophobic coating surface</strong> that protects against UV fading, abrasive dust, and hard water spots — all critical concerns for vehicles navigating the <strong>albuquerque high desert climate</strong>. Skip the shop and get dealership-grade protection delivered to your driveway.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:5056048058" className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <button onClick={scrollToPackages} className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                  View Packages
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Ceramic Coating is Essential for Albuquerque Vehicles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/ceramic%20coating%20page/IMG_2806.jpeg" alt="Professional ceramic coating Albuquerque - paint protection application on vehicle by DK Mobile Wash" className="rounded-2xl shadow-xl w-full h-auto object-cover" loading="lazy" />
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Ceramic coating is a liquid polymer that chemically bonds to your paint's clear coat. Once cured, it forms a semi-permanent layer that sits on top of your paint and takes the abuse from the environment so your factory paint doesn't have to. It's significantly harder than wax, doesn't wash away, and delivers <strong>self-cleaning properties</strong> that last years — not weeks.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  In Albuquerque's climate, this matters. Intense UV exposure fades paint. Dust and grit scratch clear coats. Hard water from sprinklers leaves mineral deposits that etch into unprotected surfaces. A quality coating resists all of these while providing superior <strong>uv ray protection for paint</strong>. For flawless results, we always recommend{" "}
                  <Link to="/service/paint-correction" className="text-[#0052CC] hover:underline font-semibold">
                    paint correction
                  </Link>{" "}
                  before any coating application — if you coat over defects, they're preserved under the coating, not hidden.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We use <strong>Gtechniq Crystal Serum</strong>, a professional-grade coating trusted by certified detailers worldwide. It's not a consumer spray product. Explore our{" "}
                  <Link to="/paint-enhancement-protection-albuquerque" className="text-[#0052CC] hover:underline font-semibold">
                    paint enhancement and protection services
                  </Link>{" "}
                  or check our{" "}
                  <Link to="/car-detailing-prices-albuquerque" className="text-[#0052CC] hover:underline font-semibold">
                    Albuquerque detailing prices
                  </Link>{" "}
                  for transparent package pricing.
                </p>
                <button onClick={openBookingModal} className="bg-[#0052CC] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#003D99] transition-all">
                  Get a Free Estimate
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="ceramic-packages" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Premium Ceramic Coating Packages in Albuquerque
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Whether you're searching for <strong>ceramic coating services near me</strong> or want long-term <strong>car detailing ceramic coating</strong> protection, our warranty-backed packages are engineered for New Mexico's harsh climate. Every package includes proper <strong>surface decontamination and prep</strong> to ensure maximum bonding and durability.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Level 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="relative h-64">
                  <img src="https://detailing.com/cdn/shop/files/CSL_2_1000x563.jpg?v=1708714987" alt="Level 1 ceramic coating Albuquerque - 3 to 10 year paint protection NM" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Level 1 Coating</h3>
                  <div className="flex gap-4 mb-6">
                    <button onClick={openBookingModal} className="flex-1 bg-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003D99] transition-all">Get Quote</button>
                    <a href="tel:5056048058" className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-all text-center">Call Now</a>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">THIS PACKAGE INCLUDES:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><span className="mr-2">•</span><span>Level 1 paint correction</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Single application of Gtechniq Crystal Serum ceramic to paint and body work</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Wheel faces only coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Windshield coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>All automotive glass coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Exterior vinyl and plastics coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Headlights and taillights coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Includes warranty</span></li>
                    <li className="flex items-start pl-4"><span className="mr-2">◦</span><span className="text-sm">3-year base warranty or 10-year warranty if maintained with yearly maintenance appointment</span></li>
                  </ul>
                </div>
              </div>
              {/* Level 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="relative h-64">
                  <img src="https://www.corvetteblogger.com/images/content/uploads/2022/01/012622_2.jpg" alt="Level 2 ceramic coating Albuquerque - 5 year to unlimited paint protection NM" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Level 2 Coating</h3>
                  <div className="flex gap-4 mb-6">
                    <button onClick={openBookingModal} className="flex-1 bg-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003D99] transition-all">Get Quote</button>
                    <a href="tel:5056048058" className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-all text-center">Call Now</a>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">THIS PACKAGE INCLUDES:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><span className="mr-2">•</span><span>Level 1 paint correction</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Single application of Gtechniq Crystal Serum ceramic to paint and body work</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Wheel faces only coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Windshield coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>All automotive glass coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Exterior vinyl and plastics coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Headlights and taillights coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Includes warranty</span></li>
                    <li className="flex items-start pl-4"><span className="mr-2">◦</span><span className="text-sm">5-year base warranty or Infinite warranty if maintained with yearly maintenance appointment</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Add-On Ceramic Coating Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <img src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/ceramic%20coating%20page/interior_ceramic_coating_albuquerque.webp" alt="Interior ceramic coating Albuquerque - leather and vinyl paint protection NM" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Interior Coating</h3>
                  <div className="flex gap-3 mb-6">
                    <button onClick={openBookingModal} className="flex-1 bg-[#0052CC] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#003D99] transition-all">Get Quote</button>
                    <a href="tel:5056048058" className="flex-1 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition-all text-center">Call Now</a>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xs tracking-wide">THIS PACKAGE INCLUDES:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="mr-2">•</span><span>Interior vinyl coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Interior leather surfaces coated</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>Interior fabric surfaces coated</span></li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <img src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/ceramic%20coating%20page/911%20st%20magneisum%20wheel%20set%20porsche%20gt3%20992.jpg" alt="Wheel ceramic coating Albuquerque - brake dust protection NM" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wheel Coating</h3>
                  <div className="flex gap-3 mb-6">
                    <button onClick={openBookingModal} className="flex-1 bg-[#0052CC] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#003D99] transition-all">Get Quote</button>
                    <a href="tel:5056048058" className="flex-1 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition-all text-center">Call Now</a>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    With this service, your vehicle's wheels are meticulously cleaned and coated for stronger protection against brake dust and road grime.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-3">
                    By default, we coat the wheel faces. You can also choose an optional full wheel coating, where the wheels are removed, thoroughly cleaned, and coated on the faces, barrels, and calipers. When removal is selected, wheels are carefully reinstalled and torqued to factory specifications, helping maintain protection and performance.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <img src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/ceramic%20coating%20page/windshield-ceramic-coating-albuquerque.jpg" alt="Windshield ceramic coating Albuquerque - glass protection for rain visibility NM" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Windshield Coating</h3>
                  <div className="flex gap-3 mb-6">
                    <button onClick={openBookingModal} className="flex-1 bg-[#0052CC] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#003D99] transition-all">Get Quote</button>
                    <a href="tel:5056048058" className="flex-1 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition-all text-center">Call Now</a>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A protective glass coating that makes rain bead up and roll off your windshield for clearer visibility. It helps your glass stay cleaner longer, reduces glare, and makes bugs and dirt easier to remove.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose DK Mobile Wash for Ceramic Coating?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div><CeramicCoatingDiagram /></div>
              <div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Your vehicle's paint system consists of multiple layers working together. From bottom to top: the metal body panel, primer coat for adhesion, color base coat for appearance, and clear coat for protection. Each layer serves a critical purpose in maintaining your vehicle's finish.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ceramic coating doesn't replace your clear coat—it adds a sacrificial protective layer on top of it. This advanced polymer creates a chemical bond with the clear coat, forming a harder, more durable surface that takes the abuse instead of your factory paint.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The coating's <strong>hydrophobic coating surface</strong> causes water to bead up and sheet off, taking dirt and contaminants with it. This means environmental threats like acid rain, bird droppings, and industrial fallout sit on the coating rather than etching into your clear coat, making your vehicle easier to wash and maintain. Pair this with routine <Link to="/service/exterior-detailing" className="text-[#0052CC] hover:underline font-semibold">exterior detailing</Link> for maximum longevity.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-[#0052CC] p-6 rounded-r-lg">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Key Benefits:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start"><span className="mr-2 text-[#0052CC]">•</span><span>Helps reduce water spots, bird dropping stains, and fallout etching</span></li>
                      <li className="flex items-start"><span className="mr-2 text-[#0052CC]">•</span><span>Adds a slick surface that makes washing and drying easier</span></li>
                      <li className="flex items-start"><span className="mr-2 text-[#0052CC]">•</span><span>Helps maintain gloss and clarity of the clear coat</span></li>
                      <li className="flex items-start"><span className="mr-2 text-[#0052CC]">•</span><span>Provides <strong>uv ray protection for paint</strong> to prevent oxidation and fading</span></li>
                      <li className="flex items-start"><span className="mr-2 text-[#0052CC]">•</span><span>Creates a sacrificial layer that protects your factory paint investment</span></li>
                    </ul>
                  </div>
                  <div className="text-center pt-4">
                    <button onClick={scrollToPackages} className="text-[#0052CC] font-bold hover:text-[#003D99] transition-colors underline text-lg">
                      See Ceramic Coating Packages →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              The Ceramic Coating Application Process
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1: Surface Preparation &amp; Decontamination</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ceramic coating is not a spray-and-wipe product. It requires thorough <strong>surface decontamination and prep</strong>, clay bar treatment, and in most cases, a paint correction step before application. Skipping prep is the main reason DIY coatings fail or look uneven. Our <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] hover:underline font-semibold">mobile auto detailing</Link> teams follow a strict decontamination protocol to ensure perfect bonding.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2: Panel-by-Panel Coating Application</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Once the surface is ready, the coating is applied panel by panel by hand and allowed to flash and cure. The vehicle needs to stay dry for the first 24-48 hours after application. After that, the coating hardens further over several weeks as it finishes curing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3: Curing &amp; Final Results</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After curing, the coating delivers powerful <strong>self-cleaning properties</strong> — water beads and rolls off, pulling dirt with it. Washes become easier, and the surface stays cleaner longer. For Albuquerque vehicles parked outside, this also means dust doesn't stick as aggressively to the paint.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ceramic Coating Testimonials</h2>
            <div className="relative">
              <img src={testimonialImages[currentTestimonial]} alt={`Ceramic coating Albuquerque customer review ${currentTestimonial + 1} - DK Mobile Wash paint protection NM`} className="w-full h-auto" loading="lazy" />
              <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all group" aria-label="Previous testimonial">
                <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-[#0052CC]" />
              </button>
              <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all group" aria-label="Next testimonial">
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#0052CC]" />
              </button>
              <div className="flex justify-center gap-2 mt-4">
                {testimonialImages.map((_, index) => (
                  <button key={index} onClick={() => setCurrentTestimonial(index)} className={`h-2 rounded-full transition-all ${index === currentTestimonial ? 'w-8 bg-[#0052CC]' : 'w-2 bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to testimonial ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get a Ceramic Coating Quote in Albuquerque</h2>
            <div className="bg-blue-50 border-l-4 border-[#0052CC] p-8 rounded-r-2xl mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Pricing varies based on vehicle size, paint condition, and which package you choose. A paint correction may need to happen before the coating can be applied — if so, we'll tell you upfront so there are no surprises.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Reach out for a free estimate or to ask questions about the process. We serve Albuquerque, Rio Rancho, Corrales, and surrounding areas. You can call, or click the button below to submit a request online.
              </p>
            </div>
            <div className="text-center">
              <button onClick={openBookingModal} className="bg-[#0052CC] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105">
                Get Quote
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Common Ceramic Coating Misconceptions</h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">"Ceramic coating means I never have to wash my car"</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The coating's hydrophobic surface makes dirt less likely to bond and easier to rinse off, but the car still gets dirty. You still need to wash it — just less often and with less effort. What changes is that a coated vehicle comes cleaner with a simple rinse than an uncoated one does with a full wash.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In the <strong>albuquerque high desert climate</strong>, where dust settles on everything, regular washing is still important. The difference is you're not fighting bonded contamination every time.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">"Ceramic coating and car wax do the same thing"</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  They're not comparable. Wax sits on top of the paint and washes off in a few weeks. Ceramic coating bonds chemically to the clear coat and becomes part of the surface. It's significantly harder than wax, lasts years, and provides UV protection that wax does not.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Wax is a short-term finish product. Ceramic coating is a long-term protection product. Different purposes, different price points, different outcomes.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">"Ceramic coating will prevent scratches"</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ceramic coating is not scratch-proof. It provides some resistance to light swirl marks from washing, but it will not stop a rock chip, a key scratch, or contact damage. Anyone telling you a coated car is scratch-proof is misleading you.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What it does do: reduce wash-induced swirls, resist chemical etching, repel water spots, and slow UV degradation. Those are real benefits worth paying for. Scratch prevention is not one of them — if that's your goal, paint protection film is the right product.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">FAQs About Ceramic Coatings</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <button onClick={() => toggleFaq(index)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors">
                    <h3 className="font-bold text-gray-900 pr-4">{faq.question}</h3>
                    {openFaqIndex === index ? <ChevronUp className="w-5 h-5 text-[#0052CC] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#0052CC] flex-shrink-0" />}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-5"><p className="text-gray-700 leading-relaxed">{faq.answer}</p></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get a Ceramic Coating Quote in Albuquerque</h2>
            <p className="text-xl mb-8 text-gray-200">We serve Albuquerque, Rio Rancho, Corrales, and surrounding areas. Call or submit a request online for a free estimate.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openBookingModal} className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">Get Free Quote</button>
              <a href="tel:5056048058" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" /><span>(505) 604-8058</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
