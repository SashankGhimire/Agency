import React, { useState } from 'react';
import { FAQS } from '../data/agencyData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Everything you need to know about working with Innovexa Studio.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="glass-panel rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-500/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-3">
                    <span className="text-xs font-mono font-normal text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded">
                      {faq.category}
                    </span>
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-blue-600 text-white dark:bg-blue-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-200/50 dark:border-zinc-800/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Question CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <MessageSquare className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-zinc-900 dark:text-white">Have a specific custom question?</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Speak directly with our senior web architects.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md whitespace-nowrap"
          >
            Ask Us Directly →
          </a>
        </div>

      </div>
    </section>
  );
};
