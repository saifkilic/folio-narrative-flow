import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

interface StoryScrollProps {
  children: React.ReactNode;
  trigger?: "viewport" | "scroll";
  offset?: number;
  className?: string;
}

export const StoryScroll = ({ 
  children, 
  trigger = "viewport",
  offset = 0,
  className = "" 
}: StoryScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export const Typewriter = ({ text, delay = 0, speed = 50, className = "" }: TypewriterProps) => {
  const displayText = useMotionValue("");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        displayText.set(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(interval);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, delay, speed, displayText]);

  return (
    <motion.span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay / 1000 + index * (speed / 1000), duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};