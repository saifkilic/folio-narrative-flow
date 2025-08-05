import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "EcoCommerce Platform",
      description: "A sustainable e-commerce platform built with React and Node.js, featuring AI-powered product recommendations and carbon footprint tracking.",
      tech: ["React", "Node.js", "MongoDB", "AI/ML"],
      image: "gradient-from-green-400 to-blue-500",
      featured: true
    },
    {
      title: "MindfulTask",
      description: "A productivity app that combines task management with mindfulness practices, helping users maintain work-life balance.",
      tech: ["Next.js", "TypeScript", "Supabase"],
      image: "gradient-from-purple-400 to-pink-500",
      featured: false
    },
    {
      title: "DataViz Studio",
      description: "Interactive data visualization tool that transforms complex datasets into beautiful, understandable charts and graphs.",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      image: "gradient-from-orange-400 to-red-500",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Each project represents a unique challenge overcome, a problem solved, and a story worth telling.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <ScrollReveal 
                key={project.title} 
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={0.3 + index * 0.2}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-2">
                      {project.featured && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                          Featured Project
                        </span>
                      )}
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-lg border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary/50 hover:bg-primary/10 transition-smooth"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-primary hover:bg-primary/90 transition-smooth"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-smooth group">
                      <CardContent className="p-0">
                        <div className={`h-64 bg-${project.image} relative group-hover:scale-105 transition-transform duration-500`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              className="w-16 h-16 border-2 border-white/30 rounded-full"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal direction="up" delay={0.8}>
            <div className="text-center mt-20">
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 transition-smooth px-8 py-3"
              >
                View All Projects
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};