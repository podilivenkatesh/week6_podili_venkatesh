"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Author extends sequelize_1.Model {
}
Author.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    bio: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    birthdate: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    isSystemUser: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
}, {
    sequelize: db_1.default,
    modelName: 'Author',
    timestamps: true,
});
exports.default = Author;
//# sourceMappingURL=Author.js.map