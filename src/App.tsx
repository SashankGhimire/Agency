import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Industries } from './components/Industries';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { TechStack } from './components/TechStack';
import { Footer } from './components/Footer';

export default function App() {
  const [prefilledContact, setPrefilledContact] = useState<{
    businessType?: string;
    budget?: string;
    timeline?: string;
    details?: string;
    serviceName?: string;
  } | null>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    } catch (e) {
      console.warn('Lenis smooth scroll failed to initialize:', e);
    }

    return () => {
      lenis?.destroy();
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setPrefilledContact({ serviceName });
    scrollToContact();
  };

  const handleSelectIndustry = (industryName: string) => {
    setPrefilledContact({ businessType: industryName });
    scrollToContact();
  };

  const handleProjectInquire = (projectName: string) => {
    setPrefilledContact({ details: `Inquiry regarding project case study: ${projectName}` });
    scrollToContact();
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#050505] text-zinc-900 dark:text-white selection:bg-blue-500 selection:text-white transition-colors duration-200">
        {/* Navbar */}
        <Navbar onStartProject={scrollToContact} />

        {/* Hero Section */}
        <Hero onStartProject={scrollToContact} onViewWork={scrollToProjects} />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Featured Projects Section */}
        <FeaturedProjects onInquire={handleProjectInquire} />

        {/* Our Process Section */}
        <ProcessTimeline />

        {/* Industries Section */}
        <Industries onSelectIndustry={handleSelectIndustry} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Form Section */}
        <ContactForm prefilledData={prefilledContact} />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
