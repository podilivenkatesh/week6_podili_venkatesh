"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviewController_1 = require("../controllers/reviewController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/', reviewController_1.getReviews);
router.get('/:id', reviewController_1.getReviewById);
router.post('/', authMiddleware_1.default, reviewController_1.createReview);
router.put('/:id', authMiddleware_1.default, reviewController_1.updateReview);
router.delete('/:id', authMiddleware_1.default, reviewController_1.deleteReview);
exports.default = router;
//# sourceMappingURL=reviewRoutes.js.map