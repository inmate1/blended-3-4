import { Product } from '../db/models/Product.js';

export const getAllProducts = (userId) => Product.find({ userId });

export const deleteProduct = (productId) =>
  Product.findByIdAndDelete(productId);

export const postProduct = (productData) => Product.create(productData);
