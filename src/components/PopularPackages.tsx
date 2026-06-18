import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

const popularPackages = [
  {
    name: 'Gold Standard',
    slug: 'gold-standard',
    description: 'Our most popular package with premium wax and clay bar treatment',
    badge: 'Most Popular'
  },
  {
    name: 'Full Refresh',
    slug: 'full-refresh',
    description: 'Complete interior and exterior detailing in one visit'
  },
  {
    name: 'Masterpiece Detail',
    slug: 'masterpiece-detail',
    description: 'Ultimate detailing with deep cleaning and paint enhancement'
  }
];

export default function PopularPackages() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Detailing Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularPackages.map((pkg) => (
            <Link
              key={pkg.slug}
              to={`/${pkg.slug}`}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-[#0052CC] transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#0052CC]" />
                </div>
                {pkg.badge && (
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {pkg.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0052CC] transition-colors">
                {pkg.name}
              </h3>
              <p className="text-gray-600 text-sm">{pkg.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
