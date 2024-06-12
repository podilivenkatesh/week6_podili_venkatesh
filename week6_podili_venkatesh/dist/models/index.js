"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Rating = exports.Review = exports.User = exports.Author = exports.Book = exports.sequelize = void 0;
const db_1 = __importDefault(require("../config/db"));
exports.sequelize = db_1.default;
const Book_1 = __importDefault(require("./Book"));
exports.Book = Book_1.default;
const Author_1 = __importDefault(require("./Author"));
exports.Author = Author_1.default;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Review_1 = __importDefault(require("./Review"));
exports.Review = Review_1.default;
const Rating_1 = __importDefault(require("./Rating"));
exports.Rating = Rating_1.default;
const Order_1 = __importDefault(require("./Order"));
exports.Order = Order_1.default;
// Associations
Book_1.default.belongsToMany(Author_1.default, { through: 'BookAuthors' });
Author_1.default.belongsToMany(Book_1.default, { through: 'BookAuthors' });
User_1.default.hasMany(Review_1.default, { foreignKey: 'userId' });
Review_1.default.belongsTo(User_1.default, { foreignKey: 'userId' });
Book_1.default.hasMany(Review_1.default, { foreignKey: 'bookId' });
Review_1.default.belongsTo(Book_1.default, { foreignKey: 'bookId' });
User_1.default.hasMany(Rating_1.default, { foreignKey: 'userId' });
Rating_1.default.belongsTo(User_1.default, { foreignKey: 'userId' });
Book_1.default.hasMany(Rating_1.default, { foreignKey: 'bookId' });
Rating_1.default.belongsTo(Book_1.default, { foreignKey: 'bookId' });
User_1.default.hasMany(Order_1.default, { foreignKey: 'userId' });
Order_1.default.belongsTo(User_1.default, { foreignKey: 'userId' });
Book_1.default.hasMany(Order_1.default, { foreignKey: 'bookId' });
Order_1.default.belongsTo(Book_1.default, { foreignKey: 'bookId' });
db_1.default.sync({ alter: true }).then(() => {
    console.log('Database & tables created!');
});
//# sourceMappingURL=index.js.map