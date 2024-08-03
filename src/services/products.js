import { Product } from '../db/models/Product.js';

export const getAllProducts = () => Product.find();

export const deleteProduct = (productId) =>
  Product.findByIdAndDelete(productId);

export const postProduct = (productData) => Product.create(productData);
