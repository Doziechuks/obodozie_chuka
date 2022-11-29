import './headercomponent.css';

const HeaderComponent = () => {
  return (
    <div className="header-component-wrapper">
      <div className="header-title">
        <h1>
          hi, i am obodozie chuka,
          <br /> a frontend developer.
        </h1>
        <p>
          Solving real life poblems, team work, and innovations are areas I am
          always passionate about, and software engineering has given me a good
          opportunity to maximize my potentials in those areas.
        </p>
        <a className="resume" href="Chuka_Obodozie.pdf" target="blank">
          download resume
        </a>
      </div>
      <div className="my-image-box">
        <img className="my-image" src="./images/chukacc.png" alt="chuka" />
      </div>
    </div>
  );
}
 
export default HeaderComponent;