import './App.css';
import About from './About';
import Contact from './Contact';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Edit from './Edit';
function App() {
  return (
    <Router>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      {/* <About /> */}
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Edit" component={Edit} />
    </Router>
  );
}

export default App;
