import ProjectCard from "./ProjectCard/ProjectCard";
function ProjectsPage() {
  return (
    <div className="project-page">
      <h1>Projects</h1>
      <div className="project-cards">
        <ProjectCard />
        {/* <ProjectCard />
        <ProjectCard /> */}
      </div>
    </div>
  );
}

export default ProjectsPage;
