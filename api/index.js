import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import queryForm from './routes/queryForm.js'
const app = express();

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({origin:"*"}))



const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect to MONGODB port");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};


app.use('/queryForm',queryForm);

app.listen(process.env.BACKEND_PORT, () => {
  connect();
  console.log("Connected to backend port");
});
