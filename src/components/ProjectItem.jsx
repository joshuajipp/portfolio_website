import React from "react";

function ProjectItem(props) {
  const handleNewTab = () => {
    window.open(props.url, "_blank");
  };
  const skillsArray = props.skills;
  return (
    <div className="projectItem" onClick={handleNewTab}>
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="bgImage"
      />
      <h1 className="project-title">
        {" "}
        <span className="project-text">{props.name}</span>{" "}
      </h1>
      <p className="project-description">
        <div className="description-header">Utilized Technologies</div>
        <ul className="skills-list">
          {skillsArray.map((skill) => {
            return <li className="skill">{skill}</li>;
          })}
        </ul>
      </p>
    </div>
  );
}

export default ProjectItem;
