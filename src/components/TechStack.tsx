import React from 'react';
import { TECH_STACK } from '../data/agencyData';
import { Cpu, ShieldCheck, Code, Layers } from 'lucide-react';

export const TechStack: React.FC = () => {
  return (
    <section className="py-16 relative border-t border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-[#060608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center justify-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-blue-500" />
          Powered By Cutting-Edge Tech & Modern Standards
        </p>

        {/* Minimalist Tech Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-medium text-zinc-700 dark:text-zinc-300 shadow-sm flex items-center gap-2 hover:border-blue-500/50 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="font-semibold text-zinc-900 dark:text-white">{tech.name}</span>
              <span className="text-[10px] text-zinc-400 font-mono">({tech.category})</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
