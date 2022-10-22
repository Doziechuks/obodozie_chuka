import "./mobileNavbar.css";
import { FaBars } from "react-icons/fa";
import { BsArrowBarUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNavbar = () => {
  const text = "ObodozieChuka";
  const [showLink, setShowLink] = useState(false);

  const toggleLink = () => {
    setShowLink(!showLink);
  };
  return (
    <div className="mobile-navbar-wrapper">
      <div className="mobile-nav-center">
        <div className="mobile-nav-header">
          <div className="nav-circle">
            <Link to="/" className="nav-text">
              <p>
                {text.split("").map((char, i) => (
                  <h3 style={{ transform: `rotate(${i * 28}deg)` }}>{char}</h3>
                ))}
              </p>
            </Link>
          </div>
          <div className="handbugger-icon" onClick={toggleLink}>
            {showLink ? <BsArrowBarUp className="bar" /> : <FaBars className="bar" />}
          </div>
        </div>
        {showLink && (
          <div className={`mobile-link-container ${showLink && "show-link"}`}>
            <Link to="/" onClick={toggleLink}>
              home
            </Link>
            <Link to="/about" onClick={toggleLink}>
              about me
            </Link>
            <Link to="/projects" onClick={toggleLink}>
              my projects
            </Link>
            <Link to="/contact" onClick={toggleLink}>
              contact me
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
