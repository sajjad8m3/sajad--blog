import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'
dotenv.config();
mongoose.connect(
    process.env.MONGO
).then(
    ()=>{
        console.log('mogodb is connected');
    }
).catch(err =>{
    console.log(err)
});
const app = express();
app.use(express.json());


app.listen(3000, () => {
  console.log("server is running prot 3000!");
});
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);