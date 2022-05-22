import logo from "./logo.svg";
import Login from './Components/Login';
import Register from './Components/Register'
import Nav from "./Layouts/Nav";
import ProductForm from "./Components/ProductForm";
import ViewCart from "./Components/ViewCart";
import ProtectedRoute from "./ProtectedRoute";

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

            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route element={<ProtectedRoute />} >
            <Route path="/addproduct" element={<ProductForm/>} />
            <Route path="/viewproduct" element={<ViewProduct/>} />
            <Route path="/viewcart" element={<ViewCart/>} />
            </Route>
              
              
            </Routes>
        </Router>
  );
}

export default App;
