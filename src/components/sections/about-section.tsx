import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StoryScroll, Typewriter } from "@/components/ui/story-animations";
import workspaceImage from "@/assets/story-workspace.jpg";

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.8]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="min-h-screen py-32 relative overflow-hidden"
    >
      {/* Chapter Background */}
      <motion.div 
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url(${workspaceImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </motion.div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Chapter Header */}
          <StoryScroll className="text-center mb-20">
            <span className="inline-block px-4 py-2 border border-accent/30 rounded-full text-sm text-accent bg-accent/10 backdrop-blur-sm mb-8">
              About Me
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-foreground/60">Passionate About</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Clean Code
              </span>
            </h2>
          </StoryScroll>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div style={{ y: textY }} className="space-y-8">
              <StoryScroll>
                <div className="space-y-6 text-lg leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground"
                  >
                    <strong className="text-foreground">2+ years</strong> of experience building web applications. 
                    I specialize in React, Node.js, and modern JavaScript ecosystems, 
                    creating scalable solutions for businesses of all sizes.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-card/50 border border-primary/20 rounded-lg p-6 font-mono text-sm backdrop-blur-sm"
                  >
                    <div className="text-muted-foreground mb-2">~/about-me</div>
                    <div className="text-primary">const developer = {"{"}</div>
                    <div className="text-accent ml-4">name: "<Typewriter text="Alex Johnson" delay={1000} speed={100} />",</div>
                    <div className="text-accent ml-4">role: "<Typewriter text="Full-Stack Developer" delay={2000} speed={80} />",</div>
                    <div className="text-accent ml-4">passion: "<Typewriter text="Building amazing experiences" delay={3000} speed={60} />"</div>
                    <div className="text-primary">{"}"}</div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground"
                  >
                    When I'm not coding, you'll find me exploring new technologies, 
                    <strong className="text-foreground"> contributing to open source projects, or mentoring aspiring developers.</strong>
                  </motion.p>
                </div>
              </StoryScroll>

              {/* Timeline */}
              <StoryScroll>
                <div className="space-y-6 pt-8">
                  {[
                    { year: "2019", event: "First line of code", tech: "Python" },
                    { year: "2020", event: "Built first web app", tech: "HTML/CSS/JS" },
                    { year: "2021", event: "Discovered React", tech: "React.js" },
                    { year: "2022", event: "Full-stack mastery", tech: "Node.js" },
                    { year: "2024", event: "Leading development", tech: "Everything" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-16 h-16 bg-gradient-card border border-primary/20 rounded-full flex items-center justify-center group-hover:border-primary/40 transition-smooth">
                        <span className="text-primary font-bold">{item.year}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-foreground font-semibold">{item.event}</h4>
                        <p className="text-muted-foreground text-sm">{item.tech}</p>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                        className="w-3 h-3 bg-primary rounded-full"
                      />
                    </motion.div>
                  ))}
                </div>
              </StoryScroll>
            </motion.div>

            {/* Visual Element */}
            <StoryScroll>
              <div className="relative">
                {/* Code Window Mockup */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card/80 border border-primary/20 rounded-xl overflow-hidden backdrop-blur-sm shadow-card"
                >
                  {/* Window Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-primary/20">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="ml-4 text-sm text-muted-foreground font-mono">journey.tsx</span>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm space-y-2">
                    <div className="text-muted-foreground">// The beginning of everything</div>
                    <div className="text-accent">const <span className="text-primary">myJourney</span> = () =&gt; {"{"}</div>
                    <div className="text-muted-foreground ml-4">return (</div>
                    <div className="text-foreground ml-8">&lt;passion&gt;</div>
                    <div className="text-secondary ml-12">Transforming ideas into reality</div>
                    <div className="text-foreground ml-8">&lt;/passion&gt;</div>
                    <div className="text-muted-foreground ml-4">);</div>
                    <div className="text-accent">{"}"}</div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 border border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent/30 rounded-lg"
                />
              </div>
            </StoryScroll>
          </div>
        </div>
      </div>
    </section>
  );
};