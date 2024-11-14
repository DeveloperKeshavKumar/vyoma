import { Request, Response } from 'express';

export const listProducts = async (req: Request, res: Response) => {
   res.send('All Products');
}

export const getProductById = async (req: Request, res: Response) => {
   res.send('Get Product By Id');
}
export const createProduct = async (req: Request, res: Response) => {

   res.send(req.body);
}
export const updateProduct = async (req: Request, res: Response) => {
   res.send('Update Product');
}
export const deleteProduct = async (req: Request, res: Response) => {
   res.send('Delete Product');
}