import React from 'react';
import { motion } from 'motion/react';
import { Target, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Strategy & Conversion First',
      description: 'We map visitor decision psychology and conversion pathways before writing code, ensuring your website turns clicks into inquiries.',
      icon: Target
    },
    {
      title: 'Premium UI/UX Craftsmanship',
      description: 'Luxury typography, spacious layouts, and fluid responsive design that position your brand as an undisputed industry leader.',
      icon: Sparkles
    },
    {
      title: 'Smart Digital Systems',
      description: 'We build tailored web experiences with automation, booking flows, and seamless integrations that save time and improve conversions.',
      icon: Cpu
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#050505] border-y border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            About Innovexa Studio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tighter leading-tight">
            We create premium websites and digital systems that help businesses grow, convert, and scale.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            Innovexa Studio is a modern digital agency blending high-end web design with practical engineering. We focus on measurable business outcomes, not just aesthetics.
          </p>
        </div>

        {/* Strategic Pillars - Clean Cards with Generous Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-zinc-50/70 dark:bg-[#0a0a0c] border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standard Requirement</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
