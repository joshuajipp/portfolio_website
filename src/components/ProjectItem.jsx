import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem(props) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + props.id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="bgImage"
      />
      <h1> {props.name} </h1>
    </div>
  );
}

export default ProjectItem;
