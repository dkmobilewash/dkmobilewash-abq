import { Link } from 'react-router-dom';
import { Building2, Users, Calendar, Truck, CheckCircle, Phone, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import { useBookingModal } from '../App';

const industries = [
  {
    icon: Wrench,
    name: 'Construction & HVAC',
    desc: 'Work trucks, service vans, and equipment haulers that accumulate heavy site grime, concrete dust, and adhesive. Regular washing protects your brand at job sites and client properties.'
  },
  {
    icon: Building2,
    name: 'Real Estate & Property Management',
    desc: 'A clean vehicle signals professionalism at every showing and walk-through. We keep your team\'s cars and SUVs in client-ready condition year-round.'
  },
  {
    icon: Users,
    name: 'Dealerships',
    desc: 'Dealership inventory needs consistent, efficient washing to stay lot-ready. We can service your inventory on-site without disrupting your sales operation.'
  },
  {
    icon: Truck,
    name: 'Delivery & Logistics',
    desc: 'Cargo vans and delivery vehicles accumulate dust, food debris, and road film quickly. Regular fleet washing maintains a professional appearance on every route.'
  },
  {
    icon: Building2,
    name: 'Corporate & Executive Fleets',
    desc: 'Executive vehicles and company cars represent your brand to clients and partners. We offer recurring maintenance schedules that keep them clean with no scheduling hassle on your end.'
  },
  {
    icon: Wrench,
    name: 'Plumbing & Service Trades',
    desc: 'Service vans are rolling advertisements for your business. A clean exterior and organized interior signals to customers that you run a professional operation.'
  }
];

const faqs = [
  {
    question: 'What is the minimum fleet size you service?',
    answer: 'We work with businesses starting at two vehicles. There is no minimum fleet size requirement. Whether you have two company trucks or a twenty-vehicle service fleet, we provide the same professional service and can build a recurring schedule that works for your operation.'
  },
  {
    question: 'How much does fleet washing cost per vehicle?',
    answer: 'Fleet washing rates depend on vehicle type, size, and service frequency. Most exterior fleet washes range from $40 to $90 per vehicle with volume discounts for larger fleets and recurring schedules. For full fleet detailing (deeper periodic service), pricing is quoted separately based on the scope. Call (505) 604-8058 for a custom fleet quote.'
  },
  {
    question: 'Can you service our vehicles overnight or on weekends?',
    answer: 'Yes. We offer flexible scheduling including early mornings, evenings, and weekends to avoid disrupting your business operations. Many fleet clients prefer overnight or weekend service so their vehicles are clean and ready Monday morning. We coordinate timing at booking based on your operational needs.'
  },
  {
    question: 'Do you offer both basic fleet washing and full fleet detailing?',
    answer: 'Yes. Fleet washing is a regular maintenance service — exterior wash, tires and wheels, glass, and a quick interior wipe-down. Fleet detailing is a deeper periodic service that includes paint decontamination, interior extraction, leather conditioning, and optional paint protection. Most fleet clients use regular washing monthly and schedule a full detail quarterly or biannually.'
  }
];

export default function FleetPage() {
  const { openBookingModal } = useBookingModal();

  return (
    <>
      <SEO
        title="Fleet Washing & Detailing Albuquerque NM | We Come to Your Lot | DK Mobile Wash"
        description="On-site fleet washing and commercial vehicle detailing in Albuquerque. Weekly, biweekly, or monthly schedules. Self-contained mobile unit — no hookups needed. Call (505) 604-8058 for a free fleet quote."
        keywords="fleet washing albuquerque, mobile fleet detailing near me, fleet vehicle cleaning, commercial vehicle detailing albuquerque, fleet car wash albuquerque nm"
        canonical="https://www.dkmobilewash.com/fleet"
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative text-white pt-32 pb-16 overflow-hidden min-h-[600px] flex flex-col">
          <div className="absolute inset-0">
            <img
              src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/fleet%20%26%20dealership%20page/7FF36606-8F31-487C-A6FD-F37CBA4CC027_1_105_c.jpeg"
              alt="Fleet washing service in Albuquerque"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
            <div className="text-center">
              <p className="text-lg md:text-xl text-white mb-4 font-medium drop-shadow-lg">
                On-Site Service for Albuquerque Businesses
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-2xl mb-6">
                Mobile Fleet Washing in Albuquerque, NM — On-Site Service for Your Business
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-3xl mx-auto">
                DK Mobile Wash comes to your lot, warehouse, or job site to keep your business vehicles clean. Flexible weekly, biweekly, and monthly schedules. No driving vehicles to a shop. No downtime.
              </p>
              <p className="text-base text-gray-300 mb-8 max-w-3xl mx-auto">
                Need deeper service?{' '}
                <Link to="/albuquerque/fleet-commercial-detailing" className="text-white underline hover:text-gray-200">
                  View our full fleet detailing page
                </Link>{' '}
                or explore{' '}
                <Link to="/service/exterior-detailing" className="text-white underline hover:text-gray-200">
                  exterior detailing
                </Link>{' '}
                for paint protection options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openBookingModal()}
                  className="bg-white text-[#0052CC] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
                >
                  Get Fleet Quote
                </button>
                <a
                  href="tel:5056048058"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>(505) 604-8058</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Built for Business Owners with 2+ Vehicles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                If your business has two or more vehicles that need regular maintenance, fleet washing is the right service for you. We come to your location on a recurring schedule so you never have to think about it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Business Case for Regular Fleet Washing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Clean vehicles send a clear message to customers: your business is organized, professional, and takes pride in its work. In Albuquerque's desert environment, vehicles accumulate dust, construction particulate, and hard water deposits quickly — a fleet that looks neglected reflects on your brand whether you intend it to or not.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Regular washing also extends vehicle life. Road grime and mineral deposits accelerate paint oxidation and corrosion. A maintenance wash cycle is far cheaper than premature paint failure or trade-in value loss.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How On-Site Fleet Washing Works</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We come to your lot, warehouse, or designated parking area with a self-contained unit. No hookups required — we bring our own water and power. We work through your vehicles systematically while your drivers are off the road, then document the service and invoice your account.
                </p>
                <div className="space-y-2">
                  {['Schedule a recurring appointment', 'We arrive at your lot with all equipment', 'Vehicles are washed and documented', 'You receive a service report and invoice'].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#0052CC] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet washing vs detailing */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Fleet Washing vs. Fleet Detailing — What's the Difference?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fleet Washing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Regular maintenance service — the equivalent of a professional wash cycle for your business vehicles. Keeps vehicles presentable between deeper cleans.
                </p>
                <ul className="space-y-2">
                  {[
                    'Exterior hand wash',
                    'Tire and wheel cleaning',
                    'Glass cleaning (exterior)',
                    'Quick interior wipe-down',
                    'Ideal frequency: weekly or biweekly'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fleet Detailing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Deeper periodic service that restores vehicles to a higher standard. Recommended quarterly or biannually alongside regular washing.
                </p>
                <ul className="space-y-2">
                  {[
                    'Paint decontamination and clay bar',
                    'Interior extraction and deep clean',
                    'Leather conditioning',
                    'Odor elimination',
                    'Optional paint sealant or ceramic coating'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scheduling */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Scheduling That Works Around Your Operation
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
              We offer weekly, biweekly, and monthly recurring schedules. Early morning, overnight, and weekend availability keeps vehicles clean without disrupting your workday.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Weekly', desc: 'For high-mileage fleets or businesses where appearance is critical at every client touchpoint.' },
                { label: 'Biweekly', desc: 'The most popular option — regular enough to maintain a clean appearance without unnecessary frequency.' },
                { label: 'Monthly', desc: 'For vehicles that accumulate less grime or businesses that complement washing with quarterly full details.' }
              ].map((opt, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-[#0052CC] mb-3">{opt.label}</div>
                  <p className="text-gray-600">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work with businesses across the Albuquerque metro in every industry that depends on vehicles.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-[#0052CC]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#0052CC] to-[#003D99] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Set Up Fleet Service?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Contact us today for a custom fleet washing quote. We respond within one business day and can have your first service scheduled within the week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openBookingModal()}
                className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Fleet Quote
              </button>
              <a
                href="tel:5056048058"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(505) 604-8058</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
