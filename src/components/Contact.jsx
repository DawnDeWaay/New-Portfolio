import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Contact = ({ variants }) => {
  return (
    <Tilt className="tilt item-small" tiltMaxAngleX={8} tiltMaxAngleY={8}>
      <motion.div
        className="item contact"
        variants={variants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
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
          <img src="/logo/github.png" alt="" />
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
      </motion.div>
    </Tilt>
  );
};

export default Contact;
