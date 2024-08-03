import {
  getAllProducts,
  deleteProduct,
  postProduct,
} from '../services/products.js';
import createHttpError from 'http-errors';

export const getProductsController = async (req, res) => {
  const products = await getAllProducts();
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  // res.status(204).end();
  res.sendStatus(204);
};

export const postProductController = async (req, res) => {
  const product = await postProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};
