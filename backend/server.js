import express from 'express';
import cors from 'cors';
import { connectDB } from './ConnectDB.js';
import { project } from './schema/projectSchema.js';

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
// Handle Preflight Requests
app.options('*', cors());

// CORS Configuration
app.use(
    cors({
        origin: ["*", "http://localhost:3000", 'http://localhost:5173', "https://sharma-manish.netlify.app", 'https://sharma-manish.onrender.com', 'https://portfolio-mern-360.onrender.com'], // Allow your frontend origins
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
        credentials: true, // If credentials (cookies) are needed
    })
);

const port = 3000;

// GET Endpoint
app.get('/getProjects', async (req, res) => {
    try {
        const projects = await project.find({});
        res.status(200).send(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).send({ message: 'Error fetching projects' });
    }
});

// POST Endpoint
app.post('/addProject', async (req, res) => {
    try {
        const { name, description, image, githubLink, visitUrl, uses } = req.body;

        const data = {
            name,
            description,
            image,
            githubLink,
            visitUrl,
            uses,
        };

        await project.insertMany([data]);
        res.status(201).send({ message: 'Project added successfully' });
    } catch (error) {
        console.error('Error adding project:', error);
        res.status(500).send({ message: 'Error adding project' });
    }
});


// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

connectDB();
