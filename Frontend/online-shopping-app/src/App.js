import logo from "./logo.svg";
import Login from './Components/Login';
import Register from './Components/Register'
import Nav from "./Layouts/Nav";
import ProductForm from "./Components/ProductForm";
import Home from "./Components/Home";


import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
function App() {
  return (
    <Router>
            <nav>
              <Nav />
                <ul>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/addproduct">Add Product</Link></li>
                  </ul>
              </nav>
            <Routes>

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/addproduct" element={<ProductForm/>} />
              
              
            </Routes>
        </Router>
  );
}

export default App;
