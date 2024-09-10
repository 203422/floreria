import { Router } from "express";
import { CatalogController } from "../controllers/catalogController.js";

export const catalogRouter = Router();

catalogRouter.get('/flowers', CatalogController.getAllFlowers);
catalogRouter.get('/flowers/:id', CatalogController.getFlowerById);
catalogRouter.put('/flowers/:id/stock', CatalogController.updateFlowerStock);
catalogRouter.put('/flowers/:id/name', CatalogController.updateFlowerName);
catalogRouter.put('/flowers/:id/price', CatalogController.updateFlowerPrice);