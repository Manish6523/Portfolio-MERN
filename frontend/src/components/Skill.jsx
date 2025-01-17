import "./animation.css";
import React, { useRef } from "react";
import { delay, motion, useInView } from "framer-motion";

// Skills data with random levels
const skills = [
    { name: "HTML", path: "./html-icon.gif", label: "pro", percentage: 95, color: "bg-green-400" },
    { name: "CSS", path: "./css-icon.gif", label: "pro", percentage: 95, color: "bg-green-400" },
    { name: "JavaScript", path: "./js-icon.gif", label: "Pro", percentage: 95, color: "bg-green-400" },
    { name: "React", path: "./REACT.gif", label: "Pro", percentage: 95, color: "bg-green-400" },
    { name: "Express", path: "./express.png", label: "Intermediate", percentage: 75, color: "bg-yellow-400" },
    { name: "MongoDB", path: "./MONGO-ICON.gif", label: "Intermediate", percentage: 75, color: "bg-yellow-400" },
    { name: "Next.js", path: "./NEXT.gif", label: "Beginner", percentage: 45, color: "bg-blue-400" },
    { name: "Node.js", path: "./node-icon.gif", label: "Beginner", percentage: 30, color: "bg-blue-400" }
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false }); // Animation triggers only once

    const containerVariants = {
        hidden: { opacity: 0, y: 500 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.2 },
        visible: { opacity: 1, scale: 1, transition: { delay: .2, duration: 0.4 } }
    };

    return (
        <section
            id="skills"
            ref={ref}
            className="bg-zinc-800 min-h-screen flex flex-col items-center pt-9 justify-center font-poppins text-white relative"
        >
            {/* Section Header */}
            <motion.div
                className="text-center mt-5 flex flex-col items-center"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <h2 className="text-4xl tracking-wide font-poppins font-extralight text-orange-600 relative">
                    My Skills
                </h2>
                <motion.div
                    className="md:w-[20%] w-[50%] h-[2px] bg-white my-3"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.div>
                <p className="text-gray-400">Here are the technologies I’m proficient in:</p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] m-auto my-10 place-items-center"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="cursor-pointer group relative flex flex-col items-center hover:shadow-2xl transition-transform transform hover:-translate-y-2 md:w-60 w-full"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Skill Icon */}
                        <div className="mb-4 flex items-center justify-center rounded-full shadow-inner">
                            <img
                                src={skill.path}
                                alt={skill.name}
                                className="size-28 object-contain"
                            />
                        </div>

                        {/* Skill Name */}
                        <h3 className="text-lg font-light mb-2">{skill.name}</h3>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 backdrop-blur-xl opacity-0 group-hover:opacity-80 flex items-center justify-center transition-opacity rounded-xl">
                            <p className="text-white text-sm">Level: {skill.label}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
