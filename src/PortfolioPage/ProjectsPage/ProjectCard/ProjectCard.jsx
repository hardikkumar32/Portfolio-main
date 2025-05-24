import "../../../PortfolioPage/PortfolioPage.scss";
import yelpCamp from "../../../assets/yelpCampImg.jpg";
import tictactoe from "../../../assets/TictactoeImg.jpg";
import weatherImg from "../../../assets/WeatherAppImg.png";

function ProjectCard({ projectName, id, description, demoLink, gitHubLink }) {
  const selectImage = (id) => {
    switch (id) {
      case "yelpCamp":
        return yelpCamp;
      case "tictactoe":
        return tictactoe;
      case "weatherApp":
        return weatherImg;
      default:
        return yelpCamp;
    }
  };
  return (
    <section className="project-card">
      <div className="card-img-container">
        <img src={selectImage(id)} alt="" />
      </div>

      <h1 className="project-name">{projectName}</h1>
      <p>{description}</p>
      <div className="project-btns">
        <button className="project-btn">
          <a href={demoLink}>Demo</a>
        </button>
        <button className="project-btn">
          <a href={gitHubLink}>Source Code</a>
        </button>
      </div>
    </section>
  );
}

export default ProjectCard;
