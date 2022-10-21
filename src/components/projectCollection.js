import './projectCollection.css';
import { TbExternalLink } from "react-icons/tb";

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
              <TbExternalLink className='projectLink' />
            </div>
          </a>
        </div>
        <h1 className="collection-title">{title}</h1>
      </a>
    </div>
  );
}
 
export default ProjectCollection;