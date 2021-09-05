import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation" style={{background:"#E8BD0D"}}>
        <div class="navbar-brand">
          <Link to='/' class="navbar-item">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="logo"
              width="112"
              height="28"
            />
          </Link>

          <p
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </p>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
           
            
            <p class="navbar-item">  <Link to='/'> Home </Link></p>
            

            <p class="navbar-item">How it work</p>

            <p class="navbar-item">Phychologist</p>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link to="/signup">
                  <p class="button is-primary" style={{marginRight: "15px"}}>
                    <strong>Sign up</strong>
                  </p>
                </Link>
                <Link to="/signin">
                  <p class="button is-light">Log in</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
