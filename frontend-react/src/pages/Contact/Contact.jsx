import React from "react";
import { InputFields } from "../../components";
import "./Contact.scss";

export const Contact = () => {
  return (
    <div className="App-contact">
      <section className="contact-section">
        <div className="overlay"></div>
        <div className="container">
          <form action="" id="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <InputFields type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <InputFields type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-group">
              <InputFields value="submit" type="submit" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
