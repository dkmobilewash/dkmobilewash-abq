import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Car, Shield, Sparkles, MapPin, CheckCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { CostGuideForm } from '../components/CostGuideForm';
import HomePagePackageSelector from '../components/HomePagePackageSelector';
import { useBookingModal } from '../App';

export default function CarDetailingPage() {
  const { openBookingModal } = useBookingModal();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://app.trustanalytica.com/api/misc/reviewsWidget/84ac9907-3672-4d7d-99a8-572b8d3e50b8';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <SEO
        title="Car Detailing Albuquerque NM | Professional Mobile Auto Detailing | DK Mobile Wash"
        description="Expert car detailing in Albuquerque, NM. 100% mobile service with self-contained units. Interior, exterior, paint correction & ceramic coating at your door. Licensed & insured. Call (505) 604-8058"
        keywords="car detailing Albuquerque, mobile auto detailing Albuquerque, professional car detailing NM, ceramic coating Albuquerque, paint correction Albuquerque, interior detailing Rio Rancho, mobile car wash Corrales"
        canonical="https://dkmobilewash.com/car-detailing"
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section - Mobile Car Wash Albuquerque */}
        <section id="mobile-car-wash-albuquerque" className="relative text-white pt-32 pb-16 overflow-hidden min-h-[700px] md:min-h-[800px] flex flex-col">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/Hero%20Image/best-deailing-in-albuquerque.png')" }}
            role="img"
            aria-label="Professional mobile car detailing service in Albuquerque metro area showcasing pristine vehicle exterior"
          >
            <img
              src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/Hero%20Image/best-deailing-in-albuquerque.png"
              alt="Mobile detailing service in Albuquerque"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-2xl mb-4">
                Car Detailing in Albuquerque, NM | 100% <strong>Mobile Auto Detailing</strong> Service
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-auto pb-12">
              <button
                onClick={openBookingModal}
                className="bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-2xl"
              >
                Get Free Quote
              </button>
              <Link
                to="/about"
                className="bg-white/95 text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-2xl text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Package Selector Section */}
        <HomePagePackageSelector onBookNow={(packageName) => {
          console.log('Selected package:', packageName);
          openBookingModal();
        }} />

        {/* Key Benefits Section */}
        <section id="why-choose-dk-mobile-wash" className="pt-16 pb-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro Paragraph */}
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                DK Mobile Wash is a 100% mobile-only <strong>professional car detailing NM</strong> service serving all of the{" "}
                <Link to="/albuquerque" className="text-[#0052CC] hover:underline font-semibold">
                  Albuquerque
                </Link>{" "}
                metro area. We bring expert{" "}
                <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] hover:underline font-semibold">
                  mobile auto detailing
                </Link>{" "}
                directly to your location in Albuquerque,{" "}
                <Link to="/rio-rancho" className="text-[#0052CC] hover:underline">
                  Rio Rancho
                </Link>
                ,{" "}
                <Link to="/corrales" className="text-[#0052CC] hover:underline">
                  Corrales
                </Link>
                , and surrounding communities. Save time with our convenient <strong>at-home car detailing service</strong> that delivers showroom-quality results without ever leaving your driveway.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#0052CC] transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-[#0052CC]" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">We Come to You: <strong>On-Site Car Cleaning</strong></h2>
                <p className="text-gray-600">
                  100% mobile car wash service throughout the Albuquerque metro area. Professional equipment brought to your home, office, or any location in <Link to="/service-areas" className="text-[#0052CC] hover:underline">Albuquerque, Rio Rancho, Corrales, and surrounding areas</Link>. Our <strong>self-contained mobile detailing unit</strong> carries independent water and power, so you never have to worry about providing utilities or hookups.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#0052CC] transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#0052CC]" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured: <strong>Trusted Mobile Detailing</strong></h2>
                <p className="text-gray-600">
                  Fully <strong>licensed insured mobile detailing</strong> company serving the Albuquerque metro area. Professional service you can trust for your vehicle's care and long-term protection, from deep <Link to="/service/interior-detailing" className="text-[#0052CC] hover:underline">interior detailing</Link> to advanced <Link to="/ceramic-coating" className="text-[#0052CC] hover:underline">ceramic coating</Link> applications.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#0052CC] transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-[#0052CC]" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Premium Results: <strong>Professional Car Detailing NM</strong></h2>
                <p className="text-gray-600">
                  Commercial-grade products and precision techniques for showroom-quality results throughout the Albuquerque metro area.{" "}
                  <Link to="/ceramic-coating" className="text-[#0052CC] hover:underline">
                    Ceramic coating
                  </Link>
                  ,{" "}
                  <Link to="/service/interior-detailing" className="text-[#0052CC] hover:underline">
                    interior detailing
                  </Link>
                  , and{" "}
                  <Link to="/service/paint-correction" className="text-[#0052CC] hover:underline">
                    paint correction
                  </Link>{" "}
                  services delivered safely to your home or office with zero compromise on quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Guide Section - Auto Detailing Prices */}
        <section id="albuquerque-detailing-cost-guide" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="lg:pr-8">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
                  Free Local Guide
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  What <strong>Mobile Auto Detailing</strong> Should Actually Cost in Albuquerque
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  This guide is based on real-world Albuquerque metro area pricing and helps local drivers avoid overpaying for <strong>mobile car wash services</strong> while steering clear of low-quality options that can damage your vehicle's clear coat and interior surfaces.
                </p>
                <p className="text-base text-gray-700 mb-6">
                  Whether you need deep{" "}
                  <Link to="/service/interior-detailing" className="text-[#0052CC] hover:underline">
                    interior detailing
                  </Link>
                  , safe{" "}
                  <Link to="/service/exterior-detailing" className="text-[#0052CC] hover:underline">
                    exterior washing
                  </Link>
                  , or complete{" "}
                  <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] hover:underline">
                    mobile auto detailing in Albuquerque
                  </Link>
                  , this guide shows you exactly what to expect at every price tier. For transparent, up-to-date pricing, visit our{" "}
                  <Link to="/car-detailing-prices-albuquerque" className="text-[#0052CC] hover:underline">
                    car detailing prices page
                  </Link>
                  .
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'What different price ranges actually include',
                    'Why cheap details usually cost more long-term',
                    'Red flags to watch for before hiring a detailer',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    const formSection = document.getElementById('cost-guide-form');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="bg-[#0052CC] text-white px-8 py-3 rounded-lg font-bold text-base hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-lg"
                >
                  Get the Free Cost Guide
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  Instant access. No spam.
                </p>
              </div>

              <CostGuideForm />
            </div>
          </div>
        </section>

        {/* Why Albuquerque Drivers Choose Us */}
        <section id="why-albuquerque-drivers-choose-dk" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Albuquerque Drivers Choose DK Mobile Wash for <strong>Car Detailing</strong>
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                {" "}
                <Link to="/albuquerque" className="text-[#0052CC] hover:underline">
                  Albuquerque
                </Link>
                {"'"}s unique <strong>high-desert climate</strong> presents specific challenges for vehicle owners. The intense New Mexico sun, constant dust from the mesa, and hard water from local irrigation systems all take a heavy toll on your vehicle{"'"}s appearance and paint condition. Our{" "}
                <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] hover:underline">
                  mobile detailing in Albuquerque
                </Link>
                {" "}brings professional, climate-specific solutions directly to your driveway, whether you{"'"}re in downtown ABQ,{" "}
                <Link to="/rio-rancho" className="text-[#0052CC] hover:underline">
                  Rio Rancho
                </Link>
                , or{" "}
                <Link to="/corrales" className="text-[#0052CC] hover:underline">
                  Corrales
                </Link>
                .
              </p>

              <p className="text-lg leading-relaxed">
                Living in the Albuquerque metro area means dealing with relentless UV exposure that fades paint and cracks dashboards, along with seasonal dust storms that leave a fine abrasive film covering your entire vehicle. Add in <strong>hard water spots</strong> from lawn sprinklers, bird droppings, and road grime from daily commutes on I-25 and I-40, and your vehicle needs far more than a basic tunnel wash. That{"'"}s where our comprehensive{" "}
                <Link to="/service/interior-detailing" className="text-[#0052CC] hover:underline">
                  interior detailing
                </Link>
                {" "}and{" "}
                <Link to="/service/exterior-detailing" className="text-[#0052CC] hover:underline">
                  exterior detailing
                </Link>
                {" "}services make a measurable difference in preservation and resale value.
              </p>

              <p className="text-lg leading-relaxed">
                For families with kids and pets, apartment and HOA residents with strict washing restrictions, or professionals who can{"'"}t spare hours sitting in a shop lobby, our <strong>mobile auto detailing service</strong> eliminates the hassle completely. We bring commercial-grade extractors, pH-balanced shampoos, and premium sealants to your home or office throughout{" "}
                <Link to="/north-valley" className="text-[#0052CC] hover:underline">
                  North Valley
                </Link>
                ,{" "}
                <Link to="/tanoan" className="text-[#0052CC] hover:underline">
                  Tanoan
                </Link>
                ,{" "}
                <Link to="/paradise-hills" className="text-[#0052CC] hover:underline">
                  Paradise Hills
                </Link>
                , and beyond. Long-lasting protection like{" "}
                <Link to="/ceramic-coating" className="text-[#0052CC] hover:underline">
                  ceramic coating
                </Link>
                {" "}is especially valuable in Albuquerque{"'"}s desert climate, providing 5-10 years of defense against UV damage and environmental contaminants compared to traditional wax that lasts only 2-3 months. For paint already damaged by sun fade or mineral etching, our{" "}
                <Link to="/service/paint-correction" className="text-[#0052CC] hover:underline">
                  paint correction
                </Link>
                {" "}process safely restores that factory showroom shine.
              </p>
            </div>
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <section id="neighborhoods-we-serve" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Neighborhoods We Serve for <strong>Mobile Car Detailing</strong> Around Albuquerque
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              DK Mobile Wash provides professional <strong>mobile auto detailing</strong> throughout the Albuquerque metro area and surrounding communities. Licensed, insured, and fully equipped for on-site service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/albuquerque" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all group">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-[#0052CC] mr-2" />
                  <h3 className="font-bold text-lg text-gray-900">Albuquerque</h3>
                </div>
                <p className="text-sm text-gray-600">Downtown, Uptown, and all ABQ neighborhoods. <strong>Mobile auto detailing</strong> at your home or office.</p>
              </Link>
              <Link to="/rio-rancho" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all group">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-[#0052CC] mr-2" />
                  <h3 className="font-bold text-lg text-gray-900">Rio Rancho</h3>
                </div>
                <p className="text-sm text-gray-600">Serving all Rio Rancho communities with convenient <strong>mobile car wash</strong> and detailing services.</p>
              </Link>
              <Link to="/corrales" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all group">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-[#0052CC] mr-2" />
                  <h3 className="font-bold text-lg text-gray-900">Corrales</h3>
                </div>
                <p className="text-sm text-gray-600">Professional <strong>mobile detailing</strong> for Corrales residents in this scenic village setting.</p>
              </Link>
              <Link to="/north-valley" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all group">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-[#0052CC] mr-2" />
                  <h3 className="font-bold text-lg text-gray-900">North Valley</h3>
                </div>
                <p className="text-sm text-gray-600">Complete <strong>auto detailing services</strong> for North Valley homes and estates.</p>
              </Link>
              <Link to="/tanoan" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all group">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-[#0052CC] mr-2" />
                  <h3 className="font-bold text-lg text-gray-900">Tanoan</h3>
                </div>
                <p className="text-sm text-gray-600">Premium <strong>mobile detailing</strong> for luxury vehicles in the Tanoan community.</p>
              </Link>
              <Link to="/paradise-hills" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all group">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-[#0052CC] mr-2" />
                  <h3 className="font-bold text-lg text-gray-900">Paradise Hills</h3>
                </div>
                <p className="text-sm text-gray-600"><strong>Mobile car wash</strong> and detailing services throughout Paradise Hills neighborhoods.</p>
              </Link>
              <Link to="/los-ranchos-de-albuquerque" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all group">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-[#0052CC] mr-2" />
                  <h3 className="font-bold text-lg text-gray-900">Los Ranchos</h3>
                </div>
                <p className="text-sm text-gray-600">Professional <strong>mobile detailing</strong> for Los Ranchos de Albuquerque properties.</p>
              </Link>
              <Link to="/albuquerque-acres" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all group">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-[#0052CC] mr-2" />
                  <h3 className="font-bold text-lg text-gray-900">Albuquerque Acres</h3>
                </div>
                <p className="text-sm text-gray-600">Comprehensive <strong>auto detailing</strong> for North Albuquerque Acres residences.</p>
              </Link>
            </div>

            <div className="text-center mt-10">
              <Link to="/service-areas" className="inline-block text-[#0052CC] font-semibold hover:text-[#003D99] transition-colors">
                View Complete Service Areas →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section - Mobile Detailing Albuquerque */}
        <section id="faq-mobile-detailing-albuquerque" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Common Questions About <strong>Mobile Detailing in Albuquerque</strong>
            </h2>

            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you bring your own water and power in Albuquerque?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! Our <strong>self-contained mobile detailing unit</strong> carries independent water tanks and onboard power generation. You don{"'"}t need to provide anything—we bring all commercial-grade equipment, pH-balanced products, and utilities needed to safely detail your vehicle at your Albuquerque location. Zero hookups required.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can you detail my car at an apartment or HOA in Albuquerque?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely. We regularly service apartments, condos, and HOA communities throughout Albuquerque, Rio Rancho, and surrounding areas. Our <strong>on-site car cleaning</strong> process is water-efficient and fully compliant with community restrictions, making it perfect for residents with limited parking access or traditional washing bans.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a mobile detailing appointment take?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Service times vary by package and vehicle condition. Our Full Refresh takes 2-3 hours, Gold Standard takes 3-4 hours, and Masterpiece Detail takes 4-6 hours. Advanced services like{" "}
                  <Link to="/ceramic-coating" className="text-[#0052CC] hover:underline">
                    ceramic coating
                  </Link>
                  {" "}typically require 6-8 hours including proper surface prep. You can go about your day while we work—no need to stay with your vehicle. See our{" "}
                  <Link to="/car-detailing-prices-albuquerque" className="text-[#0052CC] hover:underline">
                    pricing guide
                  </Link>
                  {" "}for full package breakdowns.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What if the weather is bad on my appointment day?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We monitor Albuquerque weather conditions closely. For light rain or wind, we can usually still provide service if you have a covered area like a garage or carport. For severe weather or monsoon downpours, we{"'"}ll contact you to reschedule at no charge. Your satisfaction and our quality standards always come first.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can you remove hard water spots from Albuquerque sprinklers?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! <strong>Hard water spot removal</strong> is one of our most requested services in the Albuquerque area. Our professional{" "}
                  <Link to="/service/paint-correction" className="text-[#0052CC] hover:underline">
                    paint correction
                  </Link>
                  {" "}process safely dissolves and polishes away mineral etching, restoring your paint{"'"}s clarity and depth. For long-term prevention, we highly recommend{" "}
                  <Link to="/ceramic-coating" className="text-[#0052CC] hover:underline">
                    ceramic coating
                  </Link>
                  , which creates a hydrophobic barrier that prevents mineral deposits from bonding to your clear coat.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you serve areas outside of Albuquerque city limits?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! We serve the entire Albuquerque metro area including Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos de Albuquerque, North Albuquerque Acres, and surrounding communities. If you{"'"}re unsure whether we cover your neighborhood, check our{" "}
                  <Link to="/service-areas" className="text-[#0052CC] hover:underline">
                    service areas page
                  </Link>
                  {" "}or call us at (505) 604-8058 for instant confirmation.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/faq" className="text-[#0052CC] font-semibold hover:text-[#003D99] transition-colors">
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas Section - Cities We Serve */}
        <section id="service-areas-albuquerque" className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <strong>Mobile Car Wash Service</strong> Throughout Albuquerque Metro Area
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                DK Mobile Wash provides professional <strong>mobile auto detailing</strong> to residential and commercial clients throughout the Albuquerque metro area. Whether you need your personal vehicle detailed at home or manage a{" "}
                <Link to="/fleet" className="text-[#0052CC] hover:underline">
                  commercial fleet
                </Link>
                {" "}that requires regular maintenance, we come directly to your location.
              </p>
              <p className="text-lg text-gray-600">
                Serving Albuquerque, Rio Rancho, Corrales, Tanoan, Paradise Hills, North Valley, Los Ranchos, Sandia Heights, and all surrounding communities with convenient <strong>on-site detailing</strong> at your home, office, or business location.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Albuquerque', 'Rio Rancho', 'Corrales', 'Tanoan', 'Paradise Hills', 'North Valley', 'Los Ranchos', 'Sandia Heights'].map((city) => (
                <Link
                  key={city}
                  to="/service-areas"
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all group"
                >
                  <MapPin className="w-5 h-5 text-[#0052CC] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-gray-900">{city}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/service-areas" className="text-[#0052CC] font-semibold hover:text-[#003D99] transition-colors">
                View All Service Areas →
              </Link>
            </div>
          </div>
        </section>

        {/* Map Section - Business Location */}
        <section id="dk-mobile-wash-location" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Serving All of Albuquerque Metro Area
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based in Albuquerque, NM, we proudly provide <strong>mobile car wash</strong> and <strong>professional auto detailing</strong> services throughout the Albuquerque metro area.{" "}
                <Link to="/fleet" className="text-[#0052CC] hover:underline">
                  Fleet and dealership detailing
                </Link>
                {" "}also available with volume pricing and flexible scheduling.
              </p>
            </div>
            <div className="rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51862.56510344804!2d-106.6066653!3d35.1403684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872275c49d8c2987%3A0xb29ac972d1a187f8!2sDK%20Mobile%20Wash!5e1!3m2!1sen!2sus!4v1774811534327!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DK Mobile Wash - Mobile Car Detailing Albuquerque Metro Area - Serving Albuquerque, NM"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact-mobile-detailing" className="py-20 bg-gradient-to-r from-[#0052CC] to-[#003D99] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Professional <strong>Mobile Car Wash Service</strong> in Albuquerque?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Call or book online to schedule your <strong>mobile auto detailing</strong> in Albuquerque, Rio Rancho, Corrales, Tanoan, Paradise Hills, and surrounding areas. Experience showroom-quality results, <strong>licensed insured service</strong>, and long-term paint protection delivered directly to your home or office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openBookingModal}
                className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                aria-label="Get a free quote for mobile car detailing in Albuquerque metro area"
              >
                Get Free Quote
              </button>
              <a
                href="tel:5056048058"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
                aria-label="Call DK Mobile Wash at (505) 604-8058"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call (505) 604-8058</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
