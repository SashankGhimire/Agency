import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/projects';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface FeaturedProjectsProps {
  onInquire: (projectName: string) => void;
}

// Only the focus card + ONE card peeking behind it are visible at a time.
// Clicking the peeking card advances the stack, revealing the next one behind it.
const STACK_VISIBLE = 2;
const SCALE_STEP = 0.07;
const OFFSET_X = 92; // px, how far the peeking card sticks out to the right

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onInquire }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = FEATURED_PROJECTS.length;

  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  return (
    <section id="projects" className="py-24 relative bg-zinc-900/5 dark:bg-[#030304] border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Featured Case Studies
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Real Live Client Projects. Real Results.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              Explore our recent work. Each platform was engineered from scratch to dominate its local market, load in under half a second, and convert visitors into paying clients.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800">
            <Globe className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span>3 Live Deployed Client Platforms</span>
          </div>
        </div>

        {/* Featured Projects Card Stack */}
        <div className="relative w-full pt-4 pr-24 sm:pr-28 md:pr-32">
          <div className="relative h-[460px] sm:h-[540px] md:h-[600px]">
            {FEATURED_PROJECTS.map((project, idx) => {
              const relative = (idx - activeIndex + total) % total;
              if (relative >= STACK_VISIBLE) return null;
              const isFront = relative === 0;

              return (
                <motion.div
                  key={project.id}
                  className="absolute inset-0"
                  style={{ zIndex: STACK_VISIBLE - relative }}
                  animate={{
                    scale: 1 - relative * SCALE_STEP,
                    x: relative * OFFSET_X,
                    opacity: 1 - relative * 0.2,
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                >
                  <div
                    onClick={() => (isFront ? setActiveProject(project) : goNext())}
                    aria-label={isFront ? undefined : `Show ${project.title} next`}
                    className="h-full flex flex-col glass-panel rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl cursor-pointer"
                    id={`project-card-${project.id}`}
                  >
                    {/* Large Preview Image */}
                    <div className="relative h-56 sm:h-64 md:h-72 flex-shrink-0 overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                      {/* Top Industry Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                          {project.industry}
                        </span>
                      </div>

                      {/* Top Right Live Link Button */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-zinc-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md backdrop-blur-sm"
                        title="Visit live deployed website"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      {/* Bottom Image Metric Tag */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-xs font-mono bg-blue-600/90 px-2.5 py-1 rounded-md font-bold tracking-wide">
                          {project.metrics[0].label}: {project.metrics[0].value}
                        </span>
                        <span className="text-xs font-mono text-zinc-300">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="p-6 sm:p-8 flex-1 overflow-hidden">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                          {project.title}
                        </h3>
                        <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 flex-shrink-0">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>

                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                        {project.overview}
                      </p>

                      <div className="flex items-center justify-between border-t border-zinc-200/50 dark:border-zinc-800/50 mt-4 pt-4 text-xs">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                              {t}
                            </span>
                          ))}
                        </div>

                        <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1">
                          Case Study →
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Prev / Next arrows, sat on the left/right of the whole stack (clear of the peek) */}
          <button
            onClick={goPrev}
            aria-label="Previous project"
            className="absolute left-0 top-[calc(50%+16px)] -translate-y-1/2 -translate-x-1/2 z-40 w-11 h-11 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next project"
            className="absolute right-0 top-[calc(50%+16px)] -translate-y-1/2 translate-x-1/2 z-40 w-11 h-11 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots, below the stack */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {FEATURED_PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-6 bg-blue-600' : 'w-2 bg-zinc-300 dark:bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Fullscreen Case Study Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onInquire={onInquire}
        />

      </div>
    </section>
  );
};