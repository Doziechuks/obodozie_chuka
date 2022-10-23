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
      <a href="#">
        <AiFillLinkedin className="mobile-handle" />
      </a>
      <a href="#">
        <AiOutlineGithub className="mobile-handle" />
      </a>
      <a href="#">
        <AiFillTwitterCircle className="mobile-handle" />
      </a>
      <a href="#">
        <FaWhatsappSquare className="mobile-handle" />
      </a>
    </div>
  );
}
 
export default MobileMediaHandle;