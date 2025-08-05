import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-section relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                The Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every line of code tells a story. Mine began with curiosity and evolved into a passion for creating digital experiences that matter.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Building Tomorrow's Web
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 5 years in the industry, I've witnessed the web evolve from static pages to dynamic, interactive experiences. My journey started with a simple "Hello World" and has led me to architect scalable applications serving millions of users.
                  </p>
                  <p>
                    I believe in the power of clean code, thoughtful design, and user-centered development. Every project is an opportunity to solve real problems and create meaningful connections between people and technology.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source, or mentoring the next generation of developers.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.5}>
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-full"
                />
                <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-primary/20">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary-glow mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.7}>
            <div>
              <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
                Technical Arsenal
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-smooth group">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth">
                          {skillGroup.category}
                        </h4>
                        <div className="space-y-2">
                          {skillGroup.items.map((skill) => (
                            <div 
                              key={skill}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-smooth"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-muted-foreground">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};