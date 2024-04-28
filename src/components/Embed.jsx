import { motion } from "framer-motion";

import Box from "./Box.jsx";

const Embed = ({ variants, darkMode, name, url }) => {
  return (
    <Box variants={variants} darkMode={darkMode} col={5} row={3}>
      <div className="big">
        <motion.div
          className="info"
          animate={{ color: darkMode ? "#eeeeee" : "#101010" }}
        >
          <h1>{name}</h1>
          <a href={url}>
            <h1>Visit</h1>
          </a>
        </motion.div>
        <div className="preview">
          <iframe src={url}></iframe>
        </div>
      </div>
    </Box>
  );
};

export default Embed;
