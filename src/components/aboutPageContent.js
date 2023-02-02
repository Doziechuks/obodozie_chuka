import './aboutPageContent.css';

const AboutPageContent = () => {
  return (
    <div className="aboutPage-content-wrapper">
      <div className="about-me">
        <h1>hi, i am obodozie chuka, a frontend developer.</h1>
        <p>
          Solving problems, innovations, team work, and collaboration has always
          been things I have a penchant for. I realised that the software
          enginnering space gives me a great opportunity to maximize my
          potentials in these areas.
        </p>
        <p>
          As a frontend developer, I have strong skills and expertise in
          JavaScript, React.js, HTML, CSS, and web standards.
        </p>
        <p>
          I am very enthusiastic and meticulous about my job, and I give in my
          best and never give up on tasks and projects until fully executed to
          clients taste and standard. I am also a passionate programmer, and I
          enjoy bringing ideas and solutions that help humanity. I always add
          value to any place or system I find myself in.
        </p>
        <p>
          Due to my love and passion for learning and growth, I am always open
          to new learning opportunities, as that in turn enhances my growth.
        </p>
        <div className="skill-box">
          <h3>i build with but not limited to:</h3>
          <div className="list">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Redux</li>
              <li>React</li>
            </ul>
            <ul>
              <li>JavaScript</li>
              <li>Firebase</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
        </div>
        <a
          className="resume about-resume"
          href="chuka.pdf"
          target="blank"
        >
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