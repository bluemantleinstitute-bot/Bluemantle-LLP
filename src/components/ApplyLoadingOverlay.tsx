import React from 'react';
import { motion } from 'framer-motion';

const ApplyLoadingOverlay: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#050510] flex flex-col items-center justify-center overflow-hidden"
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

            {/* Background Video */}
            <div className="absolute inset-x-0 top-0 bottom-0 opacity-30 pointer-events-none">
                <video
                    src="/0216.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/40 to-[#050510]" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Animated Branding Wrapper */}
                <div className="p-1 w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-transparent animate-spin-slow mb-4">
                    <div className="w-full h-full rounded-full bg-[#050510] flex items-center justify-center backdrop-blur-3xl">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 animate-pulse flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#06b6d4]" />
                        </div>
                    </div>
                </div>

                {/* Text and Progress Bar */}
                <div className="flex flex-col items-center gap-6">
                    <div className="progress-div flex items-center justify-center">
                        <h2 id="h2-loading">Initializing Portal</h2>
                    </div>
                </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-cyan-500/20 rounded-tl-3xl" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-cyan-500/20 rounded-br-3xl" />
        </motion.div>
    );
};

export default ApplyLoadingOverlay;
