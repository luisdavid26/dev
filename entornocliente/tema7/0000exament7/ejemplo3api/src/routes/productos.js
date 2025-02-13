import express from "express";
let productos = [];
productRuta.post("/", (req, res) => {
  const { name, descrip, photo } = req.body;
  const newproducto = {
    id: productos.length + 1,
    name,
    descrip,
    photo,
  };
  productos.push(newproducto);
  res.status(201).json({
    message: "produco anyadido",
    data: newproducto,
  });
});
//para obtener todos los resultados 
productruta.get("/",(req,res)=>{
    res.json({
        message:"lista de productos",
        data:productos
    });
});
//borrar productos por id
productRuta.delete("/:id",(req,res)=>{
    const productoid =parseInt(req.params.id);
    const initialLength=productos.length;
    productos=productos.filter(producto=>producto.id!== producto.id);
    if(productos.length<initialLength){
        res.json({
            message:`producto con id ${productoid} eliminado`,
            data:productos
        });
    }else{
        res.status(404).json({
            message:`producto con id ${productoid}no encontrado`
        });
    }


});
export default productRuta;
