import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { optimizeImageUrl } from '../utils/imageOptimization';

interface ServiceSectionProps {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  linkText: string;
  linkTo: string;
  buttonText: string;
  reversed?: boolean;
  contextualLink?: { text: string; to: string; label: string };
}

function ServiceSection({
  title,
  description,
  bullets,
  image,
  imageAlt,
  linkText,
  linkTo,
  buttonText,
  reversed,
  contextualLink,
}: ServiceSectionProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
      <div className={reversed ? 'lg:order-2' : ''}>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{description}</p>
        {contextualLink && (
          <p className="text-gray-600 mb-6">
            <Link to={contextualLink.to} className="text-[#0052CC] hover:underline font-medium">
              {contextualLink.label}
            </Link>{' '}
            {contextualLink.text}
          </p>
        )}
        <ul className="space-y-3 mb-8">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to={linkTo}
            className="inline-flex items-center gap-2 bg-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003D99] transition-all transform hover:scale-105 shadow-md"
          >
            {buttonText} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to={linkTo} className="text-[#0052CC] font-semibold hover:underline text-sm">
            {linkText} →
          </Link>
        </div>
      </div>
      <div className={`rounded-2xl overflow-hidden shadow-lg ${reversed ? 'lg:order-1' : ''}`}>
        <img
          src={optimizeImageUrl(image, { width: 700, quality: 75 })}
          alt={imageAlt}
          className="w-full h-[340px] md:h-[400px] object-cover"
          loading="lazy"
          decoding="async"
          width={700}
          height={400}
        />
      </div>
    </div>
  );
}

export default function HomepageServiceSections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expert Car Detailing Mobile Services at Your Location
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From a quick exterior wash to full paint correction and ceramic coating, every service is performed at your location with professional-grade products and equipment.
          </p>
        </div>

        <div className="space-y-20">

          {/* 1 — Mobile Auto Detailing */}
          <ServiceSection
            title="Mobile Auto Detailing"
            description="Skip the drive and the wait. DK Mobile Wash brings a complete detailing setup — water tank, generator, and professional products — directly to your home, office, or apartment in the Albuquerque metro area. Whether you need a quick refresh before a weekend trip or a deep clean after monsoon season, we handle everything on-site so you don't lose time sitting in a shop lobby."
            bullets={[
              'Fully self-contained unit — no water or power hookups needed from you',
              'Serves homes, offices, apartments, and HOA communities',
              'Available throughout Albuquerque, Rio Rancho, Corrales, and surrounding areas',
              'Flexible scheduling including weekends',
            ]}
            image="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/exterior%20detailing%20page/detailingnearmealbuquerque.png"
            imageAlt="Mobile auto detailing van servicing a vehicle at a home in Albuquerque NM"
            linkText="Learn more about mobile auto detailing"
            linkTo="/service/mobile-auto-detailing"
            buttonText="Mobile Detailing"
            contextualLink={{
              to: '/service/mobile-auto-detailing',
              label: 'Mobile auto detailing',
              text: 'is the most convenient way to keep your car looking sharp without rearranging your schedule.',
            }}
          />

          {/* 2 — Interior Detailing */}
          <ServiceSection
            reversed
            title="Interior Detailing"
            description="Albuquerque's dry heat, desert dust, and UV exposure take a toll on dashboards, leather seats, and fabric upholstery faster than in most climates. Our interior detailing goes beyond a basic vacuum — we deep-clean carpets and seats, extract embedded stains, condition leather and plastic, and treat surfaces with UV protectants that slow the cracking and fading caused by New Mexico sun."
            bullets={[
              'Deep shampoo and hot-water extraction for seats and carpets',
              'Stain and odor removal — pet hair, food, smoke, mildew',
              'Dashboard, console, and door panel cleaning with UV protectant',
              'Vent cleaning and glass polishing inside and out',
            ]}
            image="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/dkservices-interiodetailing.jpeg"
            imageAlt="Professional interior car detailing in Albuquerque showing clean leather seats and dashboard"
            linkText="Explore interior detailing options"
            linkTo="/service/interior-detailing"
            buttonText="Interior Detailing"
            contextualLink={{
              to: '/service/interior-detailing',
              label: 'Interior detailing',
              text: 'is especially important for families with kids, pet owners, and anyone commuting daily on I-25 or I-40.',
            }}
          />

          {/* 3 — Exterior Car Detailing */}
          <ServiceSection
            title="Exterior Car Detailing"
            description="Between road grime from the interstate, dust that blows in off the mesa, and hard water mineral deposits from sprinkler overspray, your paint deals with a lot in Albuquerque. Our exterior detail starts with a proper two-bucket hand wash, moves through clay bar decontamination to pull embedded particles from the clear coat, and finishes with a wax or sealant that protects against UV and environmental fallout for months."
            bullets={[
              'Hand wash using pH-balanced shampoo — no abrasive brushes',
              'Clay bar treatment removes bonded contaminants from paint',
              'Wheel, tire, and wheel-well deep cleaning',
              'Wax or sealant finish for UV and water protection',
            ]}
            image="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/exterior%20detailing%20page/IMG_1DB764255801-1.jpeg"
            imageAlt="Exterior car detailing showing hand wash and paint decontamination in Albuquerque"
            linkText="See our exterior detailing service"
            linkTo="/service/exterior-detailing"
            buttonText="Exterior Detailing"
          />

          {/* 4 — Paint Correction */}
          <ServiceSection
            reversed
            title="Paint Correction"
            description="Swirl marks from automated car washes, scratches from desert grit, and etched hard water spots are some of the most common paint problems we see on Albuquerque vehicles. Paint correction is the process of machine-polishing the clear coat to remove these defects and restore the original gloss. It's not a cover-up — it physically levels the damaged layer to reveal clean, undamaged paint underneath."
            bullets={[
              'Removes swirl marks, light scratches, and oxidation',
              'Eliminates etched hard water mineral spots',
              'Restores original paint depth and gloss',
              'Ideal prep before ceramic coating for maximum bond strength',
            ]}
            image="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/paint%20correction%20page/paint-correction-albuqueruqe%20.webp"
            imageAlt="Paint correction removing swirl marks and restoring gloss on a vehicle in Albuquerque"
            linkText="Learn about paint correction"
            linkTo="/service/paint-correction"
            buttonText="Paint Correction"
            contextualLink={{
              to: '/service/paint-correction',
              label: 'Paint correction',
              text: 'is often paired with ceramic coating to lock in the restored finish for years of protection.',
            }}
          />

          {/* 5 — Ceramic Coating */}
          <ServiceSection
            title="Ceramic Coating"
            description="Wax lasts weeks. Sealant lasts a few months. Professional ceramic coating bonds to your clear coat at a molecular level and provides years of protection against UV damage, hard water etching, bird droppings, and chemical contamination. In a climate like Albuquerque's — where the sun and mineral-heavy water are working against your paint every day — ceramic coating is one of the smartest investments you can make for long-term vehicle preservation."
            bullets={[
              'Professional 10H+ ceramic coating with CARFAX-verified warranty',
              'Hydrophobic finish — water beads and rolls off, carrying dirt with it',
              'Protection lasting 5 to 10 years depending on the coating tier',
              'Full paint prep including wash, decontamination, and polish before application',
            ]}
            image="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/ceramic%20coating%20page/IMG_2806.jpeg"
            imageAlt="Ceramic coating application on a vehicle showing hydrophobic water beading in Albuquerque"
            linkText="See our ceramic coating service"
            linkTo="/ceramic-coating"
            buttonText="Ceramic Coating"
          />

          {/* 6 — Headlight Polishing */}
          <ServiceSection
            reversed
            title="Headlight Polishing &amp; Restoration"
            description="Cloudy, yellowed headlights aren't just an eyesore — they reduce your nighttime visibility by as much as 80 percent. UV radiation at Albuquerque's elevation breaks down the factory UV coating on plastic headlight lenses faster than in lower-altitude cities. Our restoration process wet-sands the damaged layer, polishes the lens back to optical clarity, and seals it with a UV-resistant coating so the haze doesn't return as quickly."
            bullets={[
              'Restores full clarity to yellowed or foggy headlight lenses',
              'Dramatically improves nighttime visibility and driving safety',
              'UV-resistant sealant protects against future oxidation',
              'Fraction of the cost of full headlight assembly replacement',
            ]}
            image="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/headlight%20restoration%20page/albuquerque-headlight-restoration.jpg"
            imageAlt="Headlight restoration showing before and after on a vehicle in Albuquerque"
            linkText="Learn about headlight restoration"
            linkTo="/service/headlight-restoration"
            buttonText="Headlight Restoration"
          />

          {/* 7 — Engine Detailing */}
          <ServiceSection
            title="Engine Bay Detailing"
            description="A clean engine bay makes it easier to spot leaks, worn belts, and other maintenance issues before they become expensive problems. It also matters if you're selling or trading in your vehicle — a detailed engine bay signals to buyers that the car has been well maintained. We carefully degrease the engine compartment, clean all surfaces, and dress plastic and rubber components to protect them from the dry desert air."
            bullets={[
              'Safe degreasing of the full engine compartment',
              'Cleaning and dressing of plastic covers, hoses, and trim',
              'Makes it easier to identify leaks or maintenance issues',
              'Adds value for resale or trade-in inspections',
            ]}
            image="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/DK%20Detailing%20services/engine-bay-detail-albuquerque.webp"
            imageAlt="Engine bay detailing showing clean engine compartment on a vehicle in Albuquerque"
            linkText="Learn about engine bay detailing"
            linkTo="/service/engine-bay-detailing"
            buttonText="Engine Detailing"
          />

          {/* 8 — Fleet & Commercial */}
          <ServiceSection
            reversed
            title="Fleet &amp; Commercial Detailing"
            description="Construction companies, real estate agencies, delivery services, and dealerships across Albuquerque rely on DK Mobile Wash to keep their fleets looking professional without pulling vehicles out of service. We come to your lot or job site on a schedule that works for your operation — weekly, biweekly, or monthly — and handle everything from basic washes to full details with interior shampooing and paint protection."
            bullets={[
              'On-site fleet detailing at your lot, office, or job site',
              'Flexible recurring schedules — weekly, biweekly, or monthly',
              'Volume pricing for fleets of all sizes',
              'Interior, exterior, and full-detail options available per vehicle',
            ]}
            image="https://tfbmmnwyoraaealnfsfw.supabase.co/storage/v1/object/public/Website%20Pictures/fleet%20%26%20dealership%20page/IMG_E859BCB691E0-1.jpeg"
            imageAlt="Fleet and commercial vehicle detailing service at a business lot in Albuquerque"
            linkText="Explore fleet detailing options"
            linkTo="/fleet"
            buttonText="Fleet Detailing"
          />

        </div>
      </div>
    </section>
  );
}
