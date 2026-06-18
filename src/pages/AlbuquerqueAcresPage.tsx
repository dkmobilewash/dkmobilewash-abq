import { Link } from 'react-router-dom';
import { Phone, Check, Star, Award, Shield, Clock, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { useBookingModal } from '../App';

export default function AlbuquerqueAcresPage() {
  const { openBookingModal } = useBookingModal();

  const benefits = [
    { icon: Shield, title: 'Licensed & Insured', text: 'Fully certified for your peace of mind' },
    { icon: Clock, title: 'Flexible Scheduling', text: 'We work around your schedule' },
    { icon: Award, title: '5+ Years Experience', text: 'Proven expertise in high-desert detailing' },
    { icon: Star, title: 'Premium Products', text: 'P&S Chemicals & ceramic technology' }
  ];

  const services = [
    { name: 'Mobile Auto Detailing', desc: 'Full-service detailing at your Albuquerque Acres property. Interior and exterior packages available for all vehicle types.' },
    { name: 'Interior Deep Cleaning', desc: 'Hot-water extraction, enzyme treatments, pet hair removal, and UV conditioning. Restores your cabin to a clean standard that lasts.' },
    { name: 'Exterior Detailing & Decontamination', desc: 'Hand wash, clay bar, iron decontamination, and machine polishing to remove East Mountains dust and road film.' },
    { name: 'Ceramic Coating', desc: 'Professional-grade ceramic protection rated for New Mexico UV exposure. Repels dust and cuts maintenance wash time significantly.' },
    { name: 'Paint Correction', desc: 'Multi-stage machine polishing to eliminate swirl marks, oxidation, and surface scratches left by abrasive washes.' },
    { name: 'Headlight Restoration', desc: 'Wet sanding, machine polishing, and UV sealant to restore clarity and improve nighttime visibility.' }
  ];

  const faqs = [
    {
      question: 'Do you come to Albuquerque Acres for mobile detailing?',
      answer: 'Yes. Albuquerque Acres is in our regular service area. We come directly to your property with a fully self-contained mobile detailing unit. No need to drive anywhere or arrange a ride — we handle everything at your location.'
    },
    {
      question: 'Can you detail multiple vehicles on the same visit?',
      answer: 'Absolutely. Many Albuquerque Acres households have multiple vehicles. We can detail two or more vehicles in a single visit and offer multi-vehicle pricing. Just let us know at booking so we can allocate the right amount of time for your appointment.'
    },
    {
      question: 'Do you need access to a water hookup at my property?',
      answer: 'No. Our mobile unit is fully self-contained and carries its own water supply and power generation. We do not need access to your hose, outdoor spigot, or electrical outlet. This makes us ideal for larger lots and rural-adjacent properties like those found throughout Albuquerque Acres.'
    },
    {
      question: 'Do you offer fleet detailing for small businesses in Albuquerque Acres?',
      answer: 'Yes. We service small business fleets including work trucks, vans, and SUVs in Albuquerque Acres. We offer recurring maintenance schedules — weekly, biweekly, or monthly — and come to your business location or storage lot. Call (505) 604-8058 to discuss fleet pricing.'
    }
  ];

  return (
    <>
      <SEO
        title="Mobile Car Detailing Albuquerque Acres NM | DK Mobile Wash"
        description="Mobile auto detailing in Albuquerque Acres. Exterior, interior, ceramic coating, and paint correction at your door. Licensed and insured. Call (505) 604-8058."
        keywords="auto detailing albuquerque acres, car detailing albuquerque acres, mobile detailing albuquerque acres, ceramic coating albuquerque acres, detailing east mountains nm"
        canonical="https://dkmobilewash.com/albuquerque-acres"
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center" style={{
        background: 'linear-gradient(135deg, #0052CC 0%, #003d99 50%, #002d73 100%)'
      }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1200")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <p className="text-white text-sm font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-yellow-300" />
                  Serving Albuquerque Acres &amp; East Side Communities
                </p>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Mobile Car Detailing in Albuquerque Acres, NM —
                <span className="block text-yellow-300">We Come to Your Property</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Professional mobile auto detailing delivered to your Albuquerque Acres driveway. Interior cleaning, paint correction, and ceramic coating — fully self-contained, licensed, and built for high-desert vehicle care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openBookingModal}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Get Free Quote
                </button>
                <a
                  href="tel:5056048058"
                  className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (505) 604-8058
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">5+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">500+</div>
                  <div className="text-white/80 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">100%</div>
                  <div className="text-white/80 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-blue-300/20 rounded-3xl blur-2xl"></div>
                <img
                  src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/albuquerque%20acres%20page/1AC755FB-1B5A-444B-8B1E-A295EF149FF2_1_105_c.jpeg"
                  alt="Professional car detailing in Albuquerque Acres"
                  className="relative rounded-3xl shadow-2xl w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-[#0052CC] p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Albuquerque Acres + Why Mobile */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/albuquerque%20acres%20page/IMG_236FD79BC828-1.jpeg"
                  alt="Mobile detailing service in Albuquerque Acres"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-800 font-semibold">
                      "Best detailing in Albuquerque Acres. DK is a perfectionist!"
                    </p>
                    <p className="text-gray-600 text-sm mt-1">— Steve, Ferrari California T Owner</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block bg-[#0052CC]/10 px-4 py-2 rounded-full mb-4">
                <span className="text-[#0052CC] font-bold text-sm uppercase tracking-wide">Why Mobile Detailing Fits Albuquerque Acres</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                The Right Service for a Semi-Rural East Side Community
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Albuquerque Acres is a semi-rural community on Albuquerque's East Side — larger lots, multi-vehicle households, and real distance from central auto shops. Driving to a detail shop on the other side of the city wastes an entire afternoon. DK Mobile Wash eliminates that by coming directly to your property with a fully self-contained unit that needs no hookups.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The East Mountains elevation and proximity to unpaved roads mean vehicles accumulate silica dust, UV exposure at altitude, and hard water deposits from the area's water supply. Our clay bar decontamination, paint-safe polishing, and ceramic coating systems address all of it. Whether you have one daily driver or a multi-vehicle household, we handle every vehicle with consistent professional results.
              </p>

              <div className="space-y-4">
                {[
                  'Self-contained unit — no water or power hookup needed',
                  'Specializing in East Mountains dust and UV damage',
                  'Multi-vehicle visits available — detail your whole fleet in one appointment',
                  'Ceramic coating rated for New Mexico high-altitude UV',
                  'Licensed, insured, and locally trusted'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-500 rounded-full p-1 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 mt-6 text-sm">
                Want to learn more about the mobile detailing process?{' '}
                <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] font-semibold hover:underline">
                  See how mobile detailing works
                </Link>{' '}
                or{' '}
                <Link to="/albuquerque" className="text-[#0052CC] font-semibold hover:underline">
                  view our Albuquerque service page
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Services Available in Albuquerque Acres
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service is performed on-site at your property. No dropping off. No waiting rooms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#0052CC]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-[#0052CC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Questions about which service is right for your vehicle?</p>
            <a
              href="tel:5056048058"
              className="inline-flex items-center gap-2 text-[#0052CC] font-bold text-lg hover:underline"
            >
              <Phone className="w-5 h-5" />
              Call (505) 604-8058 for a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Common questions from Albuquerque Acres residents
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

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1600")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0052CC]/95 to-[#003d99]/95 z-0"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Book Your Albuquerque Acres Detail?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            DK Mobile Wash comes to your property with everything needed. Book online or call to schedule your appointment today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={openBookingModal}
              className="bg-yellow-400 text-gray-900 px-10 py-5 rounded-xl font-bold text-xl hover:bg-yellow-300 transition-all shadow-2xl hover:scale-105"
            >
              Get Your Free Quote
            </button>
            <a
              href="tel:5056048058"
              className="bg-white text-[#0052CC] px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              (505) 604-8058
            </a>
          </div>

          <p className="mt-10 text-white/80 text-lg">
            Serving Albuquerque Acres and the broader East Side — licensed, insured, and fully self-contained.
          </p>
        </div>
      </section>
    </>
  );
}
