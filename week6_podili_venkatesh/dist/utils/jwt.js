"use strict";
// import jwt from 'jsonwebtoken';
// import User from '../models/User';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const generateToken = (id: number) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET || '', { expiresIn: process.env.JWT_EXPIRES_IN });
// };
// export default generateToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};
exports.default = generateToken;
//# sourceMappingURL=jwt.js.map