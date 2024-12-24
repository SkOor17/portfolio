import TitleSection from "./TitleSection";

export default function AboutMeSection() {
  return (
    <div id="about">
        <TitleSection>About me</TitleSection>
        <div className="flex w-full justify-center">
            <div className="flex flex-col py-6 gap-6 w-fit md:flex-row md:justify-center md:gap-[15vh]">
                <p className="max-w-[300px]">
                    Développeur logiciel passionné, je m’efforce de transformer des idées innovantes en solutions concrètes et performantes. 
                    En dehors de l’univers du code, je puise mon énergie dans le sport, notamment le tennis, qui m’enseigne discipline et stratégie. 
                    Grand amateur de mode, je m’intéresse particulièrement à l’univers des sneakers, où créativité et design se rencontrent. 
                    Ces passions m’inspirent dans mon travail, en combinant rigueur technique, esprit d’équipe et sens du détail pour relever chaque défi avec style et efficacité.
                </p>
                <div className="w-full flex justify-center md:w-fit">
                    <img className="h-fit md:max-h-[calc(65vh)] max-w-[calc(40vh)] rounded-md" src="/assets/Tennis.JPG" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
