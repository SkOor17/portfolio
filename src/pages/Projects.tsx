import CardProject from "../components/CardProject";
import TextUnderline from "../components/TextUnderline";
import TitleSection from "../components/TitleSection";
import { projects } from "../data/datas";

export default function Projects() {

  const projetsScolaires = projects.filter((projet) => projet.category==="scolaire")
  const projetsPerso = projects.filter((projet) => projet.category==="perso")

  return (
    <div className='flex flex-col py-6 gap-8'>
      <div>
        <div >
          <div className="inline-flex">
            <p className="title !font-normal">Voici tous mes </p>
            <p className="title !font-normal">
              <TextUnderline className="top-7 -left-1">
                projets
              </TextUnderline>
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <TitleSection>Scolaires.</TitleSection>
        <div className='flex flex-wrap flex-col gap-6 w-full items-center md:flex-row'>
          {projetsScolaires.map((projet) => (
            <CardProject key={projet.id} id={projet.id} description={projet.description} keyWords={projet.keyWords}>{projet.title}</CardProject>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <TitleSection>Personels.</TitleSection>
        <div className='flex flex-wrap flex-col gap-6 w-full items-center md:flex-row'>
          {projetsPerso.map((projet) => (
            <CardProject key={projet.id} id={projet.id} description={projet.description} keyWords={projet.keyWords}>{projet.title}</CardProject>
          ))}
        </div>
      </div>
    </div>
  )
}

