import { Router } from "express";
import { listOrders, getOrderById, createOrder, updateOrder, deleteOrder } from "../controllers/orders.js";

const router = Router();

router.get('/', listOrders);
router.get('/:id', getOrderById);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);


export default router;