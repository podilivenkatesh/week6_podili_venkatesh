"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ratingController_1 = require("../controllers/ratingController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/', ratingController_1.getRatings);
router.get('/:id', ratingController_1.getRatingById);
router.post('/', authMiddleware_1.default, ratingController_1.createRating);
router.put('/:id', authMiddleware_1.default, ratingController_1.updateRating);
router.delete('/:id', authMiddleware_1.default, ratingController_1.deleteRating);
exports.default = router;
//# sourceMappingURL=ratingRoutes.js.map