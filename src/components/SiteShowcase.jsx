import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const SiteShowcase = ({ variants, darkMode, name, url }) => {
  return (
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
          border: darkMode ? "2px #242628 solid" : "none",
          boxShadow: darkMode ? "none" : "0 5px 11px rgba(33,33,33,.2)",
        }}
        transition={{delay: Math.random()* 0.5}}
        whileHover="hover"
      >
        <motion.div
          className="info"
          animate={{
            color: darkMode ? "#eeeeee" : "#101010",
          }}
        >
          <h1>{name}</h1>
          <a href={url}>
            <h1>Visit</h1>
          </a>
        </motion.div>
        <div className="preview">
          <iframe loading="lazy" src={url} />
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SiteShowcase;
