import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./button";

interface FloatingNavProps {
  sections: { id: string; label: string }[];
}

export const FloatingNav = ({ sections }: FloatingNavProps) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [40, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md border border-primary/20 rounded-full px-6 py-3 shadow-card">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection(section.id)}
            className="text-foreground hover:text-primary transition-smooth hover:bg-primary/10 rounded-full"
          >
            {section.label}
          </Button>
        ))}
      </div>
    </motion.nav>
  );
};