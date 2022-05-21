import logo from "./logo.svg";
import Login from './components/Login';
import Register from './components/Register'
import Nav from "./Layouts/Nav";
import ProductForm from "./components/ProductForm";
import ViewCart from "./components/ViewCart";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Home from "./components/Home";
import ViewProduct from "./components/ViewProduct";
function App() {
  return (
    <Router>
            <nav>
              <Nav />
              </nav>
            <Routes>

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/addproduct" element={<ProductForm/>} />
            <Route exact path="/viewproduct" element={<ViewProduct/>} />
            <Route exact path="/viewcart" element={<ViewCart/>} />
              
              
            </Routes>
        </Router>
  );
}

export default App;
