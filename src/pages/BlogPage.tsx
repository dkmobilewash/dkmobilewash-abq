import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import BlogPostView from '../components/BlogPostView';
import { blogPosts } from '../data/services';
import { useBookingModal } from '../App';

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openBookingModal } = useBookingModal();
  const [visibleCount, setVisibleCount] = useState(9);

  const post = slug ? blogPosts.find((p) => p.slug === slug) : null;

  if (slug && post) {
    return <BlogPostView post={post} onBack={() => navigate('/blog')} />;
  }

  if (slug && !post) {
    navigate('/blog', { replace: true });
    return null;
  }

  const visiblePosts = blogPosts.slice(0, visibleCount);

  return (
    <>
      <SEO
        title="Car Care Blog for Albuquerque Drivers | DK Mobile Wash"
        description="Detailing and paint-protection tips for Albuquerque's sun, dust & hard water from DK Mobile Wash's mobile detailers. Call (505) 604-8058."
        keywords="auto detailing blog albuquerque, car care tips albuquerque, ceramic coating guide, mobile detailing advice, car detailing albuquerque nm"
        canonical="https://www.dkmobilewash.com/blog"
      />

      <div className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Auto Detailing Blog — Albuquerque Car Care Tips & Guides
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Practical advice on protecting your vehicle from Albuquerque's desert climate — hard water spots, UV damage, dust, and more. Written by the DK Mobile Wash team.
              </p>
            </div>
          </div>
        </section>

        {/* Blog grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePosts.map((blogPost) => (
                <article
                  key={blogPost.slug}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#0052CC]/30 transition-all group"
                >
                  {blogPost.image && (
                    <div className="aspect-video w-full bg-gray-100 overflow-hidden">
                      <img
                        src={blogPost.image}
                        alt={blogPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(blogPost.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      {blogPost.readTime && <span>{blogPost.readTime}</span>}
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0052CC] transition-colors line-clamp-2">
                      {blogPost.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {blogPost.excerpt}
                    </p>
                    <button
                      onClick={() => navigate(`/blog/${blogPost.slug}`)}
                      className="text-[#0052CC] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {visibleCount < blogPosts.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setVisibleCount((c) => c + 9)}
                  className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Professional Detailing?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              DK Mobile Wash brings expert auto detailing directly to your Albuquerque location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openBookingModal}
                className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Get Free Quote
              </button>
              <a
                href="tel:5056048058"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0052CC] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (505) 604-8058
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
