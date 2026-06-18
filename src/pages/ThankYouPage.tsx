import { CheckCircle, Calendar } from 'lucide-react';
import { useEffect } from 'react';

export function ThankYouPage() {
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex, follow');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      meta.setAttribute('content', 'noindex, follow');
      document.head.appendChild(meta);
    }

    document.title = 'Thank You - DK Mobile Wash';

    return () => {
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 pt-20 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            We've received your request and someone from our team will be reaching out to you soon.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Book Now?
            </h2>
            <p className="text-gray-600 mb-6">
              If you already know what service you want, you can schedule your appointment online right away.
            </p>

            <a
              href="https://calendly.com/dkmobilewashvc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              Book Online Now
            </a>
          </div>

          <div className="text-gray-600">
            <p className="mb-2">Questions? Call us at:</p>
            <a href="tel:8054123456" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              (805) 412-3456
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
