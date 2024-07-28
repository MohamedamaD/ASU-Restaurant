import React from "react";
import "./FixedHeader.scss";
import { Navbar, Sidebar } from "../";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
export const FixedHeader = ({ name="" }) => {
  const isOpen = useSelector((state) => state.navbar.isOpen);
  return (
    <header className="App-fixed-header">
      <div className="overlay"></div>
      <Navbar />
      <Sidebar />
      <motion.div
        className="backdrop"
        animate={
          isOpen
            ? { backdropFilter: "blur(3px)", zIndex: 2 }
            : { backdropFilter: "blur(0px)", position: "unset" }
        }
      ></motion.div>
      <div className="container">
        <div className="text-box white">
          <span>{name}</span>
          <h1>Home / {name} </h1>
        </div>
      </div>
    </header>
  );
};
