import express from 'express';
import cors from 'cors';
import { connectDB } from './ConnectDB.js';
import { project } from './schema/projectSchema.js';

const app = express()
app.use(express.json({ limit: '50mb' }));
// app.use(express.bodyParser({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(cors({
    origin: ['http://localhost:3000', 'https://portfolio-mern-360.onrender.com'],
}))
const port = 3000

app.get('/getProjects', cors(), async (req, res) => {
    const projects = await project.find({})
    res.send(projects)
    return projects
})

app.post('/addProject', cors(), async (req, res) => {
    const { name, description, image, githubLink, visitUrl, uses } = req.body
    const data = {
        name: name,
        description: description,
        image: image,
        githubLink: githubLink,
        visitUrl: visitUrl,
        uses: uses
    }
    await project.insertMany([data])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

connectDB()