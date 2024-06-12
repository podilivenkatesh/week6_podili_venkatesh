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
exports.deleteRating = exports.updateRating = exports.createRating = exports.getRatingById = exports.getRatings = void 0;
const models_1 = require("../models");
const getRatings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ratings = yield models_1.Rating.findAll({ include: [models_1.User, models_1.Book] });
        res.json(ratings);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getRatings = getRatings;
const getRatingById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rating = yield models_1.Rating.findByPk(req.params.id, { include: [models_1.User, models_1.Book] });
        if (rating) {
            res.json(rating);
        }
        else {
            res.status(404).json({ error: 'Rating not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getRatingById = getRatingById;
const createRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rating = yield models_1.Rating.create(Object.assign(Object.assign({}, req.body), { userId: req.userId }));
        res.status(201).json(rating);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createRating = createRating;
const updateRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rating = yield models_1.Rating.findByPk(req.params.id);
        if (rating) {
            yield rating.update(req.body);
            res.json(rating);
        }
        else {
            res.status(404).json({ error: 'Rating not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateRating = updateRating;
const deleteRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rating = yield models_1.Rating.findByPk(req.params.id);
        if (rating) {
            yield rating.destroy();
            res.status(204).json();
        }
        else {
            res.status(404).json({ error: 'Rating not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteRating = deleteRating;
//# sourceMappingURL=ratingController.js.map