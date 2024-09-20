import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';

// app config
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000

// middleware 
app.use(express.json())
app.use(cors());

// db connection
connectDB();

app.get('/',(req,res) => {
    res.send("API Working")
})

app.listen(PORT,() => {
    console.log(`Server Started on http://localhost:${PORT}`);
    
})