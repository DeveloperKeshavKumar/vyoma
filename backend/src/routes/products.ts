import { Router } from "express";
import { createProduct, deleteProduct, getProductById, listProducts, updateProduct } from "../controllers/products";
import { validateData } from "../middlewares/validate";
import { createProductSchema, updateProductSchema } from "../types/product";
import { verifyRole, verifytoken } from "../middlewares/auth";


const router = Router();

router.get('/', listProducts);
router.get('/:id', getProductById);
router.post('/', verifytoken, verifyRole('seller'), validateData(createProductSchema), createProduct);
router.put('/:id', verifytoken, verifyRole('seller'), validateData(updateProductSchema), updateProduct);
router.delete('/:id', verifytoken, verifyRole('seller'), deleteProduct);

export default router;