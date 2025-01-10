import { createInsertSchema } from "drizzle-zod";
import { usersTable } from "../schemas/index.js";

export const registerUserSchema = createInsertSchema(usersTable).omit({ id: true, address: true });
export const loginUserSchema = createInsertSchema(usersTable).omit({ id: true, name: true, role: true, address: true });