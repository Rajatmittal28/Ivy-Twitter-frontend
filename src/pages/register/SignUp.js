import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Navbar2 from "../../components/navbar2/Navbar2";
import { useSelector, useDispatch } from 'react-redux'
import { signup } from "../../components/reduxContainer/ApiCall";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function SignUp() {
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);


  const handleSignUp = (e) => {
    e.preventDefault();
      if (file !== null) {
        const fileName = new Date().getTime() + file?.name;
        const storage = getStorage(app);
        const StorageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(StorageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            throw error;
          },
          () => {
             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              signup(dispatch, { email, password, username, profile: downloadURL })
            })
          }
        );
      }
  }

  


  return (
    <>
      <div className="SignUpContainer">
        <Navbar2 />
        <div className="subSignUpContainer">
          <div className="headingContainer">
            <h4>REGISTER</h4>
            <span>Happy to join you here...!</span>
          </div>

          <form action="">
            <div>
              <label htmlFor="profile">
                <img src="" alt="" />
              </label>
            </div>
            <div className="inputContainer">
              <input type="file" name="image" id="image" onChange={(e) => setFile(e.target.files[0])} />
              <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" className="loginButton" onClick={handleSignUp}>
                Register
              </button>
            </div>

            <div className="logFooterContainer">
              <span>
                Already Registered?{" "}
                <Link to="/login" style={{ fontWeight: "bold", color: "red" }}>
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
