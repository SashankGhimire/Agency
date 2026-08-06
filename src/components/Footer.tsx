import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" theme="onDark" />

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Luxury digital agency crafting high-performing web platforms and tailored digital experiences for ambitious businesses and industry leaders.
            </p>

            <p className="text-xs text-zinc-500 font-mono">
              Built with passion for ambitious brands.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-zinc-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-zinc-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#process" className="text-zinc-400 hover:text-white transition-colors">Process</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Industries</h4>
              <ul className="space-y-2">
                <li><a href="#industries" className="text-zinc-400 hover:text-white transition-colors">Gym & Fitness</a></li>
                <li><a href="#industries" className="text-zinc-400 hover:text-white transition-colors">Restaurants</a></li>
                <li><a href="#industries" className="text-zinc-400 hover:text-white transition-colors">Cafes & Bakeries</a></li>
                <li><a href="#industries" className="text-zinc-400 hover:text-white transition-colors">Corporate Enterprise</a></li>
                <li><a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Custom Inquiry</a></li>
              </ul>
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Connect With Us</h4>
            
            <div className="flex items-center gap-3">
              <a
                href="mailto:innovexa7@gmail.com"
                className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Email Innovexa"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available for Q3 2026
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} INNOVEXA STUDIO. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
