import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";
import "./Navbar.scss";

const Navbar = ({ toggleDarkMode, darkMode, setSelectedLng }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isBackgroundBlocked, setIsBackgroundBlocked] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [colorChange, setColorChange] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const changeNavbarColor = () => {
        if (window.innerWidth >= 750) {
            setColorChange(window.scrollY >= 4);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor);
        return () => {
            window.removeEventListener("scroll", changeNavbarColor);
        };
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const { t } = useTranslation();

    useEffect(() => {
        if (isBackgroundBlocked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isBackgroundBlocked]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const links = [
        { text: t("About"), id: "about" },
        { text: t("Projects"), id: "projects" },
        { text: t("Experience"), id: "experience" },
        { text: t("Contact"), id: "contact" },
    ];

    const lng = [
        { text: "English", value: "en" },
        { text: "Español", value: "es" },
        { text: "Deutsch", value: "de" },
    ];

    const toggleMenuMobile = () => {
        setIsPopupOpen(!isPopupOpen);
        setIsBackgroundBlocked(!isBackgroundBlocked);
    };

    const pageUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`navbar ${colorChange ? "colorChange" : ""}`}>
            <nav>
                <div className="navbar--logo" onClick={pageUp}>
                    {darkMode ? (
                        <img src="/assets/logowhite.webp" alt="logowhite" />
                    ) : (
                        <img src="/assets/logoblack.webp" alt="logoblack" />
                    )}
                </div>
                <div className="navbar--links">
                    <div className="navbar--links__link">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                href={link.href}
                                target={link.target}
                                onClick={() => scrollToSection(link.id)}
                            >
                                {link.text}
                            </button>
                        ))}
                        <a
                            href="https://tkcoder.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Blog{" "}
                        </a>
                    </div>

                    <div className="navbar--links__lng dropdown">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-language"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 5h7" />
                            <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
                            <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
                            <path d="M12 20l4 -9l4 9" />
                            <path d="M19.1 18h-6.2" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-chevron-down"
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
                            <path d="M6 9l6 6l6 -6" />
                        </svg>
                        <div className="dropdown-content">
                            {lng.map((item) => (
                                <button
                                    onClick={() => {
                                        changeLanguage(item.value); setSelectedLng(item.value);
                                    }}
                                >
                                    {item.text}{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-arrow-up-right"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M17 7l-10 10" />
                                        <path d="M8 7l9 0l0 9" />
                                    </svg>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="navbar--links__theme">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={toggleDarkMode}
                                aria-label="Dark Mode"
                            />
                            <span className="slider">
                                {darkMode ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-moon"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-sun"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                                    </svg>
                                )}
                            </span>
                        </label>
                    </div>

                    <div className="navbar--links__social">
                        <a
                            href="https://github.com/JaviiAzagra"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Social Media"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-github"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/javier-azagra-garc%C3%ADa/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Social Media"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-linkedin"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M8 11l0 5" />
                                <path d="M8 8l0 .01" />
                                <path d="M12 16l0 -5" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com/12jav1_"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Social Media"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-x"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="menu" onClick={toggleMenuMobile}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-menu-2"
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
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </div>
                {isPopupOpen && (
                    <div className="mobilemenu">
                        <div className="mobilemenu--content">
                            <button className="close-buttonmobile">
                                <svg
                                    onClick={toggleMenuMobile}
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
                            <div className="mobilemenu--content__links">
                                <div className="mobilemenu--content__links--link">
                                    {links.map((link) => (
                                        <button
                                            key={link.id}
                                            href={link.href}
                                            target={link.target}
                                            onClick={() => {
                                                scrollToSection(link.id);
                                                toggleMenuMobile();
                                            }}
                                        >
                                            {link.text}
                                        </button>
                                    ))}
                                    <a
                                        href="https://tkcoder.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Blog{" "}
                                    </a>
                                </div>

                                <div
                                    className="mobilemenu--content__links--lng"
                                    onClick={toggleDropdown}
                                >
                                    <div className="mobilemenu--content__links--lng__svg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-language"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 5h7" />
                                            <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
                                            <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
                                            <path d="M12 20l4 -9l4 9" />
                                            <path d="M19.1 18h-6.2" />
                                        </svg>
                                        <p>{t("lng")}</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-chevron-down"
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
                                            <path d="M6 9l6 6l6 -6" />
                                        </svg>
                                    </div>

                                    {dropdownOpen && (
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "15px",
                                                marginLeft: "30px",
                                            }}
                                        >
                                            {lng.map((item) => (
                                                <button
                                                    onClick={() => {
                                                        changeLanguage(item.value); setSelectedLng(item.value)
                                                    }}
                                                >
                                                    {item.text}{" "}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="icon icon-tabler icon-tabler-arrow-up-right"
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M17 7l-10 10" />
                                                        <path d="M8 7l9 0l0 9" />
                                                    </svg>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="mobilemenu--content__links--appearance">
                                    <p>{t("Appaerance")}</p>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={darkMode}
                                            onChange={toggleDarkMode}
                                        />
                                        <span className="slider">
                                            {darkMode ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-moon"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-sun"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                                                </svg>
                                            )}
                                        </span>
                                    </label>
                                </div>
                                <div className="mobilemenu--content__links--social">
                                    <a
                                        href="https://github.com/JaviiAzagra"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-brand-github"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/javier-azagra-garc%C3%ADa/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="linkedin"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-brand-linkedin"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                            <path d="M8 11l0 5" />
                                            <path d="M8 8l0 .01" />
                                            <path d="M12 16l0 -5" />
                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://twitter.com/12jav1_"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="twitter"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-brand-twitter"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
