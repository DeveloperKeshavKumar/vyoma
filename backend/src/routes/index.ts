import { Router } from "express";
import productRouter from "./products";
import orderRouter from "./orders";
import authRouter from "./auth";

const router = Router();

router.get('/', (req, res) => {
   res.send("Server is up and running");
})

router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/auth', authRouter);


export default router;