import { Session } from '../db/models/session.js';
import { User } from '../db/models/user.js';
import bcrypt from 'bcrypt';
import { createNewSession } from '../utils/createNewSession.js';

export const findUserByEmail = (email) => User.findOne({ email });

export const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  return User.create({ ...userData, password: hashedPassword });
};

export const setupSession = async (userId) => {
  await Session.deleteOne({ userId });

  return await Session.create({ userId, ...createNewSession() });
};

export const findSessionByAccessToken = (accessToken) =>
  Session.findOne({ accessToken });

export const findUserById = (userId) => User.findById(userId);
