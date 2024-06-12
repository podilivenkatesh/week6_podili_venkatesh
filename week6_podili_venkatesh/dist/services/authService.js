"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models");
const registerUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = userData;
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    return models_1.User.create({ username, email, password: hashedPassword });
});
exports.registerUser = registerUser;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findOne({ where: { email } });
    if (!user || !(yield bcrypt_1.default.compare(password, user.password))) {
        return null;
    }
    const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
});
exports.loginUser = loginUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.User.findAll();
});
exports.getAllUsers = getAllUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.User.findByPk(id);
});
exports.getUserById = getUserById;
const updateUser = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findByPk(id);
    if (user) {
        return user.update(userData);
    }
    return null;
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findByPk(id);
    if (user) {
        yield user.destroy();
        return true;
    }
    return false;
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=authService.js.map