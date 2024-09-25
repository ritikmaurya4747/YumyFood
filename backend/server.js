import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRouter.js';
import userRouter from './routes/userRouter.js';
import cartRouter from './routes/cartRouter.js';
import orderRouter from './routes/orderRouter.js';

// app config
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000

// middleware 
app.use(express.json())
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order',orderRouter)


app.get('/',(req,res) => {
    res.send("API Working")
})

app.listen(PORT,() => {
    console.log(`Server Started on http://localhost:${PORT}`);
    
})