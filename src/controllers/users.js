import createHttpError from 'http-errors';
import {
  findUserByEmail,
  createUser,
  setupSession,
} from '../services/users.js';
import bcrypt from 'bcrypt';
import { setupCookies } from '../utils/setupCookies.js';

export const userRegisterController = async (req, res, next) => {
  const { email, name } = req.body;
  const user = await findUserByEmail(email);

  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  await createUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: { name, email },
  });
};

export const userLoginController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) {
    throw createHttpError(401, 'Unauthorized');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw createHttpError(401, 'Unauthorized');
  }

  const session = await setupSession(user._id);

  setupCookies(res, session);

  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: { accessToken: session.accessToken },
  });
};
