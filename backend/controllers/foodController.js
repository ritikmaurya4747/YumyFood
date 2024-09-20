import foodModel from "../models/foodModel.js";
import fs from 'fs';

// add food item 
const addFood = async (req, res) => {
    // This code to store image into database
    try {
        // Get the Cloudinary image URL from the request (this is passed from the router)
        const image_url = req.body.image_url;

        // Create a new food item with all the data including the Cloudinary URL
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_url // Storing Cloudinary image URL in MongoDB
        });

        // Save the food item in MongoDB
        await food.save();
        res.json({
            success: true,
            message: "Food added successfully and saved in MongoDB!"
        });
    } catch (error) {
        console.log("Error saving food to MongoDB:", error);
        res.json({ success: false, message: "Error saving food item." });
    }
};

// all food list 
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({
            success: true,
            data:foods
        })
    } catch (error) {
        console.log("Error:", error);
        res.json({
            success:false,
            message:"Error"
        })
    }
}

// remove food item 
const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body._id);
        fs.unlink(`uploads/${food.image}`, ()=> {})

        await foodModel.findByIdAndDelete(req.body._id);
        res.json({
            success: true,
            message:"Food Removed"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
        
    }
}

export { addFood,listFood,removeFood };
