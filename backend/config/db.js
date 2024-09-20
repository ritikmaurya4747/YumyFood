import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
const MongoDB_URI = process.env.MongoDB_URI

export const connectDB = async () => {
   try {
    await mongoose.connect(MongoDB_URI);
    console.log("DB Connected");
    
   } catch (error) {
    console.log("Error:",error);
    
   }
}