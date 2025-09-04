import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();
router.use(cors());
router.use(bodyParser.json());

router.post("/", createProduct);
router.get("/", getProducts);
router.patch("/:id",updateProduct);
router.delete("/:id", deleteProduct);

export default router;