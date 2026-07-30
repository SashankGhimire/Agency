import { Project } from '../types';

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'gym-station',
    title: 'Gym Station',
    tagline: 'High-Performance Fitness & Athletic Training Hub',
    client: 'Gym Station Fitness Co.',
    industry: 'Fitness & Health',
    year: '2025',
    liveUrl: 'https://gym-station.vercel.app/',
    githubUrl: 'https://github.com/innovexa-studio/gym-station',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop'
    ],
    metrics: [
      { label: 'Trial Memberships', value: '+240%' },
      { label: 'Lighthouse Speed', value: '99/100' },
      { label: 'Mobile Conversion', value: '4.8%' },
      { label: 'Page Load Time', value: '0.4s' }
    ],
    overview: 'Gym Station needed a bold, energetic, and ultra-fast web presence to match their modern training facility. We engineered a conversion-driven web application featuring seamless class scheduling, trainer showcases, membership calculators, and instant pass booking.',
    challenge: 'The client was losing potential gym members due to a slow, outdated WordPress site with friction-heavy sign-up forms, poor mobile responsiveness, and zero integration with their membership CRM.',
    solution: 'Innovexa Studio designed a dark, high-contrast aesthetic with kinetic typography and micro-interactions. We built an instant pass booking engine with 1-click checkout, automated trial session scheduling, and ultra-crisp class timetables.',
    keyFeatures: [
      'Interactive Class Schedule Filter with Real-time Seat Availability',
      'Instant Free Day Pass Claiming Flow with SMS/Email confirmation',
      'Trainer Portfolio Modals with Workout Video Highlights',
      'Membership Tier Price Estimator & Plan Comparison Tool',
      'Ultra-optimized Mobile-First UX built for quick tap interactions'
    ],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'React', 'Motion', 'Vercel'],
    deliverables: ['Custom UI/UX Design System', 'Responsive Web App', 'CRM Form Integrations', 'SEO Architecture', 'Speed Optimization'],
    responsivePreviews: {
      desktop: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      tablet: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
      mobile: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop'
    },
    featured: true
  },
  {
    id: 'green-beans-cafe',
    title: 'Green Beans Cafe',
    tagline: 'Artisanal Coffee, Bakery & Organic Dining Experience',
    client: 'Green Beans Coffee Co.',
    industry: 'Hospitality & Dining',
    year: '2025',
    liveUrl: 'https://green-beans-cafe.vercel.app',
    githubUrl: 'https://github.com/innovexa-studio/green-beans-cafe',
    coverImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop'
    ],
    metrics: [
      { label: 'Online Table Orders', value: '+310%' },
      { label: 'Menu Dwell Time', value: '3m 42s' },
      { label: 'Google Search Traffic', value: '+180%' },
      { label: 'Lighthouse Score', value: '100/100' }
    ],
    overview: 'Green Beans Cafe required a warm, boutique digital presence that captures the fragrant atmosphere of their specialty coffee shop while driving table reservations, catering inquiries, and online pre-orders.',
    challenge: 'In-person diners struggled to view menus online, and the cafe had no automated way to manage weekend table reservations or whole-bean coffee bag subscriptions.',
    solution: 'We built a high-tactile digital menu experience with interactive allergen filters, instant QR-code order integration, table booking widget, and rich sensory imagery that elevates the brand above local competitors.',
    keyFeatures: [
      'Interactive Visual Menu with Dietary Filters (Vegan, Gluten-Free, Keto)',
      '1-Tap Table Reservation System with Instant SMS Confirmation',
      'Coffee Bean Origin Map & Flavor Profile Selector',
      'Online Catering & Event Space Booking Modal',
      'Local SEO Schema for High Rank on Google Maps & Local Searches'
    ],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Lenis', 'Vercel'],
    deliverables: ['Brand Storytelling UX', 'Interactive Menu App', 'Table Reservation Engine', 'Local SEO Package'],
    responsivePreviews: {
      desktop: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop',
      tablet: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop',
      mobile: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop'
    },
    featured: true
  },
  {
    id: 'siddhi-laxmi',
    title: 'Siddhi Laxmi Spirits',
    tagline: 'Premium Wine Vault, Craft Spirits & Fine Liquor Boutique',
    client: 'Siddhi Laxmi Spirits & Wine Vault',
    industry: 'Liquor & Fine Spirits',
    year: '2025',
    liveUrl: 'https://siddhi-laxmi.vercel.app',
    githubUrl: 'https://github.com/innovexa-studio/siddhi-laxmi',
    coverImage: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop'
    ],
    metrics: [
      { label: 'Online Sales & Inquiries', value: '+280%' },
      { label: 'Age-Gate Compliance', value: '100%' },
      { label: 'Catalog Dwell Time', value: '4m 15s' },
      { label: 'Lighthouse Speed', value: '99/100' }
    ],
    overview: 'Siddhi Laxmi Spirits is an elite liquor store and rare wine vault offering curated single-malt whiskies, fine vintage wines, artisanal gins, and premium spirits. Innovexa Studio built an ultra-sleek, age-verified digital storefront with real-time stock availability, sommelier pairing guides, and 1-hour local home delivery ordering.',
    challenge: 'Siddhi Laxmi relied on foot traffic and phone inquiries. Their legacy presence lacked age verification, liquor category filtering, tasting note guides, and an online ordering system for premium gift boxes and rare vintage bottles.',
    solution: 'We engineered an elegant dark-luxury web platform featuring interactive spirits filtering (Whiskey, Wine, Rum, Vodka, Tequila), age-gate compliance verification, real-time local stock checking, rare vintage reservation engine, and 1-tap express checkout.',
    keyFeatures: [
      'Interactive Spirits & Vintage Wine Catalog with Tasting Notes & ABV Filters',
      'Instant Age Verification Guard & Secure Local Delivery Booking',
      'Sommelier Pairing Guide & Cocktail Recipe Recommendations',
      'Rare Vintage & Single-Malt Barrel Reservation Vault',
      'Local Store Inventory Lookup with 1-Hour Express Delivery Flow'
    ],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
    deliverables: ['Luxury E-Commerce UI', 'Age Verification System', 'Inventory Catalog App', 'Local SEO & Schema'],
    responsivePreviews: {
      desktop: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1200&auto=format&fit=crop',
      tablet: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop',
      mobile: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop'
    },
    featured: true
  }
];
