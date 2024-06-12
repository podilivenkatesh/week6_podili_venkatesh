"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Book extends sequelize_1.Model {
}
Book.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    bookCode: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    publishedYear: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    price: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
    externalId: { type: sequelize_1.DataTypes.STRING, allowNull: true },
}, {
    sequelize: db_1.default,
    modelName: 'Book',
    timestamps: true,
});
exports.default = Book;
//# sourceMappingURL=Book.js.map