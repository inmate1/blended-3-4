import createHttpError from 'http-errors';
import { findUserById } from '../services/users.js';
import jwt from 'jsonwebtoken';
import { env } from '../utils/env.js';

export const authenticate = async (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    next(createHttpError(401, 'Unauthorized'));
    return;
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    next(createHttpError(401, 'Token should be of type Bearer'));
    return;
  }

  const { id } = jwt.verify(token, env('JWT_SECRET'));

  const user = await findUserById(id);
  // console.log(user);

  if (!user || !user.token || user.token !== token) {
    next(createHttpError(401, 'User not found'));
    return;
  }

  req.user = user;
  next();
};
