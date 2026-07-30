import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const badgeSizes = {
    sm: 'text-[9px] px-1.5 py-0.5',
    md: 'text-[10px] px-2 py-0.5',
    lg: 'text-xs px-2.5 py-1',
  };

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Modern Geometric Mark */}
      <div className={`${iconSizes[size]} rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-black flex items-center justify-center tracking-tighter shadow-md group-hover:scale-105 transition-all duration-300 relative overflow-hidden border border-zinc-800 dark:border-white/20`}>
        {/* Subtle accent glow line inside logo mark */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 opacity-80 group-hover:opacity-100 transition-opacity" />
        <span className="relative z-10 font-mono font-extrabold text-blue-400 dark:text-blue-600">I</span>
        <span className="relative z-10 font-mono font-bold text-zinc-100 dark:text-zinc-900 -ml-0.5">X</span>
      </div>

      {/* Modern Typography */}
      <div className="flex items-center gap-1.5">
        <span className={`${textSizes[size]} font-extrabold tracking-tighter text-zinc-900 dark:text-white uppercase font-sans`}>
          INNOVEXA
        </span>
        <span className={`${badgeSizes[size]} font-mono font-bold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20`}>
          STUDIO
        </span>
      </div>
    </div>
  );
};
