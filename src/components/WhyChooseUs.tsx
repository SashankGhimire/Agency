import React from 'react';
import { WHY_CHOOSE_US } from '../data/agencyData';
import {
  Zap,
  Smartphone,
  Sparkles,
  Bot,
  Layers,
  ShieldCheck,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-blue-500" />;
      case 'Bot': return <Bot className="w-5 h-5 text-indigo-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-cyan-500" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-purple-500" />;
      default: return <Check className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Positioning */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              <span>Why Innovexa</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tighter leading-tight">
              Built Different. <br />
              Engineered to Dominate.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              We merge luxury digital craftsmanship with intelligent AI engineering. No bloated page builders, no slow plugins, and no generic templates—just sub-second performance, elegant design, and automated business workflows.
            </p>

            <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-2 gap-6">
              <div>
                <span className="text-2xl font-bold text-zinc-900 dark:text-white block font-mono">100/100</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Core Web Vitals</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-zinc-900 dark:text-white block font-mono">&lt; 4 Hours</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Strategy Response</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 6 Minimal Value Points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={item.id}
                className="space-y-3 p-2 group hover:translate-x-1 transition-transform duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center flex-shrink-0">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light pl-12">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
