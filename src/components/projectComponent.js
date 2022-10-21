import ProjectCollection from './projectCollection';
import projectData from './projectData';
import './projectComponent.css';

const ProjectSection = () => {
  return ( 
    <div className="project-section-wrapper">
      {
        projectData.filter((project, projectIndex) => projectIndex < 3).map((project) => {
          return <ProjectCollection key={ project.id } project={ project } />;
        })
      }
      
    </div>
   );
}
 
export default ProjectSection;