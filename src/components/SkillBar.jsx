import React from "react";
import "/src/portfolio.css";

const SkillBar = ({ name, level }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-progress">
        <div
          className="skill-progress-filled"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
