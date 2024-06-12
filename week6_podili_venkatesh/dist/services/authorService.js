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
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAllAuthors = void 0;
const models_1 = require("../models");
const getAllAuthors = () => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Author.findAll({ include: [models_1.Book] });
});
exports.getAllAuthors = getAllAuthors;
const getAuthorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Author.findByPk(id, { include: [models_1.Book] });
});
exports.getAuthorById = getAuthorById;
const createAuthor = (authorData) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Author.create(authorData);
});
exports.createAuthor = createAuthor;
const updateAuthor = (id, authorData) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield models_1.Author.findByPk(id);
    if (author) {
        return author.update(authorData);
    }
    return null;
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield models_1.Author.findByPk(id);
    if (author) {
        yield author.destroy();
        return true;
    }
    return false;
});
exports.deleteAuthor = deleteAuthor;
//# sourceMappingURL=authorService.js.map