import { Router } from "express";
import { createProduct, deleteProduct, getProductById, listProducts, updateProduct } from "../controllers/products.js";
import { validateData } from "../middlewares/validate.js";
import { createProductSchema, updateProductSchema } from "../types/product.js";
import { verifyRole, verifytoken } from "../middlewares/auth.js";


const router = Router();

router.get('/', listProducts);
router.get('/:id', getProductById);
router.post('/', verifytoken, verifyRole('seller'), validateData(createProductSchema), createProduct);
router.put('/:id', verifytoken, verifyRole('seller'), validateData(updateProductSchema), updateProduct);
router.delete('/:id', verifytoken, verifyRole('seller'), deleteProduct);

export default router;