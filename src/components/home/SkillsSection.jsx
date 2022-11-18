import React from "react";
import BaseCard from "../interface/BaseCard";
import SkillInfoItem from "./SkillInfoItem";
import BaseViewAnimation from "../interface/BaseViewAnimation";

function SkillsSection({data}) {

  const skillsList = data?.map((e, i) => {
    return (
      <SkillInfoItem
        key={e.title}
        data={e}
        border={
          i + 1 < data.length ? { borderRight: "solid 1px" } : null
        }
      />
    );
  });

  return (
    <section className="skills-section main-section" id="skills">
      <div className="skills-section-container container">
        <BaseCard>
          <div className="skills-title-container">
            <h2 className="skills-title title-text">Skills</h2>
          </div>
          <BaseViewAnimation>
            <ul className="skills-info-list">{skillsList}</ul>
          </BaseViewAnimation>
        </BaseCard>
      </div>
    </section>
  );
}

export default SkillsSection;
