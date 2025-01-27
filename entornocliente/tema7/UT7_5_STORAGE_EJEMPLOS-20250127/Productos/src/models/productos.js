import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
  }, {
    timestamps: true
  });

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;