import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Home, ChevronRight } from 'lucide-react';
import SEO from './SEO';
import { Package, locations, packages } from '../data/packages';
import RelatedServices from './RelatedServices';

interface PackagePageTemplateProps {
  package: Package;
}

export function PackagePageTemplate({ package: pkg }: PackagePageTemplateProps) {
  const getRelatedPackages = () => {
    return packages
      .filter(p => p.slug !== pkg.slug && p.category === pkg.category)
      .slice(0, 3)
      .map(p => ({
        title: p.name,
        slug: `/${p.slug}`,
        description: p.shortIntro
      }));
  };

  const relatedPackages = getRelatedPackages();

  const goldStandardImages = {
    whatIsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/gold%20pacakge/ventura-detailing-pacakges.jpeg',
    whoNeedsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/gold%20pacakge/gold-detailng-package-ventura.jpeg',
    howOften: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/gold%20pacakge/gold-standard-detail-packge.jpeg',
    benefits: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/gold%20pacakge/gold-standard-detail-ventura.jpeg',
    faq: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/gold%20pacakge/dkmobilewashventura.jpeg',
  };

  const fullRefreshImages = {
    whatIsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/full%20refresh/3E1F3018-2CCB-45D3-AD2D-DFDC529299A7_1_102_o.jpeg',
    whoNeedsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/full%20refresh/42AFC519-7F8E-4C07-A108-654F8E4C5220_1_105_c.jpeg',
    howOften: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/full%20refresh/60E8D8E8-D7B7-49AB-AB0D-E21BD6618D58_1_105_c.jpeg',
    benefits: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/full%20refresh/64A444A2-6C8D-44A8-92C9-42B5BD408366_1_102_o.jpeg',
    faq: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/full%20refresh/947A5E56-0E33-4BB9-8C0F-7291B831D820_1_105_c.jpeg',
  };

  const masterpieceImages = {
    whatIsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Masterpiece/302FC874-249F-4DB1-8B7C-9F7A2FD80BD0_1_105_c.jpeg',
    whoNeedsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Masterpiece/76E1BAF7-C52B-4CF2-B62F-F0297A517D91_4_5005_c.jpeg',
    howOften: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Masterpiece/B8393C3B-89DE-4623-9DB9-EC568C452149_1_201_a.jpeg',
    benefits: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Masterpiece/C423F514-DFBE-4621-902B-B590DA535C65_4_5005_c.jpeg',
    faq: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Masterpiece/FC2C500B-2B54-468D-BA33-1BB1BC6EBA33.jpeg',
  };

  const classicExteriorImages = {
    whatIsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/classic%20exterior/2B9281EE-29A4-4649-9A65-E91D1455F282_1_201_a.jpeg',
    whoNeedsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/classic%20exterior/31B75D53-3A8A-4260-9482-48D25FA0E61D_1_105_c.jpeg',
    howOften: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/classic%20exterior/9AFFBF66-F2DF-4782-AA28-BA5AA30B50C0_1_201_a.jpeg',
    benefits: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/classic%20exterior/A88198F8-822F-413D-816D-730397C8ACCD_1_201_a.jpeg',
    faq: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/classic%20exterior/ADB421EE-192D-4814-9348-099B57157F8D.jpeg',
  };

  const waxAndBuffImages = {
    whatIsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Wax%20&%20Buff/219FBAB3-AF88-4CC6-AE33-55063F7E984F_1_105_c.jpeg',
    whoNeedsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Wax%20&%20Buff/3E28D8BB-C31F-4F0B-919E-121F738A2877_4_5005_c.jpeg',
    howOften: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Wax%20&%20Buff/4507FDA5-0CBE-45A6-A03A-4CCE3FD65B42_1_105_c.jpeg',
    benefits: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Wax%20&%20Buff/BB40522C-DACF-44E9-9F90-B98E5464187D_1_201_a.jpeg',
    faq: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Wax%20&%20Buff/CFD47584-4C3C-4F24-8329-A8452B635AAA_1_105_c.jpeg',
  };

  const ceramicCoatingImages = {
    whatIsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/ceramic%20coating/054E59A0-BDB0-4DC4-89A1-50E208D199AD_1_105_c.jpeg',
    whoNeedsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/ceramic%20coating/42AE478A-C202-4120-8597-DEFC576B2AD6_1_105_c.jpeg',
    howOften: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/ceramic%20coating/7A74DF60-6E91-432A-B7CE-131DAC31D301_1_105_c.jpeg',
    benefits: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/ceramic%20coating/C42F1F66-F6C9-4693-B1C3-46D7580BECEB_1_105_c.jpeg',
    faq: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/ceramic%20coating/DF3D3BF3-1804-4141-AEC8-C876A7D67F03_1_105_c.jpeg',
  };

  const classicInteriorImages = {
    whatIsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Classic%20Interior/4821F8A4-15DC-4328-BD5F-0BA3332998F2_1_105_c.jpeg',
    whoNeedsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Classic%20Interior/55C9769C-B25C-4074-9E7C-CCC5BC4ACD45_4_5005_c.jpeg',
    howOften: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Classic%20Interior/7636C365-3FDF-48D2-A98C-E08AE716BA03_1_105_c.jpeg',
    benefits: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Classic%20Interior/B06CC598-F63A-4632-873B-982494224AC4_4_5005_c.jpeg',
    faq: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Classic%20Interior/D1B7D880-0992-43D7-B877-AC60EA87D4C2.webp',
  };

  const deepShampooImages = {
    whatIsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Deep%20Shampoo/IMG_076B62C2B53D-1.jpeg',
    whoNeedsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Deep%20Shampoo/IMG_4548.jpg',
    howOften: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Deep%20Shampoo/IMG_7A3E736611E4-1.jpeg',
    benefits: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Deep%20Shampoo/IMG_7B8F7B023652-1.jpeg',
    faq: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Deep%20Shampoo/View%20recent%20photos%202.jpeg',
  };

  const moldResetImages = {
    whatIsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Mold%20Reset/IMG_0573BD50D43E-1.jpeg',
    whoNeedsIt: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Mold%20Reset/IMG_815B9AFF21AD-1.jpeg',
    howOften: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Mold%20Reset/IMG_8DF1A08062F7-1.jpeg',
    benefits: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Mold%20Reset/IMG_990C1DD751B0-1.jpeg',
    faq: 'https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Mold%20Reset/IMG_E5A27A20CCEC-1.jpeg',
  };

  const isGoldStandard = pkg.slug === 'gold-standard';
  const isFullRefresh = pkg.slug === 'full-refresh';
  const isMasterpiece = pkg.slug === 'masterpiece-detail';
  const isClassicExterior = pkg.slug === 'classic-exterior';
  const isClassicInterior = pkg.slug === 'classic-interior';
  const isDeepShampoo = pkg.slug === 'deep-shampoo';
  const isMoldReset = pkg.slug === 'mold-reset';
  const isWaxAndBuff = pkg.slug === 'wax-and-buff';
  const isCeramicCoating = pkg.slug === 'ceramic-coating';

  const getImageUrl = (section: keyof typeof goldStandardImages, fallback: string) => {
    if (isGoldStandard) {
      return goldStandardImages[section];
    }
    if (isFullRefresh && section in fullRefreshImages) {
      return fullRefreshImages[section as keyof typeof fullRefreshImages];
    }
    if (isMasterpiece && section in masterpieceImages) {
      return masterpieceImages[section as keyof typeof masterpieceImages];
    }
    if (isClassicExterior && section in classicExteriorImages) {
      return classicExteriorImages[section as keyof typeof classicExteriorImages];
    }
    if (isClassicInterior && section in classicInteriorImages) {
      return classicInteriorImages[section as keyof typeof classicInteriorImages];
    }
    if (isDeepShampoo && section in deepShampooImages) {
      return deepShampooImages[section as keyof typeof deepShampooImages];
    }
    if (isMoldReset && section in moldResetImages) {
      return moldResetImages[section as keyof typeof moldResetImages];
    }
    if (isWaxAndBuff && section in waxAndBuffImages) {
      return waxAndBuffImages[section as keyof typeof waxAndBuffImages];
    }
    if (isCeramicCoating && section in ceramicCoatingImages) {
      return ceramicCoatingImages[section as keyof typeof ceramicCoatingImages];
    }
    return fallback;
  };

  return (
    <>
      <SEO
        title={`${pkg.name} | DK Mobile Wash Albuquerque`}
        description={`${pkg.shortIntro} Mobile detailing service available throughout the Albuquerque metro area.`}
        keywords={`${pkg.name.toLowerCase()}, mobile detailing albuquerque, ${pkg.category.replace('-', ' ')}`}
        canonical={`https://www.dkmobilewash.com/${pkg.slug}`}
      />

      <div className="min-h-screen bg-white pt-20">
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-[#0052CC] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 font-semibold">{pkg.name}</span>
            </div>
          </div>
        </div>

        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {pkg.popular && (
                <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-4">
                  MOST POPULAR
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {pkg.name}
              </h1>
              <p className="text-xl text-white/90">
                {pkg.shortIntro}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <ul className="space-y-4">
                {pkg.whatsIncluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <MapPin className="w-8 h-8 text-[#0052CC] mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Available in These Areas</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  to={`/${pkg.slug}/${location.slug}`}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-[#0052CC] hover:shadow-md transition-all group"
                >
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-[#0052CC]">
                    {location.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {pkg.seo && (
          <>
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <img
                      src={getImageUrl('whatIsIt', 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800')}
                      alt="Professional car detailing"
                      className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="order-1 lg:order-2 bg-gray-50 p-8 lg:p-12 rounded-lg border border-gray-200">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
                      What is {pkg.name}?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {pkg.seo.whatIsIt}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-block bg-[#0052CC] text-white px-8 py-3 rounded font-bold uppercase tracking-wide hover:bg-[#003D99] transition-colors"
                    >
                      Get a Free Estimate
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="bg-white p-8 lg:p-12 rounded-lg border border-gray-200">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
                      Who needs this package?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {pkg.seo.whoNeedsIt}
                    </p>
                  </div>
                  <div>
                    <img
                      src={getImageUrl('whoNeedsIt', 'https://images.pexels.com/photos/6870320/pexels-photo-6870320.jpeg?auto=compress&cs=tinysrgb&w=800')}
                      alt="Car detailing service"
                      className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <img
                      src={getImageUrl('howOften', 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=800')}
                      alt="Clean detailed car"
                      className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="order-1 lg:order-2 bg-gray-50 p-8 lg:p-12 rounded-lg border border-gray-200">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
                      How often should you do this?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {pkg.seo.howOften}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="bg-white p-8 lg:p-12 rounded-lg border border-gray-200">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
                      The Benefits of {pkg.name}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {pkg.seo.benefits}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                      Book Your {pkg.name} Appointment
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Ready to experience professional detailing? Our mobile service comes to you, making it convenient and easy to get your vehicle looking its best.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-block bg-[#0052CC] text-white px-8 py-3 rounded font-bold uppercase tracking-wide hover:bg-[#003D99] transition-colors"
                    >
                      Book Today
                    </Link>
                  </div>
                  <div>
                    <img
                      src={getImageUrl('benefits', 'https://images.pexels.com/photos/6870438/pexels-photo-6870438.jpeg?auto=compress&cs=tinysrgb&w=800')}
                      alt="Professional detailing"
                      className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 uppercase tracking-tight">
                      Common Questions About {pkg.name} - Answered
                    </h2>
                    <div className="space-y-4">
                      {pkg.seo.faqs.map((faq, index) => (
                        <details key={index} className="bg-gray-50 rounded-lg border border-gray-300 overflow-hidden">
                          <summary className="p-6 cursor-pointer font-semibold text-lg text-gray-900 hover:bg-gray-100 transition-colors uppercase tracking-wide flex items-center justify-between">
                            {faq.question}
                            <span className="ml-4 flex-shrink-0 w-8 h-8 bg-[#0052CC] rounded-full flex items-center justify-center text-white">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </summary>
                          <div className="px-6 pb-6 pt-2">
                            <p className="text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <img
                      src={getImageUrl('faq', 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800')}
                      alt="Professional car care"
                      className="rounded-lg shadow-xl w-full h-[600px] object-cover lg:sticky lg:top-24"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {relatedPackages.length > 0 && (
          <RelatedServices
            services={relatedPackages}
            title="Compare Similar Packages"
          />
        )}

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your {pkg.name} Today</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get your vehicle detailed with our mobile service that comes to you
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#0052CC] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
