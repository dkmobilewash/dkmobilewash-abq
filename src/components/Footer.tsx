import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {

  return (
    <footer className="bg-[#0052CC] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public/website-images/Untitled_design-removebg-preview.png"
                alt="DK Mobile Wash"
                className="h-12 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Professional mobile auto detailing and ceramic coating services throughout Albuquerque and surrounding metro areas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/service/mobile-auto-detailing"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Mobile Auto Detailing
                </Link>
              </li>
              <li>
                <Link
                  to="/service/interior-detailing"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Interior Detailing
                </Link>
              </li>
              <li>
                <Link
                  to="/service/exterior-detailing"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Exterior Car Detailing
                </Link>
              </li>
              <li>
                <Link
                  to="/service/paint-correction"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link
                  to="/ceramic-coating"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link
                  to="/service/headlight-restoration"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Headlight Polishing
                </Link>
              </li>
              <li>
                <Link
                  to="/service/engine-bay-detailing"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Engine Detailing
                </Link>
              </li>
              <li>
                <Link
                  to="/fleet"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Fleet & Commercial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/service-areas"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/albuquerque"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Albuquerque
                </Link>
              </li>
              <li>
                <Link
                  to="/rio-rancho"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Rio Rancho
                </Link>
              </li>
              <li>
                <Link
                  to="/corrales"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Corrales
                </Link>
              </li>
              <li>
                <Link
                  to="/north-valley"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  North Valley
                </Link>
              </li>
              <li>
                <Link
                  to="/tanoan"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Tanoan
                </Link>
              </li>
              <li>
                <Link
                  to="/paradise-hills"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Paradise Hills
                </Link>
              </li>
              <li>
                <Link
                  to="/los-ranchos-de-albuquerque"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Los Ranchos de Albuquerque
                </Link>
              </li>
              <li>
                <Link
                  to="/albuquerque-acres"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Albuquerque Acres
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/7411+Lead+Dr+NE,+Albuquerque,+NM+87110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  7411 Lead Dr NE,<br />Albuquerque, NM 87110
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/8202+Louisiana+Blvd+NE,+Albuquerque,+NM+87113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  8202 Louisiana Blvd NE,<br />Albuquerque, NM 87113
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <a href="tel:5056048058" className="text-gray-300 hover:text-white transition-colors text-sm">
                  (505) 604-8058
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <a href="mailto:info@dkmobilewash.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@dkmobilewash.com
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 w-full block text-center bg-white text-[#0052CC] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} DK Mobile Wash. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  );
}
