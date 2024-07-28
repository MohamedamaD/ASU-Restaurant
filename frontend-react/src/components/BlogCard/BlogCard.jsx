import React from "react";
import "./BlogCard.scss";
import { motion } from "framer-motion";
import { Button } from "../CustomButton/Button";
import { effects } from "../../constants";
import { Link } from "react-router-dom";
export const BlogCard = ({ img, publicationDate, details, i, url }) => {
  return (
    <motion.div
      className="blog-card"
      initial={effects.fade.initial}
      whileInView={effects.fade.animate}
      transition={{
        ...effects.transition.trans,
        delay: i * 0.2,
        opacity: effects.transition.spring,
      }}
    >
      <div className="img-box">
        <img src={img} alt="img" />
      </div>
      <div className="text-box">
        <span>{publicationDate}</span>
        <p>{details}</p>
        <Button value={"read more"} href={url} />
      </div>
    </motion.div>
  );
};
