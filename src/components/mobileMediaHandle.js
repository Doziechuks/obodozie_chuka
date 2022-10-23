import './mobileMediaHandle.css';
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
} from "react-icons/ai";

import { FaWhatsappSquare } from "react-icons/fa";

const MobileMediaHandle = () => {
  return (
    <div className="mobile-mediaHandle-wrapper">
      <a href="https://www.linkedin.com/in/chuka-obodozie/" target="blank">
        <AiFillLinkedin className="mobile-handle" />
      </a>
      <a href="https://github.com/Doziechuks" target="blank">
        <AiOutlineGithub className="mobile-handle" />
      </a>
      <a href="https://twitter.com/ObodozieChuka" target="blank">
        <AiFillTwitterCircle className="mobile-handle" />
      </a>
      <a href="https://wa.me/message/6NJWVCNULGBTC1" target="blank">
        <FaWhatsappSquare className="mobile-handle" />
      </a>
    </div>
  );
}
 
export default MobileMediaHandle;