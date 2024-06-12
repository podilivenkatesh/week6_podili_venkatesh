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
exports.deleteReview = exports.updateReview = exports.createReview = exports.getReviewById = exports.getReviews = void 0;
const models_1 = require("../models");
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield models_1.Review.findAll({ include: [models_1.User, models_1.Book] });
        res.json(reviews);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getReviews = getReviews;
const getReviewById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield models_1.Review.findByPk(req.params.id, { include: [models_1.User, models_1.Book] });
        if (review) {
            res.json(review);
        }
        else {
            res.status(404).json({ error: 'Review not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getReviewById = getReviewById;
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield models_1.Review.create(Object.assign(Object.assign({}, req.body), { userId: req.userId }));
        res.status(201).json(review);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createReview = createReview;
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield models_1.Review.findByPk(req.params.id);
        if (review) {
            yield review.update(req.body);
            res.json(review);
        }
        else {
            res.status(404).json({ error: 'Review not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateReview = updateReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield models_1.Review.findByPk(req.params.id);
        if (review) {
            yield review.destroy();
            res.status(204).json();
        }
        else {
            res.status(404).json({ error: 'Review not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteReview = deleteReview;
//# sourceMappingURL=reviewController.js.map