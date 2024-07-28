import React from "react";
import "./ChefCard.scss";
import { motion } from "framer-motion";
import { effects } from "../../constants";
export const ChefCard = ({ img, name, position, index }) => {
  return (
    <motion.div
      className="chef-card"
      initial={effects.fade.initial}
      whileInView={effects.fade.animate}
      transition={{
        ...effects.transition.trans,
        delay: index * 0.2,
        opacity: effects.transition.spring,
      }}
    >
      <div className="card-img">
        <img src={img} alt="img" />
      </div>
      <div className="card-text">
        <h3>{name}</h3>
        <span>{position}</span>
      </div>
    </motion.div>
  );
};
