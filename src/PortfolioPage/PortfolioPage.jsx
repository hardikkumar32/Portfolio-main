import { useRef, useState } from "react";
import "./PortfolioPage.css";
import Mainpage from "./MainPage/Mainpage";
import AboutPage from "./AboutPage/AboutPage";
import ExperiencePage from "./ExperiencePage/ExperiencePage";
import ProjectsPage from "./ProjectsPage/ProjectsPage";

function PortfolioPage() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    debugger;
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="container">
      <Mainpage
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <div ref={experienceRef}>
        <ExperiencePage />
      </div>
      <div ref={projectsRef}>
        <ProjectsPage />
      </div>
    </section>
  );
}

export default PortfolioPage;
