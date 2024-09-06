import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import "./App.scss";
import CV from "./CV/CV";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import ReactGA from "react-ga4"; // Importa react-ga4

const GA_TRACKING_ID = "G-EF4H9B7VNK";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Inicializa Google Analytics
  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  // Envía un evento de vista de página cuando cambie la ruta
  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.send({ hitType: "pageview", page: url });
    };

    // Si estás usando un enrutador como React Router, necesitarás escuchar los cambios de ruta
    // Puedes usar la API del enrutador para hacer esto. Ejemplo con React Router v6:
    // const location = useLocation();
    // useEffect(() => {
    //   handleRouteChange(location.pathname);
    // }, [location.pathname]);

    // Elimina el manejador de eventos si es necesario
    return () => {
      // cleanup code if needed
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Analytics />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Experience experience={CV.experience} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
