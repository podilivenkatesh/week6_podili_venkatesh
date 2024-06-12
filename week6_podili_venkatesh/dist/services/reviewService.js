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
exports.deleteReview = exports.updateReview = exports.createReview = exports.getReviewById = exports.getAllReviews = void 0;
const models_1 = require("../models");
const getAllReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Review.findAll({ include: [models_1.User, models_1.Book] });
});
exports.getAllReviews = getAllReviews;
const getReviewById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Review.findByPk(id, { include: [models_1.User, models_1.Book] });
});
exports.getReviewById = getReviewById;
const createReview = (reviewData) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Review.create(reviewData);
});
exports.createReview = createReview;
const updateReview = (id, reviewData) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield models_1.Review.findByPk(id);
    if (review) {
        return review.update(reviewData);
    }
    return null;
});
exports.updateReview = updateReview;
const deleteReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield models_1.Review.findByPk(id);
    if (review) {
        yield review.destroy();
        return true;
    }
    return false;
});
exports.deleteReview = deleteReview;
//# sourceMappingURL=reviewService.js.map