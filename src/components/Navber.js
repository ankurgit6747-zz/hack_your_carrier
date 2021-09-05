import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navber = () => {

  //   const [check, setCheck] = useState(false)

  //   const renderList = () => {
	// 	if (check) {
	// 		return [
	// 			<Link to="/newpost"></Link>,
	// 			<Link to="/profile"></Link>,
	// 			<button
	// 				onClick={() => {
						
						
	// 				}}
	// 			>
	// 				Log out
	// 			</button>,
	// 		];
	// 	} else {
	// 		return [<Link to="/signin">Signin</Link>, <Link to="/signup">Signup</Link>];
	// 	}
	// };

  return (
    <>
      {/* <div className="navbar" style={{display: 'flex'}} >
        <div className="navbar__left">
          <Link to={check ? "/" : "/signin"}>
            <img
              className="navbar__image"
              to="/"
              src=""
              alt=""
            />
          </Link>
        </div>
        <div className="navbar__right">{renderList()}</div>
      </div> */}
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt='logo' width="112" height="28" />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        How it work
      </a>

      <a class="navbar-item">
        Phychologist
      </a>

      {/* <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>



        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <div class="navbar-divider"> </div>
          <a class="navbar-item">
            Phychologist 
          </a>
        </div>
      </div> */}
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
        <Link to="/signup">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          </Link>
          <Link to="/signin">
          <a class="button is-light">
            Log in
          </a>
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
