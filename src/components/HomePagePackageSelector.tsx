import { useState } from 'react';
import { Check } from 'lucide-react';

interface HomePagePackageItem {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

interface HomePagePackageSelectorProps {
  onBookNow: (packageName: string) => void;
}

const homePagePackages: Record<string, HomePagePackageItem[]> = {
  'full-detail': [
    {
      name: 'Full Refresh',
      subtitle: 'Essential',
      description: 'Perfect for regular maintenance or quick refresh in Albuquerque. Ideal for busy professionals who want a clean vehicle without the time commitment.',
      image: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/mobile-detaling-ventura.png',
      features: [
        'Interior Vacuum',
        'Wipe all surfaces',
        'Stains (Spot Treatment)',
        'Windows & Mirrors',
        'Door Jambs',
        'Floor Mats',
        'Exterior Hand Wash',
        'Wheel & Tire Cleaning',
        'Quick Wax Protection'
      ]
    },
    {
      name: 'Gold Standard',
      subtitle: 'Most Popular',
      description: 'The most popular choice in Albuquerque. A thorough inside-out mobile detail that delivers exceptional results. Great for preparing vehicles for sale or special occasions.',
      image: 'https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/exterior%20detailing%20page/detailingnearmealbuquerque.png',
      features: [
        'Double Vacuum Interior',
        'Wipe all surfaces',
        'Stains (Spot Treatment)',
        'Windows & Mirrors',
        'Clean & Protect Plastic',
        'Detail Floor Mats and Shine',
        'Hand Wash & Dry',
        'Clay Bar Treatment',
        'Wheel & Tire Detail',
        'Premium Wax Protection (3 Months)'
      ]
    },
    {
      name: 'Masterpiece Detail',
      subtitle: 'Ultimate',
      description: 'The ultimate mobile detailing experience for Albuquerque drivers who demand perfection. Includes deep cleaning, paint enhancement, and professional-grade protection.',
      image: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/paint-correection-ventura.png',
      features: [
        'Shampoo Seats & Carpet',
        'Double Vacuum Interior',
        'Wipe all Surfaces',
        'Stain (Spot Treatment)',
        'Clean & Protect All Plastic',
        'Windows & Mirrors',
        'Detail Floor Mats & Shine',
        'Detail Trunk',
        'Paint Enhancement Polish',
        'Hand Wash & Dry',
        'Clay Bar Treatment',
        'Wheel & Tire Detail',
        'Premium Wax Protection'
      ]
    }
  ],
  'exterior-only': [
    {
      name: 'Classic Exterior',
      subtitle: 'Essential',
      description: 'Maintain your vehicle\'s exterior with a professional mobile car wash in Albuquerque. Perfect for weekly or bi-weekly maintenance.',
      image: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/mobile-detaling-ventura.png',
      features: [
        'Basic 5 Spot Polish',
        'Professional Hand Wash',
        'Wheel Wells',
        'Windows & Mirrors',
        'Detail Rims & Tires',
        'Wax Protection (3 Months)'
      ]
    },
    {
      name: 'Wax & Buff',
      subtitle: 'Popular',
      description: 'Remove light swirls and scratches while adding shine and protection. Ideal for vehicles exposed to Albuquerque\'s desert conditions.',
      image: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/exterior-detail-ventura.png',
      features: [
        'Paint Enhancement Polish',
        'Professional Hand Wash',
        'Clay Bar Exterior',
        'Wheel Wells',
        'Detail Rims & Tires',
        'Windows & Mirrors',
        'Wax Protection (3 Months)'
      ]
    },
    {
      name: 'Ceramic Coating',
      subtitle: 'Ultimate',
      description: 'The best paint protection for Albuquerque vehicles. Our professional ceramic coating provides 5-10 years of defense against desert dust, UV rays, and contaminants.',
      image: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/paint-correection-ventura.png',
      features: [
        'Paint Correction Available',
        'Ultimate Gloss',
        'Our Best 10H+ Coating',
        'Hydrophobic and Self-Cleaning',
        'Full Exterior Detail',
        'CARFAX Verified Warranty',
        'Best Protection (5-10 Years)'
      ]
    }
  ],
  'interior-only': [
    {
      name: 'Classic Interior',
      subtitle: 'Essential',
      description: 'Professional interior car detailing in Albuquerque. Perfect for maintaining a clean, fresh interior for daily driving.',
      image: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/interior_detailing_ventura.png',
      features: [
        'Complete Interior Vacuum',
        'Wipe All Surface',
        'Stains (Spot Treatment)',
        'Windows & Mirrors',
        'Detail Floor Mats and Shine',
        'Detail Trunk'
      ]
    },
    {
      name: 'Deep Shampoo',
      subtitle: 'Popular',
      description: 'Deep interior detailing with professional seat and carpet shampooing. Removes embedded dirt, stains, and odors. Perfect for families, pet owners, and commuters.',
      image: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/shampoo_detialing_ventura.png',
      features: [
        'Deep Cleaning Treatment',
        'Shampoo All Carpets & Seats',
        'Double Vacuum Interior',
        'Stain Extraction',
        'Clean & Protect All Plastic',
        'Windows & Mirrors',
        'Detail Floor Mats and Shine',
        'Detail Trunk'
      ]
    },
    {
      name: 'Mold Reset',
      subtitle: 'Remediation',
      description: 'Complete mold remediation for Albuquerque vehicles affected by moisture, mildew, or water damage. Includes ozone treatment to eliminate odors and sanitize.',
      image: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/mold_remedetaion_detail.png',
      features: [
        'Mold Remediation Treatment',
        'Shampoo Seats & Carpets',
        'Ozone Treatment',
        'Double Vacuum Interior',
        'Wipe all Surfaces',
        'Stains (Spot Treatment)',
        'Clean & Protect Plastic',
        'Windows & Mirrors',
        'Detail Floor Mats & Shine',
        'Detail Trunk'
      ]
    }
  ]
};

export default function HomePagePackageSelector({ onBookNow }: HomePagePackageSelectorProps) {
  const [selectedHomeTab, setSelectedHomeTab] = useState<'full-detail' | 'exterior-only' | 'interior-only'>('full-detail');

  const homePackageTabs = [
    { id: 'full-detail' as const, label: 'Full Detail' },
    { id: 'exterior-only' as const, label: 'Exterior Only' },
    { id: 'interior-only' as const, label: 'Interior Only' }
  ];

  return (
    <section id="homepage-auto-detailing-packages" className="pt-8 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Mobile Car Detailing Packages in Albuquerque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional mobile car wash and detailing packages for Albuquerque metro area. From interior detailing to ceramic coating, we come to you.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#0052CC] rounded-full p-2 shadow-lg">
            {homePackageTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedHomeTab(tab.id)}
                className={`px-8 py-3 rounded-full font-semibold text-base transition-all duration-200 ${
                  selectedHomeTab === tab.id
                    ? 'bg-white text-[#0052CC] shadow-md'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homePagePackages[selectedHomeTab].map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#0052CC] flex flex-col"
            >
              {/* Package Title - Single Line Above Image */}
              <div className="p-6 pb-4 h-24 flex items-start">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                    {pkg.name}
                  </h3>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                      pkg.subtitle === 'Most Popular' || pkg.subtitle === 'Popular'
                        ? 'bg-orange-100 text-orange-600'
                        : pkg.subtitle === 'Ultimate'
                        ? 'bg-purple-100 text-purple-600'
                        : pkg.subtitle === 'Essential'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {pkg.subtitle}
                  </span>
                </div>
              </div>

              {/* Package Image - Fixed Height */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={`${pkg.name} mobile car detailing package in Albuquerque - ${pkg.description}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Package Content */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-6 text-base">{pkg.description}</p>

                <h4 className="text-lg font-bold text-gray-900 mb-4">What's Included</h4>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-[#0052CC] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Book Now Button */}
                <button
                  onClick={() => onBookNow(pkg.name)}
                  className="w-full bg-[#0052CC] hover:bg-[#003D99] text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-md"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
