import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export const ContactSection = () => {
  const contactLinks = [
    { icon: Mail, label: "Email", value: "alex@alexchen.dev", href: "mailto:alex@alexchen.dev" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/alexchen-dev", href: "https://linkedin.com/in/alexchen-dev" },
    { icon: Github, label: "GitHub", value: "@alexchen-dev", href: "https://github.com/alexchen-dev" },
    { icon: Twitter, label: "Twitter", value: "@alexchen_dev", href: "https://twitter.com/alexchen_dev" }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-section relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            animate={{
              x: [0, 200, -200, 0],
              y: [0, -150, 150, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Let's Create Together
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have a project in mind? Let's discuss how we can bring your vision to life. 
                I'm always excited to work on meaningful projects with amazing people.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Start Something Amazing?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're a startup looking to build your first product, 
                    an established company seeking to modernize your tech stack, 
                    or a fellow developer wanting to collaborate, I'd love to hear from you.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-smooth group"
                    >
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{link.label}</div>
                        <div className="text-sm text-muted-foreground">{link.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.6}>
              <Card className="bg-gradient-card border-primary/20 shadow-card">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 bg-gradient-hero rounded-full mx-auto flex items-center justify-center shadow-glow"
                    >
                      <Mail className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Get In Touch
                      </h4>
                      <p className="text-muted-foreground mb-6">
                        Ready to discuss your next project? Send me a message and let's make it happen.
                      </p>
                    </div>
                    
                    <Button 
                      size="lg"
                      className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-500"
                    >
                      Start a Conversation
                    </Button>
                    
                    <div className="pt-4 border-t border-primary/20">
                      <p className="text-sm text-muted-foreground">
                        Typically responds within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};