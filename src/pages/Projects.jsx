import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../ProjectList";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

import "../styles/Projects.css";

function Projects() {
  const pageRef = useRef(null);

  useEffect(() => {
    pageRef.current.classList.add("slide-from-left");
  }, []);
  return (
    <motion.div
      ref={pageRef}
      className="projects"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <h1 className="projects-header">
        {" "}
        Project <span className="first-word">Gallery</span>
      </h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx}
              name={project.name}
              image={project.image}
              url={project.url}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
