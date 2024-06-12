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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const models_1 = require("../models");
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Book.findAll({ include: [models_1.Author, models_1.Review, models_1.Rating] });
});
exports.getAllBooks = getAllBooks;
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Book.findByPk(id, { include: [models_1.Author, models_1.Review, models_1.Rating] });
});
exports.getBookById = getBookById;
const createBook = (bookData) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Book.create(bookData);
});
exports.createBook = createBook;
const updateBook = (id, bookData) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield models_1.Book.findByPk(id);
    if (book) {
        return book.update(bookData);
    }
    return null;
});
exports.updateBook = updateBook;
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield models_1.Book.findByPk(id);
    if (book) {
        yield book.destroy();
        return true;
    }
    return false;
});
exports.deleteBook = deleteBook;
//# sourceMappingURL=bookService.js.map