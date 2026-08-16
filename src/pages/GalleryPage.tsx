import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

// Interface for props - keeping it optional to prevent crashes
interface GalleryPageProps {
  onNavigate?: (page: string) => void;
}

export default function GalleryPage({ onNavigate }: GalleryPageProps) {
  // Fallback image to prevent broken icons if any URL fails
  const fallbackImage = 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/exterior%20detailing%20page/detailingnearmealbuquerque.png';

  const galleryImages = [
    {
      url: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/ceramic%20coating%20page/IMG_2806.jpeg',
      alt: 'Professional ceramic coating hydrophobic beading result - Albuquerque mobile detailing',
    },
    {
      url: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/exterior%20detailing%20page/IMG_1DB764255801-1.jpeg',
      alt: 'Exterior hand wash and clay bar decontamination finish - Mobile auto detailing Albuquerque',
    },
    {
      url: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/paint%20correction%20page/paint-correction-albuqueruqe%20.webp',
      alt: 'Multi-stage paint correction removing swirl marks and restoring gloss - DK Mobile Wash Albuquerque',
    },
    {
      url: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-interiodetailing.jpeg',
      alt: 'Deep interior shampooing, leather conditioning, and dashboard restoration - Albuquerque mobile detailing',
    },
    {
      url: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/mobile-detaling-ventura.png',
      alt: 'Full vehicle inside-out detail transformation - Professional auto detailing Albuquerque',
    },
    {
      url: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/exterior%20detailing%20page/detailingnearmealbuquerque.png',
      alt: 'Luxury SUV exterior enhancement and wax protection - Mobile detailing Rio Rancho',
    },
    {
      url: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/paint-correection-ventura.png',
      alt: 'Showroom-level paint enhancement and sealant application - Corrales auto detailing',
    },
    {
      url: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/headlight%20restoration%20page/albuquerque-headlight-restoration.jpg',
      alt: 'Headlight restoration before and after clarity improvement - Premium detailing service Albuquerque',
    },
    {
      url: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/engine-bay-detail-albuquerque.webp',
      alt: 'Professional engine bay degreasing, cleaning, and trim dressing - DK Mobile Wash Albuquerque',
    },
    {
      url: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/fleet%20%26%20dealership%20page/IMG_E859BCB691E0-1.jpeg',
      alt: 'Commercial fleet and dealership on-site detailing results - Mobile auto detailing Albuquerque',
    },
  ];

  // Safe navigation handler - prevents crashes if onNavigate is undefined
  const handleBookNow = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      // Fallback: direct navigation if prop is missing
      window.location.href = '/contact';
    }
  };

  return (
    <>
      <SEO
        title="Mobile Detailing Gallery Albuquerque NM | Real Before & After Results | DK Mobile Wash"
        description="See real mobile detailing transformations in Albuquerque, NM. Browse our gallery of ceramic coating, paint correction, interior deep cleaning & exterior detailing results. Licensed & insured. Book today: (505) 604-8058"
        keywords="detailing gallery Albuquerque, car detailing photos Albuquerque NM, mobile detailing results Rio Rancho, auto detailing gallery Corrales, ceramic coating before after ABQ"
        canonical="https://www.dkmobilewash.com/gallery"
      />

      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional Mobile Detailing Gallery in Albuquerque, NM | Real Transformations
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Every vehicle in Albuquerque faces relentless high-desert UV exposure, abrasive silica dust, and hard water etching. Our <strong>mobile detailing transformations</strong> showcase how professional decontamination, machine polishing, and long-term protection restore factory clarity and defend against New Mexico's harsh climate. Zero stock photos. 100% real jobs performed at driveways, offices, and job sites across the ABQ metro.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work: Real Results, Real Albuquerque Vehicles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our portfolio of <strong>on-site car cleaning results</strong> featuring daily commuters, family SUVs, luxury collections, and commercial fleets. Each project highlights our meticulous process: safe two-bucket washing, clay bar decontamination, targeted stain extraction, and precision protection tailored for <strong>high-desert paint restoration</strong> and interior preservation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== fallbackImage) {
                        target.src = fallbackImage;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for the Same Showroom Transformation?
            </h2>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Your vehicle deserves more than a rushed tunnel wash. Our licensed, insured, and fully self-contained mobile units bring dealership-level <Link to="/service/mobile-auto-detailing" className="text-white underline hover:text-gray-200 font-semibold"><strong>mobile auto detailing</strong></Link>, multi-stage <Link to="/service/paint-correction" className="text-white underline hover:text-gray-200 font-semibold"><strong>paint correction</strong></Link>, and multi-year <Link to="/ceramic-coating" className="text-white underline hover:text-gray-200 font-semibold"><strong>ceramic coating protection</strong></Link> directly to your driveway. No shop visits, no utility hookups, and guaranteed results that withstand Albuquerque's sun, dust, and monsoon fallout.
            </p>
            <button
              onClick={handleBookNow}
              className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Book Your Detail Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
