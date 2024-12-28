import { motion } from "motion/react";
import CardProject from "../components/CardProject";
import TextUnderline from "../components/TextUnderline";
import TitleSection from "../components/TitleSection";
import { projects } from "../data/datas";

export default function Projects() {

  const width = window.innerWidth;

  const projetsScolaires = projects.filter((projet) => projet.category==="scolaire")
  const projetsPerso = projects.filter((projet) => projet.category==="perso")

  return (
    <div className='flex flex-col py-6 gap-8'>
      <div>
        <div >
          <div className="inline-flex">
            <p className="title !font-normal">Voici tous mes </p>
            <p className="title !font-normal">
              <TextUnderline className="top-7 -left-0">
                projets.
              </TextUnderline> 
            </p>
          </div>
        </div>
      </div>

      <div id="scolaires" className='flex flex-col py-3 gap-6 scroll-mt-16'>
        <TitleSection>Scolaires.</TitleSection>
        <div className='flex flex-wrap flex-col gap-6 w-full items-center md:flex-row'>
          {projetsScolaires.map((projet, index) => (
            <motion.div
              key={projet.id}
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{
                duration: 0.75,
                ease: "easeInOut",
                delay: width<768 ? 0 : index*0.1 
              }}
            >
              <CardProject  id={projet.id} description={projet.description} keyWords={projet.keyWords}>{projet.title}</CardProject>
            </motion.div>
          ))}
        </div>
      </div>

      <div id="perso" className='flex flex-col py-3 gap-6 scroll-mt-16'>
        <TitleSection>Personels.</TitleSection>
        <div className='flex flex-wrap flex-col gap-6 w-full items-center md:flex-row'>
          {projetsPerso.map((projet, index) => (
            <motion.div
              key={projet.id}
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{
                duration: 0.75,
                ease: "easeInOut",
                delay: width<768 ? 0 : (projetsScolaires.length-2)*0.1 + index*0.1 
              }}
            >
              <CardProject  id={projet.id} description={projet.description} keyWords={projet.keyWords}>{projet.title}</CardProject>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

