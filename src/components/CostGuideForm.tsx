import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function CostGuideForm() {
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const contactType = contact.includes('@') ? 'email' : 'phone';

    try {
      const { error: submitError } = await supabase
        .from('cost_guide_leads')
        .insert([{
          contact: contact.trim(),
          contact_type: contactType,
          source_page: 'homepage'
        }]);

      if (submitError) throw submitError;

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting lead:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div id="cost-guide-form" className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-8 lg:sticky lg:top-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Check your inbox — your cost guide is on the way.
          </h3>
          <p className="text-gray-600">
            This guide explains pricing ranges and helps you choose the right level of care for your vehicle.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="cost-guide-form" className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-8 lg:sticky lg:top-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Get the Free Albuquerque Detailing Cost Guide
      </h3>
      <p className="text-gray-600 mb-6">
        Delivered instantly.<br />
        Know what you should be paying — and what to avoid.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
            Email or Phone Number
          </label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your email or phone"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0052CC] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Sending...' : 'Send Me the Guide'}
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
