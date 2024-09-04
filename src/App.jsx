import "./App.scss";
import Grid from "./components/Grid.jsx";
import Header from "./components/Header.jsx";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  };

  const heroText = "Don DeWaay";

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={999}
          className="bg"
          initial={{ backgroundColor: darkMode ? "#000000" : "#eeeeee" }}
          animate={{
            backgroundColor: !darkMode ? "#eeeeee" : "black",
          }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="main">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <motion.h1
          key="hero"
          className="hero"
          animate={{ color: darkMode ? "#eeeeee" : "#101010" }}
          style={{ textShadow: `2px 2px ${darkMode ? "white" : "black"}` }}
        >
          {heroText}
        </motion.h1>
        <Grid darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
