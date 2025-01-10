import { createInsertSchema } from "drizzle-zod";
import { productsTable } from "../schemas/index.js";

// const createProductSchema = z.object({
//    name: string(),
//    description: string(),
//    image: string().optional(),
//    price: number()
// })

export const createProductSchema = createInsertSchema(productsTable).omit({ id: true });
export const updateProductSchema = createInsertSchema(productsTable).omit({ id: true }).partial();