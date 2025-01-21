import Producto from "../models/productos.js";

// Obtener todos los productos
export async function getAllProducts(req, res) {
    try {
        const productos = await Producto.find();
        return res.status(200).json({ data: productos }); // formato JSON
        //return res.send(productos); // cualquier formato
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Error al obtener los productos" });
    }
  }
  
// Obtener un producto específico por ID
export async function getOneProduct(req, res, next) {
    const { productoId } = req.params;
    try {
        if (!req.context.ObjectId.isValid(productoId)) {
            const error = new Error(`ID ${productoId} no es válido`);
            error.status = 400;
            return next(error);
        }
  
        const myId = new req.context.ObjectId(productoId);
        const producto = await Producto.findOne({
            _id: myId,
        });
  
        if (!producto) {
            const error = new Error(`Producto con ID ${productoId} no encontrado`);
            error.status = 404;
            return next(error);
        }
  
        return res.status(200).json(producto); // JSON producto.
        //return res.send(producto);
    } catch (er) {
        const error = new Error(
            `Error al obtener el producto con ID ${productoId} desde la base de datos`
        );
        error.status = 500;
        return next(error);
    }
  }
  
// Agregar un nuevo producto
export async function postOneProduct(req, res, next) {
    try {
        const { name, description, photo } = req.body;
      
        if (!name || !description || !photo) {
            const error = new Error(`Las propiedades ${name}, ${description} y ${photo} son obligatorias`);
            error.status = 400;
            return next(error);
        }
    
        // Crear el nuevo producto
        const newProducto = new Producto({ name, description, photo });
        const savedProducto = await newProducto.save();
  
        // Validar si la inserción fue exitosa
        if (!savedProducto) {
            const error = new Error('Error al guardar el producto');
            error.status = 500;
            return next(error);
        }
  
        return res.status(201).json({ message: "Producto creado", savedProducto });
    } catch (er) {
        const error = new Error('Error al agregar el producto a la base de datos');
        error.status = 500;
        return next(error);
    }
  }
  
// Eliminar un producto por ID
export async function deleteOneProduct(req, res, next) {
    const { productoId } = req.params;

    try {
        if (!req.context.ObjectId.isValid(productoId)) {
                  const error = new Error(`ID ${productoId} no es válido`);
                  error.status = 400;
                  return next(error);
        }
        const myId = new req.context.ObjectId(productoId);
        // Buscar y eliminar el producto
        const deletedProduct = await Producto.deleteOne({
            _id: myId,
        });
  
        if (deletedProduct.deletedCount === 0) {
            const error = new Error(`Producto con ID ${productoId} no encontrado`);
            error.status = 404;
            return next(error);
        } else {
            const productos = await Producto.find();
            return res.status(200).json({ message: `Producto con ID ${productoId} eliminado.`, data: productos }); // formato JSON
        }
  
        //return res.send(`Producto con ID ${productoId} eliminado.`);
    } catch (er) {
        const error = new Error(`Error al eliminar el producto de la base de datos con ID ${productoId}`);
        error.status = 500;
        return next(error);
    }
  }