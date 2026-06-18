import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import SEO from '../components/SEO';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicle: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly to confirm your booking.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      vehicle: '',
      location: '',
      message: '',
    });
  };

  return (
    <>
      {/* NOTE: Page title and meta description optimized for Albuquerque metro area local SEO.
          Update cities and services here if service area or offerings change. */}
      <SEO
        title="Contact Us | Book Mobile Detailing Albuquerque Metro Area"
        description="Book mobile car wash & auto detailing in Albuquerque metro area. Serving Albuquerque, Rio Rancho, Corrales & beyond. Licensed & insured. Get your free quote today!"
        keywords="contact mobile detailing Albuquerque, book car detailing Albuquerque metro area, schedule auto detailing Rio Rancho, mobile wash Corrales"
        canonical="https://dkmobilewashalbuquerque.com/contact"
      />

      <div className="min-h-screen bg-white pt-20">
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Book Mobile Detailing in Albuquerque Metro Area
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Contact DK Mobile Wash for professional auto detailing at your home or office. Serving Albuquerque, Rio Rancho, Corrales and beyond.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Quote</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                          placeholder="(505) 555-0167"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="mobile-detailing">Mobile Auto Detailing</option>
                          <option value="ceramic-coating">Ceramic Coating</option>
                          <option value="paint-correction">Paint Correction</option>
                          <option value="interior-detailing">Interior Car Detailing</option>
                          <option value="exterior-detailing">Exterior Car Detailing</option>
                          <option value="headlight-restoration">Headlight Polishing</option>
                          <option value="engine-bay">Engine Detailing</option>
                          <option value="fleet-commercial">Fleet & Commercial</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Vehicle Make & Model
                        </label>
                        <input
                          type="text"
                          value={formData.vehicle}
                          onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                          placeholder="e.g., 2020 Honda Accord"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          City/Location *
                        </label>
                        <select
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                        >
                          <option value="">Select your city</option>
                          <option value="albuquerque">Albuquerque</option>
                          <option value="rio-rancho">Rio Rancho</option>
                          <option value="corrales">Corrales</option>
                          <option value="north-albuquerque-acres">North Albuquerque Acres</option>
                          <option value="los-ranchos">Los Ranchos De Albuquerque</option>
                          <option value="tanoan">Tanoan</option>
                          <option value="paradise-hills">Paradise Hills</option>
                          <option value="north-valley">North Valley</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Tell us more about your vehicle's condition, preferred timing, or any special requests..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0052CC] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Request Quote</span>
                    </button>
                  </form>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a href="tel:5055550167" className="flex items-start space-x-3 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                        <Phone className="w-5 h-5 text-[#0052CC]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-semibold text-gray-900 group-hover:text-[#0052CC] transition-colors">
                          (505) 555-0167
                        </p>
                      </div>
                    </a>

                    <a href="mailto:info@dkmobilewash.com" className="flex items-start space-x-3 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                        <Mail className="w-5 h-5 text-[#0052CC]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold text-gray-900 group-hover:text-[#0052CC] transition-colors">
                          info@dkmobilewash.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#0052CC]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Service Area</p>
                        <p className="font-semibold text-gray-900">
                          All of Albuquerque Metro Area, NM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-[#0052CC]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Hours</p>
                        <p className="font-semibold text-gray-900">
                          Mon-Sat: 8AM - 6PM<br />
                          Sunday: By Appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0052CC] to-[#003D99] rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                  <p className="mb-4 text-gray-200">
                    We typically respond to all inquiries within 2 hours during business hours.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>Same-day service available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>Free quotes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">Service Area Map</p>
                  <p className="text-sm">Serving all of Albuquerque Metro Area, NM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
