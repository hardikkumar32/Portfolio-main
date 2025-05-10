import "../../PortfolioPage/PortfolioPage.css";
import myPic from "../../assets/Portfolio1.jpg";

const navItems = {
  about: "About",
  experience: "Experience",
  projects: "Projects",
  contact: "Contact",
};

function Mainpage({
  aboutRef,
  experienceRef,
  projectsRef,
  contactRef,
  scrollToSection,
}) {
  const handleClick = (currentSelectedPage) => {
    debugger;
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
          <h1>Hi, I am Hardik</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            consequuntur vitae labore vero corrupti laboriosam modi in
            repellendus et temporibus laborum rerum magni soluta perferendis
            expedita minus, aliquid amet dolore.
          </p>
          <button className="contactBtn">Contact Me</button>
        </div>
        <div className="imgContainer">
          <img src={myPic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
