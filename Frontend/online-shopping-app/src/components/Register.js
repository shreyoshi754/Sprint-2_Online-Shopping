import "./Form.css";
import { useState } from "react";
import { FaUserCircle,FaEnvelope,} from "react-icons/fa";//MdOutlineDriveFileRenameOutline
import { FiLock } from "react-icons/fi";
import { SiNamecheap,SiChevrolet } from "react-icons/si";

export default function Form() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
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
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
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
          <h4 className="text-primary text-center">
          <FaUserCircle style={{ fontSize: "110px",color:"white"}}/>
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <SiNamecheap style={{margin:"5px"}}/>
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <FaEnvelope style={{margin:"5px"}}/>
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <FiLock style={{margin:"5px"}}/>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="input-group mb-3">
              
              <label>
                Role :
                <select value={role} >
                  <option value="user">User</option>
                  <option value="seller">Seller</option>
                </select>
              </label>
            </div>
            <button type="button" className="btn btn-secondary btn-block">
              REGISTER
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
}
