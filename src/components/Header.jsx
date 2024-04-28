import { motion } from "framer-motion";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <motion.div
      className="header"
      animate={{
        backgroundColor: darkMode ? "#171717" : "white",
        border: darkMode ? "2px #242628 solid" : "none",
        boxShadow: darkMode ? "none" : "0 5px 11px rgba(33,33,33,.2)",
        opacity: darkMode ? 0.95 : 1,
      }}
    >
      <a href="/">
        <motion.div animate={{ color: darkMode ? "#eeeeee" : "#101010" }}>
          <span style={{ fontStyle: "none" }}>🦋</span> Don DeWaay III
        </motion.div>
      </a>
      <a href="/">
        <motion.div
          onClick={toggleDarkMode}
          animate={{ color: darkMode ? "#eeeeee" : "#101010" }}
        >
          {darkMode ? "Light" : "Dark"}
        </motion.div>
      </a>
    </motion.div>
  );
};

export default Header;
