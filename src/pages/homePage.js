import './homePage.css';
import HeaderComponent from '../components/headercomponent';
import ProjectSection from '../components/projectComponent';
const HomePage = () => {
  return ( 
    <div className="homePage-wrapper">
      <HeaderComponent />
      <ProjectSection />
    </div>
   );
}
 
export default HomePage;