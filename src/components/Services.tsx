import React, { useState } from 'react';
import { SERVICES } from '../data/agencyData';
import { Service } from '../types';
import {
  Building2,
  Cpu,
  Bot,
  ShieldCheck,
  Zap,
  Sparkles,
  RefreshCw,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkle
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-blue-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-500" />;
      case 'Bot': return <Bot className="w-5 h-5 text-cyan-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-emerald-500" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-teal-500" />;
      default: return <Building2 className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-zinc-50/40 dark:bg-[#060608] border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Our Core Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tighter">
            Premium Websites. Smart Digital Experiences.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            We build high-performing digital experiences and custom web systems that help ambitious businesses stand out and scale revenue.
          </p>
        </div>

        {/* Services Cards Grid - Clean Minimalism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col justify-between cursor-pointer relative group transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 ${
                service.popular ? 'ring-1 ring-blue-500/30' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-blue-600/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-500/20 flex items-center gap-1">
                  <Sparkle className="w-3 h-3" /> Core Solution
                </div>
              )}

              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                <span className="flex items-center gap-1 text-zinc-400 font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5" /> {service.timeline || '1-2 Weeks'}
                </span>
                <span className="flex items-center gap-1">
                  Explore Solution <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View for Service Details */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-[#0f0f12] border border-zinc-200 dark:border-zinc-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 cursor-pointer text-xs"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{selectedService.title}</h3>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{selectedService.idealFor}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 font-light">
                {selectedService.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Key Outcomes Included</h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-900/60 p-3 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={() => {
                    const svcName = selectedService.title;
                    setSelectedService(null);
                    onSelectService(svcName);
                  }}
                  className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer"
                >
                  <span>Inquire About {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
