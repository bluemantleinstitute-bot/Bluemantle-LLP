import React, { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Colors, Liquid } from '@/components/ui/liquid-gradient';

interface LiquidButtonProps {
  text: string;
  to?: string;
  href?: string;
  download?: string;
  colors: Colors;
  icon?: 'arrow' | 'download';
  className?: string; // Additional classes for positioning if needed
}

const LiquidButton: React.FC<LiquidButtonProps> = ({ 
  text, 
  to, 
  href, 
  download, 
  colors, 
  icon = 'arrow',
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const Content = () => (
    <>
      <span className="relative">
        {text}
        <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-cyan-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </span>
      {icon === 'arrow' ? (
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      ) : (
        <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
      )}
    </>
  );

  const containerClasses = `relative w-[200px] h-[60px] overflow-hidden rounded-2xl ${className}`;

  // Common inner content
  const Inner = () => (
    <>
        {/* Dark background base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

        {/* Liquid gradient component */}
        <div className="absolute inset-0 opacity-90">
          <Liquid colors={colors} isHovered={isHovered} />
        </div>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-ping top-1/4 left-1/4" />
          <div
            className="absolute w-1 h-1 bg-cyan-300/60 rounded-full animate-ping top-1/2 right-1/3"
            style={{ animationDelay: '0.5s' }}
          />
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </div>
    </>
  );

  if (to) {
    return (
      <div className="relative group">
        <div className={containerClasses}>
          <Inner />
          <Link
            to={to}
            className="absolute inset-0 flex items-center justify-center gap-2 text-white font-semibold text-lg transition-all duration-300 hover:gap-4 z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Content />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className={containerClasses}>
        <Inner />
        <a
          href={href}
          download={download}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center gap-2 text-white font-semibold text-lg transition-all duration-300 hover:gap-4 z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Content />
        </a>
      </div>
    </div>
  );
};

export default LiquidButton;
