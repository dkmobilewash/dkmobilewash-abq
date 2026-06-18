import { useEffect } from 'react';
import { Car, Shield, Sparkles, MapPin, Star, CheckCircle, Phone, ArrowRight, Droplets, Sun, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useBookingModal } from '../App';
import { CostGuideForm } from '../components/CostGuideForm';
import HomePagePackageSelector from '../components/HomePagePackageSelector';
import HomepageServiceSections from '../components/HomepageServiceSections';

export default function HomePage() {
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
        title="Mobile Auto Detailing Albuquerque | Licensed & 5-Star | DK Mobile Wash"
        description="Expert mobile car detailing Albuquerque. Licensed, insured & 5-star rated. Self-contained unit comes to your home or office. Free quote: (505) 604-8058"
        keywords="mobile auto detailing Albuquerque, car detailing Albuquerque NM, mobile car wash Albuquerque, auto detailing Albuquerque, ceramic coating Albuquerque, interior car detailing Albuquerque"
      />

      <div className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section
          className="relative text-white pt-32 pb-16 min-h-[760px] md:min-h-[860px] flex flex-col"
          style={{
            backgroundImage: "url('https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/Hero%20Image/best-deailing-in-albuquerque.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
            <div className="text-center mb-auto pt-4 max-w-4xl mx-auto w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl mb-5">
                Albuquerque's Top-Rated Mobile Auto Detailing
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed drop-shadow-lg">
                Skip the shop and get professional <Link to="/service/mobile-auto-detailing" className="text-white underline hover:text-gray-200">mobile car detailing Albuquerque</Link> at your home, office, or apartment. Our fully self-contained mobile unit brings its own water and power — no hookups needed. Licensed, insured, and 5-star rated on Google.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300 mb-8">
                <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-400" /> Licensed &amp; Insured</span>
                <span className="flex items-center gap-1.5"><Droplets className="w-4 h-4 text-blue-400" /> Self-Contained Water &amp; Power</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-red-400" /> Serving Albuquerque Metro</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-auto pb-12">
              <button
                onClick={openBookingModal}
                className="bg-[#0052CC] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-2xl"
              >
                Get Free Quote
              </button>
              <button
                onClick={openBookingModal}
                className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                Book Now
              </button>
              <a
                href="tel:5056048058"
                className="bg-white/15 backdrop-blur-sm border border-white/40 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/25 transition-all flex items-center justify-center gap-2 shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <section className="bg-gray-900 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-gray-300">5-Star Rated on Google</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Mobile-Only Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Self-Contained Water &amp; Power</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">Serving Albuquerque Metro</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <HomePagePackageSelector onBookNow={(packageName) => {
          console.log('Selected package:', packageName);
          openBookingModal();
        }} />

        {/* ── PACKAGE DECISION HELPER ── */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">Not sure which package is right for you?</h2>
            <p className="text-gray-500 text-center mb-8">Pick the option that matches your situation. Transparent pricing, zero hidden fees.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-[#0052CC] transition-all">
                <p className="text-xs font-semibold text-[#0052CC] uppercase tracking-wide mb-1">Full Refresh</p>
                <p className="text-sm font-bold text-gray-900 mb-2">Regular maintenance or quick refresh</p>
                <p className="text-sm text-gray-600">Perfect for daily drivers who want their car looking clean without going all-in on a full detail. Ideal for busy professionals.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-[#0052CC] transition-all">
                <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-1">Gold Standard</p>
                <p className="text-sm font-bold text-gray-900 mb-2">Best all-around option for most Albuquerque drivers</p>
                <p className="text-sm text-gray-600">Inside and out. Our most-booked package. Great for families, commuters, and anyone who wants a real, thorough detail.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-[#0052CC] transition-all">
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">Masterpiece Detail</p>
                <p className="text-sm font-bold text-gray-900 mb-2">Resale prep, deep cleaning, full restoration</p>
                <p className="text-sm text-gray-600">If you're selling the car, detailing after a long road trip, or the interior has seen some things — this is the one.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-[#0052CC] transition-all">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Ceramic Coating</p>
                <p className="text-sm font-bold text-gray-900 mb-2">Long-term paint protection</p>
                <p className="text-sm text-gray-600">Bonds to your clear coat and protects against UV, hard water, and ABQ dust for years — not weeks like wax.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={openBookingModal}
                className="bg-[#0052CC] text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-md"
              >
                Get Free Quote — We'll Recommend the Right Package
              </button>
            </div>
          </div>
        </section>

        {/* ── SERVICE SECTIONS ── */}
        <HomepageServiceSections />

        {/* ── KEY BENEFITS ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="sr-only">Why Choose DK Mobile Wash for Car Detailing in Albuquerque</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#0052CC] transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-[#0052CC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">We Come to You</h3>
                <p className="text-gray-600">
                  Experience true <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] hover:underline">on-site car detailing Albuquerque</Link>. We arrive at your home, office, or apartment with a fully self-contained setup — zero water or power hookups needed from you.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#0052CC] transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#0052CC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed &amp; Insured</h3>
                <p className="text-gray-600">
                  Your vehicle is protected. As a fully <Link to="/about" className="text-[#0052CC] hover:underline">licensed insured mobile detailing</Link> provider, we handle everything from basic washes to <Link to="/ceramic-coating" className="text-[#0052CC] hover:underline">ceramic coating</Link> with professional accountability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#0052CC] transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-[#0052CC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Products &amp; Technique</h3>
                <p className="text-gray-600">
                  We use commercial-grade chemicals, polishers, and extractors — never consumer store brands. Whether it's <Link to="/service/interior-detailing" className="text-[#0052CC] hover:underline">interior detailing</Link>, <Link to="/service/exterior-detailing" className="text-[#0052CC] hover:underline">exterior washing</Link>, or paint correction, the results speak for themselves.
                </p>
              </div>
            </div>

            {/* Mid-page CTA */}
            <div className="mt-10 text-center">
              <button
                onClick={openBookingModal}
                className="inline-flex items-center gap-2 bg-[#0052CC] text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-md"
              >
                Book Mobile Detailing in Albuquerque <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* ── WHY ALBUQUERQUE DRIVERS CHOOSE DK ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose DK Mobile Wash in Albuquerque
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
                <p className="text-lg leading-relaxed">
                  <Link to="/albuquerque" className="text-[#0052CC] hover:underline">Albuquerque</Link> vehicles deal with conditions most detailers outside New Mexico never account for. Over 300 days of sun per year means intense UV exposure that fades paint and dries out leather and plastic. High-desert dust settles on every surface and, when left on paint, acts as a fine abrasive every time you touch the car. Hard water from lawn irrigation systems leaves mineral deposits that etch into unprotected clear coat over time.
                </p>
                <p className="text-lg leading-relaxed">
                  Daily commutes on I-25 and I-40 add road grime, tar, and brake dust. Monsoon season brings mud and contamination that bonds quickly in the heat. Cottonwood pollen clogs AC vents. For families with kids and pets, the interior takes its own kind of beating. That's why our <Link to="/service/interior-detailing" className="text-[#0052CC] hover:underline">interior car detailing Albuquerque</Link> and <Link to="/service/exterior-detailing" className="text-[#0052CC] hover:underline">exterior car detailing Albuquerque</Link> services are engineered specifically for local conditions.
                </p>
                <p className="text-lg leading-relaxed">
                  Our <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] hover:underline">car detailing mobile service Albuquerque</Link> is built around these realities. We bring professional-grade decontamination, deep cleaning, and <Link to="/ceramic-coating" className="text-[#0052CC] hover:underline">ceramic coating Albuquerque NM</Link> directly to your driveway — whether you're in North Valley, <Link to="/rio-rancho" className="text-[#0052CC] hover:underline">Rio Rancho</Link>, <Link to="/corrales" className="text-[#0052CC] hover:underline">Corrales</Link>, <Link to="/tanoan" className="text-[#0052CC] hover:underline">Tanoan</Link>, <Link to="/paradise-hills" className="text-[#0052CC] hover:underline">Paradise Hills</Link>, <Link to="/los-ranchos-de-albuquerque" className="text-[#0052CC] hover:underline">Los Ranchos</Link>, or <Link to="/albuquerque-acres" className="text-[#0052CC] hover:underline">Albuquerque Acres</Link>.
                </p>
                <p className="text-lg leading-relaxed">
                  For apartment and HOA residents, our self-contained unit uses its own water and power — no need to arrange hookups or deal with restrictions on traditional car washing. For those who commute or work from home, you don't lose time waiting at a shop. Reliable <Link to="/rio-rancho" className="text-[#0052CC] hover:underline">rio rancho mobile detailing</Link> and ABQ coverage, scheduled around your life.
                </p>
              </div>

              {/* Local conditions cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                  <Sun className="w-8 h-8 text-orange-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1 text-base">Intense UV Exposure</h3>
                  <p className="text-sm text-gray-600">300+ sunny days per year fades paint and cracks dashboards faster than most U.S. cities. Ceramic coating and UV-protective treatments make a real difference here.</p>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <Droplets className="w-8 h-8 text-blue-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1 text-base">Hard Water Spots</h3>
                  <p className="text-sm text-gray-600">Sprinkler overspray leaves mineral deposits that etch into bare paint. <Link to="/service/paint-correction" className="text-[#0052CC] hover:underline">Paint correction</Link> removes them; ceramic coating prevents them from bonding.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <Wind className="w-8 h-8 text-gray-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1 text-base">Desert Dust &amp; Grit</h3>
                  <p className="text-sm text-gray-600">High-desert dust is fine enough to work into paint and interior surfaces. Regular professional decontamination prevents cumulative scratch damage over time.</p>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <MapPin className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1 text-base">Convenient for HOA &amp; Apartments</h3>
                  <p className="text-sm text-gray-600">Many Albuquerque communities restrict car washing. Our fully self-contained unit needs only a parking spot — no hose, no drain, no HOA conflict.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL / PROOF SECTION ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Trusted by Albuquerque Drivers</h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                <span className="text-gray-600 font-semibold ml-1">5.0 on Google</span>
              </div>
              <a
                href="https://www.google.com/maps/place/DK+Mobile+Wash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#0052CC] hover:underline"
              >
                Read our Google reviews →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"They came to my driveway in Rio Rancho and did an incredible job on both the interior and exterior. My car looked brand new. Will definitely be a repeat customer."</p>
                <p className="text-xs font-semibold text-gray-500">— Rio Rancho, NM</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"I have three kids and two dogs — the interior of my SUV was a disaster. DK Mobile Wash got it completely clean. I couldn't believe the difference. Super easy to book."</p>
                <p className="text-xs font-semibold text-gray-500">— Albuquerque, NM</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"Got the ceramic coating done before a cross-country move. The prep work and finish were flawless. Worth every penny for long-term protection."</p>
                <p className="text-xs font-semibold text-gray-500">— North Valley, Albuquerque, NM</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-[#0052CC] font-semibold hover:text-[#003D99] transition-colors"
              >
                View Before &amp; After Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── COST GUIDE ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="lg:pr-8">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
                  Free Local Guide
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Affordable Mobile Detailing Cost &amp; Pricing in NM
                </h2>
                <p className="text-base text-gray-700 mb-6">
                  Wondering about <strong>mobile detailing cost Albuquerque</strong>? Most car owners either overpay or choose the wrong service. This free guide breaks down real-world detailing prices so you know exactly what to expect before you book.
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

        {/* ── SERVICE AREAS ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mobile Detailing Throughout the Albuquerque Metro
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                DK Mobile Wash provides reliable <strong>mobile car wash Albuquerque</strong> and surrounding communities. We come to your driveway — no shop visit needed. Serving ABQ, Rio Rancho, Corrales, North Valley, and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209427.4634789785!2d-106.8509156!3d35.0853336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220addd309837b%3A0xc0d3f8ceb8d9f6fd!2sAlbuquerque%2C%20NM!5e0!3m2!1sen!2sus!4v1709236800000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DK Mobile Wash Albuquerque Location"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-gray-900">Albuquerque</h3>
                  <p className="text-sm text-gray-600">Downtown Albuquerque, NM</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103734.8896445614!2d-106.7150726!3d35.2824519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87227d8d8b5d7c6f%3A0xc4b5fe3f3f3c9d3a!2sRio%20Rancho%2C%20NM!5e0!3m2!1sen!2sus!4v1709236900000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DK Mobile Wash Rio Rancho Location"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-gray-900">Rio Rancho</h3>
                  <p className="text-sm text-gray-600">Rio Rancho, NM</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51809.17944678821!2d-106.6294567!3d35.2401852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87227b8c8f8c8f8f%3A0x8f8f8f8f8f8f8f8f!2sCorrales%2C%20NM!5e0!3m2!1sen!2sus!4v1709237000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DK Mobile Wash Corrales Location"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-gray-900">Corrales</h3>
                  <p className="text-sm text-gray-600">Corrales, NM</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 text-[#0052CC] font-semibold hover:text-[#003D99] transition-colors"
              >
                View All Service Areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 bg-gradient-to-r from-[#0052CC] to-[#003D99] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Book Mobile Detailing in Albuquerque?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              We come to your home, office, or apartment anywhere in the Albuquerque metro. Get a free quote or call us directly. Professional results, zero hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openBookingModal}
                className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Free Quote
              </button>
              <button
                onClick={openBookingModal}
                className="bg-white/15 border border-white/40 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/25 transition-all"
              >
                Book Now
              </button>
              <a
                href="tel:5056048058"
                className="bg-white/15 backdrop-blur-sm border border-white/40 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/25 transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (505) 604-8058</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
