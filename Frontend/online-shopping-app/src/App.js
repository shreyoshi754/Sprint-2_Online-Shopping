import logo from "./logo.svg";
import Login from './Components/Login';
import Register from './Components/Register'
import Nav from "./Layouts/Nav";
import ProductForm from "./Components/ProductForm";


import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Home from "./Components/Home";
import ViewProduct from "./Components/ViewProduct";
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
              
              
            </Routes>
        </Router>
  );
}

export default App;
