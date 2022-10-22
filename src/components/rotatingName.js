import './rotatingName.css';
import { Link } from 'react-router-dom';

const RotatingName = () => {
   const text = "ObodozieChuka";
  return (
    <div className="nav-circle">
      <Link to="/" className="nav-text">
        <p>
          {text.split("").map((char, i) => (
            <h3 style={{ transform: `rotate(${i * 28}deg)` }}>{char}</h3>
          ))}
        </p>
      </Link>
    </div>
  );
}
 
export default RotatingName;