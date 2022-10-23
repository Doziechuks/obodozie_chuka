import './App.css';
import LoaderPage from './pages/loaderPage';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import ProjectPage from './pages/projectsPage';
import NavBar from './components/navBar';
import MobileNavbar from './components/mobileNavbar';
import MobileMediaHandle from './components/mobileMediaHandle';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsloading] = useState(false);
  useEffect(()=>{
    const timerId = setInterval(() => {
      setIsloading(true);

    }, 5000);
  }, [])
  return (
    <div className="general-wrapper">
      {
      isLoading ?
      <div className="wrapper">
        <NavBar />
        <MobileNavbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/projects" component={ProjectPage} />
        </Switch>
        <MobileMediaHandle />
      </div>
      :
      <LoaderPage />
}
    </div>
  );
}

export default App;
