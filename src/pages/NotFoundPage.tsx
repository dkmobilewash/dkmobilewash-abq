import { Link } from 'react-router-dom';
import { Home, Phone, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | DK Mobile Wash Albuquerque"
        description="The page you're looking for doesn't exist. Browse our mobile detailing services or contact DK Mobile Wash at (505) 604-8058."
      />

      <div className="min-h-screen bg-white pt-20">
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-6xl font-bold text-[#0052CC] mb-4">404</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved. Browse our services below or give us a call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-[#0052CC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003D99] transition-all"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <a
                href="tel:5056048058"
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call (505) 604-8058
              </a>
            </div>

            <div className="text-left bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Popular Services</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/service/mobile-auto-detailing" className="flex items-center gap-2 text-[#0052CC] hover:underline">
                    <ArrowRight className="w-4 h-4" /> Mobile Auto Detailing
                  </Link>
                </li>
                <li>
                  <Link to="/ceramic-coating" className="flex items-center gap-2 text-[#0052CC] hover:underline">
                    <ArrowRight className="w-4 h-4" /> Ceramic Coating
                  </Link>
                </li>
                <li>
                  <Link to="/service/interior-detailing" className="flex items-center gap-2 text-[#0052CC] hover:underline">
                    <ArrowRight className="w-4 h-4" /> Interior Detailing
                  </Link>
                </li>
                <li>
                  <Link to="/service/paint-correction" className="flex items-center gap-2 text-[#0052CC] hover:underline">
                    <ArrowRight className="w-4 h-4" /> Paint Correction
                  </Link>
                </li>
                <li>
                  <Link to="/fleet" className="flex items-center gap-2 text-[#0052CC] hover:underline">
                    <ArrowRight className="w-4 h-4" /> Fleet & Commercial Detailing
                  </Link>
                </li>
                <li>
                  <Link to="/service-areas" className="flex items-center gap-2 text-[#0052CC] hover:underline">
                    <ArrowRight className="w-4 h-4" /> Service Areas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
