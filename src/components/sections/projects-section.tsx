import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { StoryScroll } from "@/components/ui/story-animations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const currentProjects = [
    {
      title: "EcoCommerce Platform",
      description: "A revolutionary e-commerce platform focused on sustainability, featuring AI-powered carbon footprint tracking and eco-friendly product recommendations.",
      impact: "Helped reduce collective carbon footprint by 40% across 10,000+ users",
      tech: ["React", "Node.js", "AI/ML", "MongoDB", "AWS"],
      status: "Live & Growing",
      metrics: { users: "15K+", impact: "40% reduction", growth: "200%" }
    },
    {
      title: "DevFlow Studio",
      description: "An integrated development environment that uses AI to help developers write better code faster, with real-time collaboration features.",
      impact: "Increased development velocity by 60% for distributed teams",
      tech: ["Next.js", "TypeScript", "WebSockets", "PostgreSQL", "Docker"],
      status: "In Development",
      metrics: { teams: "50+", velocity: "60% faster", bugs: "30% fewer" }
    },
    {
      title: "MindfulTask",
      description: "A productivity application that combines task management with mindfulness practices, helping users maintain work-life balance.",
      impact: "Improved work-life balance scores by 45% among beta users",
      tech: ["React Native", "Supabase", "Machine Learning", "Health APIs"],
      status: "Beta Testing",
      metrics: { satisfaction: "4.8/5", retention: "85%", balance: "45% better" }
    }
  ];

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="min-h-screen py-32 relative bg-background"
    >
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Chapter Header */}
          <StoryScroll className="text-center mb-20">
            <span className="inline-block px-4 py-2 border border-primary/30 rounded-full text-sm text-primary bg-primary/10 backdrop-blur-sm mb-8">
              My Work
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-foreground/60">Featured</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills and expertise
              in modern web development.
            </p>
          </StoryScroll>

          {/* Project Selector */}
          <motion.div style={{ y }} className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {currentProjects.map((project, index) => (
                <Button
                  key={project.title}
                  variant={selectedProject === index ? "default" : "outline"}
                  onClick={() => setSelectedProject(index)}
                  className={`transition-all duration-300 ${
                    selectedProject === index 
                      ? "bg-primary text-primary-foreground shadow-glow" 
                      : "border-primary/30 hover:border-primary/60"
                  }`}
                >
                  {project.title}
                </Button>
              ))}
            </div>

            {/* Selected Project Detail */}
            <StoryScroll>
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Project Info */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                        {currentProjects[selectedProject].title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        currentProjects[selectedProject].status === "Live & Growing" 
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : currentProjects[selectedProject].status === "In Development"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}>
                        {currentProjects[selectedProject].status}
                      </span>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {currentProjects[selectedProject].description}
                    </p>
                    
                    <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                      <p className="text-accent font-semibold">
                        Impact: {currentProjects[selectedProject].impact}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProjects[selectedProject].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-lg border border-primary/20 hover:border-primary/40 transition-smooth"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      className="border-primary/50 hover:bg-primary/10 transition-smooth"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 transition-smooth">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Metrics Dashboard */}
                <Card className="bg-gradient-card border-primary/20 shadow-card">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
                      Project Metrics
                    </h4>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {Object.entries(currentProjects[selectedProject].metrics).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="text-center p-4 bg-background/50 rounded-lg border border-primary/20"
                        >
                          <div className="text-3xl font-bold text-primary mb-2">
                            {value}
                          </div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Visual Element */}
                    <div className="mt-8 pt-6 border-t border-primary/20">
                      <div className="flex items-center justify-center">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow"
                        >
                          <ChevronDown className="w-8 h-8 text-primary-foreground" />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StoryScroll>
          </motion.div>
        </div>
      </div>
    </section>
  );
};