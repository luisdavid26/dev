import { Router} from "express";
import { getAllProducts,getOneProduct,postOneProduct,deleteOneProduct } from "../controllers/productocontroller";
const router=Router();

router.use((req,res,next)=>{
    console.log(`Request method:${req.method},request url:${req.originalUrl}`);
    next();
});
router.get("/",getAllProducts);
router.get("/:productoId",getOneProduct);
router.post("/",postOneProduct);
router.delete("/:productoId",deleteOneProduct);
export default router;