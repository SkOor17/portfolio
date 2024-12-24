import CardProject from "./CardProject";
import TitleSection from "./TitleSection";
import {projects} from "../data/datas"
import PrimaryBtn from "./PrimaryBtn";

export default function ProjectsSection() {
  const projectsDisplay = []

  for (let index = 0; index < 3; index++) {
    const element = projects[index];
    projectsDisplay.push(element)
  }  

  return (
    <div id="projects" className="flex flex-col gap-6 py-3 scroll-mt-16">
        <TitleSection>Projects</TitleSection>
        <div className="w-full flex justify-center">
          <div className="w-fit flex flex-col items-end gap-6">
            <ul className="flex flex-col gap-6 items-center lg:flex-row lg:justify-center">
              {projectsDisplay.map((projet) => (
                <li key={projet.id}>
                  <CardProject id={projet.id} description={projet.description} keyWords={projet.keyWords}>
                    {projet.title}
                  </CardProject>
                </li>
              ))}
            </ul>
            <PrimaryBtn>Tout découvrir</PrimaryBtn>
          </div>
        </div>
    </div>
  )
}
