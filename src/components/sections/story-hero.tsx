import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/story-animations";
import heroImage from "@/assets/hero-bg.jpg";

export const StoryHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToChapter = (chapterId: string) => {
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 container px-4 text-center"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Chapter Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-block"
          >
            <span className="px-4 py-2 border border-primary/30 rounded-full text-sm text-primary bg-primary/10 backdrop-blur-sm">
              Chapter 1: The Beginning
            </span>
          </motion.div>

          {/* Main Title with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="block text-foreground/40 mb-2">Every</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                <Typewriter text="Developer" delay={2000} speed={100} />
              </span>
              <span className="block text-foreground/40 mt-2">
                <Typewriter text="Has a Story" delay={3500} speed={80} />
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mine began with a single line of code and evolved into a passion for 
              crafting digital experiences that connect, inspire, and transform.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 5 }}
            className="pt-8"
          >
            <Button
              size="lg"
              onClick={() => scrollToChapter("origin")}
              className="bg-gradient-hero hover:shadow-glow transition-all duration-500 px-8 py-4 text-lg group"
            >
              <span className="mr-2">Begin the Journey</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Story Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["</>", "{ }", "( )", "[ ]", "=>", "&&"].map((symbol, index) => (
          <motion.div
            key={symbol}
            className="absolute text-primary/20 font-mono text-2xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [-20, -100],
              x: [0, (index % 2 === 0 ? 50 : -50)]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 1.5,
              ease: "linear"
            }}
            style={{
              left: `${20 + index * 12}%`,
              top: "80%"
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Story Progress Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="text-sm mb-2">Scroll to continue the story</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};