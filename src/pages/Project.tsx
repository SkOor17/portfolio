import { useParams } from 'react-router-dom';
import { ProjectType, projects } from '../data/datas';
import Button from '../components/Button';
import TitleSection from '../components/TitleSection';
import CardProject from '../components/CardProject';
import NotFound from './NotFound';

export default function Project() {
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
        <div className='flex flex-col py-6 gap-8 h-full'>
            <div className='flex flex-col gap-8 h-full'>
                <p className='title'>
                    Projet {projet?.title}
                </p>
                <div className='flex flex-col gap-8 items-center md:flex-row md:items-start md:gap-24'>
                    <div className='md:w-[calc(75vh)] md:gap-6 md:flex md:flex-col md:justify-between'> 
                        <div>
                            {projet?.texte} 
                        </div>
                        <div className='hidden md:block'>
                            <Button type='primary' link='/projects'>Voir les autres projets</Button>
                        </div>
                    </div>
                    <div className="w-3/4 flex justify-center lg:w-fit">
                        <img
                            className="lg:max-h-[calc(60vh)] max-w-[calc(40vh)] rounded-lg"
                            src={projet?.img}
                            alt=""
                        />
                    </div>
                </div>
                <div className='md:hidden w-full flex justify-center'>
                    <Button type='primary' link='/projects'>Voir les autres projets</Button>
                </div>
            </div>

            <div className='flex flex-col gap-6'>
                <TitleSection>Voir quelques autres projets.</TitleSection>
                <div className='flex flex-col gap-6 w-full items-center md:flex-row'>
                    {otherProjects.map((projet) => (
                        <CardProject key={projet.id} id={projet.id} description={projet.description} keyWords={projet.keyWords}>{projet.title}</CardProject>
                    ))}
                </div>
            </div>
        </div>
    )
}
