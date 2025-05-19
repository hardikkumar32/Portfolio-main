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
            Software Engineer with hands-on experience in building scalable web
            applications using technologies like ReactJS, Node.js, and Express.
            I specialize in creating user-friendly interfaces and secure backend
            systems. With a strong foundation in full-stack development and a
            passion for clean code, I’ve contributed to both startup teams and
            solo projects.
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
