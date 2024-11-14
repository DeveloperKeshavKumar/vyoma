import { Request, Response } from 'express';

export const listOrders = async (req: Request, res: Response) => {
   res.send('All Orderss');
}
export const getOrderById = async (req: Request, res: Response) => {
   res.send('Get Order By Id');
}
export const createOrder = async (req: Request, res: Response) => {
   res.send('Create Order');
}
export const updateOrder = async (req: Request, res: Response) => {
   res.send('Update Order');
}
export const deleteOrder = async (req: Request, res: Response) => {
   res.send('Delete Order');
}