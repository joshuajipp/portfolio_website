import React from "react";

function ProjectItem(props) {
  const handleNewTab = () => {
    window.open(props.url, "_blank");
  };
  return (
    <div className="projectItem" onClick={handleNewTab}>
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="bgImage"
      />
      <h1> {props.name} </h1>
    </div>
  );
}

export default ProjectItem;
