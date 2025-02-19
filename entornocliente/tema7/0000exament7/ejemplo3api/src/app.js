import {} from "dotenv/config";
import express from "express";
import cors from "cors";
import productosRoutes from "./routes/productos.js";
const app =express();
const PORT = process.env.PORT||3000;
//con esto habuilitamos el cors para todas las solicitudes
app.use(cors({
    allowedHeaders:["Content-Type","Authorization","Accept"],
}));
//Middlewares
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb",extended:true}));
app.use("/productos",productosRoutes);

app.get("/",(req,res)=>{
    res.send("hola mundo");
});


export default app.listen(PORT,()=>{
    console.log("servidor funcionando");
});










