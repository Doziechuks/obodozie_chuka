import './rotatingName.css';
import { Link } from 'react-router-dom';

const RotatingName = () => {
   const text = "ObodozieChuka";
  return (
    <div className="nav-circle">
      <Link to="/" className="nav-text">
        <div>
          {text.split("").map((char, index) => (
            <h3 key={index} style={{ transform: `rotate(${index * 28}deg)` }}>{char}</h3>
          ))}
        </div>
      </Link>
    </div>
  );
}
 
export default RotatingName;