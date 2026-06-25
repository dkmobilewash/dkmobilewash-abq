import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import BlogPostView from '../components/BlogPostView';
import { blogPosts } from '../data/services';

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  if (slug) {
    const post = blogPosts.find((p) => p.slug === slug);
    if (post) {
      return <BlogPostView post={post} onBack={() => navigate('/blog')} />;
    }
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-block bg-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003D99] transition-all"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Auto Detailing Blog | Car Care Tips Albuquerque | DK Mobile Wash"
        description="Expert auto detailing tips, car care guides, and industry insights from DK Mobile Wash in Albuquerque. Learn about paint protection, ceramic coating, interior cleaning, and more."
        keywords="auto detailing blog, car care tips Albuquerque, mobile detailing tips, ceramic coating guide, paint correction tips, car wash advice"
      />

      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Auto Detailing Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Car care tips, detailing guides, and expert advice from Albuquerque's top-rated mobile detailing team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:border-[#0052CC]"
              >
                {post.image && (
                  <div className="aspect-video w-full bg-gradient-to-br from-gray-800 to-black overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    {post.readTime && <span>{post.readTime}</span>}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0052CC] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#0052CC] font-semibold text-sm group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0052CC] to-[#003D99] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for Professional Detailing?</h2>
            <p className="text-lg text-gray-200 mb-8">
              We bring expert auto detailing directly to your location in the Albuquerque metro area.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Your Service Today
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
