import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/register.css"
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const handlesubmit = async (event) => {
    event.preventDefault();
    if (!userName || !email || !password) {
      alert("Fill all inputFields");
      return;
    }
    if (conformPassword !== password) {
      alert("Password and conformPassword must be same");
      return;
    }

    await axios
      .post("http://localhost:9000/api/register2", {
        userName,
        email,
        password,
      })
      .then(function (response) {
        if (response.status === 201) {
          alert("Registration Completed");
        } else {
          alert("Check Your Details");
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <section>
      <div className="contanier-fluid" >
        <div className="contanier">
          <div className="formBox">
            <form onSubmit={handlesubmit}>
              <div className="row">
                <div className="col-sm-12">
                  <h1> Registration</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="inputBox">
                    <label className="inputText">Enter Your Name:</label>
                    <div className="inputb">
                      <input
                        type="text"
                        name="userName"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="inputBox">
                    <label className="inputText">Enter Your Email:</label>
                    <div className="inputb">
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="inputBox">
                    <label className="inputText">Enter Your Password:</label>
                    <div className="inputb">
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="inputBox">
                    <label className="inputText">
                      Enter Your ConformPassword:
                    </label>
                    <div className="inputb">
                      <input
                        type="password"
                        name="conformpassword"
                        value={conformPassword}
                        onChange={(event) =>
                          setConformPassword(event.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="reg-btt">Submit</button>
              </div>

              <div className="inputBox">
                <p>
                  Have already an account?{" "}
                  <a href="/">
                    <u onClick={handleNavigate}> Login here</u>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
