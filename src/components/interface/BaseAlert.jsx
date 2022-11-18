import React from "react";
import { motion } from "framer-motion";

function BaseAlert({ send }) {
  return (
    <motion.div className="base-alert"
    initial={{x: 150, opacity: 0}}
    animate={{x: 0, opacity: 1 }}
    exit={{opacity: 0}}
    transition={{type: "spring", duration: 0.5, bounce: 0.3 }}
    delay={1}
    >
      
      <div className="alert-container">
        <span className="alert-icon">
          {send ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-solid fa-xmark" style={{ color: "#DB5461" }}></i>
          )}
        </span>
        <span className="alet-text title-text">
          {send ? "The message was send" : "An error ocurred"}
        </span>
      </div>
    </motion.div>
  );
}

export default BaseAlert;
