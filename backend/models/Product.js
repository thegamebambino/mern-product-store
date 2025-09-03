import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { 
        type: String, required: true 
    },
    price: { 
        type: Number, required: true 
    },
    description: {
        type: String 
    },
    inStock: { 
        type: Boolean, default: true 
    },
}, {
    timestamps: true //createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);

export default Product;




