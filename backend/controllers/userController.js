import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


// Create JWT token function
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
}


// Login user
const loginUser = async (req, res) => {
    // Logic for login user will go here
};


// Register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // Check if user already exists
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Validate email and password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a strong password" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Creating new user object
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        // Saving user to database
        const user = await newUser.save();

        // Creating token
        const token = createToken(user._id);
        res.status(201).json({ success: true, message: "User registered successfully", token });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ success: false, message: "Error occurred during registration" });
    }
};

export { loginUser, registerUser };
