import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import Signup from "./Signup";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../Loader";
const Login = ({ loggedIn, setloggedIn }) => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    seterror(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res.user != null) {
          setloggedIn(true);
          localStorage.setItem("auth", 1);
          navigate("/Booking");
        }
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
        seterror(err.message);
        localStorage.removeItem("auth");
        setloggedIn(false);
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="mainBox">
        <div className="boxx">
          {/* <form autoComplete='off' onSubmit={handleSubmit}> */}
          <form autoComplete="off" className="myform" onSubmit={handleSubmit}>
            <span className="logo">
              <u>WeLcOmE</u>
            </span>
            <h2>Sign in</h2>
            <div className="inputBoxx">
              <input
                type="text"
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <span>UserName</span>
              <i></i>
            </div>
            <div className="inputBoxx">
              <input
                type="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span>Password</span>
              <i></i>
            </div>
            {error && <span className="danger">{error}</span>}
            <div className="links">
              <a href="#">Forget Password ?</a>
              <a>
                <Link to={"/Signup"}>you haven't Account..? Signup</Link>{" "}
              </a>
            </div>
            <button type="submit" className="logbtn">
              Login
            </button>
            {/*{err && <span>Something Worng</span>} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
