import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useBookingModal } from '../App';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openBookingModal } = useBookingModal();

  return (
    <nav className="bg-[#0052CC]/95 backdrop-blur-sm fixed w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center group"
          >
            <img
              src="https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Untitled_design-removebg-preview.png"
              alt="DK Mobile Wash Logo"
              className="h-20 w-auto transform group-hover:scale-105 transition-transform py-2"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-gray-300' : 'text-white hover:text-gray-300'
              }`}
            >
              Mobile Detailing Services
            </Link>
            <Link
              to="/ceramic-coating"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/ceramic-coating' ? 'text-gray-300' : 'text-white hover:text-gray-300'
              }`}
            >
              Ceramic Coating
            </Link>
            <Link
              to="/fleet"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/fleet' ? 'text-gray-300' : 'text-white hover:text-gray-300'
              }`}
            >
              Fleet & Dealership Washing
            </Link>
            <Link
              to="/locations"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/locations' || location.pathname.startsWith('/albuquerque') || location.pathname.startsWith('/rio-rancho') || location.pathname.startsWith('/north-albuquerque-acres') || location.pathname.startsWith('/corrales') || location.pathname.startsWith('/los-ranchos-de-albuquerque') || location.pathname.startsWith('/tanoan') ? 'text-gray-300' : 'text-white hover:text-gray-300'
              }`}
            >
              Locations
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:5056048058" className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(505) 604-8058</span>
            </a>
            <button
              onClick={openBookingModal}
              className="bg-white text-[#0052CC] px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#0052CC] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left py-2 text-white hover:text-gray-300 transition-colors"
            >
              Mobile Detailing Services
            </Link>
            <Link
              to="/ceramic-coating"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left py-2 text-white hover:text-gray-300 transition-colors"
            >
              Ceramic Coating
            </Link>
            <Link
              to="/fleet"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left py-2 text-white hover:text-gray-300 transition-colors"
            >
              Fleet & Dealership Washing
            </Link>
            <Link
              to="/locations"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left py-2 text-white hover:text-gray-300 transition-colors"
            >
              Locations
            </Link>

            <div className="pt-4 space-y-3 border-t border-white/10">
              <a href="tel:5056048058" className="flex items-center space-x-2 text-white">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(505) 604-8058</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  openBookingModal();
                }}
                className="block w-full text-center bg-white text-[#0052CC] px-6 py-3 rounded-lg font-semibold shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
