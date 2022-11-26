import React from "react";
import BaseForm from "../interface/BaseForm";

function ContactSection({ data }) {
  const contactList = data?.map((e) => {
    return (
      <li className="contact-social-item" key={e.name} title={e.name}>
        <a
          href={e.link}
          target="_blank"
          rel="noreferrer"
          className="contact-social-link"
        >
          <span className="contact-social-icon">
            <i className={e.icon}></i>
          </span>
        </a>
      </li>
    );
  });

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section-container container">
        <div className="contact-content-container contact-half-container">
          <div className="contact-half">
            <div className="contact-title-text">
              <h2 className="contact-title">Hey, let's get in touch.</h2>
              <h3 className="contact-sub">Or try social</h3>
            </div>
            <div className="contact-social-list-container">
              <ul className="contact-social-list">{contactList}</ul>
            </div>
          </div>
        </div>
        <div className="contact-form-container contact-half-container">
          <div className="contact-half">
            <BaseForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
