import { ReactElement } from "react"
import TailwindIcon from "../assets/TailwindIcon"
import KotlinIcon from "../assets/KotlinIcon"
import PhpIcon from "../assets/PhpIcon"
import PythonIcon from "../assets/PythonIcon"
import GoIcon from "../assets/GoIcon"
import ReactIcon from "../assets/ReactIcon"
import JavaScriptIcon from "../assets/JavaScript"

export type ProjectType = {
    id: number,
    title: string,
    description: string,
    keyWords: Array<string>,
    category: "perso" | "scolaire",
    texte: string,
    img: string
}

type Skill = {
    id: number,
    name: string,
    icon: ReactElement,
}

export const projects: ProjectType[] = [
    {
        id: 1,
        title: "Skyjo",
        description: "Une application qui permet de jouer à une réplique du jeu de carte Skyjo ",
        keyWords: ["Langage utilisé: Kotlin", "Durée 3 mois", "Equipe: 5 personnes"],
        category: "scolaire",
        texte: "Pendant un projet de trois mois au sein d'une équipe de cinq personnes, j'ai réalisé une adaptation du jeu Skyjo en Kotlin, en me concentrant sur la partie front-end. Ce travail m'a permis de traverser différentes phases clés : analyse des besoins pour définir les fonctionnalités essentielles, gestion de projet pour coordonner les tâches et assurer une bonne communication au sein de l'équipe, conception de l'interface utilisateur pour garantir une expérience fluide et attrayante, et enfin développement et intégration. Ce projet m'a offert une excellente opportunité de mettre en pratique des compétences en développement collaboratif, en design UX/UI, et en méthodologies agiles",
        img: "/assets/Tennis.JPG"
    },
    {
        id: 2,
        title: "Puissance 4",
        description: "Une application qui permet de jouer à une réplique du jeu de carte Skyjo ",
        keyWords: ["Langage utilisé: Kotlin", "Durée 3 mois", "Equipe: 5 personnes"],
        category: "scolaire",
        texte: "Pendant un projet de trois mois au sein d'une équipe de cinq personnes, j'ai réalisé une adaptation du jeu Skyjo en Kotlin, en me concentrant sur la partie front-end. Ce travail m'a permis de traverser différentes phases clés : analyse des besoins pour définir les fonctionnalités essentielles, gestion de projet pour coordonner les tâches et assurer une bonne communication au sein de l'équipe, conception de l'interface utilisateur pour garantir une expérience fluide et attrayante, et enfin développement et intégration. Ce projet m'a offert une excellente opportunité de mettre en pratique des compétences en développement collaboratif, en design UX/UI, et en méthodologies agiles",
        img: "/assets/Tennis.JPG"
    },
    {
        id: 3,
        title: "Quadtree",
        description: "Une application qui permet de jouer à une réplique du jeu de carte Skyjo ",
        keyWords: ["Langage utilisé: Kotlin", "Durée 3 mois", "Equipe: 5 personnes"],
        category: "scolaire",
        texte: "Pendant un projet de trois mois au sein d'une équipe de cinq personnes, j'ai réalisé une adaptation du jeu Skyjo en Kotlin, en me concentrant sur la partie front-end. Ce travail m'a permis de traverser différentes phases clés : analyse des besoins pour définir les fonctionnalités essentielles, gestion de projet pour coordonner les tâches et assurer une bonne communication au sein de l'équipe, conception de l'interface utilisateur pour garantir une expérience fluide et attrayante, et enfin développement et intégration. Ce projet m'a offert une excellente opportunité de mettre en pratique des compétences en développement collaboratif, en design UX/UI, et en méthodologies agiles",
        img: "/assets/Tennis.JPG"
    },
    {
        id: 4,
        title: "Site statique",
        description: "Une application qui permet de jouer à une réplique du jeu de carte Skyjo ",
        keyWords: ["Langage utilisé: Kotlin", "Durée 3 mois", "Equipe: 5 personnes"],
        category: "scolaire",
        texte: "Pendant un projet de trois mois au sein d'une équipe de cinq personnes, j'ai réalisé une adaptation du jeu Skyjo en Kotlin, en me concentrant sur la partie front-end. Ce travail m'a permis de traverser différentes phases clés : analyse des besoins pour définir les fonctionnalités essentielles, gestion de projet pour coordonner les tâches et assurer une bonne communication au sein de l'équipe, conception de l'interface utilisateur pour garantir une expérience fluide et attrayante, et enfin développement et intégration. Ce projet m'a offert une excellente opportunité de mettre en pratique des compétences en développement collaboratif, en design UX/UI, et en méthodologies agiles",
        img: "/assets/Tennis.JPG"
    },
    {
        id: 5,
        title: "Dashboard",
        description: "Une application qui permet de jouer à une réplique du jeu de carte Skyjo ",
        keyWords: ["Langage utilisé: Kotlin", "Durée 3 mois", "Equipe: 5 personnes"],
        category: "perso",
        texte: "Pendant un projet de trois mois au sein d'une équipe de cinq personnes, j'ai réalisé une adaptation du jeu Skyjo en Kotlin, en me concentrant sur la partie front-end. Ce travail m'a permis de traverser différentes phases clés : analyse des besoins pour définir les fonctionnalités essentielles, gestion de projet pour coordonner les tâches et assurer une bonne communication au sein de l'équipe, conception de l'interface utilisateur pour garantir une expérience fluide et attrayante, et enfin développement et intégration. Ce projet m'a offert une excellente opportunité de mettre en pratique des compétences en développement collaboratif, en design UX/UI, et en méthodologies agiles",
        img: "/assets/Tennis.JPG"
    },
    {
        id: 6,
        title: "Portfolio",
        description: "Une application qui permet de jouer à une réplique du jeu de carte Skyjo ",
        keyWords: ["Langage utilisé: Kotlin", "Durée 3 mois", "Equipe: 5 personnes"],
        category: "perso",
        texte: "Pendant un projet de trois mois au sein d'une équipe de cinq personnes, j'ai réalisé une adaptation du jeu Skyjo en Kotlin, en me concentrant sur la partie front-end. Ce travail m'a permis de traverser différentes phases clés : analyse des besoins pour définir les fonctionnalités essentielles, gestion de projet pour coordonner les tâches et assurer une bonne communication au sein de l'équipe, conception de l'interface utilisateur pour garantir une expérience fluide et attrayante, et enfin développement et intégration. Ce projet m'a offert une excellente opportunité de mettre en pratique des compétences en développement collaboratif, en design UX/UI, et en méthodologies agiles",
        img: "/assets/Tennis.JPG"
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