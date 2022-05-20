import logo from "./logo.svg";
import "./App.css";
import Login from './components/Login';
import Register from './components/Register'
import ProductForm from "./components/ProductForm";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Home from "./components/Home";
import ViewProduct from "./components/ViewProduct";
function App() {
  return (
    <Router>
            <nav>
                <ul>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/addproduct">Add Product</Link></li>
                    <li><Link to="/viewproduct">View Products</Link></li>
                  </ul>
              </nav>
            <Routes>

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/addproduct" element={<ProductForm/>} />
            <Route exact path="/viewproduct" element={<ViewProduct/>} />
              
              
            </Routes>
        </Router>
  );
}

export default App;
