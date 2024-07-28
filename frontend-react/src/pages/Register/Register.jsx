import React from "react";
import "./Register.scss";
import { InputFields } from "../../components";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="App-register">
      <div className="overlay"></div>

      <div className="container">
        <div className="wrapper white">
          <div className="box form-box">
            <div className="signing">
              <h1>sign up</h1>
              <h5>Join today for exclusive offers & discounts.</h5>
              <p>
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </div>
            <form action="" name="register-form" id="register-form">
              <div className="form-item">
                <label htmlFor="name">name*</label>
                <InputFields
                  id={"name"}
                  name={"name"}
                  placeholder={"enter your name"}
                  type={"text"}
                />
              </div>
              <div className="form-item">
                <label htmlFor="email">email*</label>
                <InputFields
                  id={"email"}
                  name={"email"}
                  placeholder={"enter your email"}
                  type={"email"}
                />
              </div>
              <div className="form-item">
                <label htmlFor="password">password*</label>
                <InputFields
                  id={"password"}
                  name={"password"}
                  placeholder={"enter your password"}
                  type={"password"}
                />
              </div>
              <input
                type="submit"
                className="input-fields"
                value={"create account"}
              />
            </form>
          </div>
          <div className="box assets-box">
            <motion.img src={images.footer4} alt="img.alt" />
          </div>
        </div>
      </div>
    </div>
  );
};
