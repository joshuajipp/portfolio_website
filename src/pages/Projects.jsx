import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-header"> My Personal Projects</h1>
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
    </div>
  );
}

export default Projects;
