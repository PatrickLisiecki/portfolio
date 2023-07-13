/* eslint-disable react/jsx-key */
import React, { useState } from "react";

// Icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { TbBrandVscode, TbJson } from "react-icons/tb";

import {
    FaHtml5,
    FaJs,
    FaReact,
    FaNodeJs,
    FaJava,
    FaPython,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaAws,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTailwindcss,
    SiPostgresql,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiCplusplus,
    SiSequelize,
    SiJest,
    SiEclipseide,
} from "react-icons/si";

// Import components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import CountUp from "react-countup";

// Import frame motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Data
const aboutData = [
    {
        title: "skills",
        info: [
            {
                title: "Programming Languages",
                icons: [
                    <FaJs />,
                    <SiCplusplus />,
                    <FaJava />,
                    <FaPython />,
                    <FaHtml5 />,
                    <FaCss3Alt />,
                ],
            },
            {
                title: "Frameworks / Libraries",
                icons: [
                    <FaReact />,
                    <FaNodeJs />,
                    <SiExpress />,
                    <SiNextdotjs />,
                    <SiTailwindcss />,
                    <SiJest />,
                ],
            },
            {
                title: "Databases",
                icons: [
                    <SiPostgresql />,
                    <SiMongodb />,
                    <SiMysql />,
                    <SiSequelize />,
                ],
            },
            {
                title: "Others",
                icons: [
                    <FaGitAlt />,
                    <FaGithub />,
                    <TbBrandVscode />,
                    <SiEclipseide />,
                    <FaAws />,
                    <TbJson />,
                ],
            },
        ],
    },
    // {
    //     title: "awards",
    //     info: [
    //         {
    //             title: "",
    //             stage: "",
    //         },
    //         {
    //             title: "",
    //             stage: "",
    //         },
    //     ],
    // },
    // {
    //     title: "experience",
    //     info: [
    //         {
    //             title: "",
    //             stage: "",
    //         },
    //         {
    //             title: "",
    //             stage: "",
    //         },
    //         {
    //             title: "",
    //             stage: "",
    //         },
    //     ],
    // },
    {
        title: "credentials",
        info: [
            {
                title: "BS Computer Science - City University of New York, College of Staten Island",
                stage: "Expected 2024",
            },
            {
                title: "Full Stack Software Engineer Student - Tech Talent Pipeline",
                stage: "June 2023 - Present",
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
                    <motion.span
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-2xl"
                    >
                        Solving{" "}
                        <span className="text-accent">complex problems </span>
                        and{" "}
                        <span className="text-accent">
                            crafting elegant solutions{" "}
                        </span>
                        is why I decided to pursue a CS degree.
                    </motion.span>
                    <motion.p
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-[500px] mx-auto mb-6 px-2 xl:mx-0 xl:mb-12 xl:px-0"
                    >
                        From crafting visually engaging user interfaces to
                        working on backend systems, the full-service delivery
                        process of apps is what I love about full-stack
                        engineering.
                    </motion.p>
                    <motion.div
                        variants={fadeIn("right", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="hidden mx-auto mb-8 md:flex md:max-w-xl xl:max-w-none xl:mx-0"
                    >
                        <div className="flex flex-1 xl:gap-x-6">
                            <div className="relative flex-1">
                                <div className="text-2xl font-extrabold text-accent mb-2 xl:text-4xl">
                                    <CountUp start={0} end={4} duration={5} />
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Years of experience
                                </div>
                            </div>
                            {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl font-extrabold text-accent mb-2 xl:text-4xl">
                                    <CountUp start={0} end={250} duration={5} />
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Satisfied Clients
                                </div>
                            </div> */}
                            {/* <div className="relative flex-1">
                                <div className="text-2xl font-extrabold text-accent mb-2 xl:text-4xl">
                                    <CountUp start={0} end={8} duration={5} />
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Awards
                                </div>
                            </div> */}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full h-[480px] flex flex-col xl:max-w-[54%]"
                >
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
                                    <div className="text-xl my-4 md:my-0">
                                        {currentItem.title}
                                    </div>
                                    <div className="hidden text-xl md:flex">
                                        <MdOutlineKeyboardDoubleArrowRight />
                                    </div>
                                    <div>{currentItem.stage}</div>
                                    <div className="flex gap-x-4">
                                        {currentItem.icons?.map((icon, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="text-4xl hover:text-accent hover:-translate-y-[2px]"
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
                </motion.div>
            </div>
        </div>
    );
};

export default About;
