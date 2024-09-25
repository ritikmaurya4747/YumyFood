import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { placeOrder } from '../controllers/orderController.js';

// yaha hum router create karr rahe hain using express
const orderRouter = express.Router();


orderRouter.post('/place',authMiddleware,placeOrder);

export default orderRouter