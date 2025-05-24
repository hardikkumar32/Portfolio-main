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
      "A simple 2-player Tic Tac Toe game built with HTML, CSS, and JavaScript. It features a responsive grid, real-time win/draw detection, and a reset option for replay.",
    demoLink: "https://hardikkumar32.github.io/Advance-Tic-Tac-Toe-Game/",
    gitHubLink: "https://github.com/hardikkumar32/Advance-Tic-Tac-Toe-Game",
  },
  weatherApp: {
    name: "Weather App",
    id: "weatherApp",
    description:
      "A simple and responsive weather application developed using HTML, CSS, and JavaScript, which fetches real-time weather data through OpenWeatherMap API.",
    demoLink: "https://hardikkumar32.github.io/weatherapp/",
    gitHubLink: "https://github.com/hardikkumar32/weatherapp",
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
          projectName={projects.weatherApp.name}
          id={projects.weatherApp.id}
          description={projects.weatherApp.description}
          demoLink={projects.weatherApp.demoLink}
          gitHubLink={projects.weatherApp.gitHubLink}
        />
      </div>
    </div>
  );
}

export default ProjectsPage;
