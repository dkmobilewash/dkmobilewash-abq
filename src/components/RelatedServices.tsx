import { Link } from 'react-router-dom';
import { Car, Sparkles, Home } from 'lucide-react';

interface RelatedServicesProps {
  services: Array<{
    title: string;
    slug: string;
    description: string;
  }>;
  title?: string;
}

export default function RelatedServices({ services, title = 'Related Services' }: RelatedServicesProps) {
  const getIcon = (index: number) => {
    const icons = [Car, Sparkles, Home];
    const Icon = icons[index % icons.length];
    return <Icon className="w-6 h-6 text-[#0052CC]" />;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={service.slug.startsWith('/') ? service.slug : `/service/${service.slug}`}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-[#0052CC] transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {getIcon(index)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0052CC] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
