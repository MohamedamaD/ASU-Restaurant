import React from "react";
import "./Footer.scss";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPinterest,
} from "react-icons/bi";
import images from "../../constants/images";

const daysWork = [
  { day: "Monday", duration: "9:00 - 24:00" },
  {
    day: "Tuesday",
    duration: "9:00 - 24:00",
  },
  {
    day: "Wednesday",
    duration: "9:00 - 24:00",
  },
  {
    day: "Thursday",
    duration: "9:00 - 24:00",
  },
  {
    day: "Friday",
    duration: "9:00 - 02:00",
  },
  {
    day: "Saturday",
    duration: "9:00 - 02:00",
  },
  {
    day: "Sunday",
    duration: "Closed",
  },
];
export const Footer = () => {
  const links = daysWork.map((element, index) => (
    <li key={element.day}>
      <strong className="white">{element.day}</strong>{" "}
      <span>{element.duration}</span>
    </li>
  ));
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="item">
          <h3>the brand</h3>
          <p>
            Far Far Away, Behind The Word Mountains, Far From The Countries
            Vokalia And Consonantia, There Live The Blind Texts. Separated They
            Live In Bookmarksgrove.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoFacebook size={40} color="var(--white-color)" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoInstagram size={40} color="var(--white-color)" />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoPinterest size={40} color="var(--white-color)" />
            </a>
          </div>
        </div>
        <div className="item">
          <h3>OPEN HOURS</h3>
          <ul>{links}</ul>
        </div>
        <div className="item">
          <h3>INSTAGRAM</h3>
          {[
            images.footer1,
            images.footer2,
            images.footer3,
            images.footer4,
            images.footer5,
            images.footer6,
          ].map((el) => (
            <img src={el} key={el} alt={el} />
          ))}
        </div>
        <div className="item">
          <h3>NEWSLETTER</h3>
          <p>
            Far far away, behind the word mountains, far from the countries.
          </p>
          <form action="" name="subscribe-form" id="subscribe-form">
            <input
              type="email"
              name="email"
              placeholder="Enter email Address"
              required
            />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </footer>
  );
};
