import { Router } from "express";
import { OrderController } from "../controllers/orderController.js";

export const orderRouter = Router();

orderRouter.post('/orders', OrderController.createOrder);
