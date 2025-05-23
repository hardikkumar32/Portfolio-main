import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "../../PortfolioPage/PortfolioPage.scss";
function ContactPage() {
  return (
    <section className="contact-container">
      <div className="contact-content">
        <h1>Contact</h1>
        <h3>Feel Free to reach out!</h3>
      </div>
      <ul className="social-accounts">
        <li>
          <MdOutlineEmail size={20} />
          <span>
            <a href="mailto:hardikkumar32@gmail.com">hardikkumar32@gmail.com</a>
          </span>
        </li>
        <li>
          <CiLinkedin />
          <span>
            <a href="https://www.linkedin.com/in/hardikkumar32/">Linkedin</a>
          </span>
        </li>
        <li>
          <FaGithub />
          <span>
            <a href="https://github.com/hardikkumar32">Github</a>
          </span>
        </li>
      </ul>
    </section>
  );
}

export default ContactPage;
