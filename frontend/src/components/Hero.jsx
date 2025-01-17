import "./animation.css"
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [activeSection, setActiveSection] = useState("");

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

            <section id="home" className='main-container overflow-hidden relative text-white bg-zinc-800 min-h-screen flex items-center justify-center'>
                <div className="box min-h-screen w-[100%] flex items-end justify-end relative">

                    <div className="left-text flex m-auto absolute sm:top-[40%] top-[50%] sm:left-16 left-3 z-10">
                        <div className="name flex">
                            <div className="bar w-[2px] mr-5 bg-gray-400 h-[57%]"></div>
                            <div className='flex flex-col gap-3'>
                                <span className='sm:text-5xl text-3xl  font-extralight font-poppins'>Manish Sharma</span>
                                <span className='sm:text-2xl text-xl font-thin font-poppins'>full stack web developer</span>
                                <a href="#contact">
                                    <button className='rounded-3xl border border-orange-700 hover:bg-orange-800 hover:w-[55%] font-poppins mt-6 w-1/2 py-3 transition-all'>contact</button>
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className="hero sm:h-screen h-[90vh] overflow-hidden bg-cyan-1000 fixed lg:w-2/3 bg-cover w-full z-0 ">
                        <img className='grayscale object-cover h-full absolute sm:right-40 right-0 bottom-0' draggable="false" src="me.png" alt="" />
                    </div>

                </div>
                <div className='bottom-bar absolute flex items-center gap-3 bottom-14 sm:left-16 left-3'>
                    <div className='w-12 mt-[3px] h-[2px] bg-gray-400'></div>
                    <a href="#project" className="flex items-center justify-center">
                        <span>view projects</span>
                        <img className='w-12 cursor-pointer' src="down.gif" alt="" />
                    </a>
                </div>

                <div className='side-bar md:flex hidden z-20 fixed right-16 flex-col gap-3 '>
                    <a href="#home">      <div className={`w-[4px] h-[40px] ${(activeSection === "home" || activeSection === "about") ? "bg-orange-500" : "bg-gray-400"}`}>   </div></a>
                    <a href="#skills">    <div className={`w-[4px] h-[40px] ${activeSection === "skills" || activeSection === "project" ? "bg-orange-500" : "bg-gray-400"}`}>     </div></a>
                    <a href="#contact">   <div className={`w-[4px] h-[40px] ${activeSection === "contact" ? "bg-orange-500" : "bg-gray-400"}`}>     </div></a>
                </div >
            </section >
        </>
    )
}

export default Hero
