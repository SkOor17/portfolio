import AboutMeSection from "../components/AboutMeSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <div className="w-full">
        <HeroSection/>
        <AboutMeSection/>
        <ProjectsSection/>
    </div>
  )
}
