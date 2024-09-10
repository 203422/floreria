import { Flower } from "../models/flowerModel.js";
import { Order } from "../models/orderModel.js";

export class OrderController {
    static async createOrder(req, res) {
        const { customerName, flowerId, quantity } = req.body;
        if (!customerName || !flowerId || !quantity) return res.status(400).json({ message: "Los datos son requeridos" })

        const flower = await Flower.getById(flowerId)
        if (!flower || quantity > flower.stock) return res.status(400).json({ error: "Flor no disponible o cantidad insuficiente" });

        const newOrder = await Order.create(customerName, flowerId, quantity);
        if (newOrder) return res.status(201).json(newOrder)

        res.status(500).json({ error: "Error al crear el pedido" });
    }

    static async getOrderById(req, res) {
        const { orderId } = req.params;
        const order = await Order.getById(orderId);
        if (order) return res.status(201)
    }
}