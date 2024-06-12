import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models';

export const registerUser = async (userData: any) => {
  const { username, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  return User.create({ username, email, password: hashedPassword });
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return null;
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  return { user, token };
};

export const getAllUsers = async () => {
  return User.findAll();
};

export const getUserById = async (id: string) => {
  return User.findByPk(id);
};

export const updateUser = async (id: string, userData: any) => {
  const user = await User.findByPk(id);
  if (user) {
    return user.update(userData);
  }
  return null;
};

export const deleteUser = async (id: string) => {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    return true;
  }
  return false;
};
