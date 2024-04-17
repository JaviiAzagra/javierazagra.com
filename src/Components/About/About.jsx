import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Habilities from "../Habilities/Habilities";
import "./About.scss";
import cisco from "./Cisco.pdf";
import pdf from "./JavierAzagraCV.pdf";

const About = ({ darkMode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const { t } = useTranslation();
  const [showFirstImage, setShowFirstImage] = useState(true);

  const handleClick = () => {
    setShowFirstImage(!showFirstImage);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const togglePopup2 = () => {
    setIsPopupOpen2(!isPopupOpen2);
  };

  return (
    <div id="about">
      <div className="about">
        {/* <div className="about--touch">
          <p>Click</p>
          {darkMode ? (
            <img src="/assets/arrowaboutwhite.png" alt="Arrow" />
          ) : (
            <img src="/assets/arrowabout.png" alt="Arrow" />
          )}
        </div> */}

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
            <button onClick={togglePopup2} target="_blank" rel="noreferrer">
              {t("Certifications")}
            </button>
            {isPopupOpen2 && (
              <div className="popup-overlay">
                <div className="popup-content">
                  <a
                    style={{ marginTop: "30px", marginBottom: "10px" }}
                    target="_blank"
                    rel="noreferrer"
                    href={cisco}
                  >
                    Cisco
                  </a>

                  <button className="close-button" onClick={togglePopup2}>
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
          </div>
        </div>
        <div className="about--right">
          <img src="/assets/logomemoji.webp" alt="logo" onClick={handleClick} />
          {/* {showFirstImage ? (
            <img
              src="/assets/logomemoji.png"
              alt="logo"
              onClick={handleClick}
            />
          ) : (
            <img
              style={{
                borderRadius: "50%",
                width: "300px",
                filter: "none",
              }}
              src="/assets/logo.jpg"
              alt="logo"
              onClick={handleClick}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default About;
