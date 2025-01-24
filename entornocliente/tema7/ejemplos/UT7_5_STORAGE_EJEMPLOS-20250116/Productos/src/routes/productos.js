import { Router } from 'express';
import { getAllProducts, getOneProduct, postOneProduct, deleteOneProduct } from '../controllers/productos.js';

const router = Router();

router.use((req, res, next) => {
  console.log(`Request method: ${req.method}, Request URL: ${req.originalUrl}`);
  next();
});

router.get('/', getAllProducts);
router.get('/:productoId', getOneProduct);
router.post('/', postOneProduct);
router.delete('/:productoId', deleteOneProduct);


export default router;