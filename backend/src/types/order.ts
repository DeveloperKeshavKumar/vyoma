import { createInsertSchema } from "drizzle-zod";
import { ordersTable } from "../schemas/index.js";
import { orderItemsTable } from "../schemas/order.js";
import { z } from "zod";

export const createOrderSchema = createInsertSchema(ordersTable).omit({
   id: true,
   userId: true,
   status: true,
   createdAt: true
});

export const createOrderItemsSchema = createInsertSchema(orderItemsTable).omit({
   id: true,
   orderId: true
});

export const createOrderWithItemsSchema = z.object({
   order: createOrderSchema,
   items: z.array(createOrderItemsSchema)
})


export const updateOrderSchema = createInsertSchema(ordersTable).pick({
   status: true
})