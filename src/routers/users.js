import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { createUserSchema, loginUserSchema } from '../validation/users.js';
import { validateBody } from '../utils/validateBody.js';
import {
  logoutController,
  userLoginController,
  userRegisterController,
} from '../controllers/users.js';
import { authenticate } from '../middlewares/autenticate.js';

const userRouter = Router();

userRouter.post(
  '/signup',
  validateBody(createUserSchema),
  ctrlWrapper(userRegisterController),
);

userRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(userLoginController),
);

userRouter.post('/logout', authenticate, ctrlWrapper(logoutController));

export default userRouter;
