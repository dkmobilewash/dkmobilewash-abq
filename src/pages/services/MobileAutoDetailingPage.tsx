import { Link } from 'react-router-dom';
import { Car, CheckCircle, Clock, Phone, MapPin, Shield, Droplets, Star } from 'lucide-react';
import SEO from '../../components/SEO';
import ServiceAreasGrid from '../../components/ServiceAreasGrid';
import { useBookingModal } from '../../App';

interface ServicePageProps {
  onNavigate?: (page: string) => void;
  onBookNow?: () => void;
}

export default function MobileAutoDetailingPage({ onNavigate, onBookNow }: ServicePageProps) {
  const { openBookingModal } = useBookingModal();

  const faqs = [
    {
      question: 'Do you bring your own water to my Albuquerque home?',
      answer: 'Yes. Our mobile detailing unit carries an independent onboard water tank and power generation system. You never need to supply a hose, an outlet, or any utility hookup. We set up, detail, and pack up without touching your home infrastructure. This makes our service ideal for driveways, office parking lots, HOA communities, and apartment complexes that restrict outside washing.',
    },
    {
      question: 'How long does a mobile detail take?',
      answer: 'Service times depend on the package and vehicle condition. A standard exterior detail takes 2 to 3 hours. A full interior and exterior combination runs 3 to 5 hours. Ceramic coating services require 6 to 8 hours. We give accurate time estimates at booking so you can plan your day. Our crew works efficiently without cutting corners.',
    },
    {
      question: 'Can you come to my office or apartment?',
      answer: 'Absolutely. We service driveways, office parking lots, apartment complexes, business parks, and gated communities throughout Albuquerque. All we need is a flat parking space near your vehicle. Our self-contained unit handles everything without requiring access to your building.',
    },
    {
      question: 'What areas of Albuquerque do you serve?',
      answer: 'We serve the entire Albuquerque metro including all city neighborhoods, Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos de Albuquerque, and Albuquerque Acres. Our mobile units dispatch daily across Bernalillo and Sandoval counties. Call (505) 604-8058 to confirm your address.',
    },
  ];

  return (
    <>
      <SEO
        title="Mobile Auto Detailing Albuquerque NM | Comes to You | DK Mobile Wash"
        description="DK Mobile Wash brings professional mobile auto detailing directly to your home or office in Albuquerque, NM. Licensed, insured, self-contained. Call (505) 604-8058."
        keywords="mobile auto detailing albuquerque, mobile car detailing albuquerque, mobile detailing albuquerque, mobile detailer near me, car detailing at home"
        canonical="https://dkmobilewash.com/service/mobile-auto-detailing"
      />

      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block bg-white/10 border border-white/30 rounded-full px-4 py-2 mb-6">
                <p className="text-white text-sm font-semibold">Most Popular Service</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Mobile Auto Detailing in Albuquerque, NM — We Come to You
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-4">
                DK Mobile Wash brings professional <strong>mobile auto detailing</strong> directly to your driveway, office, or apartment. Our fully self-contained unit arrives with its own water supply, power generation, and commercial-grade products — no hookups required from you. Licensed, insured, and 5-star rated across the Albuquerque metro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => openBookingModal()}
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

        {/* What Mobile Detailing Means */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Mobile Auto Detailing Actually Means
            </h2>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              Mobile auto detailing means a fully equipped professional comes to your location instead of you bringing your car to a shop. There is no drop-off, no waiting room, no arranging a ride home, and no wasting half your day. DK Mobile Wash dispatches a self-contained unit that carries everything needed — fresh water, power, extractors, polishers, chemicals, and microfibers — and performs the same quality work that dealerships charge twice as much for, right in your driveway.
            </p>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              The mobile advantage is especially significant for busy professionals, families juggling multiple schedules, and anyone who owns a vehicle they actually care about. Traditional shops batch vehicles together and rush through them. With mobile detailing, one technician focuses entirely on your single vehicle for the duration of the appointment. That concentrated attention produces measurably better results.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For Albuquerque residents, mobile service also solves the time-sink of driving across a sprawling city. Whether you live near Paseo del Norte, work in the Journal Center corridor, or park at an apartment complex near UNM, we come to you. The service area covers all of Albuquerque and surrounding communities.
            </p>
          </div>
        </section>

        {/* How the Self-Contained Unit Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How Our Self-Contained Unit Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-7 h-7 text-[#0052CC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Independent Water Supply</h3>
                <p className="text-gray-600">
                  Our unit carries onboard fresh water tanks — no connection to your home water supply is ever needed. This makes us fully compliant with HOA restrictions and ideal for apartment complexes, office lots, and properties with washing bans.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-[#0052CC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Onboard Power Generation</h3>
                <p className="text-gray-600">
                  Commercial-grade extractors, polishers, and pressure systems run from our own generator. You don't need an outdoor outlet. Our equipment runs the same professional tools used in high-end detailing facilities, delivered to your parking spot.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-7 h-7 text-[#0052CC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional-Grade Products</h3>
                <p className="text-gray-600">
                  We use the P&S chemical line, HydraFlex hybrid ceramic coatings, and Gtechniq Crystal Serum for coating applications. These are the same products used by professional detailers competing at car shows — not the consumer products sold at auto parts stores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What's Included in a Mobile Detail
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A complete mobile auto detail covers both the exterior and interior of your vehicle. On the outside, that means a two-bucket hand wash using pH-balanced soap, iron and tar decontamination, clay bar treatment to lift bonded surface contamination, wheel and tire cleaning, window treatment, trim dressing, and a finishing sealant or wax for paint protection. Inside, it includes thorough vacuuming of all surfaces, hot-water extraction for carpets and upholstery, stain treatment, dashboard and console cleaning, door panel wiping, interior glass cleaning, and UV-protective conditioner on leather and plastics.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              For deeper protection, we offer <Link to="/ceramic-coating" className="text-[#0052CC] font-semibold hover:underline">ceramic coating</Link> as an upgrade to any mobile detail — a long-term hydrophobic coating that bonds chemically to your clear coat and provides 3 to 10 years of UV, dust, and water spot resistance. Paint correction is also available for vehicles with swirl marks, oxidation, or scratches before coating application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Two-bucket pH-balanced hand wash',
                'Iron decontamination and tar removal',
                'Clay bar surface decontamination',
                'Wheel, tire, and wheel arch cleaning',
                'Exterior window and glass treatment',
                'Trim and plastic dressing',
                'Paint sealant or wax application',
                'Complete interior vacuum',
                'Hot-water carpet and seat extraction',
                'Stain treatment and odor control',
                'Dashboard, console, and door panel cleaning',
                'Interior glass cleaning',
                'Leather conditioning and UV protection',
                'Fabric protectant application',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Mobile Detailing Matters in Albuquerque */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Mobile Detailing Is Especially Valuable in Albuquerque
            </h2>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              Albuquerque's climate is one of the most demanding environments for vehicle paint in the United States. The city sits at 5,300 feet of elevation — higher than most major cities — which means UV radiation is significantly more intense than at sea level. Paint fades faster, clear coats oxidize sooner, and dashboards crack prematurely compared to vehicles kept at lower elevations.
            </p>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              On top of UV exposure, the high desert produces fine silica dust that coats vehicles daily. This grit is abrasive — dragging it across paint with a dry cloth or a low-quality car wash creates microscopic scratches that dull your finish over time. Professional decontamination with clay bar and chemical pre-soak lifts this contamination safely before any contact with the paint surface.
            </p>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              Hard water from Albuquerque's municipal supply and irrigation systems leaves calcium and mineral deposits on paint and glass. These water spots etch into unprotected clear coat and require professional removal. Our exterior detailing process removes existing water spots and applies hydrophobic protection to prevent future etching.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Monsoon season brings dust storms and acidic rain that deposits organic and mineral contamination across the entire vehicle surface. Post-monsoon decontamination details are one of our most requested services each year. For vehicles in Corrales or the North Valley, cottonwood pollen creates an additional challenge — a mildly acidic film that bonds to paint and glass and requires chemical decontamination to remove safely. Explore our <Link to="/service/exterior-detailing" className="text-[#0052CC] font-semibold hover:underline">exterior detailing service</Link> for the full decontamination process.
            </p>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Who Benefits Most from Mobile Auto Detailing
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Busy Professionals and Remote Workers',
                  text: 'If you work from home or have back-to-back meetings, mobile detailing lets you reclaim your Saturday without sacrificing vehicle care. We work while you work — your car is clean when your day ends.',
                },
                {
                  title: 'Families with Children and Pets',
                  text: 'Kids and pets destroy interiors. Food spills, pet hair, juice stains, and odors accumulate faster than weekly cleaning can address. Our hot-water extraction and enzyme-based odor treatment handles all of it, and fabric protectant helps prevent the next mess from setting in.',
                },
                {
                  title: 'Apartment and HOA Residents',
                  text: 'Many Albuquerque apartment complexes and HOA communities restrict outdoor washing due to runoff rules. Our self-contained unit produces no runoff, uses only the water it brings, and complies with community restrictions. We service parking garages, uncovered lots, and covered spaces.',
                },
                {
                  title: 'Luxury and Collector Vehicle Owners',
                  text: 'High-value vehicles should never go through an automatic tunnel wash. Our single-vehicle focus, hand-safe technique, and paint-correct chemistry protect exotic paint systems, wrapped vehicles, and collector cars that require specialist handling.',
                },
                {
                  title: 'Fleet and Business Owners',
                  text: 'Commercial operators benefit from on-site fleet service that keeps vehicles professional without taking them off the road. We offer recurring maintenance plans with volume pricing for businesses operating 2 or more vehicles.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Mobile Detailing Service Area
            </h2>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed text-center">
              DK Mobile Wash covers the full Albuquerque metro area and surrounding communities. Our mobile units dispatch daily to every corner of the region.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                'Albuquerque',
                'Rio Rancho',
                'Corrales',
                'North Valley',
                'Tanoan',
                'Paradise Hills',
                'Los Ranchos de Albuquerque',
                'Albuquerque Acres',
                'Northeast Heights',
                'Nob Hill',
                'Journal Center',
                'Four Hills',
              ].map((area, index) => (
                <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200">
                  <MapPin className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions About Mobile Detailing
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceAreasGrid
          title="Mobile Detailing Available Throughout Albuquerque Metro"
          description="Serving Albuquerque, Rio Rancho, Corrales, North Valley, and surrounding neighborhoods. Expert high-desert vehicle care delivered to your door."
        />

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Mobile Auto Detailing in Albuquerque
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional results delivered to your home or office. Licensed, insured, and 5-star rated across the Albuquerque metro. Call (505) 604-8058 or get a free quote online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openBookingModal()}
                className="bg-white text-[#0052CC] px-10 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl"
              >
                Get Free Quote
              </button>
              <a
                href="tel:5056048058"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
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
