import { Service, ProcessStep, IndustryCard, Testimonial, FAQItem, ValueProp } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'business-websites',
    title: 'Premium Business Websites',
    description: 'High-converting, authoritative websites engineered to showcase your brand, establish trust, and capture leads 24/7.',
    longDescription: 'Custom-designed websites tailored specifically to your target market. Built with high performance, lead capture forms, local SEO, and intuitive content management.',
    iconName: 'Building2',
    benefits: ['Sub-second page loading speeds', 'Mobile-first responsive layout', 'Integrated lead capture & booking', 'Custom brand strategy & typography'],
    idealFor: 'Local services, consultancies, agencies, and service providers',
    timeline: '1-2 Weeks',
    popular: true
  },
  {
    id: 'ai-automation',
    title: 'Automation & Workflows',
    description: 'Automate repetitive business tasks with tailored systems that save time and improve operational efficiency.',
    longDescription: 'Eliminate tedious manual processes. We design custom workflows to process documents, handle internal data tasks, and automate complex team operations.',
    iconName: 'Cpu',
    benefits: ['10x speedup in business processes', 'Custom API & Zapier/Make connections', 'Automated data extraction & reporting', 'Zero human operational overhead'],
    idealFor: 'Growing SMBs, agencies, corporate teams, and operations-heavy firms',
    timeline: '1-2 Weeks',
    popular: true
  },
  {
    id: 'ai-integration',
    title: 'Smart Website Integration',
    description: 'Embed smart features, automated search, and recommendation logic directly into your existing website.',
    longDescription: 'Transform your website from static text into a more intelligent experience. We integrate smart search, personalization logic, and seamless third-party systems.',
    iconName: 'Sparkles',
    benefits: ['Semantic vector search capabilities', 'AI content & product recommendations', 'Seamless backend API proxying', 'Enhanced visitor engagement metrics'],
    idealFor: 'E-commerce stores, content portals, SaaS platforms, and enterprise sites',
    timeline: '1-2 Weeks'
  },
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    description: 'Bespoke web tools, client portals, and interactive business software built for seamless scalability.',
    longDescription: 'When off-the-shelf software falls short. We build custom full-stack web applications, internal dashboards, customer portals, and SaaS MVPs tailored precisely to your requirements.',
    iconName: 'ShieldCheck',
    benefits: ['Scalable TypeScript & React architecture', 'Secure user authentication & cloud storage', 'Custom API development', 'Sub-second real-time responsiveness'],
    idealFor: 'Startups, B2B companies, and growing enterprise platforms',
    timeline: '2-3 Weeks'
  },
  {
    id: 'landing-pages',
    title: 'High-Impact Landing Pages',
    description: 'Laser-focused single-page experience designed for product launches, ad campaigns, and maximum conversion rates.',
    longDescription: 'When every click counts. Built around conversion rate optimization (CRO) principles with persuasive copywriting structure and instant lead triggers.',
    iconName: 'Zap',
    benefits: ['Optimized for ad traffic (Google/Meta)', 'A/B testing ready architecture', 'Custom micro-interactions & visuals', 'High conversion rate layout structure'],
    idealFor: 'SaaS launches, specific product promos, ad campaign landing pages',
    timeline: '3-5 Days'
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description: 'Upgrade slow, outdated, low-performing legacy websites into modern, high-converting digital powerhouses.',
    longDescription: 'We audit your current site, salvage valuable content & SEO rankings, and rewrite the frontend with cutting-edge tech and modern luxury aesthetics.',
    iconName: 'RefreshCw',
    benefits: ['3x-5x speed improvement', 'Modern luxury aesthetic overhaul', 'Zero loss of current Google SEO rank', 'Mobile responsiveness guarantee'],
    idealFor: 'Businesses with sites older than 3 years or low conversion rates',
    timeline: '1-2 Weeks'
  },
  {
    id: 'seo-optimization',
    title: 'Technical SEO & Rank',
    description: 'Rank #1 on Google for key local search terms and load under 0.5s on every mobile device.',
    longDescription: 'Technical SEO audits, structured schema markup, keyword architecture, Google Business Profile optimization, and Core Web Vitals speed perfection.',
    iconName: 'TrendingUp',
    benefits: ['100/100 Core Web Vitals scores', 'Local Business Schema JSON-LD', 'Keyword optimized page architecture', 'Google Search Console configuration'],
    idealFor: 'Any business wanting organic inbound customers from search',
    timeline: '1 Week'
  },
  {
    id: 'maintenance-ai',
    title: 'Continuous Care & Maintenance',
    description: 'Ongoing technical maintenance, hosting setup, security updates, and platform optimization.',
    longDescription: 'Peace of mind web operations. We handle server uptime, security patches, content updates, and support your site as it grows.',
    iconName: 'Bot',
    benefits: ['99.9% guaranteed uptime', 'Ongoing support & optimization', 'Monthly content & menu updates', 'Continuous security monitoring'],
    idealFor: 'Busy business owners who want a zero-headache digital solution',
    timeline: 'Ongoing Service'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understanding Your Business Goals',
    description: 'We start with a 20-minute strategy session to deeply understand your business model, target audience, brand identity, and revenue goals.',
    deliverables: ['Strategy Blueprint', 'Competitor Analysis', 'Conversion Roadmap'],
    duration: 'Day 1-2',
    iconName: 'Compass'
  },
  {
    number: '02',
    title: 'Research',
    subtitle: 'Market & Audience Positioning',
    description: 'We analyze your top competitors, customer search habits, and industry trends to create an irresistible visual positioning angle.',
    deliverables: ['Target Persona Insights', 'SEO Keyword Plan', 'Information Architecture'],
    duration: 'Day 2-3',
    iconName: 'Search'
  },
  {
    number: '03',
    title: 'Wireframe',
    subtitle: 'UX Blueprinting & Conversion Flow',
    description: 'Before touching colors, we map out exact visitor conversion pathways ensuring every element guides the user towards taking action.',
    deliverables: ['Interactive UX Wireframes', 'Content Hierarchy', 'Call-To-Action Mapping'],
    duration: 'Day 3-4',
    iconName: 'Layout'
  },
  {
    number: '04',
    title: 'Design',
    subtitle: 'High-End Luxury Visual Craft',
    description: 'We craft custom typography, visual assets, color schemes, and micro-interactions that communicate instant premium quality.',
    deliverables: ['High-Fidelity UI Designs', 'Interactive Prototypes', 'Brand Design Tokens'],
    duration: 'Day 5-8',
    iconName: 'Palette'
  },
  {
    number: '05',
    title: 'Develop',
    subtitle: 'Clean Code & Sub-Second Speed',
    description: 'We translate designs into ultra-clean, semantic, accessible code with Astro and Tailwind, optimizing every image and asset for instant loading.',
    deliverables: ['Semantic Astro/React Codebase', 'Fast Responsive Layouts', 'CMS Integrations'],
    duration: 'Day 8-12',
    iconName: 'Code2'
  },
  {
    number: '06',
    title: 'Testing',
    subtitle: 'Rigorous QA & Speed Audit',
    description: 'We test across 15+ screen sizes, real mobile devices, browsers, and run 100/100 Lighthouse performance audits before launch.',
    deliverables: ['Cross-Browser Audit', 'WCAG Accessibility Check', 'Lighthouse 95+ Score'],
    duration: 'Day 12-13',
    iconName: 'CheckCircle2'
  },
  {
    number: '07',
    title: 'Launch',
    subtitle: 'Zero-Downtime Global Deployment',
    description: 'We connect your custom domain, set up SSL, configure Google Analytics & Search Console, and launch on high-speed global CDN.',
    deliverables: ['Domain & SSL Setup', 'Google Analytics & Tag Setup', 'Sitemap Submission'],
    duration: 'Day 14',
    iconName: 'Rocket'
  },
  {
    number: '08',
    title: 'Support',
    subtitle: 'Growth Monitoring & Support',
    description: 'We stand by you post-launch to monitor lead conversions, handle content updates, and ensure your web platform keeps generating revenue.',
    deliverables: ['30-Day Post Launch Guarantee', 'Client Video Guide', 'Priority Maintenance'],
    duration: 'Ongoing',
    iconName: 'LifeBuoy'
  }
];

export const INDUSTRIES: IndustryCard[] = [
  {
    id: 'liquor-spirits',
    title: 'Liquor & Fine Spirits',
    subtitle: 'Wine shops, craft liquor stores & delivery portals',
    iconName: 'Wine',
    description: 'Elevated digital storefronts for wine shops, liquor boutiques, and specialty spirit dealers.',
    howWeHelp: 'We build age-verified online catalogs with product search, reservation forms for rare bottles, and local delivery checkout.',
    keyFeatures: ['Age-Gate Guard', 'Product Catalog', 'Reservation Form', 'Local Delivery Info']
  },
  {
    id: 'gym',
    title: 'Gym & Fitness',
    subtitle: 'Member acquisition platforms',
    iconName: 'Dumbbell',
    description: 'Convert local visitors into paying gym members with free trial forms and class schedules.',
    howWeHelp: 'We replace outdated PDF schedules with real-time class filters and simple trial day signup forms that go straight to your inbox.',
    keyFeatures: ['Class Schedules', 'Trial Signup Form', 'Trainer Showcases', 'Membership Pricing']
  },
  {
    id: 'restaurant',
    title: 'Restaurants',
    subtitle: 'Menu & reservation experiences',
    iconName: 'Utensils',
    description: 'Showcase signature dishes, share your menu clearly, and capture table & catering inquiries.',
    howWeHelp: 'We create visual menus with clear pricing and dietary notes, plus simple reservation and catering inquiry forms to cut down on phone-only bookings.',
    keyFeatures: ['Visual Menu', 'Table Booking Form', 'Takeout Info', 'Catering Form']
  },
  {
    id: 'cafe',
    title: 'Cafes & Bakeries',
    subtitle: 'Boutique coffee & artisanal food hubs',
    iconName: 'Coffee',
    description: 'Engage local coffee lovers, promote daily baked goods, and share your seasonal menu.',
    howWeHelp: 'We build a clean visual menu, highlight daily specials, and optimize your listing for local map searches so nearby customers can find you.',
    keyFeatures: ['Visual Menu', 'Daily Specials', 'Location & Hours', 'Local Map SEO']
  },
  {
    id: 'retail',
    title: 'Retail & E-Commerce',
    subtitle: 'Storefronts & product pages',
    iconName: 'ShoppingBag',
    description: 'Clean online stores with fast checkout, product highlights, and clear stock information.',
    howWeHelp: 'We build fast-loading product catalog pages with checkout that supports local payment options like eSewa and Khalti alongside cards.',
    keyFeatures: ['Fast Catalog', 'Local Payment Options', 'Stock Badges', 'Product Modals']
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Wellness',
    subtitle: 'Trust-building patient booking pages',
    iconName: 'HeartPulse',
    description: 'Clean, reassuring websites for clinics, wellness centers, therapists, and doctors.',
    howWeHelp: 'We build clear doctor/provider profiles, treatment information, and a simple appointment request form to reduce phone-only bookings.',
    keyFeatures: ['Appointment Form', 'Doctor Bios', 'Treatment Guides', 'Clinic Location & Hours']
  },
  {
    id: 'corporate',
    title: 'Corporate & Enterprise',
    subtitle: 'Professional B2B platforms',
    iconName: 'Building',
    description: 'Organized, credible web presence for companies handling B2B relationships and RFPs.',
    howWeHelp: 'We organize multi-department or multi-branch businesses into a clear, professional web portal with contact routing per department.',
    keyFeatures: ['Department Pages', 'RFP / Inquiry Form', 'Company Profile', 'Careers Page']
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Hotels',
    subtitle: 'Stay & booking showcases',
    iconName: 'Hotel',
    description: 'Room tours, direct guest inquiry forms, and local experience guides.',
    howWeHelp: 'We give guests a direct, clear way to check room details and submit a booking inquiry straight from your own website.',
    keyFeatures: ['Room Tours', 'Booking Inquiry Form', 'Local Guides', 'Amenities Grid']
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Property',
    subtitle: 'Property listing & agent showcases',
    iconName: 'Home',
    description: 'Clear property listings, photo galleries, and lead capture for viewings.',
    howWeHelp: 'We display property listings with photo galleries, key details, and a private viewing request form for interested buyers or renters.',
    keyFeatures: ['Photo Gallery', 'Property Details', 'Viewing Request Form', 'Agent Profiles']
  },
  {
    id: 'startups',
    title: 'Startups & New Businesses',
    subtitle: 'Clean product & service launches',
    iconName: 'Rocket',
    description: 'Focused landing pages that clearly explain what you do and how to get in touch.',
    howWeHelp: 'We help founders launch a clear, professional website quickly that explains the product or service and makes it easy to reach out.',
    keyFeatures: ['Landing Page', 'Feature Highlights', 'Contact / Inquiry Form', 'Simple Analytics']
  }
];

export const WHY_CHOOSE_US: ValueProp[] = [
  {
    id: 'premium-ui',
    title: 'Premium UI/UX Design',
    description: 'Custom luxury typography, spacious layouts, and micro-interactions crafted to communicate immediate market leadership.',
    iconName: 'Sparkles',
    badge: 'Luxury Visuals'
  },
  {
    id: 'ai-automation',
    title: 'Automation & Integrations',
    description: 'Streamline internal business operations and customer touchpoints with efficient workflows and custom API connections.',
    iconName: 'Bot',
    badge: 'Smart Automation'
  },
  {
    id: 'fast-seo',
    title: 'Fast & SEO Optimized',
    description: 'Sub-0.5s load speeds, 95+ Lighthouse score, and structured JSON-LD schema engineered to rank top on search engines.',
    iconName: 'Zap',
    badge: 'Sub-Second Speed'
  },
  {
    id: 'responsive',
    title: 'Responsive on Every Device',
    description: 'Fluid responsive design engineered to look crisp across mobile smartphones, tablets, laptops, and ultra-wide displays.',
    iconName: 'Smartphone',
    badge: 'All Devices'
  },
  {
    id: 'scalable',
    title: 'Scalable Architecture',
    description: 'Robust TypeScript codebase with modular component design built to scale seamlessly as traffic and revenue grow.',
    iconName: 'Layers',
    badge: 'Future-Proof'
  },
  {
    id: 'long-term-support',
    title: 'Long-Term Support & Care',
    description: 'Continuous platform uptime, security monitoring, and ongoing optimization so you never worry about technical debt or downtime.',
    iconName: 'ShieldCheck',
    badge: 'Dedicated Care'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Innovexa Studio transformed Gym Station from a sluggish local gym into a digital powerhouse. Our free day pass signups increased by 240% within the first 30 days!',
    author: 'Marcus Vance',
    role: 'Founder & Managing Director',
    company: 'Gym Station Fitness Co.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    projectLink: 'https://gym-station.vercel.app/',
    rating: 5,
    highlightMetric: '+240% Trial Pass Conversions'
  },
  {
    id: '2',
    quote: 'The team captured the exact artisanal aesthetic of Green Beans Cafe. Weekend table reservations are now fully automated and our online menu experience is incredible.',
    author: 'Elena Rostova',
    role: 'Head of Brand & Hospitality',
    company: 'Green Beans Cafe',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    projectLink: 'https://green-beans-cafe.vercel.app',
    rating: 5,
    highlightMetric: '3.1x Online Reservations'
  },
  {
    id: '3',
    quote: 'Innovexa Studio engineered our online spirits vault and express delivery portal for Siddhi Laxmi. Our high-end vintage wine sales and rare whiskey reservations surged by 280% within the first 60 days!',
    author: 'Rajesh K. Sharma',
    role: 'Managing Director & Sommelier',
    company: 'Siddhi Laxmi Spirits & Wine Vault',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    projectLink: 'https://siddhi-laxmi.vercel.app',
    rating: 5,
    highlightMetric: '+280% Wine & Spirits Orders'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Timeline & Delivery',
    question: 'How long does it take to design and launch my website?',
    answer: 'Most standard business, restaurant, or gym websites are completed and launched within 1 to 2 weeks. Complex multi-language corporate portals or custom web applications take approximately 2 to 3 weeks.'
  },
  {
    id: 'faq-3',
    category: 'Tech & Performance',
    question: 'Why do you build with Astro and Tailwind instead of WordPress or Wix?',
    answer: 'WordPress and drag-and-drop builders are notoriously slow, bloated with plugins, vulnerable to hacking, and rarely score above 60/100 on Google. We write clean, modern code using Astro and Tailwind CSS to guarantee sub-0.5s load times, 95+ Lighthouse scores, and ironclad security.'
  },
  {
    id: 'faq-4',
    category: 'Process & Ownership',
    question: 'Will I own my website and content completely?',
    answer: 'Yes, 100%. Upon final project launch, you receive full intellectual property ownership, source code repository access, and domain credentials. There are zero hidden lock-in fees.'
  },
  {
    id: 'faq-5',
    category: 'SEO & Growth',
    question: 'Is SEO included in the website build?',
    answer: 'Absolutely. Every website we build includes foundational technical SEO: JSON-LD local business schema, optimized open-graph metadata, semantic HTML structure, compressed next-gen images, and automatic Google Search Console indexing.'
  }
];

export const TECH_STACK = [
  { name: 'Astro 5', category: 'Framework', icon: 'AstroIcon' },
  { name: 'Tailwind CSS', category: 'Styling', icon: 'TailwindIcon' },
  { name: 'TypeScript', category: 'Language', icon: 'TsIcon' },
  { name: 'React 19', category: 'Islands', icon: 'ReactIcon' },
  { name: 'Node.js', category: 'Backend', icon: 'NodeIcon' },
  { name: 'Express', category: 'API Server', icon: 'ExpressIcon' },
  { name: 'GSAP', category: 'Motion', icon: 'GsapIcon' },
  { name: 'Vercel', category: 'Deployment', icon: 'VercelIcon' },
  { name: 'GitHub', category: 'Version Control', icon: 'GithubIcon' },
  { name: 'Custom Integrations', category: 'Workflow', icon: 'AiIcon' }
];