import ProjectCollection from './projectCollection';
import projectData from './projectData';
import './projectComponent.css';

const ProjectSection = () => {
  return (
    <div className="project-section-box">
      <div className="project-section-title">
        <div className="line" />
        <h1>my projects</h1>
      </div>
      <div className="project-section-wrapper">
        {projectData
          .filter((project, projectIndex) => projectIndex < 3)
          .map((project) => {
            return <ProjectCollection key={project.id} project={project} />;
          })}
      </div>
    </div>
  );
}
 
export default ProjectSection;