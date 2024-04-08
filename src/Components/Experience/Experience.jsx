import React from "react";
import { useTranslation } from "react-i18next";
import "./Experience.scss";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className="experience" id="experience">
      <div className="experience--title"></div>

      <div className="experience__cards">
        <div className="experience__cards--card">
          <div className="experience__cards--card__left">
            <p>2023</p>
            <p>Present</p>
          </div>
          <div className="experience__cards--card__right">
            <h1>Full Stack Developer</h1>
            <a href="https://javierazagra.com" target="_blank" rel="noreferrer">
              javierazagra.com
            </a>
            <p>{t("Experience1")}</p>
          </div>
        </div>

        <div className="experience__cards--card">
          <div className="experience__cards--card__left">
            <p>May</p>
            <p>June 2023</p>
          </div>
          <div className="experience__cards--card__right">
            <h1>IT Technician</h1>
            <a
              href="https://www.primaverasound.com/es/"
              target="_blank"
              rel="noreferrer"
            >
              primaverasound.com
            </a>
            <p>{t("Experience2")}</p>
          </div>
        </div>

        <div className="experience__cards--card">
          <div className="experience__cards--card__left">
            <p>April</p>
            <p>June 2021</p>
          </div>
          <div className="experience__cards--card__right">
            <h1>IT Technician</h1>
            <a href="https://www.alten.es/" target="_blank" rel="noreferrer">
              alten.es
            </a>
            <p>{t("Experience3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
