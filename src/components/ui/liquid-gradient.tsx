 import React from 'react';
 
 export interface Colors {
   color1: string;
   color2: string;
   color3: string;
   color4: string;
   color5: string;
   color6: string;
   color7: string;
   color8: string;
   color9: string;
   color10: string;
   color11: string;
   color12: string;
   color13: string;
   color14: string;
   color15: string;
   color16: string;
   color17: string;
 }
 
 interface LiquidProps {
   colors: Colors;
   isHovered: boolean;
 }
 
 export const Liquid: React.FC<LiquidProps> = ({ colors, isHovered }) => {
   return (
     <svg
       className="absolute inset-0 w-full h-full"
       viewBox="0 0 200 60"
       preserveAspectRatio="none"
       style={{
         filter: 'blur(0.5px)',
       }}
     >
       <defs>
         <filter id="liquid-blur">
           <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
         </filter>
         <linearGradient id="liquid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
           <stop offset="0%" stopColor={colors.color1}>
             <animate
               attributeName="stop-color"
               values={`${colors.color1};${colors.color2};${colors.color3};${colors.color1}`}
               dur="4s"
               repeatCount="indefinite"
             />
           </stop>
           <stop offset="25%" stopColor={colors.color4}>
             <animate
               attributeName="stop-color"
               values={`${colors.color4};${colors.color5};${colors.color6};${colors.color4}`}
               dur="4s"
               repeatCount="indefinite"
             />
           </stop>
           <stop offset="50%" stopColor={colors.color7}>
             <animate
               attributeName="stop-color"
               values={`${colors.color7};${colors.color8};${colors.color9};${colors.color7}`}
               dur="4s"
               repeatCount="indefinite"
             />
           </stop>
           <stop offset="75%" stopColor={colors.color10}>
             <animate
               attributeName="stop-color"
               values={`${colors.color10};${colors.color11};${colors.color12};${colors.color10}`}
               dur="4s"
               repeatCount="indefinite"
             />
           </stop>
           <stop offset="100%" stopColor={colors.color13}>
             <animate
               attributeName="stop-color"
               values={`${colors.color13};${colors.color14};${colors.color15};${colors.color13}`}
               dur="4s"
               repeatCount="indefinite"
             />
           </stop>
         </linearGradient>
       </defs>
       
       {/* Main liquid shape */}
       <path
         d="M0,30 Q25,10 50,30 T100,30 T150,30 T200,30 L200,60 L0,60 Z"
         fill="url(#liquid-gradient)"
         style={{
           transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
           transition: 'transform 0.3s ease',
         }}
       >
         <animate
           attributeName="d"
           values="
             M0,30 Q25,10 50,30 T100,30 T150,30 T200,30 L200,60 L0,60 Z;
             M0,30 Q25,50 50,30 T100,30 T150,30 T200,30 L200,60 L0,60 Z;
             M0,30 Q25,10 50,30 T100,30 T150,30 T200,30 L200,60 L0,60 Z
           "
           dur="3s"
           repeatCount="indefinite"
         />
       </path>
       
       {/* Secondary wave */}
       <path
         d="M0,35 Q50,20 100,35 T200,35 L200,60 L0,60 Z"
         fill="url(#liquid-gradient)"
         opacity="0.7"
       >
         <animate
           attributeName="d"
           values="
             M0,35 Q50,20 100,35 T200,35 L200,60 L0,60 Z;
             M0,35 Q50,50 100,35 T200,35 L200,60 L0,60 Z;
             M0,35 Q50,20 100,35 T200,35 L200,60 L0,60 Z
           "
           dur="2.5s"
           repeatCount="indefinite"
         />
       </path>
     </svg>
   );
 };