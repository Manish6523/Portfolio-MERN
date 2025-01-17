import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    githubLink: String,
    visitUrl: String,
    uses: String
});

export const project = mongoose.model("project", projectSchema);




// {
//     name: "Netflix clone",
//     description: "🎬 A fully responsive and visually appealing Netflix clone offering dynamic content browsing, user authentication, and smooth video playback. Enjoy a familiar streaming experience with a polished user interface and interactive features.",
//     image: "https://i.imgur.com/6QKq8Bp.png",
//     githubLink: "https://github.com/",
//     visitUrl: "https://netflix-clone-360.netlify.app",
//     uses: "REACT, EXPRESS, MONGO DB, TAILWIND"
// }