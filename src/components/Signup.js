import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = () => {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if data.error -> show error
        if (data.error) {
          console.log(data.error);
        } else {
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // style={{width:'40%', textAlign:'center', padding:'100px 0'}}

  return (
    <div className="signup">
      <div className="signup__card">
	  <input
          class="input is-primary"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          class="input is-primary"
          type="text"
          value={name}
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
       

        <button class="button is-link" type="submit" onClick={SignUp}>
          Signup
        </button>
        <Link to="/signin">
          <h4>Already have an account?</h4>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
