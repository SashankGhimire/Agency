import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/agencyData';
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 relative bg-zinc-900/5 dark:bg-[#040406] border-y border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Client Success
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Trusted by Ambitious Brands
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Here is what business leaders say after switching to an Innovexa custom web platform.
          </p>
        </div>

        {/* Auto-sliding Glass Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl relative backdrop-blur-xl"
            >
              <Quote className="w-12 h-12 text-blue-500/20 absolute top-6 right-8 pointer-events-none" />

              <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white leading-relaxed mb-8">
                "{current.quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-md"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                      {current.author}
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      {current.role} • <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{current.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-xl text-center">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 block font-medium">Verified Impact</span>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{current.highlightMetric}</span>
                  </div>

                  {current.projectLink && (
                    <a
                      href={current.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-blue-600 hover:text-white transition-colors text-zinc-700 dark:text-zinc-300"
                      title="View live website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls & Indicators */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-zinc-300 dark:bg-zinc-800'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
