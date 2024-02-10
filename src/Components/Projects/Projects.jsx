import React from "react";
import "./Projects.scss";
import { useTranslation } from "react-i18next";

const Projects = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <div className="projects" id="projects">
      <div className="projects--cards">
        <a
          href="https://tk-keyboards.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projects--cards__card">
            <div className="projects--cards__card--img">
              <img src="/assets/iconos/logotkey.png" alt="TK Keyboards" />
            </div>
            <a
              href="https://tk-keyboards.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TK Keyboards
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-link"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
            </a>
            <p>{t("Description1")}</p>
            <div className="projects--cards__card--language">
              <p>React</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB</p>
            </div>
          </div>
        </a>
        <a
          href="https://front-proyectofinal.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projects--cards__card">
            <div className="projects--cards__card--img">
              {darkMode ? (
                <img
                  src="/assets/iconos/logohewhite.png"
                  alt="Medical Clinic"
                />
              ) : (
                <img src="/assets/iconos/logohe.png" alt="Medical Clinic" />
              )}
            </div>
            <a
              href="https://front-proyectofinal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medical Clinic{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-link"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
            </a>
            <p>{t("Description2")}</p>
            <div className="projects--cards__card--language">
              <p>React</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB</p>
            </div>
          </div>
        </a>
        <a
          href="https://four-corners-rho.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projects--cards__card">
            <div className="projects--cards__card--img">
              <img src="/assets/iconos/logofc.png" alt="Four Corners" />
            </div>
            <a href="https://four-corners-rho.vercel.app/" target="_blank">
              Four Corners{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-link"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
            </a>
            <p>{t("Description3")}</p>
            <div className="projects--cards__card--language">
              <p>Angular</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB</p>
            </div>
          </div>
        </a>
        <a
          href="https://www.mestrecabreta.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projects--cards__card">
            <div className="projects--cards__card--img">
              <img src="/assets/iconos/logomestre.png" alt="Mestre Cabreta" />
            </div>
            <a href="https://www.mestrecabreta.com/" target="_blank">
              Mestre Cabreta{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-link"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
            </a>
            <p>{t("Description4")}</p>
            <div className="projects--cards__card--language">
              <p>React</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB</p>
            </div>
          </div>
        </a>
        <a
          href="https://luxury-cars-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projects--cards__card">
            <div className="projects--cards__card--img">
              <img src="/assets/iconos/logolux.png" alt="Luxury Cars" />
            </div>
            <a href="https://luxury-cars-two.vercel.app/" target="_blank">
              Luxury Cars{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-link"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
            </a>
            <p>{t("Description5")}</p>
            <div className="projects--cards__card--language">
              <p>Angular</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB</p>
            </div>
          </div>
        </a>

        <a href="https://github.com/JaviiAzagra/BOT-DISCORD" target="_blank">
          <div className="projects--cards__card">
            <div className="projects--cards__card--img">
              <img src="/assets/iconos/logobot.png" alt="Discord Bot" />
            </div>
            <a
              href="https://github.com/JaviiAzagra/BOT-DISCORD"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord Bot{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-link"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
            </a>
            <p>{t("Description6")}</p>
            <div className="projects--cards__card--language">
              <p>JavaScript</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
