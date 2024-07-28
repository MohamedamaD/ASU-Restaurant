import React, { useEffect, useState } from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { Navbar, Sidebar } from "../../components";
import { useSelector } from "react-redux";
import { images } from "../../constants";

export const Header = () => {
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const backgrounds = [
    images.header_background1,
    images.header_background2,
    images.header_background3,
    images.header_background4,
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [index, backgrounds.length]);
  return (
    <motion.header
      style={{
        background: `url(${backgrounds[index]}) 
        center center no-repeat `,
      }}
      className="app-header"
    >
      <Navbar />
      <Sidebar />
      <motion.div
        className="backdrop"
        animate={
          isOpen
            ? { backdropFilter: "blur(3px)", zIndex: 2 }
            : { backdropFilter: "blur(0px)" }
        }
      ></motion.div>
      <div className="overlay"></div>
      <div className="hero white">
        <span>The Brand Restaurant</span>
        <h1>best Quality</h1>
        <strong>Food</strong>
      </div>
    </motion.header>
  );
};
