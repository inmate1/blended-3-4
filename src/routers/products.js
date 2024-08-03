import { Router } from 'express';
import {
  getProductsController,
  deleteProductController,
  postProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();
router.get('/', ctrlWrapper(getProductsController));
router.delete('/:productId', ctrlWrapper(deleteProductController));
router.post('/', ctrlWrapper(postProductController));

export default router;
