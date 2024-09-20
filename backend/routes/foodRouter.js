import express from 'express';
import multer from 'multer';
import { v2 as cloudinaryV2 } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';

// Load environment variables from .env file
dotenv.config();

// Cloudinary configuration using environment variables
cloudinaryV2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const foodRouter = express.Router();

// Multer setup for local image storage (before uploading to Cloudinary)
const storage = multer.diskStorage({
    destination: 'uploads', // Temporary folder to store images before upload
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`); // Rename file with timestamp
    }
});

const upload = multer({ storage }); // Multer instance

// Route to handle image upload and add food
foodRouter.post('/add', upload.single('image'), async (req, res) => {
    try {
        // Upload the image to Cloudinary
        const result = await cloudinaryV2.uploader.upload(req.file.path);

        // Optional: Clean up the temporary uploaded file
        fs.unlinkSync(req.file.path);

        // Call the addFood controller, passing the Cloudinary URL in the body
        req.body.image_url = result.secure_url; // Store the Cloudinary image URL in req.body
        await addFood(req, res); // Pass the request to the controller function
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        res.status(500).send('Upload failed');
    }
});
foodRouter.get("/list",listFood)
foodRouter.post('/remove',removeFood)

export default foodRouter;
