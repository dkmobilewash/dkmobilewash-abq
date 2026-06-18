import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { useBookingModal } from '../App';

const areas = [
  {
    name: 'Albuquerque',
    slug: '/albuquerque',
    desc: 'DK Mobile Wash\'s home base and primary service area. We serve every Albuquerque neighborhood including the Northeast Heights, South Valley, and Downtown with full detailing, paint correction, and ceramic coating. High-altitude UV and I-25 road film are our specialty.'
  },
  {
    name: 'Rio Rancho',
    slug: '/rio-rancho',
    desc: 'Rio Rancho is one of our most active service areas. We handle the construction dust that coats vehicles near the North I-25 expansion corridor and offer flexible scheduling for commuters who need their vehicle detailed before the workday begins.'
  },
  {
    name: 'Corrales',
    slug: '/corrales',
    desc: 'Corrales vehicles face a unique combination of acequia dust, seasonal cottonwood pollen, and monsoon mud. Our clay bar decontamination and ceramic coating systems are built for this environment. We come to your property with zero hookups required.'
  },
  {
    name: 'North Valley',
    slug: '/north-valley',
    desc: 'North Valley is a cottonwood-lined community where pollen season deposits a sticky film on paint and glass. We provide thorough decontamination, paint-safe washing, and ceramic protection specifically suited to the organic debris of the valley environment.'
  },
  {
    name: 'Tanoan',
    slug: '/tanoan',
    desc: 'Tanoan is a gated community at the Sandia foothills with a high concentration of luxury and exotic vehicles. We coordinate gate access and bring concours-level mobile detailing to your garage. We handle Porsche, Ferrari, Bentley, and all collector vehicles.'
  },
  {
    name: 'Paradise Hills',
    slug: '/paradise-hills',
    desc: 'Paradise Hills sits in Northwest Albuquerque where volcanic mesa dust and desert wind create constant vehicle buildup. We specialize in family vehicles — SUVs, minivans, and daily drivers — and offer interior-focused packages for pet hair, kid spills, and food stains.'
  },
  {
    name: 'Los Ranchos de Albuquerque',
    slug: '/los-ranchos-de-albuquerque',
    desc: 'Los Ranchos is a historic village of estates and bosque properties where the cottonwood canopy deposits pollen all season. We come to rural properties with our self-contained unit and have extensive experience with classic vehicles and multi-car estates.'
  },
  {
    name: 'Albuquerque Acres',
    slug: '/albuquerque-acres',
    desc: 'Albuquerque Acres is a semi-rural East Side community with larger lots and multi-vehicle households. East Mountains dust and higher elevation UV exposure are the main concerns. We offer multi-vehicle visits to maximize value per appointment.'
  }
];

const faqs = [
  {
    question: 'Do you travel outside the Albuquerque metro area?',
    answer: 'Our standard service area covers Albuquerque, Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos de Albuquerque, and Albuquerque Acres. For locations beyond the metro area, call (505) 604-8058 and we will confirm availability and any applicable travel fee.'
  },
  {
    question: 'What do you need at my location to perform a mobile detail?',
    answer: 'Very little. Our mobile unit is fully self-contained with its own water supply and power generation. We need approximately two parking spaces worth of flat clearance next to your vehicle. No water hookup, outdoor outlet, or other utility access is required.'
  },
  {
    question: 'Is there a travel fee for locations outside central Albuquerque?',
    answer: 'Most locations within the service area listed on this page have no travel fee. For addresses at the outer edges of our coverage zone, a small travel fee may apply. We will always tell you about any fee before confirming your appointment. Call or text (505) 604-8058 to check your specific address.'
  },
  {
    question: 'How do I find out if my address is in your service area?',
    answer: 'The fastest way is to call or text (505) 604-8058. You can also use the booking form at dkmobilewash.com to enter your address and we will confirm availability within one business day. Most Albuquerque metro addresses are covered without any issue.'
  }
];

export default function ServiceAreasPage() {
  const { openBookingModal } = useBookingModal();

  return (
    <>
      <SEO
        title="Mobile Detailing Service Areas | Albuquerque Metro | DK Mobile Wash"
        description="DK Mobile Wash serves Albuquerque, Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos, and Albuquerque Acres. Call (505) 604-8058."
        keywords="mobile detailing albuquerque service area, car detailing service areas albuquerque nm, mobile detailer near me, mobile auto detailing near me"
        canonical="https://dkmobilewash.com/service-areas"
      />

      <div className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Mobile Detailing Service Areas — Albuquerque Metro and Surrounding Communities
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                DK Mobile Wash covers the entire Albuquerque metro area and surrounding communities. Our self-contained mobile detailing unit comes directly to your driveway, office lot, or garage — no water hookup, no outlet access, no errand to run. We bring everything needed for professional detailing, paint correction, and ceramic coating.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Not sure if we cover your address?{' '}
                <a href="tel:5056048058" className="text-white font-semibold underline hover:text-gray-200">
                  Call or text (505) 604-8058
                </a>{' '}
                and we will confirm availability for your location immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Area Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Communities We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each neighborhood has its own vehicle challenges — dust composition, UV intensity, seasonal pollen, road grime. We know them all.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {areas.map((area) => (
                <div
                  key={area.slug}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0052CC] hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-[#0052CC] flex-shrink-0 mt-1" />
                    <h3 className="text-2xl font-bold text-gray-900">{area.name}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{area.desc}</p>
                  <Link
                    to={area.slug}
                    className="text-[#0052CC] font-semibold hover:text-[#003D99] transition-colors"
                  >
                    View {area.name} detailing page →
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#0052CC] p-6 rounded-r-xl">
              <p className="text-lg text-gray-700">
                <strong>Don't see your neighborhood?</strong> We service all of the Albuquerque metro and many surrounding areas. Call{' '}
                <a href="tel:5056048058" className="text-[#0052CC] font-semibold">(505) 604-8058</a>{' '}
                to confirm coverage for your address.
              </p>
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  What to Expect at Your Location
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our mobile unit requires approximately two parking spaces worth of clearance next to your vehicle. That is all. We carry our own water, power, and all products. We do not need to use your hose, garage outlet, or any utility access.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We can work in driveways, apartment parking lots, office garages, and rural properties. If your location has unusual access — a gated community, a tight driveway, a private road — just mention it when booking and we will plan accordingly.
                </p>
                <div className="space-y-4">
                  {[
                    'Self-contained — no water or power hookup needed',
                    'Works in driveways, lots, garages, and rural properties',
                    'Gate codes and community access coordinated at booking',
                    'Licensed and insured in New Mexico',
                    'Flexible morning and afternoon appointment windows'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="relative rounded-2xl shadow-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=Albuquerque+Metro+Area,+NM&output=embed"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DK Mobile Wash Service Area Map — Albuquerque Metro"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Not sure if your address is covered?{' '}
                  <a href="tel:5056048058" className="text-[#0052CC] font-semibold">Call (505) 604-8058</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Specific Area Pages</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each location page covers the specific environmental factors and services relevant to that community.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Rio Rancho', to: '/rio-rancho' },
                { label: 'Corrales', to: '/corrales' },
                { label: 'North Valley', to: '/north-valley' },
                { label: 'Albuquerque', to: '/albuquerque' },
                { label: 'Tanoan', to: '/tanoan' },
                { label: 'Paradise Hills', to: '/paradise-hills' },
                { label: 'Los Ranchos', to: '/los-ranchos-de-albuquerque' },
                { label: 'Albuquerque Acres', to: '/albuquerque-acres' }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="bg-gray-100 text-gray-800 px-5 py-2.5 rounded-full font-medium hover:bg-[#0052CC] hover:text-white transition-all"
                >
                  {link.label}
                </Link>
              ))}
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
              <p className="text-xl text-gray-400">
                Common questions about our service area and logistics
              </p>
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
              Ready to Book in Your Area?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional mobile detailing anywhere in the Albuquerque metro. We come to you.
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
