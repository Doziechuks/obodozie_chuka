import './App.css';
import HomePage from './pages/homePage';
import NavBar from './components/navBar';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage } />
      </Switch>
    </div>
  );
}

export default App;
