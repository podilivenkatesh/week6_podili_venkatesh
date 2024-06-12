import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10);

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export { hashPassword, comparePassword };
