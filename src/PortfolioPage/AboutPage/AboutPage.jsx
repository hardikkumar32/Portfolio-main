import "../../PortfolioPage/PortfolioPage.scss";
import myPic from "../../assets/Portfolioimg2.jpg";
import { ArrowRight } from "lucide-react";

function AboutPage() {
  return (
    <div className="about-page-container">
      <div className="about-page">
        <section className="about-content">
          <h1>About</h1>
          <div className="experience">
            <div className="about-img">
              <img src={myPic} alt="" className="about-img" />
            </div>
            <div className="data">
              <ul>
                <li className="list-item">
                  <span className="arrow">→</span>
                  <span classname="text">
                    Passionate developer focused on transforming ideas into
                    real-world, interactive web applications
                  </span>
                </li>
                <li className="list-item">
                  <span className="arrow">→</span>
                  <span classname="text">
                    Experienced in building data-driven dashboards and scalable
                    full-stack solutions
                  </span>
                </li>
                <li className="list-item">
                  <span className="arrow">→</span>
                  <span classname="text">
                    Skilled at developing responsive, user-friendly interfaces
                    with clean design principles
                  </span>
                </li>
                <li className="list-item">
                  <span className="arrow">→</span>
                  <span classname="text">
                    Always learning and exploring new tools, libraries, and
                    technologies to stay ahead
                  </span>
                </li>
                <li className="list-item">
                  <span className="arrow">→</span>
                  <span classname="text">
                    Enjoy solving real-world problems through efficient,
                    maintainable code
                  </span>
                </li>
                <li className="list-item">
                  <span className="arrow">→</span>
                  <span classname="text">
                    Thrive in collaborative, agile environments where innovation
                    meets execution
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
