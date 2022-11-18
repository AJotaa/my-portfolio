import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function BaseBadgeList({ data, background, color, justify, position }) {
  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const sliderWidth = ref.current.scrollWidth - ref.current.offsetWidth;
    setWidth(sliderWidth);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        bounce: 0,
      },
    },
  };

  const dataList =
    data &&
    data.map((e) => {
      return (
        <motion.li
          className="base-badge-item"
          style={{
            backgroundColor: background ? background : "#fff",
            color: color ? color : "#000",
          }}
          key={e.text}
          title={e.text}
          variants={item}
        >
          <span
            className="base-badge"
            style={{ fontSize: e.icon ? "1rem" : "0.75rem" }}
          >
            {e.icon ? <i className={e.icon}></i> : e.text}
          </span>
        </motion.li>
      );
    });

  return (
    <div className="base-badge-container" style={position} ref={ref}>
      <motion.ul
        className="base-badge-list"
        style={{ justifyContent: justify ? "space-between" : "none" }}
        drag="x"
        whileTap={{ cursor: "grabbing" }}
        dragConstraints={{ right: 0, left: -width }}
        variants={container}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {dataList}
      </motion.ul>
    </div>
  );
}

export default BaseBadgeList;
