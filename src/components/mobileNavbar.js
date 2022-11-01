import "./mobileNavbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import RotatingName from "./rotatingName";
import { useState } from "react";

const MobileNavbar = () => {
  const [showLink, setShowLink] = useState(false);

  const toggleLink = () => {
    setShowLink(!showLink);
  };
  return (
    <div className="mobile-navbar-wrapper">
      <div className="mobile-nav-center">
        <div className="mobile-nav-header">
          <RotatingName />
          <div className="handbugger-icon" onClick={toggleLink}>
            <FaTimes className={`bar ${!showLink && "remove-icon"}`} />

            <FaBars className={`bar ${showLink && "remove-icon"}`} />
          </div>
        </div>
        <div className={`mobile-link-container ${showLink && "show-link"}`}>
          <Link to="/" onClick={toggleLink}>
            home
          </Link>
          <hr className="mobile-rule" />
          <Link to="/about" onClick={toggleLink}>
            about me
          </Link>
          <hr className="mobile-rule" />
          <Link to="/projects" onClick={toggleLink}>
            my projects
          </Link>
          <hr className="mobile-rule" />
          <Link to="/contact" onClick={toggleLink}>
            contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
