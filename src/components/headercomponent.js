import './headercomponent.css';

const HeaderComponent = () => {
  return (
    <div className="header-component-wrapper">
      <div className="header-title">
        <h1>hi, i am obodozie chuka, a frontend developer.</h1>
        <p>
          I use modern technology to create amazing, and user friendly digital
          products.
        </p>
        <a className="resume" href="Obodozie_Chuka_myResume.pdf" target="blank">
          download resume
        </a>
      </div>
      <div className="my-image-box">
        <img className="my-image" src="./images/chuka1.png" alt="chuka" />
      </div>

      {/* <div className="header-wrapper">
        
        
      </div> */}
    </div>
  );
}
 
export default HeaderComponent;