import "../../../PortfolioPage/PortfolioPage.css";
import myPic from "../../../assets/Portfolio1.jpg";

function ProjectCard() {
  return (
    <section className="project-card">
      <div className="card-img-container">
        <img src={myPic} alt="" />
      </div>

      <h1 className="project-name">Blogging website</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem saepe
        natus id tempore voluptatibus quaerat quisquam dolorem sequi aspernatur,
        nisi voluptatum corrupti molestiae enim illo veritatis modi odio
        commodi!
      </p>
      <div className="project-btns">
        <button className="project-btn">Demo</button>
        <button className="project-btn">Source Code</button>
      </div>
    </section>
  );
}

export default ProjectCard;
