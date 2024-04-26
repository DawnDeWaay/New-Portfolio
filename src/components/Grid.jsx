import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import Contact from "./Contact.jsx";
import Box from "./Box.jsx";
import SiteShowcase from "./SiteShowcase.jsx";

const Grid = ({ darkMode }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: darkMode ? 1 : 0.9,
      y: 0,
      border: darkMode ? "2px #242628 solid" : "none",
      backgroundColor: darkMode ? "#171717" : "white",
      color: darkMode ? "#eeeeee" : "#171717",
      boxShadow: darkMode ? "none" : "0 5px 11px rgba(33,33,33,.2)",
      delay: Math.random() * 0.5,
    },
    hover: {
      opacity: 1,
      boxShadow: darkMode ? "none" : "0 10px 11px rgba(33,33,33,.2)",
    },
  };

  return (
    <div className="grid">
      <AnimatePresence>
        <SiteShowcase
          variants={variants}
          darkMode={darkMode}
          name="To-Do"
          url="https://dondewaay.github.io/To-Do/"
        />
        <Contact variants={variants} />
        <Box variants={variants} darkMode={darkMode} />
        <Box variants={variants} darkMode={darkMode} />
        <Box variants={variants} darkMode={darkMode} />
        <SiteShowcase
          variants={variants}
          darkMode={darkMode}
          name="MultiRoll"
          url="https://dondewaay.github.io/MultiRoll/"
        />
        <Box variants={variants} darkMode={darkMode} />
        <Box variants={variants} darkMode={darkMode} />
        <Box variants={variants} darkMode={darkMode} />
        <Tilt
          className="item-bar"
          tiltMaxAngleX={6}
          tiltMaxAngleY={3}
          glareEnable={true}
          glareMaxOpacity={0.05}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="22px"
          scale={1.02}
        >
          <motion.div
            key={5}
            className="item"
            variants={variants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          ></motion.div>
        </Tilt>
        <Box variants={variants} darkMode={darkMode} />
        <Box variants={variants} darkMode={darkMode} />
        <Box variants={variants} darkMode={darkMode} />
      </AnimatePresence>
    </div>
  );
};

export default Grid;
