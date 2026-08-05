import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '../types';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Monitor,
  Tablet,
  Smartphone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Building,
  Maximize2
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'case-study' | 'live-preview'>('case-study');

  // Lock background page scroll while the modal is open. The modal itself is
  // tagged with data-lenis-prevent (see below) so Lenis ignores wheel events
  // that originate inside it and native scrolling handles the modal's own
  // content, while the page behind stays frozen via this overflow lock.
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [project]);

  if (!project) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div
        data-lenis-prevent
        className="bg-white dark:bg-[#0a0a0c] border border-zinc-200 dark:border-zinc-800 rounded-3xl max-w-5xl w-full my-auto overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]"
      >
        
        {/* Sticky Header Bar */}
        <div className="px-6 py-4 bg-white/90 dark:bg-[#0a0a0c]/90 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between backdrop-blur-md z-20 sticky top-0">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                {project.title}
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-medium">
                  {project.industry}
                </span>
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:block">{project.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab(activeTab === 'case-study' ? 'live-preview' : 'case-study')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors hidden sm:flex items-center gap-1.5 cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-blue-500" />
              {activeTab === 'case-study' ? 'Interactive Live Frame' : 'View Case Study'}
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Close modal"
              id="close-project-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-10 flex-1 min-h-0">
          
          {/* Main Hero Media Banner / Live Frame */}
          {activeTab === 'case-study' ? (
            <div className="relative rounded-2xl overflow-hidden group shadow-xl border border-zinc-200 dark:border-zinc-800">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-[320px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-500/30">
                    Client Case Study
                  </span>
                  <span className="text-xs text-zinc-300 font-mono">Launched {project.year}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {project.title} — {project.tagline}
                </h2>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Responsive Device Toggle Bar */}
              <div className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-900 p-2 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setDeviceView('desktop')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      deviceView === 'desktop'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" /> Desktop
                  </button>
                  <button
                    onClick={() => setDeviceView('tablet')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      deviceView === 'tablet'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" /> Tablet
                  </button>
                  <button
                    onClick={() => setDeviceView('mobile')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      deviceView === 'mobile'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> Mobile
                  </button>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  Open in New Tab <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Iframe Live Frame Container */}
              <div className="flex justify-center bg-zinc-900 p-4 rounded-2xl border border-zinc-800 min-h-[500px]">
                <div
                  className={`transition-all duration-300 overflow-hidden bg-white rounded-xl shadow-2xl border border-zinc-700 ${
                    deviceView === 'desktop'
                      ? 'w-full h-[600px]'
                      : deviceView === 'tablet'
                      ? 'w-[768px] h-[600px]'
                      : 'w-[375px] h-[600px]'
                  }`}
                >
                  <iframe
                    src={project.liveUrl}
                    title={`${project.title} Live Preview`}
                    className="w-full h-full border-none"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-2xl text-center border border-blue-500/10 dark:border-blue-500/20 bg-blue-500/5"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 block">
                  {m.value}
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium mt-1 block">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Overview & Core Challenge / Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> The Business Challenge
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Our Engineering Solution
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features Implemented */}
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
              Key Features Implemented
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 text-sm text-zinc-700 dark:text-zinc-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Showcase */}
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
              Interface Gallery & Visual Assets
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm group relative h-36"
                >
                  <img
                    src={img}
                    alt={`${project.title} gallery screenshot ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Badge List */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-xs font-bold uppercase text-zinc-400 block mb-2">Technologies Used</span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs font-medium border border-zinc-200 dark:border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub Code
                </a>
              )}

              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                <span>Build a Site Like This</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
};
