import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "../decoration/ParticlesBackground";
import BaseButton from "../interface/BaseButton";

function HeroSection() {
  const [show, setShow] = useState(true);

  function handleShow() {
    const scrollY = window.scrollY;

    if (scrollY >= window.innerHeight * 0.5) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  window.addEventListener("scroll", handleShow);

  return (
    <section className="hero-section main-section" id="home">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 2 }}
          >
            <ParticlesBackground />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hero-section-container container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0 }}
          className="hero-section-info"
        >
          <div className="hero-section-title">
            <h1 className="hero-section-title-text title-text">
              Hi, I'm Adrián
            </h1>
          </div>
          <div className="hero-section-subtitle">
            <h2 className="hero-section-subtitle-text sub-text">
              Frontend dev & data analytics
            </h2>
          </div>
        </motion.div>
        <div
          className={
            show ? "hero-section-control visible" : "hero-section-control"
          }
        >
          <BaseButton mode="flat">
            <Link to="skills" smooth={true} offset={-100} duration={150}>
              <i className="fa-solid fa-chevron-down"></i>
            </Link>
          </BaseButton>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
