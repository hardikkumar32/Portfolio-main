import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
function ExperiencePage() {
  return (
    <div className="experience-page">
      <h1>Experience</h1>
      <div className="experience-content">
        <div className="icons">
          <span>
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span>
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span>
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span>
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span>
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span>
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span>
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>
        <section className="data">
          <div className="data-container">
            <h2>Security First LTD</h2>
            <h3>Web Developer Intern</h3>
            <h4>📍 Cambridge, ON | 🗓️ Sep 2024 – Dec 2024</h4>
            <ul>
              <li>
                Redesigned the company homepage, leading to a 25% increase in
                user engagement and better navigation flow
              </li>
              <li>
                Developed a course purchase page, resulting in a 15% boost in
                training course conversions
              </li>
              <li>
                Built a custom online learning platform for security officer
                exam prep, increasing accessibility and reducing support
                requests by 30%
              </li>
            </ul>
          </div>
          <div className="data-container">
            <h2>Recur Club</h2>
            <h3>Software Engineer</h3>
            <h4>📍 Gurugram, India | 🗓️ Apr 2022 – May 2023</h4>
            <ul>
              <li>
                Developed a data dashboard with dynamic visualizations, reducing
                manual effort by 60% and improving analysis speed.
              </li>
              <li>
                Designed an investor dashboard with real-time updates,
                streamlining deal tracking and improving visibility
              </li>
              <li>
                Built and optimized RESTful APIs with Node.js, Express, and
                MongoDB, improving API response time by 40%.
              </li>
              <li>
                Integrated third-party APIs for payment processing,
                authentication, and data retrieval, improving platform
                functionality.
              </li>
              <li>
                Implemented role-based authentication and secure access control,
                enhancing data security and user management.
              </li>
            </ul>
          </div>
          <div className="data-container">
            <h2>Coding Ninjas</h2>
            <h3>Mentor (Internship)</h3>
            <h4>📍 Delhi, India | 🗓️ Nov 2020 – Apr 2021</h4>
            <ul>
              <li>
                Conducted live sessions with the lectures on data structures and
                algorithms and took live doubts during practice sessions.
              </li>
              <li>
                Trained students on data structures, algorithms, and programming
                fundamentals in C++.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExperiencePage;
