import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/projects';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, ExternalLink, Sparkles, Monitor, Smartphone, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface FeaturedProjectsProps {
  onInquire: (projectName: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onInquire }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => setActiveProject(project)}
              className="glass-panel rounded-3xl overflow-hidden glass-panel-hover group cursor-pointer flex flex-col justify-between border border-zinc-200 dark:border-zinc-800 shadow-lg relative"
              id={`project-card-${project.id}`}
            >
              <div>
                {/* Large Preview Image with Zoom */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

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

                {/* Card Content Body */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>
                </div>
              </div>

              {/* Card Footer Tech Pills & Interactive Trigger */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-zinc-200/50 dark:border-zinc-800/50 mt-2 text-xs">
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline flex items-center gap-1 mt-3">
                  Case Study →
                </span>
              </div>
            </motion.div>
          ))}
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
