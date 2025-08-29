import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StoryScroll, Typewriter } from "@/components/ui/story-animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  const contactLinks = [
    {
      icon: Github,
      title: "GitHub",
      description: "Explore my code repositories and open source contributions",
      action: "View Profile",
      href: "https://github.com/daniyal69n",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me professionally and view my experience",
      action: "Connect",
      href: "https://linkedin.com/in/daniyal-ahmed-7616611b2",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send me a message directly for project inquiries",
      action: "Send Email",
      href: "mailto:dmn7146@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section 
      id="contact" 
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
              Get In Touch
            </span>
            <motion.div style={{ scale }} className="mb-12">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-foreground/60">Let's Work</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Together
                </span>
              </h2>
            </motion.div>
          </StoryScroll>

          {/* Story Reflection */}
          <motion.div style={{ y }} className="space-y-8 mb-20">
            <StoryScroll>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Have a project in mind? I'd love to hear about it. Let's discuss how we can 
                bring your ideas to life with clean, efficient code.
              </p>
            </StoryScroll>
            
            <StoryScroll>
              <div className="bg-card/50 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
                  <blockquote className="text-2xl font-light text-foreground leading-relaxed">
                    <Typewriter 
                      text="Great software is built on collaboration, communication, and a shared vision for success."
                      delay={500}
                      speed={50}
                    />
                  </blockquote>
                  <cite className="block mt-4 text-muted-foreground">— Ready to build something amazing together?</cite>
              </div>
            </StoryScroll>
          </motion.div>

          {/* Contact Links */}
          <StoryScroll>
            <div className="space-y-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Let's Connect
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {contactLinks.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                          <link.icon className={`w-8 h-8 text-primary transition-colors ${link.color}`} />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground">
                          {link.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {link.description}
                        </p>
                        <Button 
                          asChild
                          className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-smooth"
                          variant="outline"
                        >
                          <a 
                            href={link.href}
                            target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                            rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                          >
                            {link.action}
                          </a>
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