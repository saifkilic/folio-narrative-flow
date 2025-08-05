import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StoryScroll } from "@/components/ui/story-animations";
import { Card, CardContent } from "@/components/ui/card";
import evolutionImage from "@/assets/code-evolution.jpg";

export const EvolutionChapter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const projects = [
    {
      title: "The Learning Phase",
      period: "2019-2020",
      description: "Building calculators, todo apps, and simple games. Each project taught me something new about problem-solving.",
      tech: ["HTML", "CSS", "JavaScript"],
      outcome: "Foundation of web development"
    },
    {
      title: "The Growth Phase", 
      period: "2021-2022",
      description: "Creating complex web applications, learning frameworks, and understanding the ecosystem.",
      tech: ["React", "Node.js", "MongoDB"],
      outcome: "Full-stack capabilities"
    },
    {
      title: "The Mastery Phase",
      period: "2023-2024", 
      description: "Leading projects, mentoring others, and crafting scalable solutions for real-world problems.",
      tech: ["TypeScript", "Next.js", "Cloud Architecture"],
      outcome: "Technical leadership"
    }
  ];

  return (
    <section 
      id="evolution" 
      ref={containerRef}
      className="min-h-screen py-32 relative overflow-hidden bg-gradient-section"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20"
      >
        <div 
          className="w-full h-[120%]"
          style={{
            backgroundImage: `url(${evolutionImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Chapter Header */}
          <StoryScroll className="text-center mb-20">
            <span className="inline-block px-4 py-2 border border-secondary/30 rounded-full text-sm text-secondary bg-secondary/10 backdrop-blur-sm mb-8">
              Chapter 3: Evolution
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-foreground/60">From Simple Scripts</span>
              <br />
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                To Complex Systems
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Growth isn't just about learning new technologies. It's about understanding 
              how to solve increasingly complex problems with elegant, maintainable solutions.
            </p>
          </StoryScroll>

          {/* Evolution Timeline */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <StoryScroll key={project.title}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                          {project.period}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                          {project.title}
                        </h3>
                      </motion.div>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground leading-relaxed"
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                        Technologies Mastered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 + techIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Outcome */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      viewport={{ once: true }}
                      className="pt-4 border-t border-primary/20"
                    >
                      <p className="text-accent font-semibold">
                        ↳ {project.outcome}
                      </p>
                    </motion.div>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <Card className="bg-gradient-card border-primary/30 shadow-card overflow-hidden">
                        <CardContent className="p-8">
                          {/* Project Visualization */}
                          <div className="space-y-6">
                            <div className="flex items-center justify-between">
                              <div className="text-2xl font-bold text-foreground">
                                Phase {index + 1}
                              </div>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="w-8 h-8 border-2 border-primary/50 rounded-full"
                              />
                            </div>
                            
                            {/* Progress Visualization */}
                            <div className="space-y-3">
                              {["Problem Solving", "Code Quality", "System Design"].map((skill, skillIndex) => (
                                <div key={skill} className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">{skill}</span>
                                    <span className="text-primary">{(index + 1) * 30 + skillIndex * 5}%</span>
                                  </div>
                                  <motion.div
                                    className="h-1 bg-muted/30 rounded-full overflow-hidden"
                                  >
                                    <motion.div
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${(index + 1) * 30 + skillIndex * 5}%` }}
                                      transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.2 }}
                                      viewport={{ once: true }}
                                      className="h-full bg-gradient-to-r from-primary to-accent"
                                    />
                                  </motion.div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      {/* Floating Elements */}
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute -top-3 -right-3 w-6 h-6 bg-accent/30 rounded-full"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </StoryScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};