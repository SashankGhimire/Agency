import React, { useState } from 'react';
import { INDUSTRIES } from '../data/agencyData';
import { IndustryCard } from '../types';
import {
  Wine,
  Dumbbell,
  Utensils,
  Coffee,
  ShoppingBag,
  HeartPulse,
  Building,
  Hotel,
  Home,
  Rocket,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface IndustriesProps {
  onSelectIndustry: (industryName: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectIndustry }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wine': return <Wine className="w-6 h-6 text-purple-500" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-red-500" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-500" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-emerald-500" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-purple-500" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-pink-500" />;
      case 'Building': return <Building className="w-6 h-6 text-indigo-500" />;
      case 'Hotel': return <Hotel className="w-6 h-6 text-cyan-500" />;
      case 'Home': return <Home className="w-6 h-6 text-blue-500" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-yellow-500" />;
      default: return <Building className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="industries" className="py-24 relative bg-zinc-900/5 dark:bg-[#050507] border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Industries We Work With
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Specialized Web Strategy for Your Market
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Hover over any industry to see how Innovexa transforms digital foot traffic into loyal paying customers.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <motion.div
              key={ind.id}
              onMouseEnter={() => setHoveredId(ind.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectIndustry(ind.title)}
              className="glass-panel p-6 sm:p-8 rounded-2xl glass-panel-hover flex flex-col justify-between cursor-pointer border border-zinc-200 dark:border-zinc-800 transition-all duration-300 relative group overflow-hidden"
              id={`industry-card-${ind.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {getIcon(ind.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                    {ind.metrics}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4">
                  {ind.subtitle}
                </p>

                {/* Animated Revealed Content on Hover / Focus */}
                <div className="space-y-3 transition-all duration-300">
                  <div className="bg-blue-500/5 dark:bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                      How Innovexa Transforms This Business:
                    </span>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                      {ind.howWeHelp}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 pt-2">
                    {ind.keyFeatures.map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-zinc-600 dark:text-zinc-400 flex items-center gap-1 font-medium"
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-500" /> {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                <span>Build {ind.title} Website</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
