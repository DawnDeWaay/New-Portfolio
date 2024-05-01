import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Box = ({ variants, col, row, children }) => {
  return (
    <Tilt
      tiltMaxAngleX={0}
      tiltMaxAngleY={0}
      glareEnable={false}
      glareMaxOpacity={0.05}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="22px"
      scale={1.02}
      style={{
        gridRow: `span ${row}`,
        gridColumn: `span ${col}`,
        aspectRatio: row === col ? "1" : "",
      }}
    >
      <motion.div
        className="item"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: Math.random() * 0.6 }}
        whileHover="hover"
      >
        {children}
      </motion.div>
    </Tilt>
  );
};

export default Box;
