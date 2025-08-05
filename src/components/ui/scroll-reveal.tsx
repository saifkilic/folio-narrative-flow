import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.6,
  className = ""
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialTransform = () => {
    switch (direction) {
      case "up": return { y: 60, opacity: 0 };
      case "down": return { y: -60, opacity: 0 };
      case "left": return { x: 60, opacity: 0 };
      case "right": return { x: -60, opacity: 0 };
      default: return { y: 60, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialTransform()}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : getInitialTransform()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};