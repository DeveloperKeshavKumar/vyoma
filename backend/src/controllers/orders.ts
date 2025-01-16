import { Request, Response } from 'express';
import { db } from '../config/db.js';
import { orderItemsTable, ordersTable } from '../schemas/order.js';
import { eq } from 'drizzle-orm';


// if user.role === 'admin, return all orders
// if user.role === 'seller, return orders filtered by sellerId
// else return only orders filtered by userId
export const listOrders = async (req: Request, res: Response) => {
   try {
      const orders = await db.select().from(ordersTable).where(eq(ordersTable.userId, Number(req.user?.id)));
      res.status(200).json({ orders });
   } catch (error) {

   }
}
export const getOrderById = async (req: Request, res: Response) => {
   try {
      const id = parseInt(req.params.id);
      const result = await db.select().from(ordersTable).leftJoin(orderItemsTable, eq(ordersTable.id, orderItemsTable.orderId)).where(eq(ordersTable.id, id));

      if (result.length === 0) {
         res.status(404).json({
            success: false,
            message: "Order not found",
         });
      }

      const mergedOrder = {
         ...result[0].orders,
         items: result.map((oi) => oi.order_items)
      }


      res.status(200).json({ result });
   } catch (error: any) {
      res.status(500).json({
         success: false,
         message: "Internal Server Error",
         error: error.message,
      });
   }
}
export const createOrder = async (req: Request, res: Response) => {
   try {
      const { order, items } = req.body;
      const userId = req.user?.id;
      if (!userId) {
         res.status(403).json({ success: false, message: "User not authoirized" })
      }
      const [newOrder] = await db.insert(ordersTable).values({ userId }).returning();
      const orderItems = items.map((item: any) => ({
         ...item,
         orderId: newOrder.id
      }));

      // TODO: validate product ids, and take their price from db
      const newOrderItems = await db.insert(orderItemsTable).values(orderItems).returning();
      res.status(201).json({ ...newOrder, items: newOrderItems });
   } catch (error: any) {
      res.status(500).json({
         success: false,
         message: "Internal Server Error",
         error: error.message,
      });
   }
}
export const updateOrder = async (req: Request, res: Response) => {
   try {
      const id = parseInt(req.params.id);
      const [updatedOrder] = await db.update(ordersTable).set(req.body).where(eq(ordersTable.id, id)).returning();

      if (!updatedOrder) {
         res.status(404).json({
            success: false,
            message: "Order not found"
         });
      } else {
         res.status(200).json({ updatedOrder });
      }
   } catch (error: any) {
      res.status(500).json({
         success: false,
         message: "Internal Server Error",
         error: error.message,
      });
   }
}
export const deleteOrder = async (req: Request, res: Response) => {
   res.send('Delete Order');
}