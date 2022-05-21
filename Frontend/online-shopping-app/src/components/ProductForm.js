import "./Form.css";
import { useState } from "react";
import { FaUserCircle,FaEnvelope,} from "react-icons/fa";//MdOutlineDriveFileRenameOutline
import { FiLock } from "react-icons/fi";
import { SiNamecheap,SiChevrolet } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import {IoIosPricetags } from "react-icons/io";
import {BiCategoryAlt} from "react-icons/bi";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../Firebase/firebase";
export default function ProductForm() {
  // States for registration
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [catagory, setCatagory] = useState("");


  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState(null);
//image upload to firebase
  const imagesListRef = ref(storage, "images/");
  const uploadFile = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
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
    setName(e.target.value);
    setSubmitted(false);
  };
  const handleCatagory = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || price === "" || catagory === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
  console.log(imageUrls);
  return (
    <div style={{marginTop:"12%"}}> 
      <div className="img-component">
      <img src={imageUrls} style={{width:"100px",height:"100px"}} /><br/>
      </div>
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
                <IoIosPricetags style={{margin:"5px"}}/>
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Price" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <BiCategoryAlt style={{margin:"5px"}}/>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Catagory"
              />
            </div>
            <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      /><br />
      <button onClick={uploadFile}> Upload Image</button><br />

            <button type="button" className="btn btn-secondary btn-block">
              ADD PRODUCT
            </button><br/>
          </form>
          
        </div>
      </div>
    </div>
    </div>
  );
}
