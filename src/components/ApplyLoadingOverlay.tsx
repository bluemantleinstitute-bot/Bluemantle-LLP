import React from 'react';
import { motion } from 'framer-motion';
import DotMatrixLogo from './DotMatrixLogo';

const ApplyLoadingOverlay: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
            <style>{`
        #h2-loading {
          color: white;
          mix-blend-mode: difference;
          text-align: center;
          margin: 0;
          font-size: 14px;
          line-height: 30px;
          font-family: Arial, sans-serif;
          text-shadow: 0 0 5px rgba(6, 182, 212, 0.5);
          padding: 0;
          letter-spacing: 4px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .progress-div {
          position: relative;
          max-width: 280px;
          width: 100%;
          height: 40px;
          background: linear-gradient(to right, #06B6D4, #000);
          background-size: 200% 100%;
          border-radius: 12px;
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.3);
          -webkit-box-reflect: below 2px linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.2));
          animation: gradientAnimation 3s linear infinite reverse;
        }

        @keyframes gradientAnimation {
          0% { background-position: 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

            {/* Dot Matrix Logo Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <DotMatrixLogo />
            </div>

            {/* Dark gradient vignette — fades edges to black */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #000 80%)' }}
            />

            {/* Progress Bar — sits above canvas */}
            <div className="relative z-10 flex flex-col items-center gap-6 mt-auto mb-16">
                <div className="progress-div flex items-center justify-center">
                    <h2 id="h2-loading">Initializing Portal</h2>
                </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-cyan-500/20 rounded-tl-3xl" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-cyan-500/20 rounded-br-3xl" />
        </motion.div>
    );
};

export default ApplyLoadingOverlay;
