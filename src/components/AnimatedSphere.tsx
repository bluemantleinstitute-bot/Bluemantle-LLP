import { motion } from "framer-motion";

interface AnimatedSphereProps {
  size?: number;
  color?: "purple" | "cyan" | "blue" | "gold";
  delay?: number;
}

export const AnimatedSphere = ({ size = 200, color = "purple", delay = 0 }: AnimatedSphereProps) => {
  const scale = size / 200;

  const candlesticks = [
    { color: "green", duration: 2.1, baseHeight: 80 },
    { color: "red", duration: 2.7, baseHeight: 100 },
    { color: "green", duration: 1.9, baseHeight: 70 },
    { color: "red", duration: 2.5, baseHeight: 90 },
    { color: "green", duration: 2.2, baseHeight: 85 },
    { color: "red", duration: 2.8, baseHeight: 75 },
    { color: "green", duration: 2.0, baseHeight: 95 },
    { color: "red", duration: 2.6, baseHeight: 80 },
  ];

  return (
    <div
      className="relative flex items-end justify-center gap-1"
      style={{
        width: size,
        height: size,
      }}
    >
      {candlesticks.map((candle, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          style={{ originY: 1 }}
        >
          {/* Top wick */}
          <motion.div
            className={`${candle.color === "green" ? "bg-emerald-400" : "bg-rose-400"}`}
            style={{
              width: 2 * scale,
              height: 12 * scale,
            }}
            animate={{
              height: [12 * scale, 20 * scale, 12 * scale, 18 * scale, 12 * scale],
              opacity: [0.7, 1, 0.8, 1, 0.7],
            }}
            transition={{
              duration: candle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + index * 0.1,
            }}
          />

          {/* Candle body with wave animation */}
          <motion.div
            className={`rounded-sm relative overflow-hidden ${candle.color === "green"
                ? "bg-gradient-to-t from-emerald-600 via-emerald-500 to-emerald-400"
                : "bg-gradient-to-t from-rose-600 via-rose-500 to-rose-400"
              }`}
            style={{
              width: 10 * scale,
            }}
            animate={{
              height: [
                candle.baseHeight * 0.6 * scale,
                candle.baseHeight * 1.6 * scale,
                candle.baseHeight * 0.9 * scale,
                candle.baseHeight * 1.8 * scale,
                candle.baseHeight * 0.6 * scale,
              ],
            }}
            transition={{
              duration: candle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + index * 0.1,
            }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: candle.duration * 0.8,
                repeat: Infinity,
                ease: "linear",
                delay: delay + index * 0.15,
              }}
            />

            {/* Glow effect */}
            <motion.div
              className={`absolute inset-0 blur-sm ${candle.color === "green" ? "bg-emerald-400/50" : "bg-rose-400/50"
                }`}
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: candle.duration * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Bottom wick */}
          <motion.div
            className={`${candle.color === "green" ? "bg-emerald-400" : "bg-rose-400"}`}
            style={{
              width: 2 * scale,
              height: 8 * scale,
            }}
            animate={{
              height: [8 * scale, 14 * scale, 8 * scale, 12 * scale, 8 * scale],
              opacity: [0.7, 1, 0.8, 1, 0.7],
            }}
            transition={{
              duration: candle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + index * 0.1,
            }}
          />
        </motion.div>
      ))}

      {/* Ambient glow behind candlesticks */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-t from-emerald-500/30 via-transparent to-rose-500/30" />
    </div>
  );
};
