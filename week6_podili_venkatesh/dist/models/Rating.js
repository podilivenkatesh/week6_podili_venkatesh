"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const User_1 = __importDefault(require("./User"));
const Book_1 = __importDefault(require("./Book"));
class Rating extends sequelize_1.Model {
}
Rating.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, references: { model: User_1.default, key: 'id' } },
    bookId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, references: { model: Book_1.default, key: 'id' } },
    rating: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
}, {
    sequelize: db_1.default,
    modelName: 'Rating',
    timestamps: true,
});
exports.default = Rating;
//# sourceMappingURL=Rating.js.map