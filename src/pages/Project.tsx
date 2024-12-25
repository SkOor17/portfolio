import { useParams } from 'react-router-dom';
import { projects } from '../data/datas';
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

    const otherProjects = []
    for (let index = 0; otherProjects.length < 3; index++) {
        if (projects[index].id !== projectIdNum) {
            otherProjects.push(projects[index])
        }
    }

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
                <div className='flex flex-col gap-6 w-full items-center lg:flex-row lg:justify-center'>
                    {otherProjects.map((projet) => (
                        <CardProject key={projet.id} id={projet.id} description={projet.description} keyWords={projet.keyWords}>{projet.title}</CardProject>
                    ))}
                </div>
            </div>
        </div>
    )
}
