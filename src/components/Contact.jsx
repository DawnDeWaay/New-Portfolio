import Box from "./Box.jsx";
import { motion } from "framer-motion";

const Contact = ({ variants, darkMode }) => {
  return (
    <Box variants={variants} darkMode={darkMode} row={1} col={1}>
      <div className="contact">
        <motion.a
          className="link"
          whileHover={{
            boxShadow: "0px 1px 10px 3px #add8e6",
            transition: { duration: 0.2 },
          }}
          href={"mailto:dondewaay@gmail.com"}
          style={{ backgroundColor: "#add8e6" }}
        >
          <img src="/logo/email.svg" alt="mail" />
        </motion.a>
        <motion.a
          className="link"
          whileHover={{
            boxShadow: "0px 1px 10px 3px #2b3137",
            transition: { duration: 0.2 },
          }}
          href={"https://github.com/dondewaay"}
          style={{ backgroundColor: "#2b3137" }}
        >
          <img src="/logo/github.png" />
        </motion.a>
        <motion.a
          className="link"
          whileHover={{
            boxShadow: "0px 1px 10px 3px #0277b5",
            transition: { duration: 0.2 },
          }}
          href={"https://www.linkedin.com/in/don-dewaay/"}
          style={{ backgroundColor: "#0277b5" }}
        >
          <img src="/logo/linkedin.svg" alt="" />
        </motion.a>
        <motion.a
          className="link"
          whileHover={{
            boxShadow: "0px 1px 10px 3px #dd2a7b",
            transition: { duration: 0.2 },
          }}
          href={"https://www.instagram.com/don_dewaay_iii/"}
          style={{ backgroundColor: "#dd2a7b" }}
        >
          <img src="/logo/instagram.svg" alt="" />
        </motion.a>
      </div>
    </Box>
  );
};

export default Contact;
