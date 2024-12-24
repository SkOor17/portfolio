import AboutMeSection from "../components/AboutMeSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <div className="w-full">
        <HeroSection/>
        <AboutMeSection/>
        <ProjectsSection/>
        <SkillsSection/>
        <ContactSection/>
    </div>
  )
}
