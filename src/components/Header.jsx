import { motion } from "framer-motion";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <motion.div className="header">
      <a href="/">
        <motion.h2 animate={{ color: darkMode ? "#eeeeee" : "#101010" }}>
          🦋 Don DeWaay III
        </motion.h2>
      </a>
      <a href="/">
        <h2 onClick={toggleDarkMode}>Dark</h2>
      </a>
    </motion.div>
  );
};

export default Header;
