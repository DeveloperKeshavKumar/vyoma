import { Router } from "express";
import { listOrders, getOrderById, createOrder, updateOrder, deleteOrder } from "../controllers/orders.js";
import { validateData } from "../middlewares/validate.js";
import { createOrderWithItemsSchema } from "../types/order.js";
import { verifytoken } from "../middlewares/auth.js";

const router = Router();

router.get('/', listOrders);
router.get('/:id', getOrderById);
router.post('/', verifytoken, validateData(createOrderWithItemsSchema), createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);


export default router;