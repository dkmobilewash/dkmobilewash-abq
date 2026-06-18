export interface PackageSEO {
  whatIsIt: string;
  whoNeedsIt: string;
  howOften: string;
  benefits: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface LocationContent {
  whyLocationNeeds: string;
  locationBenefits: string;
  locationExamples: string;
}

export interface Package {
  slug: string;
  name: string;
  category: 'full-detail' | 'exterior-only' | 'interior-only';
  shortIntro: string;
  whatsIncluded: string[];
  popular?: boolean;
  seo?: PackageSEO;
}

export const packages: Package[] = [
  {
    slug: 'full-refresh',
    name: 'Full Refresh',
    category: 'full-detail',
    shortIntro: 'Our complete interior and exterior detailing package that brings your vehicle back to showroom condition.',
    whatsIncluded: [
      'Interior Vacuum',
      'Wipe all surfaces',
      'Stains (Spot Treatment)',
      'Windows & Mirrors',
      'Door Jambs',
      'Floor Mats',
      'Exterior Hand Wash',
      'Wheel & Tire Cleaning',
      'Quick Wax Protection'
    ],
    seo: {
      whatIsIt: "Full Refresh is our complete mobile detailing package that handles both your inside and outside in one visit. We vacuum out all the crumbs and dirt, wipe down every surface so it looks clean again, treat any stains we find, and make your windows crystal clear. Outside we give you a proper hand wash, scrub those wheels and tires, clean the door jambs that always get missed, and finish with a quick wax so your paint has some protection. It's everything your car needs to look good again without taking all day. Most people are really surprised how much better their vehicle looks after this service, and it usually takes us about 2-3 hours depending on how big your car is and what condition it's in.",
      whoNeedsIt: "This package is perfect for busy families who got stuff everywhere in their car, or anyone who just let their vehicle go too long without a good clean. If you got kids leaving snacks in the back seat, or you been too busy to wash your car for a few months, this is your package. Also great for people getting ready to sell their car or folks who just bought used and want it to feel like theirs. Commuters who eat breakfast in the car and got that dashboard dust build-up really benefit from this one too.",
      howOften: "We recommend doing a Full Refresh every 3-4 months if you use your car daily. That keeps it from getting too bad where stains set in or dirt scratches your paint. If you got kids or pets, maybe bump it to every 2-3 months. The wax protection lasts about 2-3 months anyway, so timing it with that makes sense. Some folks do it seasonally which works good too - like before summer road trips or after winter when everything's muddy.",
      benefits: "The Full Refresh saves you so much time compared to trying to do all this yourself. We bring everything to your driveway or workplace, so you don't gotta sit at a car wash for hours. Our vacuum is way more powerful than that gas station one, and we actually get the crumbs from under the seats. The hand wash is gentler on your paint than those automatic brushes that leave swirls. Plus that quick wax gives you protection against sun fading and makes water bead off nice. Your car will be easier to clean next time, and you'll feel better driving it around. It's amazing how a clean car just puts you in a better mood. And if you ever decide to sell, having it regularly detailed keeps that resale value higher cause buyers can tell when a vehicle's been taken care of.",
      faqs: [
        {
          question: "How long does the Full Refresh take?",
          answer: "Usually between 2 to 3 hours, depending on the size of your vehicle and how dirty it is when we start. Bigger trucks or really messy SUVs might take the full 3 hours, but most sedans we can knock out in about 2 hours."
        },
        {
          question: "Do I need to be home during the service?",
          answer: "Nope, as long as we can access your vehicle and you got a water source nearby, you can go about your day. Lot of our customers leave keys in a lockbox or give us access and head to work. We'll text you when we're done."
        },
        {
          question: "Will the wax protection really last 2-3 months?",
          answer: "Yep, if you're washing your car regularly with proper soap. The quick wax we use is designed to hold up through rain and normal wear. It won't last as long as our premium wax, but it gives good protection for the price point."
        },
        {
          question: "Can you remove all stains?",
          answer: "We can get most stains with our spot treatment, but some old or set-in stains might not come all the way out. Things like permanent marker or dye transfer can be tough. If you got really bad stains, our Deep Shampoo package might be better cause that's full carpet and seat shampooing."
        },
        {
          question: "What if it rains right after you detail my car?",
          answer: "The wax actually helps water bead off, so a little rain won't hurt nothing. If it's gonna pour we might reschedule the exterior part, but light rain is fine. Your interior is all protected and dried properly, so that's good regardless."
        }
      ]
    }
  },
  {
    slug: 'gold-standard',
    name: 'Gold Standard',
    category: 'full-detail',
    shortIntro: 'Our most popular package combining premium interior care with advanced exterior protection.',
    whatsIncluded: [
      'Double Vacuum Interior',
      'Wipe all surfaces',
      'Stains (Spot Treatment)',
      'Windows & Mirrors',
      'Clean & Protect Plastic',
      'Detail Floor Mats and Shine',
      'Hand Wash & Dry',
      'Clay Bar Treatment',
      'Wheel & Tire Detail',
      'Premium Wax Protection (3 Months)'
    ],
    popular: true,
    seo: {
      whatIsIt: "Gold Standard is our most popular package and there's a reason why. It's the sweet spot between price and results. You get everything from the Full Refresh but we take it up a notch. We do a double vacuum to really get all the hidden dirt, we protect your plastic trim so it don't fade in the sun, and we shine up your floor mats instead of just cleaning them. The big difference is outside though - we use a clay bar to pull out all that embedded junk your paint picks up from the road, then seal it with premium wax that lasts a solid 3 months. The clay bar removes stuff you can't even see but can feel if you run your hand on the paint. After this service your car feels smooth as glass and shines way better than a regular wash.",
      whoNeedsIt: "If you care about how your car looks but don't want to break the bank, this is your package. It's perfect for people who keep their vehicles for a long time and want them to stay looking good. Folks who park outside a lot really need that premium wax protection against sun and weather. Business owners who drive clients around love this one cause it makes the right impression. Also great for car enthusiasts who appreciate a proper detail but maybe can't afford the Masterpiece every time. If your paint feels rough when you touch it, you definitely need the clay bar treatment this package includes.",
      howOften: "Most folks get the Gold Standard every 3-4 months to keep their vehicle in great shape year-round. The premium wax gives you solid protection for about 3 months, so timing your next detail around when that's wearing off makes sense. Some customers do this seasonally - spring, summer, fall, and winter. That way your car's always protected and looking sharp. If you park in a garage you might stretch it to 4-5 months, but if you're outside in the elements stick to every 3 months.",
      benefits: "The Gold Standard gives you professional results that you just can't get at home. That clay bar treatment removes bonded contaminants like rail dust, brake dust, and tree sap that regular washing won't touch. Your paint will feel incredibly smooth after, which means the wax bonds better and lasts longer. The double vacuum gets dirt from places you probably didn't know dirt was hiding. We protect all your plastic trim so it stays black instead of fading to grey, which is a huge problem in our sunny climate. The premium wax creates a deep shine and makes water sheet right off when it rains. Plus we're mobile so you save time - we come to your house or work and handle everything while you go about your day. People who get this regularly notice their paint stays healthier and doesn't oxidize or fade like cars that never get proper protection.",
      faqs: [
        {
          question: "What makes this package better than the Full Refresh?",
          answer: "The clay bar treatment and premium wax are the big upgrades. Clay bar removes bonded contamination that washing can't touch, and the premium wax lasts longer with better protection. You also get double vacuuming and plastic protection inside."
        },
        {
          question: "How is the clay bar different from washing?",
          answer: "Washing removes loose dirt, but clay bar removes stuff that's bonded to your paint - like industrial fallout, rail dust, tree sap, and brake dust. You can't see most of it but you can feel it. After clay bar your paint is smooth as glass."
        },
        {
          question: "Is the premium wax worth it?",
          answer: "Definitely. It lasts about 3 months compared to the quick wax that lasts maybe 6-8 weeks. Plus it has better UV protection so your paint doesn't fade as fast. You'll notice water beads off way better too."
        },
        {
          question: "Why is this the most popular package?",
          answer: "It's the best bang for your buck. You get professional-level results without going all the way to the Masterpiece Detail price. Most people can't tell the difference between this and packages costing twice as much."
        },
        {
          question: "Do you remove the floor mats to clean under them?",
          answer: "Yep, we pull the floor mats out, vacuum and detail them separately, then vacuum under where they were sitting. That's where a lot of dirt and desert dust builds up that people never see."
        }
      ]
    }
  },
  {
    slug: 'masterpiece-detail',
    name: 'Masterpiece Detail',
    category: 'full-detail',
    shortIntro: 'The ultimate detailing experience with deep interior cleaning and paint enhancement for exceptional results.',
    whatsIncluded: [
      'Shampoo Seats & Carpet',
      'Double Vacuum Interior',
      'Wipe all Surfaces',
      'Stain (Spot Treatment)',
      'Clean & Protect All Plastic',
      'Windows & Mirrors',
      'Detail Floor Mats & Shine',
      'Detail Trunk',
      'Paint Enhancement Polish',
      'Hand Wash & Dry',
      'Clay Bar Treatment',
      'Wheel & Tire Detail',
      'Premium Wax Protection'
    ],
    seo: {
      whatIsIt: "The Masterpiece Detail is our top-of-the-line full service that transforms your vehicle completely. This isn't just a cleaning, it's a full restoration of how your car should look and feel. We shampoo all your seats and carpets to pull out deep stains and odors, not just surface clean them. Every inch of the interior gets detailed including the trunk. Outside we do paint enhancement polish which removes light scratches and swirls to restore that showroom glow, then clay bar treatment, and finish with premium wax. This package takes 4-6 hours cause we're not cutting any corners. When we're done, your car will look better than it has in years. People getting ready to sell their luxury vehicles or folks who just bought a used car and want it perfect choose this package. It's also popular for special events like weddings or anniversaries.",
      whoNeedsIt: "This package is for people who want the absolute best results. If your car's interior has deep stains from spills, pet accidents, or years of use, the seat shampooing will bring it back. People with kids who ground snacks into the carpet need this level of cleaning. If your paint has swirls and light scratches from bad car washes, the paint enhancement polish will remove most of that damage. Car collectors and enthusiasts who keep their vehicles pristine get this done regularly. It's also perfect if you're preparing a vehicle for sale and want top dollar, or if you just bought a used car and want to make it yours. Business owners with high-end vehicles definitely want this package to maintain that professional image.",
      howOften: "Most people don't need the Masterpiece every month - it's more of a seasonal or special occasion service. Maybe twice a year for regular drivers, or once a year if you're maintaining your car well between details. Some folks get it in spring and fall. Others do it before summer road trips or after winter. If you get regular maintenance details in between, you can stretch it to once or twice a year. But if this is your only detailing, you'd want it every 3-4 months to keep things from getting too bad again.",
      benefits: "The Masterpiece Detail gives you results you cannot achieve on your own without professional equipment. Our carpet and seat shampoo extraction removes dirt from deep in the fibers that vacuuming just can't reach, plus it pulls out odors that have soaked in over time. The paint enhancement polish removes years of damage from automatic car washes and gives you back that mirror shine. Combined with clay bar and premium wax, your paint gets protection and appearance restoration at the same time. We detail your trunk too, which most people never clean properly. The result is a vehicle that feels brand new again. It can literally take years off how old your car looks. Plus you're protecting your investment - regular deep cleaning and paint maintenance prevent permanent damage and keep resale values higher. The mobile convenience means we come to you, so you save hours you'd spend at a detail shop. You can work from home or relax while we handle everything.",
      faqs: [
        {
          question: "How long does the Masterpiece Detail take?",
          answer: "Usually 4 to 6 hours depending on vehicle size and condition. A sedan in decent shape might be 4 hours, but a large SUV that hasn't been detailed in years could take the full 6 hours or even a bit more."
        },
        {
          question: "Will shampooing remove old stains?",
          answer: "We can remove most stains with our extraction shampooing, but some really old or set-in stains might lighten but not disappear completely. Things like old coffee, wine, or pet stains usually come out pretty good though."
        },
        {
          question: "What's paint enhancement polish?",
          answer: "It's a polishing process that removes light scratches, swirl marks, and oxidation from your clear coat. It won't fix deep scratches down to the paint, but it removes most of the damage from bad car washes and normal wear. Your paint will shine way better after."
        },
        {
          question: "Is this package worth the extra cost?",
          answer: "If your vehicle needs it, absolutely. You're getting deep cleaning that lasts way longer than surface cleaning, plus paint correction that removes damage. If you're selling your car this can add hundreds to the sale price. If you're keeping it, you're protecting a valuable asset."
        },
        {
          question: "How is this different from the Gold Standard?",
          answer: "Masterpiece includes full seat and carpet shampooing, trunk detailing, and paint enhancement polish. Gold Standard is surface cleaning inside and no paint correction. If you got deep stains or scratched paint, you need the Masterpiece."
        }
      ]
    }
  },
  {
    slug: 'classic-exterior',
    name: 'Classic Exterior',
    category: 'exterior-only',
    shortIntro: 'Professional exterior detailing with polish, hand wash, and protective wax for a brilliant shine.',
    whatsIncluded: [
      'Basic 5 Spot Polish',
      'Professional Hand Wash',
      'Wheel Wells',
      'Windows & Mirrors',
      'Detail Rims & Tires',
      'Wax Protection (3 Months)'
    ],
    seo: {
      whatIsIt: "Classic Exterior is our focused outside-only package for folks who keep their interior clean but need help with the paint and wheels. We start with a 5-spot polish on problem areas like the hood, roof, and trunk where sun damage and scratches show up most. Then we do a proper hand wash which is way gentler than those automatic car washes with the spinning brushes. We clean out your wheel wells where mud and brake dust builds up, detail your rims and tires till they shine, clean all windows and mirrors, and finish with wax protection that lasts about 3 months. Takes about 2 hours and your car will look way better. This is perfect if you just need the outside done and your interior is already good.",
      whoNeedsIt: "This package is great for people who vacuum their own car regularly but don't have time or equipment to properly wash and wax it. Maybe you got leather seats that are easy to wipe down, or you just did an interior detail recently and only need outside work. Commuters who park in dusty lots or under trees really benefit from this. Also good for people preparing to sell who already cleaned inside but need the exterior to shine. If your paint is looking dull or you got brake dust caked on your wheels, this package will fix that. People with newer cars that don't have interior issues yet but need paint protection love this one.",
      howOften: "We recommend doing Classic Exterior every 2-3 months if you park outside. The wax protection lasts about 3 months, so timing it before the wax fully wears off keeps your paint continuously protected. If you garage your car you could stretch it to every 4 months. Some folks do it seasonally - before summer and before winter are popular times. If you live near the desert, every 2 months is better cause desert dust is rough on paint and wax.",
      benefits: "Classic Exterior protects your paint from sun damage, which is huge in New Mexico where UV rays fade and oxidize unprotected clear coat. The hand wash is way safer than automatic car washes that leave swirl marks. Our 5-spot polish removes light scratches and restores shine to the areas that see the most sun exposure. Clean wheel wells prevent rust and corrosion from built-up road salt and brake dust. Proper rim and tire detailing makes your wheels look new again and prevents long-term staining. The wax creates a barrier against bird droppings, tree sap, and other contaminants that can permanently stain if left too long. Plus it makes your next wash easier cause dirt doesn't stick as much. Being mobile, we save you time by coming to your location. You're also protecting your vehicle's resale value - faded or damaged paint is one of the first things buyers notice and it drops the price.",
      faqs: [
        {
          question: "Do you touch the interior at all?",
          answer: "Nope, this is outside only. We wash exterior windows but don't do anything inside the car. If you need interior work, check out our Classic Interior or combo packages like Full Refresh."
        },
        {
          question: "What's the 5-spot polish?",
          answer: "We polish five key areas that get the most sun damage and show scratches worst - usually hood, roof, trunk, and two fenders. It removes light scratches and oxidation to restore shine. Not a full paint correction but makes a big difference."
        },
        {
          question: "How long does this package take?",
          answer: "About 2 hours for most vehicles. Bigger trucks or really dirty cars might take 2.5 hours, but we can knock out most sedans and SUVs in 2 hours."
        },
        {
          question: "Can I add clay bar treatment?",
          answer: "Yep, you can upgrade to include clay bar which removes bonded contaminants. Or check out our Wax & Buff package which already includes clay bar treatment."
        },
        {
          question: "Will the wax protect against scratches?",
          answer: "Wax protects against UV damage, water spots, and contaminants, but it won't prevent scratches from physical contact. It does make your paint slicker so dust is less likely to cause scratches when you wipe it off though."
        }
      ]
    }
  },
  {
    slug: 'wax-and-buff',
    name: 'Wax & Buff',
    category: 'exterior-only',
    shortIntro: 'Enhanced exterior package with paint polish, clay bar treatment, and lasting wax protection.',
    whatsIncluded: [
      'Paint Enhancement Polish',
      'Professional Hand Wash',
      'Clay Bar Exterior',
      'Wheel Wells',
      'Detail Rims & Tires',
      'Windows & Mirrors',
      'Wax Protection (3 Months)'
    ],
    seo: {
      whatIsIt: "Wax & Buff is our premium exterior package that goes beyond a regular wash and wax. We do paint enhancement polish on your entire vehicle to remove swirl marks, light scratches, and oxidation that makes paint look dull. Then we use clay bar treatment to remove all the bonded contaminants your paint picks up - stuff like industrial fallout, brake dust, tree sap, and rail dust that you can feel when you run your hand on the hood. After your paint is smooth and polished, we apply wax protection that lasts 3 months. We also hand wash, clean wheel wells, and detail your rims and tires. The combination of polish, clay bar, and wax gives you results that look professional because it is professional. Your paint will shine like it did when the car was new.",
      whoNeedsIt: "If your paint feels rough or looks dull even after washing, you need this package. Car enthusiasts who care about their paint choose Wax & Buff regularly. People with dark colored cars where swirls really show up love this one. If you been going through automatic car washes and your paint has lots of fine scratches, the polish will remove most of that damage. Folks preparing vehicles for sale get great results with this package cause it makes the paint pop. Anyone who parks outside a lot needs this level of protection. If you got a vehicle you plan to keep for years, regular Wax & Buff treatments prevent long-term paint damage that costs thoudesert dusts to fix later.",
      howOften: "For best results, get Wax & Buff every 3-4 months. The wax lasts about 3 months, and doing it regularly means your paint never goes unprotected. Some customers do it seasonally - before summer to protect against intense sun, and before winter to protect against rain and cold. If you park outside or drive a lot, stick to every 3 months. Garage-kept cars can stretch to 4-5 months. The more regularly you do it, the less polishing is needed each time cause your paint stays in better shape.",
      benefits: "Wax & Buff restores and protects your paint at the same time. The paint enhancement polish removes surface damage and brings back that deep gloss. Clay bar treatment makes your paint smooth as glass which means the wax bonds better and lasts longer. Protected paint is easier to wash cause dirt doesn't stick as hard. You'll notice water beads up and rolls right off. The treatment prevents oxidation which is that chalky, faded look old paint gets. It also creates a barrier against bird droppings, bug splatter, and tree sap that can permanently etch into unprotected clear coat. Your vehicle will look newer for longer, which helps resale value significantly. Plus being mobile means we save you time - we come to your house or work and handle everything. You don't gotta drop your car anywhere or wait around. Most people can't believe the difference in shine between before and after this service.",
      faqs: [
        {
          question: "What's the difference between this and Classic Exterior?",
          answer: "Wax & Buff includes full paint enhancement polish and clay bar treatment. Classic Exterior only does 5-spot polish and no clay bar. If your paint feels rough or looks faded, you want the full treatment."
        },
        {
          question: "How long does the clay bar treatment take?",
          answer: "Clay bar adds about 30-45 minutes to the service. We clay bar the whole vehicle to remove all bonded contaminants, which takes time to do right but makes a huge difference in how smooth your paint feels."
        },
        {
          question: "Will the polish remove deep scratches?",
          answer: "Paint enhancement polish removes light scratches and swirls in the clear coat. Deep scratches that go through the clear coat need paint correction which is a different service. But we can remove most of the damage from automatic car washes."
        },
        {
          question: "How long does this package take?",
          answer: "About 3-3.5 hours for most vehicles. The paint polish and clay bar take time to do properly. Bigger vehicles might take closer to 4 hours."
        },
        {
          question: "Can I do this package without the interior work myself?",
          answer: "Yep, this is outside only. If you need inside done too, check out our Gold Standard or Masterpiece Detail packages which combine interior and exterior."
        }
      ]
    }
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    category: 'exterior-only',
    shortIntro: 'Premium long-term paint protection with professional-grade ceramic coating for ultimate durability.',
    whatsIncluded: [
      'Paint Correction Available',
      'Ultimate Gloss',
      'Our Best 10H+ Coating',
      'Hydrophobic and Self-Cleaning',
      'Full Exterior Detail',
      'CARFAX Verified Warranty',
      'Best Protection (5-10 Years)'
    ],
    seo: {
      whatIsIt: "Ceramic Coating is our ultimate paint protection service that uses professional-grade nano-ceramic technology to create a permanent bond with your clear coat. This isn't wax that wears off in months - this is a 10H+ hardness coating that lasts 5-10 years with proper maintenance. We start with paint correction if needed to remove scratches and swirls, then apply our best ceramic coating which becomes harder than your factory clear coat. The coating is hydrophobic which means water and dirt slide right off. It's self-cleaning in the sense that rain will wash away most dirt. Your paint gets incredible gloss that looks wet even when dry, plus protection against UV damage, chemical stains, bird droppings, tree sap, and light scratches. We provide a CARFAX verified warranty cause we stand behind the durability. This is a serious investment in your vehicle's protection and appearance.",
      whoNeedsIt: "Ceramic coating is for people who want the absolute best protection and are keeping their vehicle for years. New car owners who want to protect their investment from day one love this service. Car enthusiasts who keep their vehicles pristine choose ceramic coating. People with expensive or luxury vehicles definitely should get this cause it protects that big investment. If you park outside every day, ceramic coating prevents the sun damage that fades and oxidizes paint over time. Folks who do a lot of highway driving benefit from the protection against rock chips and bug splatter. Anyone tired of waxing their car every few months will appreciate that ceramic coating lasts years. Black and dark colored cars really shine with ceramic coating cause the gloss is incredible.",
      howOften: "You only need ceramic coating applied once, and it lasts 5-10 years depending on the product tier and how well you maintain it. After application, you should wash your car regularly with pH-neutral soap and bring it back for a maintenance detail every 6-12 months where we inspect the coating and can add a booster layer if needed. The coating doesn't wear off like wax, but regular washing keeps it performing at its best. Most customers get it done once when they buy a new car or after paint correction on an older vehicle, then just maintain it.",
      benefits: "Ceramic coating gives you protection that wax simply cannot match. The coating is harder than your clear coat, so it resists light scratches better. UV protection prevents fading and oxidation for years. The hydrophobic properties mean dirt and water don't stick, so your car stays cleaner longer and washing is way easier. Chemical resistance protects against bird droppings, bug splatter, and tree sap that would normally etch into paint. The gloss is unmatched - your paint will shine like glass and people will think you just waxed it every single day. You save time and money long-term cause you're not waxing every few months. Your vehicle's resale value stays higher cause the paint is protected from damage and aging. We back it with a CARFAX verified warranty so you got proof of protection if you sell. For people keeping their cars 5+ years, ceramic coating pays for itself in preserved paint condition and resale value. The mobile service means we come to you, typically taking 4-6 hours for application after paint prep.",
      faqs: [
        {
          question: "Is ceramic coating worth the investment?",
          answer: "If you're keeping your vehicle for several years, absolutely. You get 5-10 years of protection versus waxing every 2-3 months. The paint stays in way better condition, which helps resale value. Plus you save time on maintenance."
        },
        {
          question: "How is this different from wax?",
          answer: "Wax is a temporary sacrificial layer that wears off. Ceramic coating bonds permanently to your clear coat at the molecular level. It's way harder, lasts years instead of months, and provides better protection against everything."
        },
        {
          question: "Do I need paint correction first?",
          answer: "If your paint has scratches or swirls, yes. Ceramic coating locks in whatever condition your paint is in, so you want it perfect before coating. We'll inspect and let you know if paint correction is needed."
        },
        {
          question: "Can I still go through car washes?",
          answer: "We recommend touchless car washes only. Automatic brushes can still scratch any paint, coated or not. Hand washing is best. The coating makes washing easier cause dirt doesn't stick as hard."
        },
        {
          question: "What maintenance does ceramic coating need?",
          answer: "Just regular washing with pH-neutral soap. Bring it back every 6-12 months for us to inspect the coating and do a maintenance detail. That's it. Way less maintenance than waxing every couple months."
        }
      ]
    }
  },
  {
    slug: 'classic-interior',
    name: 'Classic Interior',
    category: 'interior-only',
    shortIntro: 'Thorough interior detailing that cleans and refreshes every surface of your vehicle cabin.',
    whatsIncluded: [
      'Complete Interior Vacuum',
      'Wipe All Surface',
      'Stains (Spot Treatment)',
      'Windows & Mirrors',
      'Detail Floor Mats and Shine',
      'Detail Trunk'
    ],
    seo: {
      whatIsIt: "Classic Interior is our focused inside-only package that gets your cabin clean and fresh. We do a complete vacuum of seats, carpets, floor areas, and all the cracks where crumbs hide. Then we wipe down every surface including the dashboard, center console, door panels, and steering wheel. We treat any stains we find with spot cleaning, clean all your windows and mirrors so they're streak-free, detail and shine your floor mats, and clean out your trunk which most people forget about. Takes about 1.5 hours for most vehicles. This package is perfect if your exterior is fine but the inside needs attention, or if you just did exterior work and want to match that clean feeling inside. Your car will smell better and feel way more comfortable to drive after this service.",
      whoNeedsIt: "This package is great for people who keep their exterior washed but let the inside get messy. If you got kids dropping snacks and leaving crumbs everywhere, this will reset things. Commuters who eat breakfast in the car and got dashboard dust really benefit. Pet owners dealing with fur all over the seats need this regularly. People who just bought a used car and want the interior fresh choose Classic Interior. If you vacuum yourself but can't get those hard-to-reach areas or don't have products for the dashboard and panels, we handle all that. Also good if you been sick in your car and want everything wiped down and sanitized. Anyone preparing to sell will want this to make sure buyers don't get turned off by a dirty interior.",
      howOften: "We recommend Classic Interior every 2-3 months for daily drivers. If you got kids or pets, maybe every 4-6 weeks cause things get messy faster. People who eat in their car a lot should do it more often to prevent stains from setting in and smells from building up. If you're good about not tracking in dirt and don't eat in your vehicle, you could stretch to every 4 months. Some folks do it seasonally to keep things fresh. The key is not letting dirt and grime build up to the point where spot cleaning can't handle the stains anymore.",
      benefits: "Classic Interior makes your daily driving experience way more pleasant. A clean interior just feels better and puts you in a better mood. Our professional vacuum is more powerful than home vacuums and gets dirt from under seats and in cracks you can't reach. We use proper products on your dashboard and panels that clean without leaving streaks or residue. The spot treatment removes stains before they set permanently. Clean windows improve visibility and safety, especially at night when dirty windows create glare. Detailed floor mats last longer cause built-up dirt grinds into the material and wears it out. Regular interior cleaning prevents odors from soaking into upholstery. If you ever sell your vehicle, a clean interior is one of the first things buyers notice. Dirty interiors drop resale value a lot. Plus we're mobile so we come to you - you can work from home or relax while we clean. Most people are shocked how much better their car feels after a proper interior detail.",
      faqs: [
        {
          question: "Do you shampoo the seats and carpet?",
          answer: "Not in this package - we vacuum and do spot cleaning on stains. For full shampooing you want our Deep Shampoo package which includes extraction cleaning of all carpets and seats."
        },
        {
          question: "What products do you use on the dashboard?",
          answer: "We use professional interior cleaners and protectants that won't leave a greasy film or cause glare on your windshield. Different products for different surfaces - leather, plastic, vinyl all get treated properly."
        },
        {
          question: "Can you remove pet hair?",
          answer: "Yep, our vacuum and tools are designed to pull pet hair from upholstery. If it's really embedded we got brushes and techniques to get it out. Most pet hair comes out with thorough vacuuming."
        },
        {
          question: "How long does Classic Interior take?",
          answer: "Usually 1.5 to 2 hours depending on vehicle size and how messy it is. Bigger SUVs or really dirty cars might take closer to 2 hours."
        },
        {
          question: "Do you clean under the seats?",
          answer: "Absolutely. We move seats forward and back to vacuum underneath where dirt and stuff accumulates. That's where we usually find lost change, old fries, and whatever else falls down there."
        }
      ]
    }
  },
  {
    slug: 'deep-shampoo',
    name: 'Deep Shampoo',
    category: 'interior-only',
    shortIntro: 'Intensive interior cleaning with shampooed seats and carpets to remove deep-set stains and odors.',
    whatsIncluded: [
      'Deep Cleaning Treatment',
      'Shampoo All Carpets & Seats',
      'Double Vacuum Interior',
      'Stain Extraction',
      'Clean & Protect All Plastic',
      'Windows & Mirrors',
      'Detail Floor Mats and Shine',
      'Detail Trunk'
    ],
    seo: {
      whatIsIt: "Deep Shampoo is our intensive interior cleaning that goes way beyond vacuuming. We shampoo all your carpets and seats using hot water extraction which pulls out deep dirt, stains, and odors that have soaked into the fibers over time. This isn't surface cleaning - we're getting stuff out that's been ground in for months or years. We do a double vacuum before and after shampooing, extract stains with professional products, clean and protect all your plastic surfaces, detail your floor mats, clean windows and mirrors, and detail your trunk. The shampooing process involves spraying cleaning solution deep into the material, agitating it, then using extraction equipment that sucks out the dirt and moisture. Your seats and carpets will look and smell way better after. Takes about 3-4 hours and needs time to dry after, but the results are worth it.",
      whoNeedsIt: "If you got deep stains that spot cleaning won't remove, you need Deep Shampoo. Families with kids who spilled juice or ground snacks into the carpet benefit huge from this. Pet owners dealing with accidents or odors that won't go away need the extraction cleaning. People who bought a used car that smells funny or has mystery stains choose this package. Smokers or former smokers who need to remove cigarette smell from upholstery get great results. If you spilled coffee or soda and it soaked through the carpet, regular vacuuming won't fix that. Ride-share drivers who got lots of passengers in and out need deep cleaning regularly. Anyone preparing to sell a vehicle with interior stains or smells should get this done cause it dramatically improves what buyers see and smell.",
      howOften: "Most people don't need Deep Shampoo monthly - it's more of an as-needed service. Maybe once or twice a year for regular maintenance, or seasonally if you got kids or pets. Some folks do it in spring and fall. Others get it done before summer road trips or after winter when everything's muddy. If you got a specific incident like a spill or accident, get it done right away before stains set. Between deep cleans, maintain with our Classic Interior package every couple months. The key is addressing problems before they become permanent.",
      benefits: "Deep Shampoo removes dirt and stains that vacuuming simply cannot reach. The hot water extraction pulls out ground-in dirt from deep in the carpet and seat fibers. It removes odors at the source instead of just covering them up with air fresheners. Stains from coffee, juice, pet accidents, and food come out with proper extraction that you can't do at home without professional equipment. Your interior will look years newer after this service. It's way more thorough than those rental carpet cleaners cause we use commercial-grade equipment and know proper techniques. The cleaning also removes allergens, dust mites, and bacteria that build up in upholstery over time. Your car will smell fresh and clean, not just masked with fragrance. If you're selling your vehicle, deep cleaned interiors photograph better and make buyers way more confident. Stains and smells are huge turnoffs that drop prices or lose sales completely. Regular deep cleaning extends the life of your upholstery by removing abrasive dirt particles that wear down fibers. Being mobile, we come to your location and handle everything. Just keep in mind the interior needs a few hours to dry completely after.",
      faqs: [
        {
          question: "How long does it take to dry?",
          answer: "Usually 2-4 hours depending on weather and humidity. We extract as much moisture as possible during cleaning. Leaving windows cracked or parking in sun helps it dry faster. Don't close it up tight right away."
        },
        {
          question: "Will you remove all stains?",
          answer: "We remove most stains with our extraction process, but some really old or set-in stains might lighten without disappearing completely. Permanent marker, dye transfer, and bleach stains are tough. We'll let you know what's realistic."
        },
        {
          question: "Can you remove smoke smell?",
          answer: "Deep Shampoo helps a lot with smoke smell by removing the residue from upholstery. For heavy smoke smell you might also need our Mold Reset package which includes ozone treatment that eliminates odors completely."
        },
        {
          question: "How is this different from Classic Interior?",
          answer: "Classic Interior is surface cleaning - vacuum and wipe down. Deep Shampoo includes full extraction shampooing of carpets and seats which removes deep dirt and stains. Way more intensive cleaning."
        },
        {
          question: "What about leather seats?",
          answer: "Leather gets cleaned and conditioned with proper leather products, not shampooed. We treat leather differently than cloth. If you got mixed materials we handle each appropriately."
        }
      ]
    }
  },
  {
    slug: 'mold-reset',
    name: 'Mold Reset',
    category: 'interior-only',
    shortIntro: 'Specialized mold remediation service with ozone treatment to eliminate mold and restore interior air quality.',
    whatsIncluded: [
      'Mold Remediation Treatment',
      'Shampoo Seats & Carpets',
      'Ozone Treatment',
      'Double Vacuum Interior',
      'Wipe all Surfaces',
      'Stains (Spot Treatment)',
      'Clean & Protect Plastic',
      'Windows & Mirrors',
      'Detail Floor Mats & Shine',
      'Detail Trunk'
    ],
    seo: {
      whatIsIt: "Mold Reset is our specialized service for vehicles with mold problems or severe odors. This package combines mold remediation treatment, full shampooing of seats and carpets, and ozone treatment to completely eliminate mold and the musty smell that comes with it. We identify where the mold is growing, treat it with proper antimicrobial solutions, shampoo everything to remove mold spores, then run ozone treatment which kills any remaining spores and eliminates odors at the molecular level. We also do double vacuum, wipe all surfaces, spot treat stains, protect plastic, clean windows, detail floor mats, and detail your trunk. This is serious remediation work that takes 4-5 hours plus ozone treatment time. Mold is a health hazard and damages your interior if not treated properly, so this service is really important if you got a water leak or moisture problem that caused growth.",
      whoNeedsIt: "If you can see mold or smell that musty mildew odor, you need this package immediately. People who had water leaks from sunroofs, windows, or door seals need Mold Reset after fixing the leak. Vehicles that sat for a long time with moisture inside develop mold. Cars that flooded even slightly need full remediation. If you bought a used car that smells moldy, don't ignore it - that's a health issue. People in areas with monsoon moisture or sudden temperature changes sometimes get mold from condensation. If anyone in your family has allergies or respiratory issues, mold in your car is making it worse. This service is also for vehicles that got really wet inside from spills or leaving windows open in rain. Smokers who need deep odor removal sometimes choose this for the ozone treatment. Anyone trying to sell a vehicle with mold or musty smell needs this done cause buyers will run away from that problem.",
      howOften: "Mold Reset is usually a one-time treatment after you fix whatever caused the moisture problem. Once we remediate the mold and eliminate the odor, you shouldn't need it again unless you get another leak or moisture issue. The key is fixing the source - if you got a leaking sunroof or window seal, fix that first or the mold will come back. After Mold Reset, maintain your interior with regular detailing to prevent problems. If you live in a really humid area, running your AC and not leaving wet stuff in the car helps prevent mold growth.",
      benefits: "Mold Reset protects your health by removing mold spores that cause allergies and respiratory problems. Breathing mold while driving is dangerous, especially for kids and people with asthma. The antimicrobial treatment kills mold at the source, and shampooing removes spores from deep in the upholstery. Ozone treatment eliminates odors permanently instead of just covering them up - it breaks down odor molecules so the smell is gone for good. Your interior will smell fresh and clean again. The treatment prevents mold from spreading and causing more damage to your upholstery, carpets, and headliner. Left untreated, mold can permanently stain and rot interior materials. This service also removes the musty smell that tanks resale value - nobody wants to buy a car that smells moldy. The peace of mind knowing your vehicle is safe and healthy for your family is huge. We use professional-grade products and equipment that you can't get at the store. Trying to clean mold yourself usually doesn't work cause spores remain and it comes back. Our mobile service means we handle everything at your location, and we'll advise you on preventing mold from returning.",
      faqs: [
        {
          question: "Will the mold come back?",
          answer: "Not if you fix the source of moisture. We kill and remove the mold, but if you still got a leak or moisture problem it can grow again. Fix the leak first, then get this service."
        },
        {
          question: "Is ozone treatment safe?",
          answer: "Ozone treatment is safe when done properly by professionals. You and pets can't be in the vehicle during treatment, and we air it out completely after. Then it's totally safe to drive."
        },
        {
          question: "How long does ozone treatment take?",
          answer: "Usually 30-60 minutes of ozone generation, then another 30 minutes to air out the vehicle. The whole service including cleaning takes 4-5 hours total."
        },
        {
          question: "Can you remove mold from any surface?",
          answer: "We can treat most surfaces, but if mold has deeply penetrated headliner or carpet backing, sometimes those materials need replacement. We'll inspect and let you know if anything is beyond remediation."
        },
        {
          question: "Will this remove cigarette smoke smell?",
          answer: "Yep, ozone treatment is excellent for smoke odor. Between the shampooing and ozone, we can remove even heavy smoke smell. It's one of the best treatments for odor elimination."
        }
      ]
    }
  }
];

export const locations = [
  { slug: 'albuquerque', name: 'Albuquerque' },
  { slug: 'rio-rancho', name: 'Rio Rancho' },
  { slug: 'corrales', name: 'Corrales' }
];

const locationDetails: Record<string, {
  problems: string[];
  examples: string;
  whyNeeds: string;
}> = {
  'albuquerque': {
    problems: ['high desert sun damage', 'desert dust and red rock debris', 'construction dust buildup', 'intense UV exposure at elevation', 'dry air causing interior cracking'],
    examples: "Commuters in Albuquerque with dust-covered vehicles from desert roads. Construction workers dealing with fine dust settling on paint. Families from outdoor recreation bringing red rock dust into interiors. Workers parking outdoors dealing with intense sun damage.",
    whyNeeds: "Albuquerque's high desert location means your vehicle faces unique challenges. The intense desert sun at elevation causes faster paint oxidation and fading. Desert dust and red rock debris get tracked into carpets where they scratch and wear down fibers. The dry climate can cause mold growth from sudden monsoon moisture. Strong desert sun creates intense UV exposure that fades dashboards and upholstery faster than sea-level areas. People parking outdoors need more frequent protection and cleaning to prevent permanent damage from the harsh desert environment."
  },
  'rio-rancho': {
    problems: ['construction dust from development', 'mesa dust and dirt', 'work truck grime', 'desert road dust coating paint', 'dry season dust buildup'],
    examples: "Construction workers in Rio Rancho with dust-caked work trucks from job sites. Development crews driving through dusty lots during builds. Families in growing neighborhoods dealing with dust constantly settling on vehicles. Contractors whose trucks get covered in construction dust.",
    whyNeeds: "Rio Rancho's rapid development creates serious challenges for vehicle cleanliness. Construction dust from ongoing builds settles on everything and gets ground into paint causing scratches. The fine dust gets into wheel wells and undercarriages. During dry season, dust from mesa roads cakes onto vehicles and is really hard to remove once settled. Workers driving trucks through construction areas need regular detailing to prevent buildup that damages paint and clogs mechanical parts. The dust also gets inside cabins through AC vents, making interiors dirty fast."
  },
  'corrales': {
    problems: ['agricultural dust from farms', 'cottonwood pollen and seeds', 'river valley moisture', 'rural road dust', 'bosque debris and dirt'],
    examples: "Farm families in Corrales with agricultural dust coating vehicles. Residents dealing with heavy cottonwood debris in spring. Rural property owners with dust from dirt roads. Horse owners whose trucks show heavy wear from farm work.",
    whyNeeds: "Corrales' rural agricultural setting creates unique vehicle challenges. Farm dust from the fields settles on everything. Agricultural work means dirt and plant debris that damages vehicles if not cleaned properly. The cottonwood trees release massive amounts of seeds and pollen that stick to paint. River valley moisture combined with dust creates tough cleaning challenges. Farm vehicles face heavy wear from constant exposure to harsh conditions. Regular professional detailing prevents long-term damage and keeps work vehicles running longer by removing corrosive materials."
  }
};

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find(p => p.slug === slug);
}

export function getLocationBySlug(slug: string) {
  return locations.find(l => l.slug === slug);
}

export function getLocationContent(locationSlug: string, packageName: string, packageCategory: string): LocationContent | null {
  const details = locationDetails[locationSlug];
  if (!details) return null;

  const locationName = getLocationBySlug(locationSlug)?.name || locationSlug;

  return {
    whyLocationNeeds: details.whyNeeds,
    locationBenefits: `Getting ${packageName} in ${locationName} addresses the specific challenges your vehicle faces in this area. ${details.problems.slice(0, 3).join(', ')} are all problems we see constantly here. Our mobile service means we come to your ${locationName} location - whether that's your home, workplace, or wherever is convenient. We understand what ${locationName} vehicles deal with and have the right products and techniques to handle it. ${details.examples} Regular ${packageName} service prevents these local conditions from causing permanent damage to your vehicle. We're familiar with ${locationName} and serve customers here all the time, so we know exactly what your car needs.`,
    locationExamples: details.examples
  };
}
