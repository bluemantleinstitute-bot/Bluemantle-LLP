import { motion } from "framer-motion";

export const Floating3DElements = () => {
  const elements = [
    { size: 80, delay: 0, x: "10%", y: "20%", color: "purple" },
    { size: 120, delay: 0.5, x: "85%", y: "15%", color: "cyan" },
    { size: 60, delay: 1, x: "20%", y: "70%", color: "purple-light" },
    { size: 100, delay: 1.5, x: "75%", y: "75%", color: "primary" },
    { size: 70, delay: 2, x: "50%", y: "40%", color: "purple-dark" },
    { size: 90, delay: 2.5, x: "30%", y: "85%", color: "secondary" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((elem, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: elem.x,
            top: elem.y,
            width: elem.size,
            height: elem.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 8,
            delay: elem.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className={`w-full h-full rounded-3xl blur-xl ${
              elem.color === "purple"
                ? "bg-purple/20 glow-purple"
                : elem.color === "cyan"
                ? "bg-secondary/20 glow-cyan"
                : elem.color === "purple-light"
                ? "bg-purple-light/20"
                : elem.color === "purple-dark"
                ? "bg-purple-dark/20 glow-purple"
                : elem.color === "primary"
                ? "bg-primary/20 glow-blue"
                : "bg-secondary/20 glow-cyan"
            }`}
            style={{
              transform: "rotateX(45deg) rotateZ(45deg)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
