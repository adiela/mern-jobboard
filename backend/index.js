import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';

import jobRoutes from "./routes/job.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/jobs", jobRoutes);

app.get('/', (req, res) => {
    res.send('Server is live!');
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

export default app;