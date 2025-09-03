import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from 'cors';
import productRoutes from './routes/product.route.js';

dotenv.config();

console.log(process.env.MONGO_URI);

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
