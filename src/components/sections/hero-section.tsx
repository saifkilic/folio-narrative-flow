import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-text leading-tight">
              Alex Chen
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-6">
              Full-Stack Developer & Digital Craftsman
            </h2>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              I transform ideas into beautiful, functional digital experiences. 
              Specializing in React, Node.js, and creating seamless user journeys 
              that tell compelling stories.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              onClick={scrollToNext}
              className="bg-gradient-hero text-primary-foreground hover:shadow-glow transition-all duration-500 px-8 py-3 text-lg animate-glow-pulse"
            >
              Discover My Story
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-smooth px-8 py-3 text-lg"
            >
              View Portfolio
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};