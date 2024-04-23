import {motion} from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            className="item"
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 0.2, y: 0}}
            whileHover={{opacity: 0.3, scale: 1.01}}
        >

        </motion.div>

    )
}

export default Contact;