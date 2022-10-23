import './projectsPageContent.css';
import ProjectCollection from "./projectCollection";
import projectData from "./projectData";

const ProjectPageContent = () => {
  return (
    <div className="project-page-content-wrapper">
      <div className="project-content-title">
        <div className="project-content-line" />
        <h1>my projects</h1>
        <div className="project-pic-box">
          <img src="./images/circle.png" alt="" className="project-circle-image" />
        </div>
      </div>
      <div className="project-display">
        {
          projectData.map((project) => {
            return <ProjectCollection key={project.id} project={project} />
          })
        }
      </div>
    </div>
  );
}
 
export default ProjectPageContent;