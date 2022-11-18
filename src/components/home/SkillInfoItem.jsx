import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BaseBadgeList from "../interface/BaseBadgeList";

function SkillInfoItem({ data, border }) {
  const [isHover, setIsHover] = useState(false);

  function handleIsHover(hover) {
    setIsHover(hover);
  }

  return (
    <li
      className="skills-info-item"
      onMouseOver={() => handleIsHover(true)}
      onMouseLeave={() => handleIsHover(false)}
      style={border && border}
    >
      <div className="skills-item-container">
        <div className="skills-item-title-contianer">
          <span
            className="skills-item-title-logo"
            style={isHover ? { color: data.color, opacity: 1 } : null}
          >
            <i className={data.icon}></i>
          </span>
          <h3 className="skills-item-title sub-text">{data.title}</h3>
        </div>
        <div className="skills-item-para-container">
          <p className="skills-item-para sub-text">{data.paragraph}</p>
        </div>
        <AnimatePresence>
          {isHover && (
            <BaseBadgeList
              data={data.badges}
              background="#fff"
              color="#1f1f1e"
              justify={true}
              position={{ position: "absolute", top: "100%" }}
            />
          )}
        </AnimatePresence>
      </div>
    </li>
  );
}

export default SkillInfoItem;
