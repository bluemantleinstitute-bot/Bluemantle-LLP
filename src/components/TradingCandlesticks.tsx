import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TradingCandlesticks = () => {
  const [candlesticks, setCandlesticks] = useState<Array<{ id: number; height: number; color: string; delay: number }>>([]);

  useEffect(() => {
    const sticks = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      height: Math.random() * 150 + 100,
      color: Math.random() > 0.5 ? "cyan" : "primary",
      delay: i * 0.2,
    }));
    setCandlesticks(sticks);
  }, []);

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-96 pointer-events-none opacity-80 hidden lg:flex items-end justify-center gap-4 px-8">
      {candlesticks.map((stick) => (
        <motion.div
          key={stick.id}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: [0.7, 1, 0.9, 1.1, 0.85],
            opacity: [0.9, 1, 0.95, 1, 0.9] // Solid, high contrast opacity
          }}
          transition={{
            duration: 3,
            delay: stick.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="relative w-12 origin-bottom"
          style={{ height: `${stick.height}px` }}
        >
          {/* Candlestick body */}
          <div
            className={`absolute inset-0 rounded-[10px] ${ // Refined squircle look from image
              stick.color === "cyan"
                ? "bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                : "bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              }`}
          />

          {/* Top wick */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-8 -top-8 ${stick.color === "cyan" ? "bg-cyan-400" : "bg-blue-400"
              }`}
          />

          {/* Bottom wick */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-6 -bottom-6 ${stick.color === "cyan" ? "bg-cyan-400" : "bg-blue-400"
              }`}
          />

          {/* Glow effect */}
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute inset-0 rounded-[10px] blur-xl ${stick.color === "cyan" ? "bg-cyan-500" : "bg-blue-600"
              }`}
          />
        </motion.div>
      ))}
    </div>
  );
};
