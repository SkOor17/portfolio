import TitleSection from "./TitleSection";
import { motion } from "motion/react";

export default function AboutMeSection() {

    return (
        <div id="about" className="scroll-mt-16 py-3">
            <TitleSection>A propos de moi.</TitleSection>
            <div className="flex w-full justify-center">
                <div className="flex flex-col py-6 gap-6 w-fit h-fit md:flex-row md:justify-center md:gap-[15vh]">
                    <div className="max-w-[400px] space-y-3 text-base">
                        <p>
                            Développeur logiciel passionné, je m’efforce de transformer des idées innovantes en solutions concrètes et performantes.
                            En dehors de l’univers du code, j'aime utiliser mon énergie dans le sport, notamment le tennis, qui me permet de travailler sur ma discipline et ma rigueur. 
                        </p>
                        <p>
                            De plus, je m’intéresse particulièrement à l’univers des sneakers et de la mode. 
                            Ces passions m’inspirent dans mon travail, en combinant rigueur technique, esprit d’équipe et sens du détail pour relever chaque défi avec efficacité.
                        </p>
                    </div>
                    <motion.div 
                        className="max-w-[calc(40vh)] md:max-h-[calc(65vh)] h-full flex lg:w-fit "
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.75,
                            ease: "easeInOut",
                        }}
                    >
                        <img className="h-full w-full rounded-md object-contain" src="/assets/Tennis.JPG" alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
