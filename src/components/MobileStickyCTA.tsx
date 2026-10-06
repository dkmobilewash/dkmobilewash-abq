import { Phone } from 'lucide-react';
import { useBookingModal } from '../App';

export default function MobileStickyCTA() {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0052CC] p-3 flex gap-2 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <a
        href="tel:5056048058"
        className="flex-1 bg-white text-[#0052CC] text-center py-3 rounded-lg font-bold flex items-center justify-center gap-2"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <button
        onClick={openBookingModal}
        className="flex-1 bg-white/10 text-white text-center py-3 rounded-lg font-bold border border-white/30"
      >
        Book Online
      </button>
    </div>
  );
}
