import ProjectCollection from './projectCollection';
import projectData from './projectData';
import { Link } from 'react-router-dom';
import './projectComponent.css';

const ProjectSection = () => {
  return (
    <div className="project-section-box">
      <div className="project-section-title">
        <div className="line" />
        <h1>my recent projects</h1>
      </div>
      <div className="project-section-wrapper">
        {projectData
          .filter((project, projectIndex) => projectIndex < 3)
          .map((project) => {
            return <ProjectCollection key={project.id} project={project} />;
          })}
      </div>
      <Link to='/projects' className='others'>see all projects</Link>
    </div>
  );
}
 
export default ProjectSection;