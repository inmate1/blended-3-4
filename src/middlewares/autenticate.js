import createHttpError from 'http-errors';
import { findSessionByAccessToken } from '../services/users.js';
import { findUserById } from '../services/users.js';

export const authenticate = async (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    next(createHttpError(401, 'Anouthorized'));
    return;
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    next(createHttpError(401, 'Token should be of type Bearer'));
    return;
  }

  const session = await findSessionByAccessToken(token);

  if (!session) {
    next(createHttpError(401, 'Anouthorized'));
    return;
  }

  const isExpired = Date.now() > session.accessTokenValidUntil;

  if (isExpired) {
    next(createHttpError(401, 'Token has expired'));
    return;
  }

  const user = await findUserById(session.userId);

  if (!user) {
    next(createHttpError(401, 'User not found'));
    return;
  }

  req.user = user;
  next();
};
