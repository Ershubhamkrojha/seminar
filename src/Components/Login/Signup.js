import React, { useState } from "react";
import "../Login/Login.css";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setloading(true);
    seterror(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setloading(false);
        console.log(res);
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err.message);
        setloading(false);
        seterror(err.message);
      });
  };

  return (
    <div>
      {loading && <Loader />}
      <div className="mainBox">
        <div className="boxx">
          <form
            autoComplete="off"
            className="myform"
            onSubmit={onSubmitHandler}
          >
            <span className="logo">
              <u>WeLcOmE</u>
            </span>
            <h2>Sign up</h2>
            <div className="inputBoxx">
              <input
                type="text"
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBoxx">
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Password</span>
              <i></i>
            </div>
            {error && <div className="danger">{error}</div>}
            <div className="links">
              <a href="#">Forget Password ?</a>
              <a>You have Account..? Login </a>
            </div>
            <button type="submit" className="logbtn">
              Signup
            </button>
            {/* {err && <span>Something Worng</span>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;