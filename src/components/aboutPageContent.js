import './aboutPageContent.css';

const AboutPageContent = () => {
  return (
    <div className="aboutPage-content-wrapper">
      <div className="about-me">
        <h1>hi, i am obodozie chuka, a frontend developer.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum facere
          non aspernatur nam. Alias, debitis id. Maxime aspernatur quas, iste
          minus, consectetur impedit, nihil sint magni distinctio libero error
          adipisci.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste
          ratione ipsa non ducimus et incidunt itaque nemo tempore laudantium
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet impedit
          molestiae possimus numquam, accusamus distinctio odio corrupti
          maiores?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          quis praesentium itaque excepturi facilis aut corporis quibusdam
          quaerat blanditiis cum ex dignissimos, ad error, et iste beatae quod.
        </p>
        <a className="resume about-resume" href="Obodozie_Chuka_myResume.pdf" target="blank">
          download resume
        </a>
      </div>
      <div className="about-image-box">
        <img className="about-image" src="./images/chukacc.png" alt="chuka" />
      </div>
    </div>
  );
}
 
export default AboutPageContent;