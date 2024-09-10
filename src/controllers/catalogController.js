import { Flower } from "../models/flowerModel.js";

export class CatalogController {

    static async getAllFlowers(req, res) {
        try {
            const flowers = await Flower.getAllAvailable();
            if (flowers) return res.status(200).json(flowers);
            res.status(404).json({ message: 'Flores no encontradas' });
        } catch (error) {
            res.status(500).json({ message: 'Se ha producido un error' });
        }
    }

    static async getFlowerById(req, res) {
        const { id } = req.params;
        try {
            const flower = await Flower.getById(id);
            if (flower) return res.status(200).json(flower);
            res.status(404).json({ message: 'Flor no encontrada' });
        } catch (error) {
            res.status(500).json({ message: 'Se ha producido un error' });
        }
    }

    static async updateFlowerStock(req, res) {
        const { id } = req.params;
        const { quantity } = req.body;
        if (!id || !quantity) return res.status(400).json({message: 'La cantidad es requerida'})
        try {
            const updatedFlower = await Flower.updateStock(id, quantity);
            if (updatedFlower) return res.status(200).json(updatedFlower);
            res.status(404).json({ message: 'Flor no encontrada' });
        } catch (error) {
            res.status(500).json({ message: 'Se ha producido un error' });
        }
    }

    static async updateFlowerName(req, res) {
        const { id } = req.params;
        const { newName } = req.body;
        if (!newName) return res.status(400).json({message: 'El nombre es requerido'})
        try {
            const updatedName = await Flower.updateName(id, newName);
            if (updatedName) return res.status(200).json(updatedName);
            res.status(404).json({ message: 'Flor no encontrada' });
        } catch (error) {
            res.status(500).json({ message: 'Se ha producido un error' });
        }
    }

    static async updateFlowerPrice(req, res) {
        const { id } = req.params;
        const { newPrice } = req.body;
        if (!newPrice) return res.status(400).json({message: 'El precio es requerido'})
        try {
            const updatedName = await Flower.updatePrice(id, newPrice);
            if (updatedName) return res.status(200).json(updatedName);
            res.status(404).json({ message: 'Flor no encontrada' });
        } catch (error) {
            res.status(500).json({ message: 'Se ha producido un error' });
        }
    }
}
