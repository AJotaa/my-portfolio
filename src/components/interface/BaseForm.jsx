import React, { useRef, useState, Fragment, useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
import emailjs from "@emailjs/browser";
import { AnimatePresence } from "framer-motion";
import BaseButton from "./BaseButton";
import BaseAlert from "./BaseAlert";

function BaseForm() {
  const form = useRef();
  const [valid, setValid] = useState(false);
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [send, setSend] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    }
  }, [showAlert]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_99p89g8",
        "template_hp7a621",
        form.current,
        "VOF0ZdtIos6RKfVL7"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setData([]);
          setValid(false);
          setSend(true);
          handleAlert();
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          setSend(false);
          handleAlert();
          setIsSending(false);
        }
      );
  };

  function handleValid(e) {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let elementClass = form.current[inputName].className;
    let haveFail = elementClass.split(" ").filter((e) => {
      return e === "not-valid";
    }).length;

    if (inputValue === "" && haveFail === 0) {
      form.current[inputName].className = `${elementClass} not-valid`;
      setValid(false);
      setData(
        data.filter((e) => {
          return e !== inputName;
        })
      );
    } else if (inputValue !== "") {
      let validClass = elementClass
        .split(" ")
        .filter((e) => {
          return e !== "not-valid";
        })
        .join(" ");

      form.current[inputName].className = validClass;

      if (!data.includes(inputName)) {
        setData([...data, ...[inputName]]);
      }
    }

    if (data.length === 5) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  function handleAlert() {
    setShowAlert(true);

    // setTimeout(() => {
    //   setShowAlert(false);
    // }, 4000);
  }

  return (
    <Fragment>
      {/* <CSSTransition
        classNames="transition-alert"
        in={showAlert}
        timeout={300}
        unmountOnExit
      > */}
      <AnimatePresence>
        {showAlert && <BaseAlert send={send} />}
      </AnimatePresence>
      {/* </CSSTransition> */}
      <form action="" className="base-form" ref={form} onSubmit={sendEmail}>
        <div className="form-container">
          <div className="form-input-container">
            <input
              type="text"
              className="form-input-fist form-input"
              name="first"
              placeholder="First Name"
              onChange={handleValid}
              onBlur={handleValid}
            />
          </div>

          <div className="form-input-container">
            <input
              type="text"
              className="form-input-last form-input"
              name="last"
              placeholder="Last Name"
              onChange={handleValid}
              onBlur={handleValid}
            />
          </div>

          <div className="form-input-container">
            <input
              type="email"
              className="form-input-email form-input"
              name="email"
              placeholder="Email"
              onChange={handleValid}
              onBlur={handleValid}
            />
          </div>

          <div className="form-input-container">
            <input
              type="tel"
              className="form-input-phone form-input"
              name="phone"
              placeholder="Phone #"
              onChange={handleValid}
              onBlur={handleValid}
            />
          </div>

          <div className="form-input-container large-container">
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="7"
              className="form-text-msg form-input"
              placeholder="Message"
              onChange={handleValid}
              onBlur={handleValid}
            ></textarea>
          </div>
        </div>
        <div
          className="form-btn-container"
          style={isSending ? { cursor: "wait" } : null}
        >
          <BaseButton
            className="form-btn"
            type="submit"
            value="Send"
            disabled={valid && !isSending ? false : true}
          >
            {isSending ? "Submiting..." : "Submit"}
          </BaseButton>
        </div>
      </form>
    </Fragment>
  );
}

export default BaseForm;
