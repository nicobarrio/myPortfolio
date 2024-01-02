import './ProjectCard.css';

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <div>
                <img className="project-picture" src={props.picture} alt=""/>
            </div>
            <div className="project-name">
                <p> {props.name} </p>
            </div>
        </div>
    )
}

export default ProjectCard;