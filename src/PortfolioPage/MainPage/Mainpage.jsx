import "../../PortfolioPage/PortfolioPage.scss";
import myPic from "../../assets/Portfolio1.jpg";

const navItems = {
  about: "About",
  experience: "Experience",
  projects: "Projects",
  contact: "Contact",
};

import TextChange from "./TextChange";

function Mainpage({
  aboutRef,
  experienceRef,
  projectsRef,
  contactRef,
  scrollToSection,
}) {
  const handleClick = (currentSelectedPage) => {
    switch (currentSelectedPage) {
      case navItems.about:
        scrollToSection(aboutRef);
        break;
      case navItems.experience:
        scrollToSection(experienceRef);
        break;
      case navItems.projects:
        scrollToSection(projectsRef);
        break;
      case navItems.contact:
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
  };
  return (
    <div className="main-page">
      <header className="header">
        <h2>Portfolio</h2>
        <nav>
          <ul className="nav-items">
            {Object.values(navItems).map((item, index) => (
              <li key={index}>
                <a onClick={() => handleClick(item)}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="mainPageContent">
        <div className="details">
          <h1>
            <TextChange />
          </h1>
          <p>
            {/* I'm a Software Engineer with experience in building full-stack web
            applications using ReactJS, Node.js, and Express. I focus on
            creating intuitive user interfaces and secure, scalable backend
            systems. I’ve worked on real-time dashboards, learning platforms,
            and API integrations, and thrive in agile, team-oriented
            environments. */}
            Software Engineer skilled in React, Node.js, and Express—building
            intuitive UIs and scalable backends for dashboards, learning
            platforms, and APIs.
          </p>
          <button
            className="contactBtn"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact Me
          </button>
        </div>
        <div className="imgContainer">
          <img src={myPic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
