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
          <span>hardikkumar32@gmail.com</span>
        </li>
        <li>
          <CiLinkedin />
          <span>linkedin.com/hardikkumar32</span>
        </li>
        <li>
          <FaGithub />
          <span>github.com/hardikkumar32</span>
        </li>
      </ul>
    </section>
  );
}

export default ContactPage;
