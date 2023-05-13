import React from "react";
import './header.css'

import { Dropdown, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ loggedIn, setloggedIn }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setloggedIn(false);
    navigate("/");
  };

  return (

    
    <header className="fixed-top header">
      <div className="row">
        <div className="col-4" />
        <div className="col-4">
          <nav class="navbar navbar-expand-lg">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link className="nav-link" to={"/"}>Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to={'/about'}>About</Link>
                  
                </li>
                <li class="nav-item">
                 <Link className="nav-link" to={'/sem'}> Seminar hall</Link>
                
                </li>
                <li class="nav-item">
                 <Link className="nav-link" to={'/co'}>Co-Ordinators</Link>
                    
                
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to={'/cont'}>Contact</Link> 
                </li>
                {loggedIn ? (
                  <li class="nav-item" onClick={logoutHandler}>
                    <a class="nav-link">Logout</a>
                  </li>
                ) : (
                  <li class="nav-item">
                    <Link class="nav-link" to="/Login">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-2"></div>
        <div className="col-2 align-self-end "></div>
      </div>
    </header>
  );
};

export default Header;
