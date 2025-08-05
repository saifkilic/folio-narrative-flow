import { StoryHero } from "@/components/sections/story-hero";
import { OriginStory } from "@/components/sections/origin-story";
import { EvolutionChapter } from "@/components/sections/evolution-chapter";
import { CurrentChapter } from "@/components/sections/current-chapter";
import { FinalChapter } from "@/components/sections/final-chapter";
import { FloatingNav } from "@/components/ui/floating-nav";

const Index = () => {
  const navSections = [
    { id: "hero", label: "Prologue" },
    { id: "origin", label: "Origin" },
    { id: "evolution", label: "Growth" },
    { id: "current", label: "Present" },
    { id: "final", label: "Future" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingNav sections={navSections} />
      <StoryHero />
      <OriginStory />
      <EvolutionChapter />
      <CurrentChapter />
      <FinalChapter />
    </div>
  );
};

export default Index;
