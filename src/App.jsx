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

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="bg"
          initial={{ backgroundColor: darkMode ? "black" : "#eeeeee" }}
          animate={{
            backgroundColor: darkMode ? "black" : "#eeeeee",
            transition: { duration: 0.5 },
          }}
        />
      </AnimatePresence>
      <div className="main">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <motion.h1
          className="hero"
          animate={{ color: darkMode ? "#eeeeee" : "#101010" }}
        >
          Don DeWaay
        </motion.h1>
        <Grid darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
