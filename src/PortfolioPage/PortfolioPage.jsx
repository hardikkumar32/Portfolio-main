import { useRef, useState } from "react";
import "./PortfolioPage.scss";
import Mainpage from "./MainPage/Mainpage";
import AboutPage from "./AboutPage/AboutPage";
import ExperiencePage from "./ExperiencePage/ExperiencePage";
import ProjectsPage from "./ProjectsPage/ProjectsPage";
import ContactPage from "./ContactPage/ContactPage";

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
    <>
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
      <div ref={contactRef}>
        <ContactPage />
      </div>
    </>
  );
}

export default PortfolioPage;
