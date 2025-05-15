import "../../PortfolioPage/PortfolioPage.scss";
import myPic from "../../assets/Portfolio1.jpg";

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
                <li>
                  &rarr; Passionate developer focused on transforming ideas into
                  real-world, interactive web applications
                </li>
                <li>
                  &rarr; Experienced in building data-driven dashboards and
                  scalable full-stack solutions
                </li>
                <li>
                  &rarr; Skilled at developing responsive, user-friendly
                  interfaces with clean design principles
                </li>
                <li>
                  &rarr; Always learning and exploring new tools, libraries, and
                  technologies to stay ahead
                </li>
                <li>
                  &rarr; Enjoy solving real-world problems through efficient,
                  maintainable code
                </li>
                <li>
                  &rarr; Thrive in collaborative, agile environments where
                  innovation meets execution
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
