import Producto from "../models/productomodel";
export async function getAllProducts(req, res) {
  try {
    const productos = await Producto.find();
    return res.status(200).json({ data: productos });
  } catch (error) {
    console.error("error al obtener");
  }
}
export async function getOneProduct(req, res, next) {
  const { productoId } = req.params;
  try {
    if (!req.context.ObjectId.isValid(productoId)) {
      const error = new Error(`id${productoId}no es valido`);
      error.status = 400;
      return next(error);
    }
    const myId = new req.context.ObjectId(productoId);
    const producto = await Producto.findOne({
      _id: myId,
    });
    if (!producto) {
      console.log(`error ${productoId}no encontrado`);
    }
    return res.status(200).json(producto); //lo de devuelve en json
  } catch (error) {
    console.log(`error ${productoId}no encontrado`);
  }
}

export async function postOneProduct(req, res, next) {
  try {
    const { name, description, photo } = req.body;
    if(!name||!description||!photo){
        console.log("error , no hay uno de los parametros");
    }
    //creamos el nuevo producto
    const newProducto=new Producto({name,description,photo});
    const savedproducto = await newProducto.save();
    if(!savedproducto){
        console.log("fallo al subir");
    }
    return res.status(201).json({message:"producto creado",savedproducto});


} catch (error) {
    console.log("error");
}
}
export async function deleteOneProduct(req,res,next){
    const {productoId}=req.params;
    try {
        if(!req.context.ObjectId.isValid(productoId)){
            console.log("no es valido");
        }
        const myId=new req.context.ObjectId(productoId);
        const deleteProduct = await Producto.deleteOne({
            _id:myId,
        });
        if(deleteProduct.deletedCount ===0){
            console.log("no encontrado");
        }else{
            const productos=await Producto.find();
            return res.status(200).json({message:`producto elimindo`,data:productos});
        }



    } catch (error) {
        console.log("error");
    }
}


