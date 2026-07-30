export type ThemeMode = 'light' | 'dark' | 'system';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  year: string;
  liveUrl: string;
  githubUrl?: string;
  coverImage: string;
  heroImage: string;
  galleryImages: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  deliverables: string[];
  responsivePreviews: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  benefits: string[];
  idealFor: string;
  startingPrice?: string;
  timeline?: string;
  popular?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  iconName: string;
}

export interface IndustryCard {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  howWeHelp: string;
  metrics: string;
  keyFeatures: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  projectLink?: string;
  rating: number;
  highlightMetric: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  budget: string;
  timeline: string;
  services: string[];
  details: string;
}

export interface EstimatorState {
  businessType: string;
  pagesCount: number;
  neededFeatures: string[];
  timelineSpeed: 'standard' | 'fast' | 'express';
  maintenanceNeeded: boolean;
}
