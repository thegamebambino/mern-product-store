import Product from '../models/Product.js';
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in Get products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  if(!product.name || !product.price || !product.image) {
    return res.status(400).json({ success:false, message: "Please provide name, price and image" });
  }

  const newProduct = new Product(product)

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
  } catch (error) {
    console.error("Error in Update product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct =  async (req, res) => {
  const { id } = req.params;
  console.log("id:", id);
  
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: deletedProduct });
  } catch (error) {
    console.error("Error in Delete product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
