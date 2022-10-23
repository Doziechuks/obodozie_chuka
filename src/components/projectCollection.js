import './projectCollection.css';
import { TbExternalLink } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectCollection = ({ project }) => {
  const { title, imageUrl, gitLink, liveUrl } = project;
  return (
    <div className="wrapp">
      <div
        className="project-collection-wrapper"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <a href={liveUrl} target="blank">
          <div className="background" />
          <div className="collection-content">
            <p>visit</p>
            <TbExternalLink className="projectLink" />
          </div>
        </a>
      </div>
      <div className="title-git-wrapper">
        <a href={liveUrl} target='blank'>
          <h1 className="collection-title">{title}</h1>
        </a>
        <a href={gitLink} target="blank">
          <AiOutlineGithub className="git-link" />
        </a>
      </div>
    </div>
  );
}
 
export default ProjectCollection;