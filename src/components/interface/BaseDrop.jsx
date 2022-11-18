import React, { useState } from "react";
import BaseBadgeList from "./BaseBadgeList";
import BaseButton from "./BaseButton";
import BaseViewAnimation from "./BaseViewAnimation";

function BaseDrop({ data, baseState }) {
  const [show, setShow] = useState(baseState);

  function handleShow() {
    setShow(!show);
  }

  return (
    <li className="experience-item">
      <BaseViewAnimation clss="drop-item">
        <div className="drop-item-control title-text" onClick={handleShow}>
          <div className="drop-item-title">
            <span className="drop-postion">{`${data.charge} | ${data.name}`}</span>
            <span className="drop-date">{`${data.dateStart} - ${
              data.dateEnd ? data.dateEnd : "present"
            }`}</span>
          </div>
          <BaseButton mode="small" onclick={handleShow}>
            <i
              className="fa-solid fa-chevron-down"
              style={{ transform: show ? "rotate(180deg)" : "rotate(0deg)" }}
            ></i>
          </BaseButton>
        </div>
        <div
          className={show ? "drop-info-wrap drop-visibly" : "drop-info-wrap"}
        >
          <div className="drop-info-text">
            <div className="drop-info-more sub-text">
              <span className="drop-info-location">
                <span className="drop-info-location-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="drop-info-location-name">{data.location}</span>
              </span>
              <span className="drop-info-web">
                <span className="drop-info-web-icon">
                  <i className="fa-solid fa-link"></i>
                </span>
                <span className="drop-info-web-link">
                  <a href={data.link} target="_blank" rel="noreferrer">
                    {data.linkShow}
                  </a>
                </span>
              </span>
            </div>
            <div className="drop-info-para-container title-text">
              <p className="drop-info-para">{data.text}</p>
            </div>
            <BaseBadgeList
              data={data.tools}
              justify={false}
              background="#1f1f1e"
              color="#fff"
            />
          </div>
          <div className="drop-info-img-container">
            <img src={data.img} alt={data.name} className="drop-info-img" />
          </div>
        </div>
      </BaseViewAnimation>
    </li>
  );
}

export default BaseDrop;
