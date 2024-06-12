// import jwt from 'jsonwebtoken';
// import User from '../models/User';

// const generateToken = (id: number) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET || '', { expiresIn: process.env.JWT_EXPIRES_IN });
// };

// export default generateToken;





import jwt from 'jsonwebtoken';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user: User) => {
  return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });
};

export default generateToken;
