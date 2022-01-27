import express from 'express';
import { OrderController } from '../controllers/orderController.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post('/',isAuth, OrderController );

export default orderRouter;