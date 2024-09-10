import { pool } from "../config/database.js";

export class Flower {
    static async getAllAvailable() {
        try {
            const [flowers] = await pool.query("SELECT * FROM flowers WHERE stock > 0");
            return flowers;
        } catch (error) {
            console.error("Error al obtener las flores", error);
        }
    }

    static async getById(id) {
        try {
            const [flower] = await pool.query("SELECT * FROM flowers WHERE id = ?", [id]);
            return flower[0];
        } catch (error) {
            console.error(`Error al obtener la flor ${id}:`, error);
        }
    }

    static async updateStock(id, quantity) {
        try {
            const [result] = await pool.query("UPDATE flowers SET stock = ? WHERE id = ?", [quantity, id]);
            if (result.affectedRows > 0) {
                const updatedFlower = await this.getById(id);
                return updatedFlower;
            }
            return null;
        } catch (error) {
            console.error(`Error al actualizar el stock ${id}:`, error);
        }
    }

    static async updateName(id, newName) {
        try {
            const [result] = await pool.query("UPDATE flowers SET name = ? WHERE id = ?", [newName, id]);
            if (result.affectedRows > 0) {
                const updatedFlower = await this.getById(id);
                return updatedFlower
            }
        } catch (error) {
            console.error(`Error al actualizar el nombre ${id}:`, error);
        }
    }

    static async updatePrice(id, newPrice) {
        try {
            const [result] = await pool.query("UPDATE flowers SET price = ? WHERE id = ?", [newPrice, id]);
            if (result.affectedRows > 0) {
                const updatedFlower = await this.getById(id);
                return updatedFlower
            }
        } catch (error) {
            console.error(`Error al actualizar el precio ${id}:`, error);
        }
    }
}
