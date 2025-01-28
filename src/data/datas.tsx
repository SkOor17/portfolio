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
    texte: Array<string>,
    img: string,
    link?: string,
    toDisplay?: boolean,
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
        description: "Une application qui permet de jouer à une réplique du jeu de carte Skyjo.",
        keyWords: ["Langage utilisé: Kotlin", "Durée 3 mois", "Equipe: 5 personnes"],
        category: "scolaire",
        texte: 
        [
            "Pendant un projet de trois mois au sein d'une équipe de cinq personnes, j'ai réalisé une adaptation du jeu Skyjo en Kotlin, en me concentrant sur la partie front-end. Ce travail m'a permis de traverser différentes phases clés : analyse des besoins pour définir les fonctionnalités essentielles, gestion de projet pour coordonner les tâches et assurer une bonne communication au sein de l'équipe, conception de l'interface utilisateur pour garantir une expérience fluide et attrayante, et enfin développement et intégration.", 
            "Ce projet m'a offert une excellente opportunité de mettre en pratique des compétences en développement collaboratif, en design UX/UI, et en méthodologies agiles"
        ],
        img: "/assets/Skyjo.png",
        toDisplay: true
    },
    {
        id: 2,
        title: "Puissance 4",
        description: "Une application qui permet de jouer au puissance 4 en réseaux.",
        keyWords: ["Langage utilisé: Go", "Durée 1 mois", "Equipe: 2 personnes"],
        category: "scolaire",
        texte: [
            "Ce projet est un puissance 4 en réseaux. Travailler sur ce jeu m'a permit d'apprendre à utiliser et à comprendre le concept des goroutines en Go mais aussi de continuer à travailler en collaboration avec Git.",
            "Les principaux objectifs de ce projet était d'éviter tout deadlock ou race-condition pour permettre de jouer sans aucun problème au jeu sur différentes machines. Nous avons donc dû mettre en place un protocole de communication entre les clients et le serveur pour ensuite l'implémenter en Go."
        ],
        img: "/assets/puissance4.png",
        toDisplay: true
    },
    {
        id: 3,
        title: "Quadtree",
        description: "Un petit jeu en go qui utilise le principe de quadtree pour générer une map.",
        keyWords: ["Langage utilisé: Go", "Durée 3 mois", "Equipe: 2 personnes"],
        category: "scolaire",
        texte: 
        [
            "Pendant ce projet de plusieurs mois nous avons pu collaborer à deux dans le but de réaliser un petit jeu vidéo où nous pouvons déplacer le personnage sur une map généré grâce à un système de quadtree.",
            "La première partie de ce projet était donc de se familiariser avec le langage Go ainsi qu'avec les algorithmes récursifs pour pouvoir faire l'algorithme du quadtree. C'étatit aussi la première fois, pour moi, d'utiliser git et de travailler en équipe. Nous avons aussi dû réaliser par la suite des tests pour valider le bon fonctionnement des algorithmes de génération.",
            "La deuxième partie de ce projet était plus libre. Nous avons dû réaliser différentes extensions de notre choix pour développer des choses un peu plus complexes. Par exemple, nous avons réalisé un système de téléportation, de sélection de personage, d'animation. En plus nous avons ajouté un système qui nous permet de placer des objets et d'apater les styles des cases en fonctions des ce qui l'entourait."
        ],
        img: "/assets/quadtree.png",
    },
    {
        id: 4,
        title: "Site statique",
        description: "Une application qui permet de jouer à une réplique du jeu de carte Skyjo ",
        keyWords: ["Framework utilisé: Svelte", "Durée 2 mois", "Equipe: 5 personnes"],
        category: "scolaire",
        texte: 
        [
            "J'ai développé sur une période de 2 mois, dans une équipe de 5, un site statique qui présente différents jeux du studio MINTROCKET.",
            "Ce projet m'a permis d'utiliser pour la premère fois un framework JavaScript. Le but de ce projet était principalement de faire un site avec une bonne expérience utilisateur en respectant différentes règles. J'ai donc pu perfectionné ma connaissance du HTML et du CSS tout en travaillant avec git pour versionner et collaborer sur ce projet."
        ],
        img: "/assets/site.png"
    },
    {
        id: 5,
        title: "Dashboard",
        description: "Un dashboard permettant de gérer des factures.",
        keyWords: ["Framework utilisé: Next", "Bibliothèque utilisée: React"],
        category: "perso",
        texte: 
        [
            "Ce projet à été réalisé en suivant le tutoriel de Vercel. Il permet d'apprendre à développer une application fullstack de gestions de factures en utilisant une database, avec un système de compte et de connexions.", 
            "Grâce à ce tutoriel j'ai pu comprendre plusieurs principes de Next et comment optimiser l'application de la meilleure manière. De plus j'ai appris à déployer l'application avec Vercel et à utiliser des bases de données pour gérer et stocker toutes les données nécessaires pour faire foncitonner l'application. Enfin, j'ai aussi acquérit quelques connaissances en UX, par exemple pour afficher en avance des modèle en attendant que les données soient récupérées de la base de données."
        ],
        img: "/assets/dashboard.png",
        link: "https://nextjs-dashboard-sooty-two-16.vercel.app/"
    },
    {
        id: 6,
        title: "Portfolio",
        description: "Un site web qui centralise tous mes projets scolaires et personnels.",
        keyWords: ["Framework utilisé: Vite", "Durée 1 semaine", "Bibliothèque utilisée: React"],
        category: "perso",
        texte: 
        [
            "J'ai conçu ce portfolio en utilisant Vite.js avec React, un duo technologique performant et moderne.",
            "Ce choix me permet de maintenir le site de manière simple et efficace, tout en facilitant l'ajout progressif de mes projets. Ainsi, je peux régulièrement enrichir ce portfolio pour mettre en valeur mes compétences en développement logiciel."
        ],
        img: "/assets/portfolio.png"
    },
    {
        id: 7,
        title: "Snake",
        description: "Une petite application qui permet de jouer au Snake.",
        keyWords: ["Langage utilisé: JavaScript"],
        category: "perso",
        texte: 
        [
            "Ce projet permet de jouer à Snake sur une application web",
            "Le but de ce petit projet est de réaliser quelque chose de concret pour valider mes compétences en JavaScript mais aussi pour avoir une première approche de la POO (programmation orientée objet) dans ce langage. De plus, j'ai aussi appris à manipuler le DOM pour réaliser ce projet."
        ],
        img: "/assets/snake.png"
    },
    {
        id: 8,
        title: "TassElysium",
        description: "Un site web de vente de boissons chaudes.",
        keyWords: [
            "Langages utilisés: PHP, TypeScript",
            "Frameworks: Symfony, Vite.js",
            "Durée: 5 mois",
            "Equipe: 2 personnes"
        ],
        category: "scolaire",
        texte: 
        [
            "TassElysium est un site web développé dans le cadre d’un projet scolaire de cinq mois, réalisé en équipe de cinq personnes. Ce projet avait pour objectif de concevoir et de livrer une application fonctionnelle en suivant un processus complet de développement. Le back-end, développé avec Symfony, offre une API REST robuste, tandis que le front-end, conçu avec Vite.js, TypeScript et Tailwind CSS, propose une interface moderne et réactive.",
            "Chaque étape du projet a été rigoureusement menée, de la communication initiale et de l’analyse des besoins à la conception, en passant par le développement et la gestion du projet. Nous avons élaboré des diagrammes UML pour structurer efficacement l’application et avons intégré des design patterns tels que le State Pattern afin d’assurer une architecture solide et évolutive. Une attention particulière a été accordée au travail d’équipe et à la répartition des tâches, avec un suivi constant de l'avanceent du projet",
            "À la fin du projet, une analyse critique a été réalisée pour identifier les succès et les points à améliorer. Cette expérience nous a permis de consolider nos compétences en développement web, en gestion de projet et en résolution de problèmes techniques dans un cadre collaboratif.",
        ],
        img: "/assets/tasselysium.png",
        link: "https://tasselysium.noknok.dev/#/",
        toDisplay: true
    },
    {
        id: 9,
        title: "Melody-odyssey",
        description: "Un jeu vidéo réalisé durant une Game jam",
        keyWords: [
            "Moteur utilisé: Godot",
            "Durée: 30 heures",
            "Equipe: 6 personnes"
        ],
        category: "perso",
        texte: 
        [
            "Lors d'une game jam intense de 30 heures, j'ai eu l'opportunité de développer un jeu vidéo au sein d'une équipe de 6 personnes, une expérience qui m'a permis d'acquérir et de renforcer de nombreuses compétences. Nous avons dû gérer efficacement la pression du temps, prioriser les tâches et collaborer étroitement pour respecter les délais serrés. J'ai également appris à utiliser le moteur de jeu Godot, en m'adaptant rapidement à ses fonctionnalités et en contribuant à la création d'un prototype fonctionnel.",
            "Cette expérience m'a permis de développer mes compétences en résolution de problèmes, en communication d'équipe et en gestion de projet, tout en renforçant ma capacité à travailler sous contraintes techniques et temporelles."
        ],
        img: "/assets/melody_odyssey.png",
        link: "https://koriaaaaaaaaaaa.itch.io/melody-odyssey",
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