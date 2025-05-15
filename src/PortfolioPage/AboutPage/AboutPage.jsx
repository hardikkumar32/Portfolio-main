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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              aspernatur impedit ducimus, quae libero similique modi dolorem
              deleniti repudiandae ipsum et dolor eaque! Perferendis
              perspiciatis qui eius? Cumque, reiciendis nemo.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
