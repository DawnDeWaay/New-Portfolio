import { motion, AnimatePresence } from "framer-motion";
import Box from "./Box.jsx";
import Contact from "./Contact.jsx";
import Embed from "./Embed.jsx";
import Gallery from "./Gallery.jsx";
import Don from "/img/don.jpeg";

/*
TODO Add:

* Languages and tech I know
* Add pics to the gallery as a top portion

*/

const Grid = ({ darkMode }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      y: 0,
      opacity: darkMode ? 0.9 : 1,
      backgroundColor: darkMode ? "#171717" : "white",
      color: darkMode ? "#eeeeee" : "#101010",
      border: darkMode ? "2px #242628 solid" : "none",
      boxShadow: darkMode ? "none" : "0 5px 11px rgba(33,33,33,.2)",
    },
  };

  return (
    <div className="grid">
      <AnimatePresence>
        <Gallery
          variants={variants}
          darkMode={darkMode}
          name="Gallery"
          url={Don}
        />
        <Contact variants={variants} darkMode={darkMode} />
        <Box variants={variants} />
        <Box variants={variants} darkMode={darkMode} col={2} row={2} />
        <Box variants={variants} />
        <Box variants={variants} col={2} row={1}>
          <div className="inside">
            <img src="/img/bear.jpeg" />
          </div>
        </Box>
        <Box variants={variants}>
          {" "}
          <div className="inside">
            <img src="/img/bear.jpeg" />
          </div>
        </Box>
        <Box variants={variants} col={2} row={1}>
          <div className="inside">
            <img src="/img/bear.jpeg" />
          </div>
        </Box>

        <Embed
          variants={variants}
          darkMode={darkMode}
          name="To-Do"
          url="https://dondewaay.github.io/To-Do/"
        />
        <Box variants={variants} />
        <Box variants={variants} />
        <Box variants={variants} />
        <Box variants={variants} col={2} row={1} />
        <Box variants={variants} col={2} row={1} />
        <Box variants={variants} col={2} row={1} />
        <Box variants={variants} col={3} row={2} />
        <Box variants={variants} />
        <Box variants={variants} col={2} row={1} />
        <Box variants={variants} col={2} row={1} />
        <Embed
          variants={variants}
          darkMode={darkMode}
          name="MultiRoll"
          url="https://dondewaay.github.io/MultiRoll/"
        />
        <Box variants={variants} />
        <Box variants={variants} />
        <Box variants={variants} />
        <motion.iframe
          className="item"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: Math.random() * 0.6 }}
          whileHover="hover"
          height="100"
          src="https://open.spotify.com/embed/playlist/1G9FItLV9x9ZYH87NJ7qkx?utm_source=generator&theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          style={{
            width: "100%",
            height: "100%",
            gridRow: "span 3",
            gridColumn: "span 4",
            border: "none",
          }}
        />
        <Box variants={variants} />
      </AnimatePresence>
    </div>
  );
};

export default Grid;
