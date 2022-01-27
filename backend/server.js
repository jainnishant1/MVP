import express from 'express';
import data from './data.js';
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from "dotenv"

const app = express();
dotenv.config();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users',userRouter);
app.use('/api/products',productRouter);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err,req,res,next)=>{
  res.status(500).send({message: err.message})
})


const port = process.env.PORT || 5000;

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.b2qfc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(result=>{
  app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
  });
}).catch(err=>{
  console.log("error while connecting===>",err)
})
