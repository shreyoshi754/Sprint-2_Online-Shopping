import logo from "./logo.svg";
import "./App.css";
import Login from './Components/Login';
import Register from './Components/Register'


import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Home from "./Components/Home";
function App() {
  return (
    <Router>
            <nav>
                <ul>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                  </ul>
              </nav>
            <Routes>

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
              
              
            </Routes>
        </Router>
  );
}

export default App;
