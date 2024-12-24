import { ReactElement } from "react"
import TailwindIcon from "../assets/TailwindIcon"
import KotlinIcon from "../assets/KotlinIcon"
import PhpIcon from "../assets/PhpIcon"
import PythonIcon from "../assets/PythonIcon"
import GoIcon from "../assets/GoIcon"
import ReactIcon from "../assets/ReactIcon"
import JavaScriptIcon from "../assets/JavaScript"

type Project = {
    id: number,
    title: string,
    description: string,
    keyWords: Array<string>,
}

type Skill = {
    id: number,
    name: string,
    icon: ReactElement,
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Skyjo",
        description: "Une application qui permet de jouer à une réplique du jeu de carte Skyjo ",
        keyWords: ["Langage utilisé: Kotlin", "Durée 3 mois", "Equipe: 5 personnes"],
    },
    {
        id: 2,
        title: "Skyjo",
        description: "Une application qui permet de jouer à une réplique du jeu de carte Skyjo ",
        keyWords: ["Langage utilisé: Kotlin", "Durée 3 mois", "Equipe: 5 personnes"],
    },
    {
        id: 3,
        title: "Skyjo",
        description: "Une application qui permet de jouer à une réplique du jeu de carte Skyjo ",
        keyWords: ["Langage utilisé: Kotlin", "Durée 3 mois", "Equipe: 5 personnes"],
    },
]

export const skills: Skill[] = [
    {
        id: 1,
        name: "Tailwind",
        icon: <TailwindIcon/>
    },
    {
        id: 2,
        name: "Kotlin",
        icon: <KotlinIcon/>
    },
    {
        id: 3,
        name: "Php",
        icon: <PhpIcon/>
    },
    {
        id: 4,
        name: "Python",
        icon: <PythonIcon/>
    },
    {
        id: 5,
        name: "Go",
        icon: <GoIcon/>
    },
    {
        id: 6,
        name: "React",
        icon: <ReactIcon/>
    },
    {
        id: 7,
        name: "JavaScript",
        icon: <JavaScriptIcon/>
    },
]