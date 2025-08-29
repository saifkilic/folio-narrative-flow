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
      title: "Glow Network",
      description: "A next-gen MLM platform for beauty and cosmetics, featuring package-based purchases, referral-driven growth, automated payouts, and rank promotions—all managed through a sleek, mobile-first dashboard.",
      tech: ["Next js", "TypeScript", "MongoDb"],
      status: "Live",
      links: {
        live: "https://glownetwork.vercel.app/", // Add your live URL here
        github: "https://github.com/Daniyal69n/glownetwork" // Add your GitHub URL here
      }
    },
    {
      title: "StudySure",
      description: "StudySure is a student consultancy that guides you through university selection, IELTS prep, visa processing, SOP writing, counseling, scholarships, admissions, etc.—with tailored, student-centred support across numerous countries.",
      tech: ["Next js", "TypeScript", "MongoDb"],
      status: "Live",
      links: {
        live: "https://studysure.org", // Add your live URL here
        github: "https://github.com/Daniyal69n/StudySure" 
      }
    },
    {
      title: "MindfulTask",
      description: "A brutal yet benevolent AI-driven mental health platform—Neuroticure diagnoses your mind before dinner, delivers clinical self-help, tracks your mood, and connects you with a real therapist when the algorithm can't lie. Over 12 million users can't be completely wrong.",
      tech: ["Next js", "TypeScript", "MongoDb"],
      status: "Live",
      links: {
        live: "https://neuroticure-eight.vercel.app/", // Set to null if no live link available
        github: "https://github.com/Daniyal69n/Neuroticure" // Add your GitHub URL here
      }
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
                        currentProjects[selectedProject].status === "Live" 
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
                    {currentProjects[selectedProject].links.github && (
                      <Button 
                        variant="outline" 
                        onClick={() => handleLinkClick(currentProjects[selectedProject].links.github!)}
                        className="border-primary/50 hover:bg-primary/10 transition-smooth"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    )}
                    {currentProjects[selectedProject].links.live && (
                      <Button 
                        onClick={() => handleLinkClick(currentProjects[selectedProject].links.live!)}
                        className="bg-primary hover:bg-primary/90 transition-smooth"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {/* Show message if no links available */}
                    {!currentProjects[selectedProject].links.github && !currentProjects[selectedProject].links.live && (
                      <div className="text-sm text-muted-foreground italic py-2">
                        Links coming soon...
                      </div>
                    )}
                  </div>
                </div>

                {/* Visual Element Card - Maintains Right Column */}
                <Card className="bg-gradient-card border-primary/20 shadow-card">
                  <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px]">
                    <h4 className="text-xl font-semibold text-foreground mb-8 text-center">
                      {currentProjects[selectedProject].title}
                    </h4>
                    
                    {/* Central Visual Element */}
                    <div className="mb-8">
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
                        className="w-24 h-24 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow"
                      >
                        <ChevronDown className="w-12 h-12 text-primary-foreground" />
                      </motion.div>
                    </div>

                    {/* Status Indicator */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {currentProjects[selectedProject].status}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Project Status
                      </div>
                    </div>

                    {/* Link Indicators */}
                    <div className="mt-6 flex gap-4">
                      {currentProjects[selectedProject].links.live && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <ExternalLink className="w-3 h-3" />
                          <span>Live</span>
                        </div>
                      )}
                      {currentProjects[selectedProject].links.github && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Github className="w-3 h-3" />
                          <span>Source</span>
                        </div>
                      )}
                    </div>

                    {/* Additional Visual Elements */}
                    <div className="mt-8 pt-6 border-t border-primary/20 w-full">
                      <div className="flex justify-center space-x-4">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -10, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                            className="w-3 h-3 bg-primary/60 rounded-full"
                          />
                        ))}
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