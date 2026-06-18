import { Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';
import SEO from './SEO';
import { useBookingModal } from '../App';

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonical?: string;
  imageUrl: string;
  imageAlt?: string;
  whatIncluded: string[];
  benefits: Array<{ title: string; description: string }>;
  whoFor: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: Array<{ title: string; slug: string; description: string }>;
  beforeAfterImages?: {
    before: string;
    after: string;
  };
  introText?: React.ReactNode;
  h1Override?: string;
  sectionHeadings?: {
    whatIncluded?: string;
    benefits?: string;
    whoFor?: string;
    faqs?: string;
    cta?: string;
  };
}

export default function ServicePageTemplate({
  title,
  subtitle,
  metaTitle,
  metaDescription,
  keywords,
  canonical,
  imageUrl,
  imageAlt,
  whatIncluded,
  benefits,
  whoFor,
  faqs,
  relatedServices,
  beforeAfterImages,
  introText,
  h1Override,
  sectionHeadings,
}: ServicePageTemplateProps) {
  const { openBookingModal } = useBookingModal();
  return (
    <>
      <SEO title={metaTitle} description={metaDescription} keywords={keywords} canonical={canonical} />

      <div className="min-h-screen bg-white pt-20">
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {h1Override || (
                  <>{title}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
                      Albuquerque
                    </span>
                  </>
                )}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">{subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openBookingModal()}
                  className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  Book Now
                </button>
                <a
                  href="tel:5056048058"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>(505) 604-8058</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {introText && (
          <section className="py-8 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-base text-gray-700">
                {introText}
              </div>
            </div>
          </section>
        )}

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{sectionHeadings?.whatIncluded || "What's Included"}</h2>
                <div className="space-y-4">
                  {whatIncluded.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-full min-h-[400px] flex items-center justify-center">
                <img src={imageUrl} alt={imageAlt || title} className="rounded-2xl shadow-xl w-full h-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {beforeAfterImages && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Real Results</h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                See the difference professional detailing makes
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group h-[400px] md:h-[500px]">
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg font-bold z-10">
                    Before
                  </div>
                  <img
                    src={beforeAfterImages.before}
                    alt="Before detailing"
                    className="rounded-2xl shadow-xl w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative group h-[400px] md:h-[500px]">
                  <div className="absolute top-4 left-4 bg-[#0052CC] text-white px-4 py-2 rounded-lg font-bold z-10">
                    After
                  </div>
                  <img
                    src={beforeAfterImages.after}
                    alt="After detailing"
                    className="rounded-2xl shadow-xl w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{sectionHeadings?.benefits || 'Service Benefits'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{sectionHeadings?.whoFor || 'Who This Service Is For'}</h2>
            <div className="space-y-6">
              {whoFor.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{sectionHeadings?.faqs || 'Frequently Asked Questions'}</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/service/${service.slug}`}
                  className="p-6 border border-gray-200 rounded-xl hover:border-[#0052CC] hover:shadow-lg transition-all text-left"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{sectionHeadings?.cta || 'Ready to Book?'}</h2>
            <p className="text-xl mb-8 text-gray-200">Professional service in the Albuquerque metro area</p>
            <button
              onClick={() => openBookingModal()}
              className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Get Free Quote
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
