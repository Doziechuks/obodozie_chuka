import './App.css';
import HomePage from './pages/homePage';
import NavBar from './components/navBar';
import MobileNavbar from './components/mobileNavbar';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <MobileNavbar />
      <Switch>
        <Route exact path="/" component={HomePage } />
      </Switch>
    </div>
  );
}

export default App;
