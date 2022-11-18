import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BaseButton from "./BaseButton";

function BaseDropList({ firstList, secondList }) {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="base-dorp-list">
      <div className="base-drop-list-button">
        <BaseButton onclick={handleMenu}>
          {!showMenu ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </BaseButton>
      </div>
      <AnimatePresence>
        {showMenu && (
          <div className="warp-container">
            <motion.div
              className="base-drop-list-wrap"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-100vw" }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            >
              <ul className="drop-list">{firstList}</ul>
              {secondList && <ul className="second-list">{secondList}</ul>}
            </motion.div>
            <motion.div
              className="back-drop"
              onClick={handleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            ></motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BaseDropList;
