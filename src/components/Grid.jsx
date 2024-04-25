import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Contact from "./Contact.jsx";
import Box from "./Box.jsx";
const Grid = ({ darkMode }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: darkMode ? 1 : 0.9,
      y: 0,
      border: darkMode ? "2px #242628 solid" : "none",
      backgroundColor: darkMode ? "#171717" : "white",
    },
    hover: { opacity: 1 },
  };

  return (
    <div className="grid">
      <Tilt
        className="item-large"
        tiltMaxAngleX={1}
        tiltMaxAngleY={0.5}
        glareEnable={true}
        glareMaxOpacity={0.05}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="22px"
        scale={1.02}
      >
        <motion.div
          key={1}
          className="item big"
          variants={variants}
          initial="hidden"
          animate={{
            opacity: darkMode ? 0.9 : 1,
            backgroundColor: darkMode ? "#171717" : "white",
            color: darkMode ? "#eeeeee" : "#101010",
          }}
          whileHover="hover"
        >
          <motion.div
            className="info"
            animate={{
              color: darkMode ? "#eeeeee" : "#101010",
            }}
          >
            <h1>MultiRoll</h1>
            <h1>Visit Here</h1>
          </motion.div>
          <div className="preview">
            <iframe
              loading="lazy"
              src="https://dondewaay.github.io/MultiRoll/"
            />
          </div>
        </motion.div>
      </Tilt>
      <Contact variants={variants} />
      <Tilt
        className="item-small"
        tiltMaxAngleX={2}
        tiltMaxAngleY={3}
        glareEnable={true}
        glareMaxOpacity={0.05}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="22px"
        scale={1.02}
      >
        <motion.div
          key={2}
          className="item"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Hi
        </motion.div>
      </Tilt>
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
        >
          Hi
        </motion.div>
      </Tilt>
    </div>
  );
};

export default Grid;
