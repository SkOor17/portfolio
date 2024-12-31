import { useParams } from 'react-router-dom';
import { ProjectType, projects } from '../data/datas';
import Button from '../components/Button';
import TitleSection from '../components/TitleSection';
import CardProject from '../components/CardProject';
import NotFound from './NotFound';
import { motion } from 'motion/react';

export default function Project() {
    const width = window.innerWidth;

    const { projectId } = useParams()
    if (projectId === undefined) throw Error

    const tmp: string = projectId
    const projectIdNum = parseInt(tmp)
    const projet = projects.find((projet) => projet.id===projectIdNum)

    if (projet === undefined) return (<NotFound/>)

    const otherProjects : Array<ProjectType> = []

    function getRandomInt(min:number, max:number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    while (otherProjects.length < 3) {
        const id = getRandomInt(0,projects.length-1)
        
        if (id !== projectIdNum-1 && !otherProjects.includes(projects[id])) {
            otherProjects.push(projects[id])
        }
    }

    console.log(otherProjects.length);
    

    return (
        <div className='flex flex-col py-6 gap-8'>
            <div className='flex flex-col gap-8'>
                <p className='title'>
                    Projet {projet?.title}
                </p>
                <div className='flex flex-col gap-8 items-center justify-between h-[60vh] min-h-fit md:justify-normal md:flex-row md:items-start md:gap-24'>
                    <div className='flex w-full md:w-[calc(75vh)] md:gap-6 md:flex md:flex-col md:min-h-full'> 
                        <div className='space-y-3'>
                            {projet?.texte.map((str, index) => (
                                <p key={index}>{str}</p>
                            ))} 
                        </div>
                        <div className='hidden md:block md:mt-auto'>
                            <Button type='primary' link='/projects'>Voir les autres projets</Button>
                        </div>
                    </div>
                    <motion.div 
                        className="max-w-3/4 flex justify-center lg:max-w-fit"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.75,
                            ease: "easeInOut",
                        }}
                    >
                        <img
                            className="max-h-[calc(60vh)] w-fit rounded-lg object-contain"
                            src={projet?.img}
                            alt=""
                        />
                    </motion.div>
                </div>
                <div className='md:hidden w-full flex justify-center'>
                    <Button type='primary' link='/projects'>Voir les autres projets</Button>
                </div>
            </div>

            <div className='flex flex-col gap-6 py-3'>
                <TitleSection>Voir quelques autres projets.</TitleSection>
                <div className='flex flex-col gap-6 w-full items-center md:flex-row md:justify-center'>
                    {otherProjects.map((projet, index) => (
                        <motion.div
                            key={projet.id}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.75,
                                ease: "easeInOut",
                                delay: width<768 ? 0 : index*0.1 
                            }}
                        >
                            <CardProject id={projet.id} description={projet.description} keyWords={projet.keyWords}>{projet.title}</CardProject>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
