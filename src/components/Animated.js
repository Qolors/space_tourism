import { motion } from "framer-motion";

const animations = {
    initial: { scale: 0.5, opacity: 0},
    animate: { scale: 1, opacity: 1},
    exit: { scale: 2, opacity: 0 },
}


const Animated = ({ children }) => {
    return (
        <motion.div variants={animations} initial="initial"
        animate="animate" exit="exit" transition={{duration: 0.5}}
        >
            {children}
        </motion.div>
    )
}

export default Animated;