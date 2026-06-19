import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const vehicleParts = formData.vehicle.match(/^(\d{4})\s+(.+)$/);
      const year = vehicleParts ? vehicleParts[1] : (formData.vehicle || 'N/A');
      const makeModel = vehicleParts ? vehicleParts[2] : (formData.service || 'N/A');

      const details = [
        formData.email && `Email: ${formData.email}`,
        formData.location && `Location: ${formData.location}`,
        formData.service && `Service: ${formData.service}`,
        formData.message && `Note: ${formData.message}`,
      ].filter(Boolean).join(' | ');

      const { error: supabaseError } = await supabase
        .from('booking_requests')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          year,
          make_model: details || makeModel,
          status: 'new'
        }]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Submission failed. Please try again or call us directly at (505) 604-8058.');
    } finally {
      setIsSubmitting(false);
    }
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
                  {!submitted ? (
                    <>
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Quote</h2>
                      {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
                          {error}
                        </div>
                      )}
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
                              disabled={isSubmitting}
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
                              disabled={isSubmitting}
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
                              disabled={isSubmitting}
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
                              disabled={isSubmitting}
                            >
                              <option value="">Select a service</option>
                              <option value="Mobile Auto Detailing">Mobile Auto Detailing</option>
                              <option value="Ceramic Coating">Ceramic Coating</option>
                              <option value="Paint Correction">Paint Correction</option>
                              <option value="Interior Detailing">Interior Car Detailing</option>
                              <option value="Exterior Detailing">Exterior Car Detailing</option>
                              <option value="Headlight Polishing">Headlight Polishing</option>
                              <option value="Engine Detailing">Engine Detailing</option>
                              <option value="Fleet & Commercial">Fleet & Commercial</option>
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
                              disabled={isSubmitting}
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
                              disabled={isSubmitting}
                            >
                              <option value="">Select your city</option>
                              <option value="Albuquerque">Albuquerque</option>
                              <option value="Rio Rancho">Rio Rancho</option>
                              <option value="Corrales">Corrales</option>
                              <option value="North Albuquerque Acres">North Albuquerque Acres</option>
                              <option value="Los Ranchos De Albuquerque">Los Ranchos De Albuquerque</option>
                              <option value="Tanoan">Tanoan</option>
                              <option value="Paradise Hills">Paradise Hills</option>
                              <option value="North Valley">North Valley</option>
                              <option value="Other">Other</option>
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                            placeholder="Tell us more about your vehicle's condition, preferred timing, or any special requests..."
                            disabled={isSubmitting}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#0052CC] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                              </svg>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span>Request Quote</span>
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Thanks {formData.name}!
                      </h2>
                      <p className="text-lg text-gray-600 mb-6">
                        We've received your request.<br/>
                        <strong>We'll contact you within 24 hours</strong> to discuss your detailing needs.
                      </p>
                      <a
                        href="tel:5056048058"
                        className="inline-block bg-[#0052CC] hover:bg-[#003D99] text-white py-3 px-8 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
                      >
                        Call Now: (505) 604-8058
                      </a>
                    </div>
                  )}
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
