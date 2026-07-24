import { useState, FormEvent } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteFormModal({ isOpen, onClose }: QuoteFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('quote_submissions')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            vehicle: formData.vehicle,
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) throw supabaseError;

      // Send to Zapier webhook for lead tracking
      try {
        await fetch('https://hooks.zapier.com/hooks/catch/20117350/44fmixd/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            website: 'DK Mobile Wash ABQ',
            formType: 'quote',
            submittedAt: new Date().toISOString(),
          }),
        })
      } catch (e) {
        console.error('[Zapier Webhook Error]', e)
      }

      setShowSuccess(true);
    } catch (err) {
      console.error('Error submitting quote:', err);
      setError('Failed to submit quote. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', phone: '', vehicle: '' });
    setShowSuccess(false);
    setError(null);
    onClose();
  };

  const handleBookNow = () => {
    window.open('https://detailpilot.com/dk-mobile-wash?step=0', '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">
            {showSuccess ? 'Thank You!' : 'Get Free Quote'}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {showSuccess ? (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Request Received!</h3>
                <p className="text-gray-600 mb-6">
                  We'll contact you shortly to discuss your detailing needs and provide a personalized quote.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleBookNow}
                  className="w-full bg-[#0052CC] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-lg"
                >
                  Book Now
                </button>
                <button
                  onClick={handleClose}
                  className="w-full bg-gray-100 text-gray-900 px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you with a personalized quote for your vehicle.
              </p>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-700 mb-2">
                  Vehicle (Year, Make, Model) *
                </label>
                <input
                  type="text"
                  id="vehicle"
                  required
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition-all"
                  placeholder="e.g., 2020 Toyota Camry"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0052CC] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
