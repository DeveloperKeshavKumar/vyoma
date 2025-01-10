import { Router } from "express";
import productRouter from "./products.js";
import orderRouter from "./orders.js";
import authRouter from "./auth.js";

const router = Router();

router.get('/', (req, res) => {
   res.send("Server is up and running");
})

router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/auth', authRouter);


export default router;