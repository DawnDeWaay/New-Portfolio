import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
const Grid = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 0.8,
      y: 0,
    },
    hover: { opacity: 1, scale: 1.02 },
  };

  return (
    <div className="grid">
      <Tilt className="item item-1" tiltMaxAngleX={1} tiltMaxAngleY={1}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Hi
        </motion.div>
      </Tilt>
      <Tilt className="item item-2" tiltMaxAngleX={6} tiltMaxAngleY={6}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Hi
        </motion.div>
      </Tilt>
      <Tilt className="item item-3" tiltMaxAngleX={6} tiltMaxAngleY={6}>
        <motion.div
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
