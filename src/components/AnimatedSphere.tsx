import { motion } from "framer-motion";

interface AnimatedSphereProps {
  size?: number;
  color?: "purple" | "cyan" | "blue" | "gold";
  delay?: number;
}

export const AnimatedSphere = ({ size = 200, color = "purple", delay = 0 }: AnimatedSphereProps) => {
  const colorClasses = {
    purple: "bg-gradient-purple glow-purple",
    cyan: "bg-gradient-cyan glow-cyan",
    blue: "bg-primary glow-blue",
    gold: "bg-accent glow-gold",
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
    >
      <motion.div
        className={`rounded-full ${colorClasses[color]}`}
        style={{
          width: size,
          height: size,
        }}
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Orbit rings */}
      <motion.div
        className="absolute inset-0 border-2 border-purple/30 rounded-full"
        style={{
          width: size + 40,
          height: size + 40,
          top: -20,
          left: -20,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 border-2 border-secondary/30 rounded-full"
        style={{
          width: size + 80,
          height: size + 80,
          top: -40,
          left: -40,
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};
