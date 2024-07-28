import React from "react";
import { BiFork } from "react-icons/bi";
import { motion } from "framer-motion";
import "./loading.scss";
import { effects } from "../../constants";
export const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="container">
        <div className="wrapper">
          <div className="wrap">
            <BiFork size={400} color="#ffecc5" />
          </div>
          <div>
            {["l", "o", "a", "d", "i", "n", "g"].map((el, i) => (
              <motion.h1
                key={el + i}
                animate={{ opacity: [0, 1], y: [0, 10, 0] }}
                transition={{
                  ...effects.transition.trans,
                  delay: i * 0.2,
                  repeat: Infinity,
                  rotate: effects.transition.spring,
                }}
              >
                {el}
              </motion.h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
