import React, { useState } from "react";
import './Signin.css'
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin">
      <div className='signin__card'>
        <input
          class="input is-primary"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          class="input is-primary"
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button class="button is-success">Login</button>
        <Link to="/signup">
					<h4>Create new account</h4>
				</Link>
      </div>
    </div>
  );
};

export default Signin;
