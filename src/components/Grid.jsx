import Contact from "./Contact.jsx";
import {motion} from "framer-motion";

const Grid = () => {
    return (
        <div className="grid">
            <motion.div
                className="item"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 0.2, y: 0}}
                whileHover={{opacity: 0.3, scale: 1.02}}
            >
                Hi
            </motion.div>
            <Contact/>
        </div>
    )
}

export default Grid;