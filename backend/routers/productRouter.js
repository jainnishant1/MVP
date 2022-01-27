import express from 'express';
import { getProducts, getSeedProducts, getProductByID } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/',getProducts);

productRouter.get('/seed', getSeedProducts);

productRouter.get('/:id',getProductByID);

export default productRouter;