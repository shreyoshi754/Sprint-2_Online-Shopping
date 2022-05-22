import "./Form.css";
import { useState } from "react";
import { FaUserCircle, FaEnvelope } from "react-icons/fa"; //MdOutlineDriveFileRenameOutline
import { FiLock } from "react-icons/fi";
import { SiNamecheap, SiChevrolet } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import axios from "axios";
import { useSelector } from "react-redux";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ProductForm() {
  // States for registration
  let navigate = useNavigate();
  const temp = useSelector((state) => state);
  console.log(temp.token);
  const token = temp.token;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [catagory, setCatagory] = useState("");

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState(null);
  let newDate = new Date();
  console.log(newDate);
  //image upload to firebase
  const imagesListRef = ref(storage, "images/");
  const uploadFile = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + newDate}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
  };

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
    setSubmitted(false);
  };
  const handleCatagory = (e) => {
    setCatagory(e.target.value);
    setSubmitted(false);
  };

  const obj = { name: name, price: price, catagory: catagory, url: imageUrls };
  console.log(obj);
  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };
  console.log(headers);
  // Handling the form submission
  const handleSubmit = async (e) => {
    console.log("heyyyyyyyyyyyyyyyyy");
    e.preventDefault();
    if (name === "" || price === "" || catagory === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      try {
        console.log(token);
        const response = await axios.post(
          "http://localhost:8083/add",
          {...obj},
          {
            headers: headers,
          }
        );
        const {isAdded,status}= response.data;
        if(isAdded){
        toast.success(status,{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          navigate(`/`);
        }else{
          toast.error(status,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(imageUrls);
  return (
    <div style={{ marginTop: "12%" }}>
      <div className="img-component">
        <img src={imageUrls} style={{ width: "200px", height: "200px" }} />
        <br />
      </div>
      <div className="container">
        <div className="form-box">
          <div className="header-form">
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
                    <SiNamecheap style={{ margin: "5px" }} />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChange={handleName}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <IoIosPricetags style={{ margin: "5px" }} />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  onChange={handlePrice}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <BiCategoryAlt style={{ margin: "5px" }} />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Catagory"
                  onChange={handleCatagory}
                />
              </div>
              <input
                type="file"
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />
              <br />
              <button onClick={uploadFile}> Upload Image</button>
              <br />

              <button
                type="button"
                className="btn btn-secondary btn-block"
                onClick={handleSubmit}
              >
                ADD PRODUCT
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
