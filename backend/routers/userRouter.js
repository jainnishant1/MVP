import express from 'express';
import {getSeedUsers, signIn, register} from '../controllers/authController.js';

const userRouter = express.Router();

userRouter.get('/seed', getSeedUsers);
userRouter.post('/signin', signIn);
userRouter.post('/register', register);


export default userRouter;