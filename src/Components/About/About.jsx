import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Habilities from "../Habilities/Habilities";
import "./About.scss";
import pdf from "./JavierAzagraCV.pdf";

const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBackgroundBlocked, setIsBackgroundBlocked] = useState(false);
  const { t } = useTranslation();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setIsBackgroundBlocked(!isBackgroundBlocked);
  };

  useEffect(() => {
    if (isBackgroundBlocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBackgroundBlocked]);

  return (
    <div id="about">
      <div className="about">
        <div className="about--left">
          <h1>Javier Azagra</h1>
          <h2>IT & Full Stack Developer</h2>
          <p>
            <span>{t("AboutInfo")}</span>
          </p>
          <div className="about--left__social">
            <a target="_blank" rel="noreferrer" href={pdf}>
              {t("CV")}
            </a>
            <button onClick={togglePopup}>{t("Skills")}</button>
            {isPopupOpen && (
              <div className="popup-overlay">
                <div className="popup-content">
                  <Habilities />
                  <button className="close-button" onClick={togglePopup}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-x"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            <a href="mailto:javiazagra12@gmail.com">{t("ContactMe")}</a>
          </div>
        </div>
        <div className="about--right">
          <img className="colorful-shadow" src="/assets/logo.jpg" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
