import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import BaseButton from "../interface/BaseButton";
import BaseDropList from "../interface/BaseDropList";

function TheHeader() {
  const [show, setShow] = useState(true);
  const [onTop, setOnTop] = useState(true);
  const [width, setWidth] = useState(null);

  const headerData = [
    {
      id: 0,
      title: "Home",
      link: "home",
    },
    {
      id: 1,
      title: "Skills",
      link: "skills",
    },
    {
      id: 2,
      title: "Projects",
      link: "projects",
    },
    {
      id: 3,
      title: "Experience",
      link: "experience",
    },
    {
      id: 4,
      title: "Contact",
      link: "contact",
    },
  ];

  const contactData = [
    {
      name: "Facebook",
      icon: "fa-brands fa-facebook",
      link: "https://www.facebook.com/adrian.aristimuno.3",
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/adrianjotaa",
    },
    {
      name: "Twitter",
      icon: "fa-brands fa-twitter",
      link: "https://twitter.com/AdrianJotaa",
    },
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/in/adrian-j-aristimu%C3%B1o/",
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      link: "https://github.com/AJotaa",
    },
    {
      name: "Email",
      icon: "fa-solid fa-envelope",
      link: "https://mail.google.com/mail/u/0/?fs=1&to=adrianjao23@gmail.com&tf=cm",
    },
    {
      name: "CodePen",
      icon: "fa-brands fa-codepen",
      link: "https://codepen.io/AJota/pens/showcase",
    },
  ];

  const headerList = headerData.map((e, i) => {
    return (
      <li className="the-header-item" key={e.id}>
        <BaseButton mode="header">
          <Link
            to={e.link}
            activeClass="selected"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
            hashSpy={true}
            className={i === 0 && onTop ? "selected" : ""}
          >
            {e.title}
          </Link>
        </BaseButton>
      </li>
    );
  });

  const contactList = contactData.map((e) => {
    return (
      <li className="contact-social-item" key={e.name} title={e.name}>
        <a href={e.link} className="contact-social-link">
          <span className="contact-social-icon">
            <i className={e.icon}></i>
          </span>
          <span className="social-name">{e.name}</span>
        </a>
      </li>
    );
  });

  useEffect(() => {
    handleWidth();
  });

  function handleWidth() {
    setWidth(window.innerWidth);
  }

  function handleShow() {
    const scrollY = window.scrollY;
    const viewHeight = window.innerHeight;

    if (scrollY > 0 && scrollY <= viewHeight * 0.5) {
      setShow(false);
    } else {
      setShow(true);
    }

    if (scrollY > 0) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  }

  window.addEventListener("scroll", handleShow);

  if (width > 700) {
    return (
      <header
        id="the-header"
        className={(!show ? "not-show" : "") + " " + (!onTop ? "not-top" : "")}
      >
        <nav className="the-header-nav container">
          <div className="the-header-logo-container">
            <BaseButton mode="flat">
              <a href="/">
                <span className="the-header-logo">
                  <span className="the-header-logo-style">AJ</span>ota
                </span>
              </a>
            </BaseButton>
          </div>
          <ul className="the-header-list">{headerList}</ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header id="the-header-mobile">
        <nav className="nav-mobile container">
          <BaseDropList firstList={headerList} secondList={contactList} />
          <AnimatePresence>
            {onTop && (
              <motion.div
                className="mobile-logo-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", duration: 0.1 }}
                style={{ zIndex: -2 }}
              >
                <BaseButton mode="flat">
                  <a href="/">
                    <span className="the-header-logo">
                      <span className="the-header-logo-style">AJ</span>ota
                    </span>
                  </a>
                </BaseButton>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="empty-div"></div>
        </nav>
      </header>
    );
  }
}

export default TheHeader;
