import logo from "./logo.svg";
import Login from './components/Login';
import Register from './components/Register'
import Nav from "./Layouts/Nav";
import ProductForm from "./components/ProductForm";
import ViewCart from "./components/ViewCart";
import ProtectedRoute from "./ProtectedRoute";

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
