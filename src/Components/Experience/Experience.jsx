import React from "react";
import "./Experience.scss";

const Experience = ({ experience }) => {
  return (
    <div className="experience" id="experience">
      <div className="experience--title"></div>
      <div className="experience__cards">
        {experience.map((exp, index) => (
          <div className="experience__cards--card">
            <div className="experience__cards--card__left">
              <p>{exp.year}</p>
              <p>{exp.year2}</p>
            </div>
            <div className="experience__cards--card__right">
              <h1>{exp.name}</h1>
              <a href={exp.url} target="_blank">
                {exp.url2}
              </a>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
