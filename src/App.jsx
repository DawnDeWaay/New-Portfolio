import "./App.scss";
import Grid from "./components/Grid.jsx";
import Header from "./components/Header.jsx";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("darkMode");
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return storedTheme === "dark" || prefersDarkMode ? "dark" : "light";
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark-theme", darkMode === "dark");
  }, [darkMode]);

  return (
    <>
      <div className="main">
        <Header toggleDarkMode={toggleDarkMode} />
        <h1 className="hero">
          Don
          <br />
          DeWaay
        </h1>
        <Grid />
      </div>
    </>
  );
}

export default App;
