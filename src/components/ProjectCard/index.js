import "./index.css";

const ProjectCard = (props) => {
    const {project} = props;
    const {imageURL,description,title} = project;
    
    return(
        <li className="project-container">
            <img src={imageURL} className="project-img" alt="img" />
            <h1>{title}</h1>
            <p>{description}</p>
        </li>
    )
}

export default ProjectCard;