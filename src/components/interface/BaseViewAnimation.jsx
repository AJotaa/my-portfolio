import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function BaseViewAnimation({ children, clss }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-5% 0px",
    once: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0,
        },
      });
    }
    if (!isInView) {
      animation.start({
        y: "50px",
        opacity: 0,
      });
    }
  }, [isInView, animation]);

    return (
      <motion.div layout ref={ref} animate={animation} className={clss}>
        {children}
      </motion.div>
    );
}

export default BaseViewAnimation;
