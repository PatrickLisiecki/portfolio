// Import framer motion
import { motion } from "framer-motion";

// Variants
const transitionVariants = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"],
    },
};

const Transition = () => {
    return (
        <>
            <motion.div
                className="w-screen h-screen fixed top-0 bottom-0 right-full z-30 bg-[#2e2257]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
                className="w-screen h-screen fixed top-0 bottom-0 right-full z-20 bg-[#3b2d71]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
                className="w-screen h-screen fixed top-0 bottom-0 right-full z-10 bg-[#4b3792]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
            ></motion.div>
        </>
    );
};

export default Transition;
