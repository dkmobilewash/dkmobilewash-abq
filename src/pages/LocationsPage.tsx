import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { useBookingModal } from '../App';

const locations = [
  {
    name: 'Albuquerque',
    slug: 'albuquerque',
    description: 'Full-service mobile detailing across all ABQ neighborhoods. High-altitude UV, I-25 highway grime, and hard water spots — we handle it all with professional decontamination, paint correction, and ceramic coating.'
  },
  {
    name: 'Rio Rancho',
    slug: 'rio-rancho',
    description: 'Expert on-site detailing for Rio Rancho homes and businesses. Construction dust removal, ceramic coating, and paint correction designed for West Mesa conditions and desert sun.'
  },
  {
    name: 'Corrales',
    slug: 'corrales',
    description: 'Premium mobile detailing for Corrales ranches and equestrian properties. Cottonwood pollen removal, hot-water interior extraction, and paint protection for rural environments.'
  },
  {
    name: 'Los Ranchos de Albuquerque',
    slug: 'los-ranchos-de-albuquerque',
    description: 'Professional detailing for Los Ranchos estates and bosque properties. Self-contained unit handles bosque pollen, dirt road grime, and hard water. Classic and luxury vehicle experience.'
  },
  {
    name: 'Tanoan',
    slug: 'tanoan',
    description: 'White-glove mobile detailing for Tanoan luxury and exotic vehicles. Gated community access, concours-level preparation, and professional ceramic coating for the Sandia foothills.'
  },
  {
    name: 'Paradise Hills',
    slug: 'paradise-hills',
    description: 'Family-focused mobile detailing in Paradise Hills. Pet hair removal, interior deep cleaning, and UV protection for SUVs, minivans, and daily drivers in the Northwest Albuquerque community.'
  },
  {
    name: 'North Valley',
    slug: 'north-valley',
    description: 'Specialized detailing for North Valley homes and riverside properties. Cottonwood pollen decontamination, irrigation water spots, and paint protection for the valley environment.'
  },
  {
    name: 'Albuquerque Acres',
    slug: 'albuquerque-acres',
    description: 'Semi-rural East Side service for Albuquerque Acres households. Multi-vehicle visits, larger lot access, and East Mountains dust and UV protection. No hookups required.'
  }
];

const faqs = [
  {
    question: 'Where is DK Mobile Wash located?',
    answer: 'DK Mobile Wash is a mobile-only operation — there is no physical shop to visit. We come to you. Our service area covers the entire Albuquerque metro including Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos de Albuquerque, and Albuquerque Acres.'
  },
  {
    question: 'Do I need to come to a shop for detailing?',
    answer: 'No. DK Mobile Wash comes directly to your driveway, apartment parking lot, office garage, or wherever your vehicle is parked. You do not need to drive anywhere or arrange a ride. Our self-contained mobile unit carries its own water and power and needs approximately two parking spaces of clearance.'
  },
  {
    question: 'How do I book a mobile detail in my area?',
    answer: 'You can book online at dkmobilewash.com or call and text (505) 604-8058. We offer flexible morning and afternoon appointments. Most bookings are confirmed within 24 hours and we send a reminder the day before your service.'
  },
  {
    question: 'Do you serve areas outside Albuquerque?',
    answer: 'Yes. We regularly serve Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos de Albuquerque, and Albuquerque Acres in addition to all Albuquerque neighborhoods. For locations beyond the standard service area, call (505) 604-8058 and we will confirm availability.'
  }
];

export default function LocationsPage() {
  const { openBookingModal } = useBookingModal();

  return (
    <>
      <SEO
        title="DK Mobile Wash Locations | Albuquerque & Rio Rancho NM | DK Mobile Wash"
        description="DK Mobile Wash serves Albuquerque, Rio Rancho, Corrales, North Valley, and all surrounding areas. Mobile service — we come to you. Call (505) 604-8058."
        keywords="dk mobile wash albuquerque, mobile car detailing locations albuquerque, mobile detailing albuquerque nm, car detailing near me albuquerque"
        canonical="https://dkmobilewash.com/locations"
      />

      <div className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                DK Mobile Wash — Serving the Albuquerque Metro Area
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                DK Mobile Wash is a mobile-only auto detailing service. There is no shop to visit, no drop-off, and no waiting room. We come to your driveway, parking lot, or garage with a fully self-contained unit and deliver professional detailing, paint correction, and ceramic coating at your location.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                DK was launched after years in luxury auto care — frustrated by Albuquerque's lack of professional-grade mobile options. The mission was simple: bring Ferrari-level detailing to every NM driveway. Today we serve the entire Albuquerque metro, from gated Tanoan estates to rural Corrales properties.
              </p>
            </div>
          </div>
        </section>

        {/* How mobile differs */}
        <section className="py-16 bg-blue-50 border-b border-blue-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Mobile Detailing vs. a Physical Shop
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  A physical detail shop requires you to drop off your vehicle, arrange a ride or wait, and pick it up later. DK Mobile Wash eliminates every one of those steps. Our unit comes to you, and you never leave home.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We carry our own water, power, and every product needed for a professional detail. You provide the parking spot. We handle everything else.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  'No shop to drive to — we come to your address',
                  'Self-contained unit: own water supply and power',
                  'Same professional equipment as a fixed-location shop',
                  'Flexible scheduling around your day',
                  'Gated communities, rural properties, and apartment lots all work'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0052CC] rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Areas We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select your neighborhood to see location-specific services, environmental context, and booking options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  to={`/${location.slug}`}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#0052CC] hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <MapPin className="w-6 h-6 text-[#0052CC]" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0052CC] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0052CC] transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {location.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact and booking info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Book Mobile Detailing at Your Location
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  You can book online or call and text (505) 604-8058. We offer flexible appointment windows, confirm most bookings within 24 hours, and send a reminder the day before.
                </p>
                <p className="text-gray-600 mb-6">
                  For service area questions or to confirm coverage at your specific address, call us directly. Most Albuquerque metro addresses are covered without any issue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={openBookingModal}
                    className="bg-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003D99] transition-all shadow-lg"
                  >
                    Book Online
                  </button>
                  <a
                    href="tel:5056048058"
                    className="flex items-center justify-center gap-2 border-2 border-[#0052CC] text-[#0052CC] px-6 py-3 rounded-lg font-bold hover:bg-[#0052CC] hover:text-white transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    (505) 604-8058
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Also see{' '}
                  <Link to="/service-areas" className="text-[#0052CC] hover:underline">our service areas page</Link>{' '}
                  and{' '}
                  <Link to="/albuquerque" className="text-[#0052CC] hover:underline">the Albuquerque service page</Link>.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Coverage</h3>
                <ul className="space-y-3">
                  {[
                    'Albuquerque (all neighborhoods)',
                    'Rio Rancho',
                    'Corrales',
                    'North Valley',
                    'Tanoan',
                    'Paradise Hills',
                    'Los Ranchos de Albuquerque',
                    'Albuquerque Acres',
                    'Surrounding metro areas — call to confirm'
                  ].map((area, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <MapPin className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Book?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              We come to you. Professional mobile detailing anywhere in the Albuquerque metro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openBookingModal}
                className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Book Your Detail
              </button>
              <a
                href="tel:5056048058"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0052CC] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (505) 604-8058
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
