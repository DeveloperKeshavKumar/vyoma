import { Router } from "express";
import { createProduct, deleteProduct, getProductById, listProducts, updateProduct } from "../controllers/products";
import { validateData } from "../middlewares/validate";
import { createProductSchema, updateProductSchema } from "../types/product";
import { verifytoken } from "../middlewares/auth";


const router = Router();

router.get('/', listProducts);
router.get('/:id', getProductById);
router.post('/', verifytoken, validateData(createProductSchema), createProduct);
router.put('/:id', validateData(updateProductSchema), updateProduct);
router.delete('/:id', deleteProduct);

export default router;