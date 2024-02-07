import React from "react";
import "./Footer.scss";
import pdf from "./Javier-AzagraCV.pdf";
import { useTranslation } from "react-i18next";

const SocialIcon = ({ platform, link, icon, viewBox }) => (
  <a href={link} rel="noreferrer" target="_blank" aria-label="social">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox={viewBox}
    >
      <path d={icon} />
    </svg>
  </a>
);

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footer--top">
        <div className="footer--top__name">
          <h1>
            JAVIER AZAGRA{" "}
            <a
              className="cv__btn"
              href={pdf}
              /* download="JavierAzagraCV.pdf" */
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7l7-7Z" />
              </svg>
            </a>
          </h1>
          <p>{t("AboutInfo")}</p>
        </div>
        <div className="footer--top__social">
          <h1>SOCIAL</h1>
          <div className="footer--top__social__icons">
            <SocialIcon
              platform="GitHub"
              link="https://github.com/JaviiAzagra"
              icon="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
              viewBox="0 0 24 24"
            />
            <SocialIcon
              platform="Linkdin"
              link="https://www.linkedin.com/in/javier-azagra-garc%C3%ADa/"
              icon="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
              viewBox="0 0 24 24"
            />
            <SocialIcon
              platform="X"
              link="https://x.com/12jav1_"
              icon="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
              viewBox="0 0 24 24"
            />
            <SocialIcon
              platform="Instagram"
              link="https://instagram.com/12jav1"
              icon="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
              viewBox="0 0 24 24"
            />
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer--botton">
        <p>
          © Copyright 2023. Made by{" "}
          <a
            href="https://www.javierazagra.com"
            rel="noreferrer"
            target="_blank"
          >
            Javier Azagra.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
