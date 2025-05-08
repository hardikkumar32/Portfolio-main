import React from "react";
import "./PortfolioPage.css";
const navItems = [
  { name: "About", href: "#home" },
  { name: "Experience", href: "#about" },
  { name: "Projects", href: "#services" },
  { name: "Contact", href: "#contact" },
];
function PortfolioPage() {
  return (
    <div className="mainpage">
      <header className="header">
        <h2>Portfolio</h2>
        <nav>
          <ul className="nav-items">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href="">{item.name}</a>
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
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
