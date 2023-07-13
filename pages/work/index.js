import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
    return (
        <div className="h-full flex items-center py-36 bg-primary/30">
            <Circles />
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    <div className="flex flex-col text-center mb-4 xl:w-[30vw] xl:mb-0 lg:text-left">
                        <motion.h2
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="h2 xl:mt-12"
                        >
                            My Projects<span className="text-accent">.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="max-w-[400px] mx-auto mb-4 lg:mx-0"
                        >
                            A collection of personal projects and work done
                            throughout my undergraduate degree. Click on a
                            project to view the code and a detailed walkthrough.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-full xl:max-w-[65%]"
                    >
                        <WorkSlider />
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
    );
};

export default Work;
