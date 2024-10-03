import React from "react";
import { useTranslation } from "react-i18next";
import "./Experience.scss";

const Experience = () => {
  const { t } = useTranslation();
  const experience = [
    {
      date: "2023",
      date2: "Present",
      title: "Full Stack Developer",
      link: "javierazagra.com",
      description: t("Experience1"),
    },
    {
      date: "May",
      date2: "June 2023",
      title: "IT Technician",
      link: "primaverasound.com",
      description: t("Experience2"),
    },
    {
      date: "April",
      date2: "June 2021",
      title: "IT Technician",
      link: "alten.es",
      description: t("Experience3"),
    },
  ];
  return (
    <div className="experience" id="experience">
      <div className="experience--title"></div>

      <div className="experience__cards">
        {experience.map((experience) => (
          <div className="experience__cards--card">
            <div className="experience__cards--card__left">
              <p>{experience.date}</p>
              <p>{experience.date2}</p>
            </div>
            <div className="experience__cards--card__right">
              <h1>{experience.title}</h1>
              <a href={experience.link} target="_blank" rel="noreferrer">
                {experience.link}
              </a>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
