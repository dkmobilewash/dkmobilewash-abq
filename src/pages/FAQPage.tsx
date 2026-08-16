import { HelpCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

export default function FAQPage({ onNavigate }: FAQPageProps) {
  // Expanded SEO-Optimized FAQ Data
  const expandedFaqs = [
    {
      question: 'Do you come to my home or work in Albuquerque?',
      answer: (
        <span>
          Yes! We are a <strong>100% mobile car detailing service</strong>. We come directly to your preferred location anywhere in the <strong>Albuquerque metro area</strong>, whether that is your home, office lot, or apartment complex. Our <strong>at-home car detailing service</strong> is designed to provide maximum convenience. If you are looking for a complete transformation at your doorstep, check our <Link to="/service/mobile-auto-detailing" className="text-[#0052CC] font-bold hover:underline">mobile auto detailing</Link> packages.
        </span>
      )
    },
    {
      question: 'How long does a professional detailing session take?',
      answer: (
        <span>
          Service times vary based on the vehicle condition and the package selected. A standard <strong>mobile car wash and interior vacuum</strong> usually takes 2-3 hours. However, comprehensive services like <strong>multi-stage paint correction</strong> or <strong>Gtechniq ceramic coating</strong> can take 4-8 hours to ensure a showroom finish. You can see a full breakdown of time and tasks on our <Link to="/car-detailing-prices-albuquerque" className="text-[#0052CC] font-bold hover:underline">detailing prices</Link> guide.
        </span>
      )
    },
    {
      question: 'What specific areas in New Mexico do you service?',
      answer: (
        <span>
          We proudly provide <strong>professional auto detailing in Albuquerque</strong>, Rio Rancho, Corrales, and the North Valley. We are expanding our <strong>mobile detailing units</strong> to cover more of the metro-wide business parks. Visit our <Link to="/locations" className="text-[#0052CC] font-bold hover:underline">service areas hub</Link> to see if we cover your specific neighborhood.
        </span>
      )
    },
    {
      question: 'Is your ceramic coating service permanent?',
      answer: (
        <span>
          While no coating is "forever," our <strong>professional ceramic coating Albuquerque</strong> services provide long-lasting protection that lasts between 2 to 5 years. It creates a <strong>hydrophobic surface</strong> that shields your paint from <strong>high-desert UV rays</strong> and dust. This is a much superior alternative to traditional car wax. Learn more about the benefits on our <Link to="/ceramic-coating" className="text-[#0052CC] font-bold hover:underline">ceramic coating</Link> page.
        </span>
      )
    },
    {
      question: 'Do I need to provide water or power hookups?',
      answer: (
        <span>
          Not at all! One of our biggest advantages is our <strong>fully self-contained detailing unit</strong>. We carry our own <strong>on-board water tank</strong> and high-quality power generators. We can perform a <strong>deep car interior cleaning</strong> or a full <strong>exterior hand wash</strong> in the middle of a parking lot without needing anything from you. Read more <Link to="/about" className="text-[#0052CC] font-bold hover:underline">about us</Link> and our professional equipment.
        </span>
      )
    },
    {
      question: 'How should I prepare my vehicle for a detailing appointment?',
      answer: (
        <span>
          Preparation is simple! We ask that you <strong>remove all personal items</strong> and valuables from the cabin and trunk. This allows our team to focus entirely on the <strong>car interior restoration</strong> and deep cleaning. For <strong>exterior detailing</strong>, parking in a shaded area is preferred but not required. If you have specific concerns, feel free to <Link to="/contact" className="text-[#0052CC] font-bold hover:underline">contact us</Link> beforehand.
        </span>
      )
    },
    {
      question: 'Can you remove deep stains and pet odors?',
      answer: (
        <span>
          Yes, we specialize in <strong>car interior stain removal</strong> and intensive <strong>odor elimination</strong>. Using specialized steam cleaners and pH-balanced chemicals, we target allergens and bacteria deep within the upholstery. For extremely neglected interiors, our <Link to="/service/interior-detailing" className="text-[#0052CC] font-bold hover:underline">interior car detailing</Link> is the best solution for Albuquerque drivers.
        </span>
      )
    },
    {
      question: 'Do you offer services for business fleets or dealerships?',
      answer: (
        <span>
          Absolutely. We provide tailored <strong>mobile fleet detailing in Albuquerque</strong> for commercial vehicles, delivery vans, and rental fleets. Our <strong>volume pricing</strong> helps local businesses maintain a professional brand image while <strong>minimizing vehicle downtime</strong>. Check our <Link to="/fleet" className="text-[#0052CC] font-bold hover:underline">fleet and dealership services</Link> for B2B contract details.
        </span>
      )
    }
  ];

  return (
    <>
      <SEO
        title="Mobile Detailing FAQ Albuquerque | Car Detailing Questions ABQ"
        description="Common questions about mobile car wash & auto detailing in Albuquerque. Learn about pricing, ceramic coating, service areas, and deep interior cleaning tips."
        keywords="mobile detailing FAQ Albuquerque, car detailing questions Albuquerque metro area, auto detailing information Rio Rancho, mobile car wash details Corrales, professional detailing help NM"
        canonical="https://www.dkmobilewash.com/faq"
      />

      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0052CC] to-[#003D99] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Mobile Detailing FAQ: Albuquerque Metro Guide
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Everything you need to know about <strong>DK Mobile Wash's</strong> professional auto detailing, <strong>paint correction</strong>, and <strong>ceramic coating services</strong> in the Albuquerque area.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ List Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Detailing Questions</h2>
            <div className="space-y-6">
              {expandedFaqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-[#0052CC]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions? */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Professional Detailing Advice?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If your question about <strong>mobile exterior car wash</strong> or <strong>interior restoration</strong> isn't answered above, our team is ready to help! 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#0052CC] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#003D99] transition-all transform hover:scale-105"
              >
                Contact Our Experts
              </button>
              <a
                href="tel:5056048058"
                className="border-2 border-[#0052CC] text-[#0052CC] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (505) 604-8058
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
