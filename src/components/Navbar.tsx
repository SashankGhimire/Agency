import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          id="navbar-logo"
        >
          <Logo size="md" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
              id={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors duration-200 cursor-pointer overflow-hidden"
            aria-label="Toggle theme"
            id="theme-toggle-btn"
          >
            <AnimatePresence mode="wait" initial={false}>
              {resolvedTheme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Sun className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Moon className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Single CTA Button */}
          <button
            onClick={onStartProject}
            className="group relative px-6 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-gray-200 transition-all duration-300 shadow-sm flex items-center gap-2 cursor-pointer"
            id="navbar-cta-btn"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 overflow-hidden"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {resolvedTheme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Sun className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Moon className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#09090b] border-b border-zinc-200 dark:border-zinc-800 px-4 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProject();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
