import './projectCollection.css';
import { TbExternalLink } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectCollection = ({ project }) => {
  const { title, imageUrl } = project;
  return (
    <div className="wrapp">
      <a href="#">
        <div
          className="project-collection-wrapper"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <a href="#">
            <div className="background" />
            <div className="collection-content">
              <p>visit</p>
              <TbExternalLink className="projectLink" />
            </div>
          </a>
        </div>
        <div className="title-git-wrapper">
          <h1 className="collection-title">{title}</h1>
          <a href="#" target='blank'>
            <AiOutlineGithub className='git-link' />
          </a>
        </div>
      </a>
    </div>
  );
}
 
export default ProjectCollection;