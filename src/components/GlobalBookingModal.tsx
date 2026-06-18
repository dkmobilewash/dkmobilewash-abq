import { useState, FormEvent } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface GlobalBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalBookingModal({ isOpen, onClose }: GlobalBookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    year: '',
    makeModel: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('booking_requests')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          year: formData.year,
          make_model: formData.makeModel,
          status: 'new'
        }]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);

    } catch (err) {
      setError('Submission failed. Please try again or call us directly at (505) 604-8058.');
      console.error('Supabase error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', phone: '', year: '', makeModel: '' });
    setSubmitted(false);
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2 -m-2 rounded-full hover:bg-gray-100 transition-all"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Book Your Detail
            </h2>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition-all"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition-all"
                required
              />
              <input
                type="text"
                placeholder="Vehicle Year * (ex: 2023)"
                value={formData.year}
                onChange={(e) => setFormData({...formData, year: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition-all"
                required
              />
              <input
                type="text"
                placeholder="Vehicle Make/Model * (ex: BMW M4)"
                value={formData.makeModel}
                onChange={(e) => setFormData({...formData, makeModel: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#0052CC] to-[#003D99] hover:from-[#003D99] hover:to-[#002D77] text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Get Free Quote →'
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
              We've received your request for your {formData.year} {formData.makeModel}.<br/>
              <strong>We'll call you within 24 hours</strong> to schedule.
            </p>
            <a
              href="https://detailpilot.com/dk-mobile-wash?step=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#0052CC] to-[#003D99] hover:from-[#003D99] hover:to-[#002D77] text-white py-3 px-8 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 mb-4"
            >
              Book Now →
            </a>
            <button
              onClick={handleClose}
              className="block w-full text-gray-600 hover:text-gray-800 text-sm mt-4 underline"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
