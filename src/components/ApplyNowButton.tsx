import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useApplyTransition } from '@/components/ApplyLoadingContext';
import { Colors, Liquid } from '@/components/ui/liquid-gradient';

const COLORS: Colors = {
  color1: '#ECFEFF',
  color2: '#06B6D4',
  color3: '#67E8F9',
  color4: '#CFFAFE',
  color5: '#A5F3FC',
  color6: '#22D3EE',
  color7: '#0891B2',
  color8: '#0E7490',
  color9: '#06B6D4',
  color10: '#22D3EE',
  color11: '#155E75',
  color12: '#A5F3FC',
  color13: '#164E63',
  color14: '#67E8F9',
  color15: '#CFFAFE',
  color16: '#083344',
  color17: '#0E7490',
};

const ApplyNowButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { startTransition } = useApplyTransition();

  return (
    <div className="relative group">
      <div className="relative w-[200px] h-[60px] overflow-hidden rounded-2xl">
        {/* Dark background base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

        {/* Liquid gradient component */}
        <div className="absolute inset-0 opacity-90">
          <Liquid colors={COLORS} isHovered={isHovered} />
        </div>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
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

        {/* Button content */}
        <button
          onClick={() => startTransition("/apply")}
          className="absolute inset-0 flex items-center justify-center gap-2 text-white font-semibold text-lg transition-all duration-300 hover:gap-4 z-10 w-full text-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="relative">
            Apply Now
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-cyan-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ApplyNowButton;