import React from "react";
import "./Sidebar.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Button, navLinks } from "../";
import { setActiveLink, toggleSidebar } from "../../store/Slices/NavSlices";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const screenWidth = useSelector((state) => state.navbar.screenWidth);
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const activeLink = useSelector((state) => state.navbar.activeLink);
  const dispatch = useDispatch();
  const sidebar = navLinks.map((element, index) => (
    <Link
      key={element.title + index}
      onClick={() => {
        dispatch(toggleSidebar(!isOpen));
        dispatch(setActiveLink(element.title));
      }}
      to={element.title === "home" ? "/" : `/${element.title}`}
      className={activeLink === element.title ? "active" : ""}
    >
      {element.icon}
      {element.title}
    </Link>
  ));

  return (
    <>
      {screenWidth < 992 && (
        <motion.div
          className="sidebar"
          animate={isOpen ? { right: 0 } : { right: "-100%" }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          <div className="container">
            <BiX
              size={40}
              className="close-icon"
              onClick={() => {
                dispatch(toggleSidebar(!isOpen));
              }}
              color="var(--white-color)"
            ></BiX>
            <nav>{sidebar}</nav>
            <div>
              <Button
                key={"login-button"}
                className={"border"}
                value={"login"}
                href="/login"
              />
            </div>
            <div>
              <Button
                key={"register-button"}
                value={"register"}
                href="/register"
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
