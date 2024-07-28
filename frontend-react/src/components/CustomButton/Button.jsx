import React from "react";
import "./Button.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const Button = ({ value="", onclick=()=>{}, className="", href = "" }) => {
  return (
    <motion.button
      whileHover={{}}
      onClick={onclick}
      className={`custom-button white ${className}`}
    >
      <Link to={href ? href : null}>{value}</Link>
    </motion.button>
  );
};
