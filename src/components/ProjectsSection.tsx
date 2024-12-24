import CardProject from "./CardProject";
import TitleSection from "./TitleSection";
import {projects} from "../data/datas"

export default function ProjectsSection() {
  const projectsDisplay = []

  for (let index = 0; index < 3; index++) {
    const element = projects[index];
    projectsDisplay.push(element)
  }

  console.log(projectsDisplay);
  

  return (
    <div className="flex flex-col gap-6 py-3">
        <TitleSection>Projects</TitleSection>
        <ul className="flex flex-col gap-6 items-center md:flex-row md:justify-center">
          {projectsDisplay.map((projet) => (
            <li key={projet.id}>
              <CardProject id={projet.id} description={projet.description} keyWords={projet.keyWords}>
                {projet.title}
              </CardProject>
            </li>
          ))}
        </ul>
    </div>
  )
}
