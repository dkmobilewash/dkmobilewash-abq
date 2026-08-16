import { useState, createContext, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CarDetailingPage from './pages/CarDetailingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import GalleryPage from './pages/GalleryPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import BlogPage from './pages/BlogPage';
import FleetPage from './pages/FleetPage';
import MobileAutoDetailingPage from './pages/services/MobileAutoDetailingPage';
import CeramicCoatingPage from './pages/services/CeramicCoatingPage';
import {
  InteriorDetailingPage,
  ExteriorDetailingPage,
  PaintCorrectionPage,
  HeadlightRestorationPage,
  EngineBayDetailingPage,
  FleetCommercialDetailingPage,
} from './pages/services/AllServicePages';
import { ThankYouPage } from './pages/ThankYouPage';
import SchemaMarkup from './components/SchemaMarkup';
import MobileAutoDetailingVenturaPage from './pages/MobileAutoDetailingVenturaPage';
import InteriorCarDetailingVenturaPage from './pages/InteriorCarDetailingVenturaPage';
import PaintEnhancementProtectionPage from './pages/PaintEnhancementProtectionPage';
import CarDetailingPricesPage from './pages/CarDetailingPricesPage';
import LocationsPage from './pages/LocationsPage';
import LocationPage from './pages/LocationPage';
import LocationServicePage from './pages/LocationServicePage';
import AlbuquerqueAcresPage from './pages/AlbuquerqueAcresPage';
import NotFoundPage from './pages/NotFoundPage';
import { GlobalBookingModal } from './components/GlobalBookingModal';

interface BookingModalContextType {
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within BookingModalProvider');
  }
  return context;
};

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <BookingModalContext.Provider value={{ openBookingModal, closeBookingModal }}>
      <div className="min-h-screen bg-white">
        <SchemaMarkup />
        <ScrollToTop />
        <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car-detailing" element={<CarDetailingPage />} />
          <Route path="/ceramic-coating" element={<CeramicCoatingPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/service/mobile-auto-detailing" element={<MobileAutoDetailingPage />} />
          <Route path="/service/interior-detailing" element={<InteriorDetailingPage />} />
          <Route path="/service/exterior-detailing" element={<ExteriorDetailingPage />} />
          <Route path="/service/paint-correction" element={<PaintCorrectionPage />} />
          <Route path="/service/headlight-restoration" element={<HeadlightRestorationPage />} />
          <Route path="/service/engine-bay-detailing" element={<EngineBayDetailingPage />} />
          <Route path="/albuquerque/fleet-commercial-detailing" element={<FleetCommercialDetailingPage />} />
          <Route path="/mobile-auto-detailing-albuquerque-nm" element={<MobileAutoDetailingVenturaPage />} />
          <Route path="/interior-car-detailing-albuquerque" element={<InteriorCarDetailingVenturaPage />} />
          <Route path="/paint-enhancement-protection-albuquerque" element={<PaintEnhancementProtectionPage />} />
          <Route path="/car-detailing-prices-albuquerque" element={<CarDetailingPricesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/albuquerque-acres" element={<AlbuquerqueAcresPage />} />
          <Route path="/albuquerque" element={<LocationPage />} />
          <Route path="/rio-rancho" element={<LocationPage />} />
          <Route path="/corrales" element={<LocationPage />} />
          <Route path="/north-valley" element={<LocationPage />} />
          <Route path="/tanoan" element={<LocationPage />} />
          <Route path="/paradise-hills" element={<LocationPage />} />
          <Route path="/los-ranchos-de-albuquerque" element={<LocationPage />} />
          <Route path="/:location/:service" element={<LocationServicePage />} />
          <Route path="/:location" element={<LocationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
        <Footer />
        <GlobalBookingModal
          isOpen={isBookingModalOpen}
          onClose={closeBookingModal}
        />
      </div>
    </BookingModalContext.Provider>
  );
}

export default App;
