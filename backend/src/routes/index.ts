import { Router } from "express";
import productRouter from "./products"
import orderRouter from "./orders"

const router = Router();

router.get('/', (req, res) => {
   res.send("Server is up and running");
})

router.use('/products', productRouter);
router.use('/orders', orderRouter);


export default router;