import ProjectCard from "./ProjectCard/ProjectCard";
const projects = {
  yelpCamp: {
    name: "Yelp Camp",
    id: "yelpCamp",
    description:
      "YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.",
    demoLink: "https://github.com/hardikkumar32/YelpCamp",
    gitHubLink: "https://github.com/hardikkumar32/YelpCamp",
  },
  tictactoe: {
    name: "Tic Tac Toe",
    id: "tictactoe",
    description:
      "This is a simple tic tac toe game created using React.js. It is a single player game where you can play against the computer.",
    demoLink: "https://hardikkumar32.github.io/Advance-Tic-Tac-Toe-Game/",
    gitHubLink: "https://github.com/hardikkumar32/Advance-Tic-Tac-Toe-Game",
  },
};
function ProjectsPage() {
  return (
    <div className="project-page">
      <h1>Projects</h1>
      <div className="project-cards">
        <ProjectCard
          projectName={projects.yelpCamp.name}
          id={projects.yelpCamp.id}
          description={projects.yelpCamp.description}
          demoLink={projects.yelpCamp.demoLink}
          gitHubLink={projects.yelpCamp.gitHubLink}
        />

        <ProjectCard
          projectName={projects.tictactoe.name}
          id={projects.tictactoe.id}
          description={projects.tictactoe.description}
          demoLink={projects.tictactoe.demoLink}
          gitHubLink={projects.tictactoe.gitHubLink}
        />
        <ProjectCard
          projectName={projects.tictactoe.name}
          id={projects.tictactoe.id}
          description={projects.tictactoe.description}
          demoLink={projects.tictactoe.demoLink}
          gitHubLink={projects.tictactoe.gitHubLink}
        />
        {/* <ProjectCard /> */}
      </div>
    </div>
  );
}

export default ProjectsPage;
