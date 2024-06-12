"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = require("../controllers/bookController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/', bookController_1.getBooks);
router.get('/:id', bookController_1.getBookById);
router.post('/', authMiddleware_1.default, bookController_1.createBook);
router.put('/:id', authMiddleware_1.default, bookController_1.updateBook);
router.delete('/:id', authMiddleware_1.default, bookController_1.deleteBook);
exports.default = router;
//# sourceMappingURL=bookRoutes.js.map