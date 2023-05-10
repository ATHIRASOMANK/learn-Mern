import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import "../style/Signup.css"
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:9000/api/signup", {
        email,
        password,
      })
      .then(function (response) {
        alert("login sucessfully");
        navigate("/blog")
      })
      .catch(function (error) {
        alert("invalid credentials");
     //   console.log(error);
      });
  };

  const handleNavigate = () => {
    navigate("/reg");
  };
  return (
    <div className="loginBox">
      <form className="Auth-form" onSubmit={handlesubmit}>
        <div>
          <div>
            <h2 className="Auth-form-title">Sign In</h2>
          </div>

          <div className="input-field">
            <div>
              <label>Enter Your Email:</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Enter Your Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>

          <div>
            <div>
              <button className="btn btn-info">Submit</button>
            </div>
            {/* onClick={toBlog} */}
            <div className="reg-bttn">
              <div className="leftd"> New User</div>
              <button className="btn btn-info" onClick={handleNavigate}>
                {" "}
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
