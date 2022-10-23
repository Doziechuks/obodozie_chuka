import './loaderPage.css';
import { FaHandPeace } from "react-icons/fa";

const LoaderPage = () => {
  return (
    <div className="loader-wrapper">
      <span className="first">c</span>
      <span className="second">h</span>
      <span className="third">u</span>
      <span className="fourth">k</span>
      <span className="fifth">a</span>
      <span className="sixth">
        <FaHandPeace className='hand'/>
      </span>
    </div>
  );
}
 
export default LoaderPage;