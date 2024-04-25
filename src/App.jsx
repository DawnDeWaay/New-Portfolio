import "./App.scss";
import Grid from "./components/Grid.jsx";
import Header from "./components/Header.jsx";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("hit");
  };

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
