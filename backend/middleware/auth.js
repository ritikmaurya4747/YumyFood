import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if(!token){
        return res.status(401).json({ success: false, message: "Not Authorized Login Again" });
    }
}


export default authMiddleware;