import './App.css';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import NavBar from './components/navBar';
import MobileNavbar from './components/mobileNavbar';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <MobileNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
