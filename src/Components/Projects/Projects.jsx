import React from "react";
import "./Projects.scss";
import { useTranslation } from "react-i18next";

const Projects = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <div className="projects" id="projects">
      <div className="projects--cards">
        <div className="projects--cards__card">
          <div className="projects--cards__card--img">
            <img src="/assets/iconos/logotkey.png" alt="TK Keyboards" />
          </div>
          <a href="https://tk-keyboards.vercel.app/" target="_blank">
            TK Keyboards{" "}
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
          <p>
            ⌨️ Tk Keyboards is dedicated to creating high-quality mechanical
            keyboards and custom kits.
          </p>
        </div>

        <div className="projects--cards__card">
          <div className="projects--cards__card--img">
            {darkMode ? (
              <img src="/assets/iconos/logohewhite.png" alt="Medical Clinic" />
            ) : (
              <img src="/assets/iconos/logohe.png" alt="Medical Clinic" />
            )}
          </div>
          <a href="https://front-proyectofinal.vercel.app/" target="_blank">
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
          <p>
            🏥 Medical clinic project created with React for the final project
            of the Full Stack Developer bootcamp.
          </p>
        </div>

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
          <p>🏪 A sneaker and clothing store created with Angular.</p>
        </div>

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
          <p>
            Program the entire frontend of the page. Includes several languages.
          </p>
        </div>
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
          <p>
            🚗 Luxury car rental website built with Angular and functionality
            allowing users to delete, create, and edit vehicles.
          </p>
        </div>
        <div className="projects--cards__card">
          <div className="projects--cards__card--img">
            <img src="/assets/iconos/logobot.png" alt="Discord Bot" />
          </div>
          <a href="https://github.com/JaviiAzagra/BOT-DISCORD" target="_blank">
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
          <p>
            🤖 A discord bot with roles, music, tickets and admins commands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
