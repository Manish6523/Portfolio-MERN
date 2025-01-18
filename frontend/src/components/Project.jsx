import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import axios from "axios"


const Project = () => {

    let envPassword = import.meta.env.VITE_ADMIN_PASSWORD
    let host = import.meta.env.VITE_HOST

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [githubLink, setGithubLink] = useState("")
    const [visitUrl, setVisitUrl] = useState("")
    const [uses, setUses] = useState("")
    const [adminPanel, setadminPanel] = useState(false)
    const [projects, setProjects] = useState(null)


    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const result = await axios.get(`${host}/getProjects`);
                console.log(`connected to DB successfully`);
                setProjects(result.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
                toast.error('Failed to fetch projects');
            }
        };
        fetchProjects();
    }, []);


    const getProjects = async () => {
        // let result = await axios.get(`${host}/getProjects`)
        // console.log(result.data)
        // setProjects(result.data)
    }

    const passwordCheckBox = () => {
        if (adminPanel == false) {
            let password = prompt("Enter admin password: ")
            if (password === envPassword) {
                setadminPanel(!adminPanel)
            } else {
                toast.error("Invalid password")
                setadminPanel(false)
            }
        } else {
            setadminPanel(false)
        }

    }

    const convertToBase64 = (e) => {
        // console.log(e)
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            // console.log(reader.result)
            setImage(reader.result)
        };
        reader.onerror = error => {
            console.log("error: ", error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ((name && description && githubLink && visitUrl && uses) == "") {
            toast.error("Please fill all fields")
        }
        else if (image == "") {
            setImage("NotFound.png")
        } else {
            toast.success("Project Added")
            setadminPanel(false)
            await axios.post(`${host}/addProject`, {
                name,
                description,
                image,
                githubLink,
                visitUrl,
                uses
            })
        }
    }


    return (
        <>
            <section id="project" className='Project-section pt-9 min-h-screen flex flex-col items-center justify-center bg-zinc-900 relative'>
                {
                    !adminPanel ?
                        (<div className="text-center mt-5 flex flex-col items-center">
                            <button onClick={passwordCheckBox} className="text-4xl tracking-wide font-poppins cursor-pointer font-extralight text-orange-600 relative">My Projects</button>
                            <div className="w-[120%] h-[2px] bg-white my-3"></div>
                        </div>) : ""
                }
                {
                    !adminPanel ?
                        (projects ?
                            <div className='w-[90%] bg-red-4000 mx-auto flex flex-wrap justify-center md:gap-8 gap-4 my-10'>
                                {projects.map((e, index) => {
                                    return (
                                        <span key={index}>
                                            <div className="flip-card overflow-hidden rounded-lg relative">
                                                <div className="flip-card-inner">
                                                    <div className="flip-card-front bg-black cursor-pointer ">
                                                        {/* decor start */}
                                                        <img draggable="false" className='absolute invert top-0 left-0 w-14     z-[1]' src="./decor2.png" alt="" />
                                                        <img draggable="false" className='absolute invert right-0 bottom-0 w-14 z-[1] rotate-180' src="./decor2.png" alt="" />
                                                        {/* decor end */}
                                                        <img draggable="false" className='grayscale-[70%] rounded-sm text-black' src={e.image} alt="" />
                                                        <div className='absolute bottom-0 flex text-xl text-yellow-700 font-Garamond font-medium items-center justify-center backdrop-blur-lg h-[15%] w-full'>{e.name}</div>
                                                    </div>
                                                    <div className="flip-card-back z-10  flex flex-col justify-between bg-zinc-700 rounded-sm text-black font-Garamond font-medium">
                                                        <div className="topbar bg-gradient-to-r from-zinc-400 to-zinc-500 flex items-center justify-between px-2 py-1 md:text-xl text-md " >
                                                            <span>{e.name}</span>
                                                            <ul className='flex gap-2 relative'>
                                                                <a target='_blank' href={e.githubLink}><img draggable="false" className='md:size-5 size-4 invert' src="coding.png" alt="" /></a>
                                                                <a target='_blank' href={e.visitUrl}><img draggable="false" className='md:size-5 size-4 invert' src="visit.png" alt="" /></a>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-bar sm:text-xl text-sm leading-4 text-justify px-2 py-1">
                                                            {e.description}
                                                        </div>
                                                        <div className="lanUsed bg-gradient-to-r from-slate-500 to-slate-400 flex items-center justify-center px-2 py-1  ">{e.uses}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <img draggable="false" className='invert lg:hidden flex m-auto mt-5' src="./decor.png" alt="" />
                                        </span>
                                    )
                                })}
                            </div> : (
                                <div><img src="loader.gif" alt="" /></div>
                            )
                        )
                        :
                        (<div className='w-[90%] font-Garamond flex-col items-center justify-center text-white mx-auto flex flex-wrap md:gap-8 gap-4 my-10'>
                            <div className='flex items-center justify-between md:w-[60vw] w-[90vw]'>
                                <img src="R.png" onClick={passwordCheckBox} className="cursor-pointer md:size-10 size-7  invert" />
                                <h1 className='text-4xl my-5'>Add projects</h1>
                                <span></span>
                            </div>
                            <form onSubmit={handleSubmit} className='md:w-[60vw] w-[full] flex flex-col items-start gap-5 md:text-3xl text-md'>
                                <div className='w-full flex items-center justify-between gap-5 '>
                                    <span>Name : </span>
                                    <input onChange={(e) => setName(e.target.value)} className='h-10 rounded-sm text-black ring-2 font-poppins px-2 md:w-[40vw] w-[65%]' type="text" name="name" id="name" />
                                </div>
                                <div className='w-full flex items-center justify-between gap-5 '>
                                    <span>Description : </span>
                                    <textarea onChange={(e) => setDescription(e.target.value)} className='h-16 rounded-sm text-black ring-2 font-poppins px-2 md:w-[40vw] w-[65%]' name="description" id="description" />
                                </div>
                                <div className='w-full flex items-center justify-between gap-5 '>
                                    <span>GitHub Link : </span>
                                    <input onChange={(e) => setGithubLink(e.target.value)} className='h-10 rounded-sm text-black ring-2 font-poppins px-2 md:w-[40vw] w-[65%]' type="text" name="githubLink" id="githubLink" />
                                </div>
                                <div className='w-full flex items-center justify-between gap-5 '>
                                    <span>Visit Link : </span>
                                    <input onChange={(e) => setVisitUrl(e.target.value)} className='h-10 rounded-sm text-black ring-2 font-poppins px-2 md:w-[40vw] w-[65%]' type="text" name="visitUrl" id="visitUrl" />
                                </div>
                                <div className='w-full flex items-center justify-between gap-5 '>
                                    <span>Uses : </span>
                                    <input onChange={(e) => setUses(e.target.value)} className='h-10 rounded-sm text-black ring-2 font-poppins px-2 md:w-[40vw] w-[65%]' type="text" name="uses" id="uses" />
                                </div>
                                <div className='w-full flex justify-between gap-5 '>
                                    <span>Image : </span>
                                    <input onChange={convertToBase64} className='h-10 text-md rounded-sm font-poppins cursor-pointer text-black md:w-[40vw] w-[65%]' accept='image/*' type="file" name="image" id="image" />
                                </div>
                                <button onClick={handleSubmit} className='m-auto text-xl font-bold rounded-md bg-gradient-to-r from-blue-400 to-purple-500 px-5 py-2' type="submit">add project</button>
                            </form>
                        </div>)
                }
            </section>

        </>
    )
}

export default Project
