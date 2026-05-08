import { motion } from "framer-motion";

export const Matte3DStage = () => {
    // 20 layers for 50px of physical depth: -25px to +25px (perfectly symmetric)
    const layers = Array.from({ length: 20 }, (_, i) => -25 + (i * (60 / 23)));

    return (
        <div
            className="relative flex justify-center items-center pointer-events-none"
            style={{
                width: 'clamp(220px, 45vmin, 620px)',
                height: 'clamp(220px, 45vmin, 620px)',
            }}
        >
            {/* ── SPOTLIGHT RAYS ── */}
            <div className="absolute top-[-35%] left-[5%] w-[38%] h-[120%]
                bg-gradient-to-b from-cyan-300/50 via-cyan-400/15 to-transparent
                blur-[18px] opacity-70 rotate-[-18deg] origin-top" />
            <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[42%] h-[130%]
                bg-gradient-to-b from-white/40 via-cyan-300/20 to-transparent
                blur-[14px] opacity-80" />
            <div className="absolute top-[-35%] right-[5%] w-[38%] h-[120%]
                bg-gradient-to-b from-cyan-300/50 via-cyan-400/15 to-transparent
                blur-[18px] opacity-70 rotate-[18deg] origin-top" />

            {/* ── COIN BOUNCE WRAPPER ── */}
            <motion.div
                animate={{ y: ['0%', '-7%', '0%'] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative z-10 flex items-center justify-center"
                style={{
                    width: '80%',
                    height: '80%',
                }}
            >
                {/* ── 3D ROTATION CONTAINER ── */}
                <div
                    className="w-full h-full relative"
                    style={{
                        transform: 'perspective(600px) rotateY(-2deg)', // More aggressive perspective for deeper look
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {/* ── STACKED LAYERS FOR MASSIVE THICKNESS ── */}
                    <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                        {layers.map((z, i) => {
                            const isFront = i === layers.length - 1;
                            const isBack = i === 0;

                            return (
                                <div
                                    key={i}
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        transform: `translateZ(${z}px)`,
                                        // Ultra-bright silver/cyan edge for visibility
                                        background: isFront
                                            ? 'conic-gradient(from 0deg, #0ff, #006aff, #00cfff, #0ff, #006aff, #00cfff, #0ff)'
                                            : isBack
                                                ? '#050d1a'
                                                : i % 3 === 0
                                                    ? 'linear-gradient(to bottom, #083344, #22d3ee, #083344)' // Brighter streaks
                                                    : i % 3 === 1
                                                        ? '#0e7490'
                                                        : '#a5f3fc', // Silver highlight
                                        padding: isFront ? '5px' : '0px',
                                        boxShadow: isFront ? `
                                            0 0 0 2px rgba(0,210,255,0.5),
                                            0 0 100px 20px rgba(0,210,255,0.25)
                                        ` : 'none'
                                    }}
                                >
                                    {isFront && (
                                        <div
                                            className="w-full h-full rounded-full overflow-hidden relative flex items-center justify-center"
                                            style={{
                                                background: 'radial-gradient(circle at 50% 50%, #3263a7ff, #050d1a 70%)',
                                                boxShadow: 'inset 0 4px 12px rgba(255, 255, 255, 0.3)'
                                            }}
                                        >
                                            <img
                                                src="/BLUEMANTLE_A1-01.PNG"
                                                alt="Bluemantle Logo"
                                                className="w-full h-full object-contain relative z-10 scale-[1.25] -translate-x-[1.95%] -translate-y-[0.5%]"
                                            />
                                            {/* Glare Sweep */}
                                            <motion.div
                                                initial={{ x: '-160%', skewX: -35 }}
                                                animate={{ x: '180%' }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    repeatDelay: 0.2,
                                                    ease: "linear"
                                                }}
                                                className="absolute inset-0 z-20 pointer-events-none"
                                                style={{
                                                    background: 'linear-gradient(105deg, transparent 50%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                                                    width: '60%',
                                                    height: '100%',
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* ── REALISTIC REFLECTION (GLASS STYLE) ── */}
                    <div
                        className="hidden md:block absolute top-[98%] left-1/2 -translate-x-1/2 w-full opacity-[0.9] blur-[1.2px] pointer-events-none"
                        style={{
                            transform: 'translateX(-50%) scaleY(-0.9)',
                            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), transparent 100%)',
                            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), transparent 80%)'
                        }}
                    >
                        <img
                            src="/BLUEMANTLE_A1-01.PNG"
                            alt="Reflection"
                            className="w-full h-auto object-contain scale-110"
                        />
                    </div>

                    {/* ── ACCENT RINGS ── */}
                    <motion.div
                        className="absolute inset-[-15px] rounded-full border border-cyan-400/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{ transform: 'translateZ(0px)' }}
                    />
                </div>

                {/* ── OUTER GLOW ── */}
                <div className="absolute inset-[-40px] rounded-full -z-10"
                    style={{
                        transform: 'translateZ(-50px)',
                        background: 'radial-gradient(circle, rgba(0,210,255,0.2) 0%, transparent 70%)',
                        filter: 'blur(35px)',
                    }}
                />
            </motion.div>

            {/* ── SHADOW ── */}
            <motion.div
                animate={{ scaleX: [1, 0.9, 1], opacity: [0.45, 0.25, 0.45] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[2%] w-[70%] h-[6%] rounded-[50%]"
                style={{
                    background: 'radial-gradient(ellipse, rgba(0,180,255,0.3) 0%, transparent 70%)',
                    filter: 'blur(15px)',
                }}
            />
        </div>
    );
};
