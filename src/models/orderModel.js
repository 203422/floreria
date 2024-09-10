import { pool } from "../config/database.js";

export class Order {

    static async create(customerName, flowerId, quantity) {
        try {
            const [result] = await pool.query(
                "INSERT INTO orders (customer_name, flower_id, quantity) VALUES (?, ?, ?)",
                [customerName, flowerId, quantity]
            );


            return { message: "Pedido creado", order: result.insertId }
        } catch (error) {
            console.error("Error al crear el pedido:", error);
        }
    }

    static async getById(id) {
        try {
            const [order] = await pool.query("SELECT * FROM orders WHERE id = ?", [id]);
            return order[0];
        } catch (error) {
            console.error(`Error al obtener el pedido con id ${id}:`, error);
        }
    }
}
