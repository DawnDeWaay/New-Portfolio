import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Box = ({ variants, darkMode }) => {
  return (
    <Tilt
      className="item-small"
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      glareEnable={true}
      glareMaxOpacity={0.05}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="22px"
      scale={1.02}
    >
      <motion.div
        key={4}
        className="item"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: Math.random() * 0.5 }}
        whileHover="hover"
      >
        Lorem
      </motion.div>
    </Tilt>
  );
};

export default Box;
