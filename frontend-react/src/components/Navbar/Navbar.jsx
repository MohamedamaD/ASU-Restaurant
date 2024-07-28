import React, { useEffect } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { Button, navLinks } from "../";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  toggleSidebar,
  updateWidth,
  updateY,
  setActiveLink,
} from "../../store/Slices/NavSlices";

export const Navbar = () => {
  const screenWidth = useSelector((state) => state.navbar.screenWidth);
  const scrollY = useSelector((state) => state.navbar.scrollY);
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const activeLink = useSelector((state) => state.navbar.activeLink);
  const dispatch = useDispatch();

  const navbar = navLinks.map((element, index) => (
    <Link
      key={element.title + index}
      onClick={() => dispatch(setActiveLink(element.title))}
      // href={`#${element.title}`}
      to={element.title === "home" ? "/" : `/${element.title}`}
      className={activeLink === element.title ? "active" : ""}
    >
      {element.title}
    </Link>
  ));

  useEffect(() => {
    const resizeScreen = () => {
      dispatch(updateWidth(window.innerWidth));
    };
    const scrollYHandler = () => {
      dispatch(updateY(window.scrollY));
    };
    window.addEventListener("resize", resizeScreen);
    window.addEventListener("scroll", scrollYHandler);
    return () => {
      window.removeEventListener("resize", resizeScreen);
      window.removeEventListener("scroll", scrollYHandler);
    };
  }, [dispatch, scrollY]);
  return (
    <motion.div
      transition={{ ease: "easeInOut", duration: 1 }}
      whileInView={{ opacity: [0, 1], x: [-100, 0] }}
      className={`app-header-navbar ${
        scrollY > window.innerHeight ? "active" : ""
      }`}
    >
      <div className="container">
        <div className="brand white">
          The <span>Brand</span>
        </div>
        {screenWidth >= 992 && <nav>{navbar}</nav>}

        {screenWidth < 992 && (
          <BiMenu
            onClick={() => {
              dispatch(toggleSidebar(!isOpen));
            }}
            size={40}
            color="#fff"
          />
        )}

        {screenWidth >= 992 && (
          <div className="buttons">
            <Button
              key={"login-button"}
              className={"border"}
              value={"login"}
              href="/login"
            />

            <Button
              key={"register-button"}
              href="/register"
              value={"register"}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};
