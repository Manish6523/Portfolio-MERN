import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen font-extralight font-poppins pt-9 text-white flex flex-col items-center justify-center bg-zinc-900 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.8 }}
                transition={{ ease: "easeOut", duration: 0.7 }}>
                <h1 className="text-4xl text-orange-600 flex sm:hidden mt-5">
                    About
                </h1>
                <div className="w-full h-[1px] my-2 bg-white"></div>
            </motion.div>
            <div className="main-part w-[90%] m-auto flex items-center justify-center sm:mt-10 mt-5 flex-wrap gap-5 ">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: .9 }}
                    transition={{ ease: "easeOut", duration: 0.7 }}
                    className="left overflow-hidden md:h-[80vh] h-[70vh]">
                    <img className="h-full" src="img.jpg" alt="My Picture" />
                </motion.div>
                <div className="right md:w-1/2 w-full my-3">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.8 }}
                        transition={{ ease: "easeOut", duration: 0.7 }}
                        className="text-4xl my-3 sm:flex hidden text-orange-600"
                    >
                        About me
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.8 }}
                        transition={{ ease: "easeOut", duration: 0.7 }}
                        className="sm:my-3 mb-3 text-justify"
                    >
                        👋 Hi! I’m Manish Sharma, a passionate Web Developer who
                        loves building dynamic, responsive, and user-friendly
                        websites. 💻 Skilled in HTML, CSS, JavaScript, React,
                        and Node.js, I turn ideas into clean, efficient code.
                        🚀 Always eager to learn and grow, I aim to deliver
                        seamless digital experiences that stand out. Let’s
                        create something amazing together! 🌟✨
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.8 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        className="text-xl text-orange-600 sm:text-start text-center"
                    >
                        Qualification
                    </motion.div>
                    <div className="ml-5 my-3">
                        <ul className="text-sm gap-3 flex flex-col list-disc">
                            {qualifications.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ amount: 0.25 }}
                                    transition={{
                                        ease: "easeOut",
                                        duration: 0.8,
                                        delay: index * 0.2, // Add staggered animation
                                    }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Array for Qualification Items
const qualifications = [
    "🎓 Bachelor’s Degree in Computer Science (Ongoing) – Gandhinagar University",
    "📚 Relevant Courses: Web Development, Data Structures, Algorithms, Database Management Systems, and Software Engineering",
    "🏆 Certifications: HTML, CSS & React",
    "💡 Key Projects: Developed multiple web applications using HTML, CSS, JavaScript, React, and Node.js",
];

export default About;
