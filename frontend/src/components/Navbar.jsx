import React, { useEffect, useState } from "react";
import "./animation.css";
import "./Social.css"

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [transition, setTransition] = useState("full")
    const toggleHamBar = () => {
        transition === "0" ? setTransition("full") : setTransition("0")
    }

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null, // Use the viewport as the container
            rootMargin: "0px",
            threshold: 0.3, // 60% of the section must be visible to trigger
        };

        const observer = new IntersectionObserver((entries) => {
            let activeId = "";

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeId = entry.target.id; // Update the active section ID
                }
            });

            if (activeId) {
                setActiveSection(activeId);
            }
        }, options);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <nav className="wrapper z-[15] fixed w-full py-2 px-7 backdrop-blur-sm text-white font-light flex justify-between items-center">
                <div className="sm:hidden flex cursor-pointer w-[25px]" onClick={toggleHamBar}>
                    <img src="hamburger.png" className="w-full" alt="" />
                </div>

                <div className="logo font-Eagle text-xl"><a href="#home">Manish</a></div>

                <ul className="options sm:flex hidden sm:gap-15 gap-5 font-extralight font-poppins text-lg">
                    <a
                        href="#home"
                        className={`cursor-pointer ${activeSection === "home" ? "text-orange-500" : ""
                            }`}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className={`cursor-pointer ${activeSection === "about" ? "text-orange-500" : ""
                            }`}
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className={`cursor-pointer ${activeSection === "skills" ? "text-orange-500" : ""
                            }`}
                    >
                        Skills
                    </a>
                    <a
                        href="#project"
                        className={`cursor-pointer ${activeSection === "project" ? "text-orange-500" : ""
                            }`}
                    >
                        project
                    </a>
                    <a
                        href="#contact"
                        className={`cursor-pointer ${activeSection === "contact" ? "text-orange-500" : ""
                            }`}
                    >
                        contact
                    </a>
                </ul>

                <div className="extra w-[40px]">
                    <a target="_blank" href="https://github.com/Manish6523">
                        <img src="github.png" className="w-full" alt="" />
                    </a>
                </div>
            </nav>

            {
                <div className={`main-section bg- backdrop-blur-2xl text-white -left-${transition} h-screen w-full sm:w-[70%] fixed z-[20] transition-all duration-300`}>
                    <div className="border flex items-center justify-between px-5 py-2">
                        <img onClick={toggleHamBar} className="cursor-pointer size-7 invert" src="cross.png" alt="" />
                        <span className="font-Eagle">Manish Sharma</span>
                    </div>
                    <div className="sections border border-t-0 bg-slate-5 bg- backdrop-blur-xl py-[70px]">
                        <ul className="options sm:gap-15 gap-5 flex flex-col font-extralight font-poppins text-lg">
                            <a onClick={toggleHamBar} href="#home"
                                className={`flex items-center gap-6 px-5 py-2 cursor-pointer ${activeSection === "home" ? "text-orange-500" : ""}`} >
                                <img src="home-bar-icon.gif" className="size-7    invert" alt="" />
                                Home
                            </a>

                            <a onClick={toggleHamBar} href="#about"
                                className={`flex items-center gap-6 px-5 py-2 cursor-pointer ${activeSection === "about" ? "text-orange-500" : ""}`} >
                                <img src="about-bar-icon.gif" className="size-7    invert" alt="" />
                                About
                            </a>

                            <a onClick={toggleHamBar} href="#skills"
                                className={`flex items-center gap-6 px-5 py-2 cursor-pointer ${activeSection === "skills" ? "text-orange-500" : ""}`} >
                                <img src="skills-bar-icon.gif" className="size-7    invert" alt="" />
                                Skills
                            </a>

                            <a onClick={toggleHamBar} href="#project"
                                className={`flex items-center gap-6 px-5 py-2 cursor-pointer ${activeSection === "project" ? "text-orange-500" : ""}`}>
                                <img src="project-bar-icon.gif" className="size-7    invert" alt="" />
                                project
                            </a>

                            <a onClick={toggleHamBar} href="#contact"
                                className={`flex items-center gap-6 px-5 py-2 cursor-pointer ${activeSection === "contact" ? "text-orange-500" : ""}`}>
                                <img src="contact-bar-icon.gif" className="size-7    invert" alt="" />
                                contact
                            </a>
                        </ul>
                    </div>
                    <div className="social border border-t-0 h-full px-5 py-8 ">
                        <h1 className="text-md font-poppins font-medium">Social media: </h1>
                        <h3 className="text-sm font-poppins font-light mb-2">Follow me on</h3>
                        <span>
                            <a target="_blank" href="https://www.linkedin.com/in/sharma-manish6523/" className="icon-button linkedin"><i className="icon-linkedin"></i><span></span></a>
                            <a target="_blank" href="https://www.instagram.com/_.manish._.sharma._" className="icon-button instagram"><i className="fab fa-instagram"></i><span></span></a>
                            <a target="_blank" href="https://wa.me/917016868618" className="icon-button whatsapp"><i className="fab fa-whatsapp"></i><span></span></a>
                        </span>
                    </div>
                </div>
            }
        </>
    );
};

export default Navbar;
