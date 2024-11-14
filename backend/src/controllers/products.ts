import { Request, Response } from 'express';
import { db } from '../config/db';
import { productsTable } from '../schemas';
import { eq } from 'drizzle-orm';

export const listProducts = async (req: Request, res: Response) => {
   try {
      const products = await db.select().from(productsTable);
      res.status(200).json({
         products
      })
   } catch (error: any) {
      res.status(500).json({
         success: false,
         error: error.message
      })
   }
}

export const getProductById = async (req: Request, res: Response) => {
   try {
      const [product] = await db.select().from(productsTable).where(eq(productsTable.id, Number(req.params.id)));
      if (!product) {
         res.status(404).json({
            success: false,
            error: "Product with this id doesn't exist"
         })
      }
      res.status(200).json({
         product
      })
   } catch (error: any) {
      res.status(500).json({
         success: false,
         error: error.message
      })
   }
}
export const createProduct = async (req: Request, res: Response) => {
   try {
      const [response] = await db.insert(productsTable).values(req.body).returning();
      res.status(201).json({
         success: true,
         response
      })
   } catch (error: any) {
      res.status(500).json({
         success: false,
         error: error.message
      })
   }
}
export const updateProduct = async (req: Request, res: Response) => {
   try {
      const id = Number(req.params.id);
      const updatedFields = req.body;

      const [product] = await db
         .update(productsTable)
         .set(updatedFields)
         .where(eq(productsTable.id, id))
         .returning();

      if (product) {
         res.json(product);
      } else {
         res.status(404).json({
            sucess: true,
            message: 'Product was not found'
         }
         )
      }
   } catch (error: any) {
      res.status(500).json({
         success: false,
         error: error.message
      })
   }
}
export const deleteProduct = async (req: Request, res: Response) => {
   try {
      const [response] = await db.delete(productsTable).where(eq(productsTable.id, Number(req.params.id))).returning();
      if (!response) {
         res.status(404).json({
            success: false,
            error: "Product with this id doesn't exist"
         })
      }

      res.status(204).end()

   } catch (error: any) {
      res.status(500).json({
         success: false,
         error: error.message
      })
   }
}