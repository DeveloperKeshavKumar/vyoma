import { Router } from "express";
import { createProduct, deleteProduct, getProductById, listProducts, updateProduct } from "../controllers/products";
import { validateData } from "../middlewares/validate";
import { createInsertSchema } from 'drizzle-zod';
import { productsTable } from "../schemas";
import { z } from "zod";

// const createProductSchema = z.object({
//    name: string(),
//    description: string(),
//    image: string().optional(),
//    price: number()
// })
const createProductSchema = createInsertSchema(productsTable).omit({ id: true });

const router = Router();

router.get('/', listProducts);
router.get('/:id', getProductById);
router.post('/', validateData(createProductSchema), createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;