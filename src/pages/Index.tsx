import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";
import { FloatingNav } from "@/components/ui/floating-nav";

const Index = () => {
  const navSections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingNav sections={navSections} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
