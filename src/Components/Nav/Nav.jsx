import React from "react";
import { Link } from "react-router-dom";

function Nav({crrUser,deleteUser}) {
  function logout(){
    deleteUser();
    console.log("logout");
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg text-white"
        style={{ backgroundColor: "#272B30" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <img
              src={require("../assets/logo1.png")}
              alt="logo"
              className=""
              style={{ width: "100px" }}
            />
            GameOver
          </Link>
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/all">
                  All
                </Link>
              </li>
              <li className="nav-item mx-2">
                <div className="dropdown">
                  <span
                    className=" dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Platform
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" value='pc' to={`/platform/pc`}>
                 
                        pc
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/platform/browser">
                        browser
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              </li>
              <li className="nav-item mx-2">
                <div className="dropdown">
                  <span
                    className=" dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" value='pc' to='/category/racing'>
                 
                       racing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/category/sports">
                        sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/category/socail">
                        socail
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/category/shooter">
                        shooter
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/category/action">
                        action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/category/flight">
                        flight
                      </Link>
                    </li> <li>
                      <Link className="dropdown-item" to="/category/fantasy">
                        fantasy
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              </li>
            </ul>
           {crrUser==null? <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  text-primary btn btn-outline-primary "
                  to="/register"
                >
                  join free
                </Link>
              </li>
              
            </ul>:<Link className="nav-link border border-2 rounded-2 p-1 border-primary " aria-current="page" to="/login" onClick={logout}>
                  Logout
                </Link>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
