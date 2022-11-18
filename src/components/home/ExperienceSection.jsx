import React from "react";
import BaseDrop from "../interface/BaseDrop";

function ExperienceSection({ data }) {
  const experienceList = data?.map((e, i) => {
    return (
      <BaseDrop data={e} baseState={i === 0 ? true : false} key={e.name} />
    );
  });

  return (
    <section className="experience-section" id="experience">
      <div className="expertice-section-container container">
        <div className="experience-title-container">
          <h2 className="experience-title title-text">Experience</h2>
        </div>
        <div className="experience-list-container">
          <ul className="experience-list">{experienceList}</ul>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
