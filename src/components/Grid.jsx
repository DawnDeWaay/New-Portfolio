import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Contact from "./Contact.jsx";
const Grid = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 0.9,
      y: 0,
    },
    hover: { opacity: 1, scale: 1.02 },
  };

  return (
    <div className="grid">
      <Tilt className="tilt item-large" tiltMaxAngleX={2} tiltMaxAngleY={2}>
        <motion.div
          className="item big"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <h1>MultiRoll</h1>
          <img src="/img/MultiRoll.jpeg" alt="" />
        </motion.div>
      </Tilt>
      <Contact variants={variants} />
      <Tilt className="tilt item-small" tiltMaxAngleX={8} tiltMaxAngleY={8}>
        <motion.div
          className="item"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Hi
        </motion.div>
      </Tilt>
      <Tilt className="tilt item-small" tiltMaxAngleX={8} tiltMaxAngleY={8}>
        <motion.div
          className="item"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Hi
        </motion.div>
      </Tilt>
      <Tilt className="tilt item-bar" tiltMaxAngleX={8} tiltMaxAngleY={8}>
        <motion.div
          className="item"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Hi
        </motion.div>
      </Tilt>
      <Tilt className="tilt item-small" tiltMaxAngleX={8} tiltMaxAngleY={8}>
        <motion.div
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
