import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import {
  Compass,
  Search,
  Layout,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  LifeBuoy,
  Clock,
  ArrowDown
} from 'lucide-react';
import { motion } from 'motion/react';

export const ProcessTimeline: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-blue-500" />;
      case 'Search': return <Search className="w-5 h-5 text-purple-500" />;
      case 'Layout': return <Layout className="w-5 h-5 text-emerald-500" />;
      case 'Palette': return <Palette className="w-5 h-5 text-pink-500" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-500" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-yellow-500" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-red-500" />;
      case 'LifeBuoy': return <LifeBuoy className="w-5 h-5 text-indigo-500" />;
      default: return <Compass className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            How We Take Your Website From Idea to Revenue
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            A battle-tested 8-step roadmap engineered for speed, predictability, and zero stress.
          </p>
        </div>

        {/* Process Timeline Grid / Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Center Icon Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-2xl bg-white dark:bg-[#0d0d10] border-2 border-blue-500 flex items-center justify-center shadow-lg">
                    {getIcon(step.iconName)}
                  </div>

                  {/* Step Card Content */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-16 sm:pl-0 ${isEven ? 'sm:text-right sm:pr-8' : 'sm:pl-8'}`}>
                    <div className="glass-panel p-6 rounded-2xl glass-panel-hover border border-zinc-200 dark:border-zinc-800">
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : ''}`}>
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          Step {step.number}
                        </span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3 text-blue-500" /> {step.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">
                        {step.subtitle}
                      </p>

                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-end' : ''}`}>
                        {step.deliverables.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800/60"
                          >
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
