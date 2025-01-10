import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth.js";
import { validateData } from "../middlewares/validate.js";
import { loginUserSchema, registerUserSchema } from "../types/user.js";

const router = Router();

router.post('/register', validateData(registerUserSchema), registerUser);
router.post('/login', validateData(loginUserSchema), loginUser);

export default router;