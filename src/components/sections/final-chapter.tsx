import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StoryScroll, Typewriter } from "@/components/ui/story-animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Coffee } from "lucide-react";

export const FinalChapter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  const nextSteps = [
    {
      icon: MessageCircle,
      title: "Let's Talk",
      description: "Discuss your next project or explore collaboration opportunities",
      action: "Start Conversation"
    },
    {
      icon: Coffee,
      title: "Virtual Coffee",
      description: "Share ideas, talk tech, or just connect over a virtual coffee",
      action: "Schedule Call"
    },
    {
      icon: Mail,
      title: "Stay Connected",
      description: "Get updates on my latest projects and insights",
      action: "Subscribe"
    }
  ];

  return (
    <section 
      id="final" 
      ref={containerRef}
      className="min-h-screen py-32 relative bg-gradient-section overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            animate={{
              x: [0, 300, -300, 0],
              y: [0, -200, 200, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + i * 7}%`,
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Chapter Header */}
          <StoryScroll>
            <span className="inline-block px-4 py-2 border border-accent/30 rounded-full text-sm text-accent bg-accent/10 backdrop-blur-sm mb-8">
              Chapter 5: What's Next?
            </span>
            <motion.div style={{ scale }} className="mb-12">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-foreground/60">Every Story</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Continues
                </span>
              </h2>
            </motion.div>
          </StoryScroll>

          {/* Story Reflection */}
          <motion.div style={{ y }} className="space-y-8 mb-20">
            <StoryScroll>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                This is just the beginning. Every project completed opens new possibilities. 
                Every problem solved reveals new challenges worth tackling.
              </p>
            </StoryScroll>
            
            <StoryScroll>
              <div className="bg-card/50 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
                <blockquote className="text-2xl font-light text-foreground leading-relaxed">
                  <Typewriter 
                    text="The best developers aren't just coders—they're storytellers who use technology as their medium."
                    delay={500}
                    speed={50}
                  />
                </blockquote>
                <cite className="block mt-4 text-muted-foreground">— My philosophy</cite>
              </div>
            </StoryScroll>
          </motion.div>

          {/* Next Steps */}
          <StoryScroll>
            <div className="space-y-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Write the Next Chapter Together?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {nextSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                        <Button 
                          className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-smooth"
                          variant="outline"
                        >
                          {step.action}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </StoryScroll>

          {/* Final CTA */}
          <StoryScroll>
            <div className="pt-16 space-y-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-hero text-primary-foreground hover:shadow-glow transition-all duration-500 px-12 py-4 text-xl"
                >
                  Let's Create Something Amazing
                </Button>
              </motion.div>
              
              <p className="text-sm text-muted-foreground/60">
                <Typewriter 
                  text="Your story + My expertise = Extraordinary results"
                  delay={2000}
                  speed={60}
                />
              </p>
            </div>
          </StoryScroll>
        </div>
      </div>
    </section>
  );
};