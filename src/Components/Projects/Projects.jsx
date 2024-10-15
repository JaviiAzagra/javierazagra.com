import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.scss";

const projects = [
  {
    img: "/assets/iconos/logotkey.png",
    imgblack: "/assets/iconos/logotkey.png",
    title: "TK Keyboards",
    description: "Description1",
    link: "https://tk-keyboards.vercel.app/",
    tag: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    img: "/assets/iconos/logotkcoderwhite.png",
    imgblack: "/assets/iconos/logotkcoderblack.png",
    title: "TkCoder",
    description: "Description8",
    link: "https://tkcoder.vercel.app/",
    tag: ["React"],
  },
  {
    img: "/assets/iconos/logomestre.png",
    imgblack: "/assets/iconos/logomestre.png",
    title: "Mestre Cabreta",
    description: "Description4",
    link: "https://mestrecabreta.com/",
    tag: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    img: "/assets/iconos/logotd.png",
    imgblack: "/assets/iconos/logotdblack.png",
    title: "To-Do List",
    description: "Description7",
    link: "https://todo-list-eta-two-75.vercel.app/",
    tag: ["React"],
  },
  {
    img: "/assets/iconos/logohewhite.png",
    imgblack: "/assets/iconos/logohe.png",
    title: "Medical Clinic",
    description: "Description2",
    link: "https://front-proyectofinal.vercel.app/",
    tag: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    img: "/assets/iconos/logofc.png",
    imgblack: "/assets/iconos/logofc.png",
    title: "Four Corners",
    description: "Description3",
    link: "https://four-corners-rho.vercel.app/",
    tag: ["Angular", "Node.js", "Express.js", "MongoDB"],
  },
  {
    img: "/assets/iconos/logolux.png",
    imgblack: "/assets/iconos/logolux.png",
    title: "Luxury Cars",
    description: "Description5",
    link: "https://luxury-cars-two.vercel.app/",
    tag: ["Angular", "Node.js", "Express.js", "MongoDB"],
  },
  {
    img: "/assets/iconos/logobot.png",
    imgblack: "/assets/iconos/logobot.png",
    title: "Discord Bot",
    description: "Description6",
    link: "https://github.com/JaviiAzagra/BOT-DISCORD",
    tag: ["JavaScript", "Discord.js"],
  },
];

const tagLogos = {
  React: "/assets/logos/react.png",
  "Node.js": "/assets/logos/node.png",
  "Express.js": "/assets/logos/express.png",
  MongoDB: "/assets/logos/mongodb.png",
  Angular: "/assets/logos/angular.png",
  JavaScript: "/assets/logos/js.png",
  "Discord.js": "/assets/logos/discord.png",
};

const ProjectList = ({ darkMode }) => {
  const { t } = useTranslation();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleClickShowMore = () => {
    setShowAllProjects(true);
  };

  const handleClickShowLess = () => {
    setShowAllProjects(false);
  };

  return (
    <div className="projects" id="projects">
      <div className="projects--cards">
        {projects
          .slice(0, showAllProjects ? projects.length : 6)
          .map((project) => (
            <div className="projects--cards__card" key={project.title}>
              <div className="projects--cards__card--img">
                {darkMode ? (
                  <img src={project.img} alt={project.title} />
                ) : (
                  <img src={project.imgblack} alt={project.title} />
                )}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-link"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15l6 -6" />
                  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                </svg>
              </a>
              <p>{t(project.description)}</p>
              <div className="projects--cards__card--language">
                {project.tag.map((tag, index) => (
                  <div
                    key={index}
                    className="projects--cards__card--language__tag"
                  >
                    <img src={tagLogos[tag]} alt={tag} className="tag-logo" />
                    <p key={index}>{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      {!showAllProjects ? (
        <button className="show-more-button" onClick={handleClickShowMore}>
          {t("ShowMore")}
        </button>
      ) : (
        <button className="show-more-button" onClick={handleClickShowLess}>
          {t("ShowLess")}
        </button>
      )}
    </div>
  );
};

export default ProjectList;
