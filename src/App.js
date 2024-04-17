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

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  /* const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    storedDarkMode ? JSON.parse(storedDarkMode) : null
  );

  useEffect(() => {
    if (darkMode === null) {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      setDarkMode(prefersDarkMode.matches);

      const handleChange = (event) => {
        setDarkMode(event.matches);
      };

      prefersDarkMode.addEventListener("change", handleChange);

      return () => {
        prefersDarkMode.removeEventListener("change", handleChange);
      };
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  }; */

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* <div className="App--color"></div> */}
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
