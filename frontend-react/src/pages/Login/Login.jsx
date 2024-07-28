import React from "react";
import "./Login.scss";
import { InputFields } from "../../components";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className="App-login">
      <div className="overlay"></div>
      <div className="container">
        <div className="wrapper">
          <form action="" id="login-form" name="login-form">
            <h3 className="white">Login</h3>
            <InputFields name={"email"} placeholder={"email"} type={"email"} />
            <InputFields
              name={"password"}
              placeholder={"password"}
              type={"password"}
            />
            <div>
              <InputFields name={"check"} id={"check"} type={"checkbox"} />
              <label htmlFor="check">remember me</label>
            </div>
            <div className="login-link">
              not a member ? <Link to={"/register"}> sign up now</Link>
            </div>
            <input
              className="input-fields"
              value={"login"}
              name={"submit"}
              id={"submit"}
              type={"submit"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
