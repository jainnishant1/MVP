import express from 'express';
import { OrderController, OrderControllerByID } from '../controllers/orderController.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post('/',isAuth, OrderController);
orderRouter.get('/:id',isAuth,OrderControllerByID);
  
  export default orderRouter;



