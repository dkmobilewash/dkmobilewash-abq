import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { BlogPost } from '../types';
import SEO from './SEO';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

export default function BlogPostView({ post, onBack }: BlogPostViewProps) {
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inList = false;
    let keyCounter = 0;

    const processTextWithLinks = (text: string): (string | JSX.Element)[] => {
      const parts: (string | JSX.Element)[] = [];
      let currentText = text;

      // First, convert markdown links to a temporary format to track them
      const markdownRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const htmlAnchorRegex = /<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g;

      // Collect all links (markdown and HTML) with their positions
      const links: Array<{ start: number; end: number; text: string; url: string }> = [];

      let match;

      // Find markdown links
      while ((match = markdownRegex.exec(currentText)) !== null) {
        links.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[1],
          url: match[2]
        });
      }

      // Find HTML anchor links
      while ((match = htmlAnchorRegex.exec(currentText)) !== null) {
        links.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[2],
          url: match[1]
        });
      }

      // Sort links by their start position
      links.sort((a, b) => a.start - b.start);

      // Build the result with proper React elements
      let lastIndex = 0;

      links.forEach((link) => {
        // Add text before the link
        if (link.start > lastIndex) {
          parts.push(currentText.substring(lastIndex, link.start));
        }

        const isInternal = link.url.startsWith('/');

        if (isInternal) {
          parts.push(
            <Link
              key={`link-${keyCounter++}`}
              to={link.url}
              className="text-[#0052CC] hover:text-[#003D99] underline font-medium"
            >
              {link.text}
            </Link>
          );
        } else {
          parts.push(
            <a
              key={`link-${keyCounter++}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0052CC] hover:text-[#003D99] underline font-medium"
            >
              {link.text}
            </a>
          );
        }

        lastIndex = link.end;
      });

      // Add remaining text after the last link
      if (lastIndex < currentText.length) {
        parts.push(currentText.substring(lastIndex));
      }

      return parts.length > 0 ? parts : [text];
    };

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ').trim();
        if (text) {
          elements.push(
            <p key={`p-${elements.length}`} className="text-gray-700 leading-relaxed mb-6">
              {processTextWithLinks(text)}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            {listItems.map((item, idx) => (
              <li key={idx} className="ml-4">{processTextWithLinks(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('## ')) {
        flushParagraph();
        flushList();
        elements.push(
          <h2 key={`h2-${elements.length}`} className="text-3xl font-bold text-gray-900 mb-4 mt-8">
            {trimmed.substring(3)}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushParagraph();
        flushList();
        elements.push(
          <h3 key={`h3-${elements.length}`} className="text-2xl font-bold text-gray-900 mb-3 mt-6">
            {trimmed.substring(4)}
          </h3>
        );
      } else if (trimmed.startsWith('- ')) {
        flushParagraph();
        inList = true;
        listItems.push(trimmed.substring(2));
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        flushParagraph();
        flushList();
        elements.push(
          <p key={`strong-${elements.length}`} className="font-bold text-gray-900 mb-2 mt-4">
            {trimmed.slice(2, -2)}
          </p>
        );
      } else if (trimmed.match(/^\d+\.\s\*\*/)) {
        flushParagraph();
        flushList();
        const match = trimmed.match(/^\d+\.\s\*\*(.+?)\*\*/);
        if (match) {
          elements.push(
            <p key={`numbered-${elements.length}`} className="font-bold text-gray-900 mb-2 mt-4">
              {trimmed.split('**')[0]}{match[1]}
            </p>
          );
        }
      } else if (trimmed === '') {
        if (inList) {
          flushList();
        } else {
          flushParagraph();
        }
      } else {
        if (inList) {
          flushList();
        }
        currentParagraph.push(trimmed);
      }
    });

    flushParagraph();
    flushList();

    return elements;
  };

  return (
    <>
      <SEO
        title={`${post.title} | DK Mobile Wash Albuquerque`}
        description={post.excerpt}
        keywords={`${post.title}, auto detailing, car care, Albuquerque metro area`}
        canonical={`https://www.dkmobilewash.com/blog/${post.slug}`}
      />

      <div className="min-h-screen bg-white pt-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-[#0052CC] hover:text-[#003D99] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Blog</span>
          </button>

          {post.image && (
            <div className="aspect-video w-full bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              {post.author && (
                <div className="flex items-center space-x-2">
                  <span>{post.author}</span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              {post.readTime && (
                <div className="flex items-center space-x-2">
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-br from-[#0052CC] to-[#003D99] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready for Professional Service?</h3>
              <p className="text-lg text-gray-100 mb-6">
                Let DK Mobile Wash bring expert auto detailing directly to your location in the Albuquerque metro area.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Your Service Today
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
