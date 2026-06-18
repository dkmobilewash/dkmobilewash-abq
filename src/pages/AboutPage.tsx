import { Link } from 'react-router-dom';
import { Award, Shield, Heart, Users, CheckCircle, Star } from 'lucide-react';
import SEO from '../components/SEO';
import { useBookingModal } from '../App';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const { openBookingModal } = useBookingModal();

  return (
    <>
      <SEO
        title="About DK Mobile Wash | Licensed Mobile Detailing Albuquerque | Trusted Since 2024"
        description="Learn about DK Mobile Wash: Albuquerque's premier licensed & insured mobile auto detailing service. Professional ceramic coating, paint correction & interior detailing at your door. Call (505) 604-8058"
        keywords="about DK Mobile Wash, licensed mobile detailing Albuquerque, professional auto detailing NM, mobile car wash service Albuquerque, ceramic coating Albuquerque, paint correction Albuquerque, interior detailing Rio Rancho"
        canonical="https://dkmobilewash.com/about"
      />

      <div className="min-h-screen bg-white pt-20">
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About DK Mobile Wash | Premier <strong>Mobile Detailing Albuquerque</strong> Service
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                DK Mobile Wash delivers professional <strong>auto detailing results</strong> with unmatched convenience throughout the Albuquerque metro area. Licensed, insured, and committed to <strong>high-desert vehicle care</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story: Born in Albuquerque, Built for NM Drivers</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded in Albuquerque, DK Mobile Wash was built on a simple belief: <strong>professional auto detailing</strong> should come to you, not the other way around. After years of experience in the automotive care industry and witnessing firsthand how Albuquerque's intense <strong>high-desert climate</strong> affects vehicles, we created a mobile detailing service that addresses the unique challenges local drivers face every day.
                  </p>
                  <p>
                    We specialize in bringing professional <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] hover:underline font-semibold">mobile auto detailing</Link> throughout the <Link to="/albuquerque" className="text-[#0052CC] hover:underline font-semibold">Albuquerque metro area</Link>. Our services include deep <Link to="/service/interior-detailing" className="text-[#0052CC] hover:underline font-semibold">interior detailing</Link>, <Link to="/service/exterior-detailing" className="text-[#0052CC] hover:underline font-semibold">exterior detailing</Link>, <Link to="/service/paint-correction" className="text-[#0052CC] hover:underline font-semibold">paint correction</Link>, and long-lasting <Link to="/ceramic-coating" className="text-[#0052CC] hover:underline font-semibold">ceramic coatings</Link> for cars, trucks, SUVs, and <Link to="/fleet" className="text-[#0052CC] hover:underline font-semibold">commercial fleets</Link>. Every service is performed by trained professionals who understand both the art of detailing and the specific protection needs of vehicles in New Mexico's high-desert environment.
                  </p>
                  <p>
                    From <Link to="/rio-rancho" className="text-[#0052CC] hover:underline font-semibold">Rio Rancho</Link> to <Link to="/corrales" className="text-[#0052CC] hover:underline font-semibold">Corrales</Link>, from <Link to="/north-valley" className="text-[#0052CC] hover:underline font-semibold">North Valley</Link> to <Link to="/tanoan" className="text-[#0052CC] hover:underline font-semibold">Tanoan</Link>, we've built lasting relationships with hundreds of Albuquerque-area vehicle owners who trust us to protect their automotive investment. Our fully <strong>self-contained mobile detailing unit</strong> brings professional-grade equipment, water supply, and premium products directly to your driveway or office parking lot—no hookups required.
                  </p>
                  <p>
                    We're <strong>licensed and insured mobile detailing</strong> professionals, committed to treating every vehicle—from daily commuters on I-25/I-40 to luxury automobiles—with the same level of care and attention to detail. When you book with DK Mobile Wash, you're not just getting a car wash. You're partnering with a local business that understands Albuquerque, knows how to protect vehicles in our unique climate, and takes pride in delivering <strong>showroom-quality results</strong> that exceed expectations.
                  </p>
                </div>
              </div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="col-span-1 flex flex-col gap-4">
                  <img src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/about%20us%20page/IMG_27AD5E52E7A3-1.jpeg" alt="Professional detailing work by DK Mobile Wash Albuquerque" className="rounded-2xl shadow-lg w-full h-48 object-cover" loading="lazy" />
                  <img src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/about%20us%20page/IMG_2C178FECE9DD-1.jpeg" alt="Mobile detailing service at home in Albuquerque NM" className="rounded-2xl shadow-lg w-full h-48 object-cover" loading="lazy" />
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                  <img src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/about%20us%20page/IMG_9C844153D2AC-1.jpeg" alt="Quality detailing results - before and after Albuquerque" className="rounded-2xl shadow-lg w-full h-48 object-cover" loading="lazy" />
                  <img src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/about%20us%20page/IMG_0051AD642F51-1.jpeg" alt="DK Mobile Wash service excellence - licensed insured detailing NM" className="rounded-2xl shadow-lg w-full h-48 object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values: The DK Mobile Wash Promise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every <strong>mobile auto detailing service</strong> we deliver across Albuquerque metro area
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#0052CC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every detail matters, and we strive for perfection in every <strong>professional car detailing</strong> service—from basic washes to <Link to="/ceramic-coating" className="text-[#0052CC] hover:underline font-semibold">ceramic coating applications</Link>.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#0052CC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
                <p className="text-gray-600">
                  Fully <strong>licensed and insured mobile detailing</strong> in New Mexico. Your vehicle is protected, and our transparency builds lasting relationships with Albuquerque drivers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#0052CC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
                <p className="text-gray-600">
                  We genuinely love automotive care. Our passion for <strong>high-desert vehicle protection</strong> shows in every job—from <Link to="/service/interior-detailing" className="text-[#0052CC] hover:underline font-semibold">interior sanitization</Link> to <Link to="/service/paint-correction" className="text-[#0052CC] hover:underline font-semibold">paint correction</Link>.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#0052CC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  Proudly serving Albuquerque, Rio Rancho, Corrales, and beyond. We're not just a service—we're your neighbors, committed to <strong>local mobile car wash</strong> excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-full">
                <img src="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/about%20us%20page/342F1049-610C-48F4-AC6C-16C7080B2412_1_105_c.jpeg" alt="Professional mobile detailing service in Albuquerque NM" className="rounded-2xl shadow-xl w-full h-full object-cover object-center" loading="lazy" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose <strong>Mobile Detailing</strong> in Albuquerque?</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#0052CC] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Ultimate Convenience: <strong>On-Site Car Cleaning</strong></h3>
                      <p className="text-gray-600">
                        No need to drive anywhere or wait at a shop. We come to your home, office, or preferred location in the <strong>Albuquerque metro area</strong> at a time that works for you.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#0052CC] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Time-Saving: Detail While You Work</h3>
                      <p className="text-gray-600">
                        Continue with your day while we work. No sitting in waiting rooms or disrupting your schedule—perfect for busy professionals and families across NM.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#0052CC] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Professional Equipment: <strong>Self-Contained Mobile Unit</strong></h3>
                      <p className="text-gray-600">
                        Our mobile units are fully equipped with professional-grade tools, pH-balanced shampoos, and water systems. Zero hookups needed from you.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#0052CC] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Eco-Friendly: Water-Efficient <strong>Mobile Car Wash</strong></h3>
                      <p className="text-gray-600">
                        We use water-efficient techniques that consume significantly less water than traditional car washes—ideal for HOA communities and drought-conscious Albuquerque residents.
                      </p>
                    </div>
                  </div>
                </div>
                <button onClick={openBookingModal} className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                  Book Your <strong>Mobile Detailing Albuquerque</strong> Service Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Sets DK Mobile Wash Apart</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                We're not just another mobile detailer. Here's why Albuquerque metro area trusts us for <strong>professional auto detailing</strong>.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-[#0052CC] fill-current" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium Products</h3>
                <p className="text-gray-200">
                  We use only professional-grade products from trusted brands like Gtechniq to ensure the best <strong>paint protection</strong> and <strong>interior restoration</strong> for your vehicle.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-[#0052CC]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Trained Professionals</h3>
                <p className="text-gray-200">
                  Our team is extensively trained in the latest <strong>mobile detailing techniques</strong> and committed to continuous improvement—from <Link to="/service/headlight-restoration" className="text-white hover:underline font-semibold">headlight restoration</Link> to <Link to="/service/engine-bay-detailing" className="text-white hover:underline font-semibold">engine bay detailing</Link>.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-[#0052CC]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-200">
                  We stand behind our work. If you're not completely satisfied with your <strong>Albuquerque mobile car wash</strong>, we'll make it right. That's our promise.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Trusted by Albuquerque Drivers: 5-Star <strong>Mobile Detailing Reviews</strong>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why hundreds of Albuquerque-area vehicle owners choose DK Mobile Wash for their <strong>auto detailing needs</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <a href="https://www.google.com/maps/search/DK+Mobile+Wash+Albuquerque" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all text-center group">
                <div className="flex items-center justify-center mb-3">
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Google Reviews</h3>
                <p className="text-sm text-gray-600">Read our <strong>5-star mobile detailing reviews</strong></p>
              </a>

              <a href="https://www.facebook.com/dkmobilewash" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all text-center group">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-10 h-10 text-[#0052CC]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Facebook</h3>
                <p className="text-sm text-gray-600">Follow us for <strong>Albuquerque detailing updates</strong></p>
              </a>

              <a href="https://www.instagram.com/dkmobilewash" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#0052CC] hover:shadow-md transition-all text-center group">
                <div className="flex items-center justify-center mb-3">
                  <Shield className="w-10 h-10 text-[#0052CC]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
                <p className="text-sm text-gray-600">See our latest <strong>before & after detailing work</strong></p>
              </a>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="flex items-center justify-center mb-3">
                  <CheckCircle className="w-10 h-10 text-[#0052CC]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Licensed & Insured</h3>
                <p className="text-sm text-gray-600">Fully certified <strong>mobile detailing NM</strong></p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <div id="reviews-widget-84ac9907-3672-4d7d-99a8-572b8d3e50b8" data-truncate="100"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Experience the DK Difference?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Join hundreds of satisfied customers across the Albuquerque metro area who trust us for <strong>professional mobile auto detailing</strong>, <Link to="/ceramic-coating" className="text-[#0052CC] hover:underline font-semibold">ceramic coating protection</Link>, and <Link to="/service/paint-correction" className="text-[#0052CC] hover:underline font-semibold">paint restoration</Link>.
            </p>
            <button onClick={openBookingModal} className="bg-[#0052CC] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-xl">
              Book Your <strong>Mobile Detailing Albuquerque</strong> Service Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
