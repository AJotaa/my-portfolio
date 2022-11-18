import React from "react";
import BaseViewAnimation from "../interface/BaseViewAnimation";

function ProjectsItem({ data, i }) {
  return (
    <li className={`projects-item ${(i + 1) % 3 === 0 ? "large-item" : ""}`}>
      <BaseViewAnimation clss="item-container">
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="projects-item-link"
        >
          <div className="projects-item-img-container">
            <img src={data.img} alt={data.name} className="projects-item-img" />
          </div>
          <div className="projects-item-info-container">
            <h3 className="projects-item-info sub-text">{data.name}</h3>
          </div>
          <div className="projects-item-info-container-small">
            <h3 className="projects-item-info-small sub-text">{data.name}</h3>
          </div>
        </a>
      </BaseViewAnimation>
    </li>
  );
}

export default ProjectsItem;
