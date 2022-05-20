//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {fa-regular,fa-circle-user} from '@fortawesome/free-solid-svg-icons'
import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import "./Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../Actions/action";
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const temp = useSelector((state) => state);
  //States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change

  //console.log(temp)
  //Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      console.log("error");
      toast.dark("Cradentials can't be empty", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setSubmitted(true);
      setError(false);
      dispatch(setLogin("xyz"));
      console.log(email, password);
      navigate(`/`);
    }
  };
  const handleTry = (e) => {
    e.preventDefault();
    dispatch(setLogin("xyz"));
    console.log(email, password);
    navigate(`/`);
  };
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          {/* <h4 className="text-primary text-center"><
					i class="fa-solid fa-circle-user" style={{ fontSize: "110px" }}>
					</i></h4> */}
          <h4 className="text-primary text-center">
            <FaUserCircle style={{ fontSize: "110px", color: "white" }} />
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FaEnvelope style={{ margin: "5px" }} />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={handleEmail}
                required
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FiLock style={{ margin: "5px" }} />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                onChange={handlePassword}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={handleSubmit}
            >
              LOGIN
            </button>
            <div className="message">
              <div>
                <input type="checkbox" style={{ color: "#088F8F" }} /> Remember
                ME
              </div>
              <div>
                <a href="#">Forgot your password</a>
              </div>
            </div>
            <label style={{ color: "#088F8F" }}>New User</label>
            <div>
              <a href="#" onClick={navigate(`/Register`)}>Register here</a>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
