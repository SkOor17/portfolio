import CardProject from "./CardProject";
import TitleSection from "./TitleSection";
import { projects } from "../data/datas";
import Button from "./Button";
import { motion} from "motion/react";

export default function ProjectsSection() {
  const width = window.innerWidth;
  const projectsDisplay = projects.filter((project) => project.toDisplay);

  return (
    <div id="projects" className="flex flex-col gap-6 py-3 scroll-mt-16">
      <TitleSection>Mes projets.</TitleSection>
      <div className="w-full flex justify-center">
        <div className="w-fit flex flex-col items-end gap-6">
          <div className="flex flex-col gap-6 items-center xl:flex-row">
            {projectsDisplay.map((projet, index) => (
              <motion.div 
                key={projet.id}
                className="w-fit h-fit"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{
                  duration: 0.75,
                  ease: "easeInOut",
                  delay: width<768 ? 0 : index*0.1 
                }}
              >
                <CardProject
                  id={projet.id}
                  description={projet.description}
                  keyWords={projet.keyWords}
                >
                  {projet.title}
                </CardProject>
              </motion.div>
            ))}
          </div>
          <Button type="primary" link="/projects">
            Tout décourvir
          </Button>
        </div>
      </div>
    </div>
  );
}
