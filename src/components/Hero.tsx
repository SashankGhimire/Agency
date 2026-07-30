import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, Sparkles, ShieldCheck, Zap, Award } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden hero-gradient"
    >
      {/* Background Subtle Floating Geometric Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Fine grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-[0.12em] uppercase text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span>Available for Q3 2026</span>
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <span className="flex items-center gap-1 font-semibold text-zinc-600 dark:text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Premium Digital Agency
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-white leading-[1.05] max-w-4xl"
        >
          Premium Websites. <br className="hidden sm:inline" />
          Smart Digital Experiences. <br className="hidden sm:inline" />
          Built for <span className="text-blue-500 dark:text-blue-500">Business Growth.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed font-light"
        >
          We create premium websites and digital experiences that help ambitious businesses capture more customers and scale.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group"
            id="hero-start-project-btn"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>

          <button
            onClick={onViewWork}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-zinc-300 dark:border-white/20 hover:border-zinc-500 dark:hover:border-white/50 text-zinc-800 dark:text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer"
            id="hero-view-work-btn"
          >
            View Our Work
          </button>
        </motion.div>

        {/* Floating Trust Metrics Badges with Clean Minimal Dividers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 w-full max-w-3xl border-t border-zinc-200/80 dark:border-white/10 pt-10"
        >
          <div className="text-center px-2">
            <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">99.8%</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold mt-1">Lighthouse Speed</p>
          </div>

          <div className="hidden sm:block border-l border-zinc-200 dark:border-white/10 h-10" />

          <div className="text-center px-2">
            <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">3.2x</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold mt-1">Avg Conversion Growth</p>
          </div>

          <div className="hidden sm:block border-l border-zinc-200 dark:border-white/10 h-10" />

          <div className="text-center px-2">
            <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">120+</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold mt-1">Projects Delivered</p>
          </div>

          <div className="hidden sm:block border-l border-zinc-200 dark:border-white/10 h-10" />

          <div className="text-center px-2">
            <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">100%</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold mt-1">On-Time Delivery</p>
          </div>
        </motion.div>
      </div>

      {/* Small Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 text-zinc-400 dark:text-zinc-500 hover:text-blue-500 transition-colors duration-200 flex flex-col items-center gap-1.5 text-xs font-medium cursor-pointer"
        aria-label="Scroll to about section"
      >
        <span>Explore Innovexa</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
};
