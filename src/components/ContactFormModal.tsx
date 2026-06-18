import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialService?: string;
}

export function ContactFormModal({ isOpen, onClose, onSuccess, initialService }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service_interest: initialService || 'Mobile Auto Detailing'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service_interest: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('contact_form_submissions')
        .insert([formData]);

      if (submitError) throw submitError;

      onSuccess();
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit form. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setFormData({ name: '', phone: '', service_interest: initialService || 'Mobile Auto Detailing' });
      setError('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Started</h2>
        <p className="text-gray-600 mb-6">Tell us what service you're interested in</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="John Doe"
              disabled={isSubmitting}
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="(805) 555-0123"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
              Service Interest *
            </label>
            <select
              id="service"
              required
              value={formData.service_interest}
              onChange={(e) => setFormData({ ...formData, service_interest: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
              disabled={isSubmitting}
            >
              <option value="Mobile Auto Detailing">Mobile Auto Detailing</option>
              <option value="Full Refresh">Full Refresh Package</option>
              <option value="Gold Standard">Gold Standard Package</option>
              <option value="Masterpiece Detail">Masterpiece Detail Package</option>
              <option value="Classic Exterior">Classic Exterior Package</option>
              <option value="Wax & Buff">Wax & Buff Package</option>
              <option value="Classic Interior">Classic Interior Package</option>
              <option value="Deep Shampoo">Deep Shampoo Package</option>
              <option value="Mold Reset">Mold Reset Package</option>
              <option value="Paint Correction">Paint Correction</option>
              <option value="Ceramic Coating">Ceramic Coating</option>
              <option value="Interior Detailing">Interior Detailing</option>
              <option value="Exterior Detailing">Exterior Detailing</option>
            </select>
          </div>

          {error && (
            <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
