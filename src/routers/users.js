import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { createUserSchema, loginUserSchema } from '../validation/users.js';
import { validateBody } from '../utils/validateBody.js';
import {
  userLoginController,
  userRegisterController,
} from '../controllers/users.js';

const userRouter = Router();

userRouter.post(
  '/register',
  validateBody(createUserSchema),
  ctrlWrapper(userRegisterController),
);

userRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(userLoginController),
);

export default userRouter;
