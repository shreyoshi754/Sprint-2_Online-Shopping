import logo from "./logo.svg";
import "./App.css";
import Login from './components/Login';
import Register from './components/Register'
import ProductForm from "./components/ProductForm";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <Router>
            <nav>
                <ul>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/addproduct">Add Product</Link></li>
                  </ul>
              </nav>
            <Routes>
<<<<<<< HEAD

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/addproduct" element={<ProductForm/>} />
=======
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
>>>>>>> 3e1ffeea4b22e6e01bdf53fc4adc8cc19318a125
              
              
            </Routes>
        </Router>
  );
}

export default App;
