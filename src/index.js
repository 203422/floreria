import express, { json } from "express";
import 'dotenv/config';
import { catalogRouter } from "./routes/catalogRoutes.js";
import { orderRouter } from "./routes/orderRoutes.js";

const port = process.env.PORT_APP || 3001;

const app = express();

app.use(json());

app.use('/api', catalogRouter);
app.use('/api', orderRouter);

app.listen(port, () => {
    console.log('Servidor ejecutándose en el puerto:', port);
}); 