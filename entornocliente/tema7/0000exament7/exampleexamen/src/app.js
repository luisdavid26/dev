import{} from "dotenv/config"
import express from "express";
import cors from "cors";
import {connectDB} from "./config/db.js";
import productoRouter from "./routes/productoroute.js";
import Producto from "./models/productomodel.js"
import mongoose from "mongoose";
const {Types:{ObjectId}} = mongoose;
const app = express();
const PORT = process.env.PORT||3000;
connectDB();




