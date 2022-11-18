import React from "react";
import { motion } from "framer-motion";
import ProjectsItem from "./ProjectsItem";

function ProjectsSection({ data }) {
  const projectsList = data?.map((e, i) => {
    return <ProjectsItem data={e} i={i} key={e.name} />;
  });

  return (
    <section className="projects-section main-section" id="projects">
      <div className="projects-section-container container">
        <div className="projects-title-container">
          <h2 className="projects-title title-text">Projects</h2>
        </div>
        <div className="projects-list-container">
          <motion.ul layout className="projects-list">
            {projectsList}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
