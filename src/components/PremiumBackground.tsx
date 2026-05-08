import { motion } from "framer-motion";

export const PremiumBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* 1. Base Dark Background */}
            <div className="absolute inset-0 bg-navy z-0" />

            {/* 2. Cyberpunk Grid Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-[0.25]"
                style={{
                    backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px),
                            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                    maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
                }}
            />

            {/* 3. Slow Moving Aurora Gradients (Cyan & Purple) */}
            <motion.div
                className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/30 blur-[120px] mix-blend-screen"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[120px] mix-blend-screen"
                animate={{
                    x: [0, -50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* 4. Central Spotlight Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent blur-3xl" />
        </div>
    );
};
