import Box from "./Box.jsx";
import { motion } from "framer-motion";

const Gallery = ({ variants, darkMode, name, url }) => {
  return (
    <Box variants={variants} darkMode={darkMode} col={4} row={3}>
      <div className="big">
        <motion.div
          className="info"
          animate={{ color: darkMode ? "#eeeeee" : "#101010" }}
        >
          <h1>{name}</h1>
        </motion.div>
        <div className="preview">
          <img src={url} alt={name} />
        </div>
      </div>
    </Box>
  );
};

export default Gallery;
