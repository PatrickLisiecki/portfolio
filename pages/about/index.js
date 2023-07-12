import React, { useState } from "react";

// Icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
} from "react-icons/si";

// Import components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import CountUp from "react-countup";

// Import frame motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//  Data
const aboutData = [
    {
        title: "skills",
        info: [
            {
                title: "Web Development",
                icons: [
                    <FaHtml5 />,
                    <FaCss3 />,
                    <FaJs />,
                    <FaReact />,
                    <SiNextdotjs />,
                    <SiFramer />,
                    <FaWordpress />,
                ],
            },
            {
                title: "UI/UX Design",
                icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
            },
        ],
    },
    {
        title: "awards",
        info: [
            {
                title: "Webby Awards - Honoree",
                stage: "2011 - 2012",
            },
            {
                title: "Adobe Design Achievement Awards - Finalist",
                stage: "2009 - 2010",
            },
        ],
    },
    {
        title: "experience",
        info: [
            {
                title: "UX/UI Designer - XYZ Company",
                stage: "2012 - 2023",
            },
            {
                title: "Web Developer - ABC Agency",
                stage: "2010 - 2012",
            },
            {
                title: "Intern - DEF Corporation",
                stage: "2008 - 2010",
            },
        ],
    },
    {
        title: "credentials",
        info: [
            {
                title: "Web Development - ABC University, LA, CA",
                stage: "2011",
            },
            {
                title: "Computer Science Diploma - AV Technical Institute",
                stage: "2009",
            },
            {
                title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
                stage: "2006",
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
            <Circles />
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex absolute bottom-0 -left-[370px]"
            >
                <Avatar />
            </motion.div>
            <div className="h-full container mx-auto flex flex-col items-center gap-x-6 xl:flex-row">
                <div className="flex-1 flex flex-col justify-center">
                    <h2>
                        Captivating <span className="text-accent">Stories</span>{" "}
                        birth magnificent designs.
                    </h2>
                    <p className="max-w-[500px] mx-auto mb-6 px-2 xl:mx-0 xl:mb-12 xl:px-0">
                        4 years ago, I began developing web applications. Since
                        then, I've done remote work for numerous companies.{" "}
                    </p>
                    <div>
                        <div>
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl font-extrabold text-accent mb-2 xl:text-4xl">
                                    <CountUp start={0} end={4} duration={10} />
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Years of experience
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[480px] flex flex-col xl:max-w-[48%]">
                    <div className="mx-auto flex gap-x-4 mb-4 xl:gap-x-8 xl:mx-0">
                        {aboutData.map((currentItem, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`${
                                        index === i &&
                                        "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                                    } cursor-pointer capitalize relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 xl:text-lg`}
                                    onClick={() => setIndex(i)}
                                >
                                    {currentItem.title}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6">
                        {aboutData[index].info.map((currentItem, i) => {
                            return (
                                <div
                                    key={i}
                                    className="max-w-max flex-1 flex flex-col items-center gap-x-2 text-white/60 md:flex-row"
                                >
                                    <div>{currentItem.title}</div>
                                    <div className="hidden md:flex">-</div>
                                    <div>{currentItem.stage}</div>
                                    <div className="flex gap-x-4">
                                        {currentItem.icons?.map((icon, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="text-2xl"
                                                >
                                                    {icon}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
