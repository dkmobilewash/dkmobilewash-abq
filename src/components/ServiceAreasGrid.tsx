import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface ServiceAreasGridProps {
  baseUrl?: string;
  title?: string;
  description?: string;
}

const serviceAreas = [
  {
    name: 'Albuquerque',
    slug: 'albuquerque',
    description: 'Full mobile detailing service available'
  },
  {
    name: 'Rio Rancho',
    slug: 'rio-rancho',
    description: 'Full mobile detailing service available'
  },
  {
    name: 'Corrales',
    slug: 'corrales',
    description: 'Full mobile detailing service available'
  },
  {
    name: 'North Valley',
    slug: 'north-valley',
    description: 'Full mobile detailing service available'
  },
  {
    name: 'Tanoan',
    slug: 'tanoan',
    description: 'Full mobile detailing service available'
  },
  {
    name: 'Paradise Hills',
    slug: 'paradise-hills',
    description: 'Full mobile detailing service available'
  },
  {
    name: 'Los Ranchos de Albuquerque',
    slug: 'los-ranchos-de-albuquerque',
    description: 'Full mobile detailing service available'
  },
  {
    name: 'Albuquerque Acres',
    slug: 'albuquerque-acres',
    description: 'Full mobile detailing service available'
  }
];

export default function ServiceAreasGrid({ baseUrl, title = 'Service Areas', description }: ServiceAreasGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-[#0052CC] mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          {description && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceAreas.map((area) => (
            <div
              key={area.slug}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#0052CC] hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 text-[#0052CC] mr-2" />
                <h3 className="text-lg font-bold text-gray-900">{area.name}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">{area.description}</p>
              <Link
                to={baseUrl ? `${baseUrl}/${area.slug}` : `/${area.slug}`}
                className="inline-flex items-center text-[#0052CC] font-semibold text-sm hover:text-[#003D99] transition-colors"
              >
                Book Service{" "}
                <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
