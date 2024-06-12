"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorController_1 = require("../controllers/authorController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/', authorController_1.getAuthors);
router.get('/:id', authorController_1.getAuthorById);
router.post('/', authMiddleware_1.default, authorController_1.createAuthor);
router.put('/:id', authMiddleware_1.default, authorController_1.updateAuthor);
router.delete('/:id', authMiddleware_1.default, authorController_1.deleteAuthor);
exports.default = router;
//# sourceMappingURL=authorRoutes.js.map