import './navBar.css';
import RotatingName from './rotatingName';
import { Link, useLocation } from 'react-router-dom';
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
} from "react-icons/ai";

import { FaWhatsappSquare } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

const NavBar = () => {
 
  const { pathname } = useLocation();
  const [path, setPath] = useState('');

  useEffect(()=>{
    setPath(pathname)
  },[pathname])

  return (
    <div className="navBar-wrapper">
      <RotatingName />
      <div className="other-links">
        <Link to="/">
          <div>home</div>
          <div className={`link-line ${path === "/" ? "active" : ""}`} />
        </Link>
        <Link to="/about">
          <div>about me</div>
          <div
            className={`link-line ${path.includes("/about") ? "active" : ""}`}
          />
        </Link>
        <Link to="/projects">
          <div>my projects</div>
          <div
            className={`link-line ${
              path.includes("/projects") ? "active" : ""
            }`}
          />
        </Link>
        <Link to="/contact">
          <div>contact me</div>
          <div
            className={`link-line ${path.includes("/contact") ? "active" : ""}`}
          />
        </Link>
      </div>
      <div className="social-media">
        <a href="#">
          <AiFillLinkedin className="social-icon" />
        </a>
        <a href="#">
          <AiOutlineGithub className="social-icon" />
        </a>
        <a href="#">
          <AiFillTwitterCircle className="social-icon" />
        </a>
        <a href="#">
          <FaWhatsappSquare className="social-icon" />
        </a>
      </div>
    </div>
  );
}
 
export default NavBar;