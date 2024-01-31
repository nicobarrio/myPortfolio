import './ProjectList.scss';
import Project1 from '../../../../assets/project-1.png';
import Project2 from '../../../../assets/project-2.png';
import ProjectCard from '../../subcomponents/ProjectCard/ProjectCard.jsx'

const ProjectList = () => {
    return (
    <div className="project-list"> 
        <div>
            <ProjectCard picture={Project1} name='Estudio Barca' />
            <ProjectCard picture={Project2} name='Culmen' />
        </div>
    </div>
    )
}

export default ProjectList;