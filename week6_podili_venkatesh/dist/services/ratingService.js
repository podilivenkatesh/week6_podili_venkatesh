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
exports.deleteRating = exports.updateRating = exports.createRating = exports.getRatingById = exports.getAllRatings = void 0;
const models_1 = require("../models");
const getAllRatings = () => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Rating.findAll({ include: [models_1.User, models_1.Book] });
});
exports.getAllRatings = getAllRatings;
const getRatingById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Rating.findByPk(id, { include: [models_1.User, models_1.Book] });
});
exports.getRatingById = getRatingById;
const createRating = (ratingData) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Rating.create(ratingData);
});
exports.createRating = createRating;
const updateRating = (id, ratingData) => __awaiter(void 0, void 0, void 0, function* () {
    const rating = yield models_1.Rating.findByPk(id);
    if (rating) {
        return rating.update(ratingData);
    }
    return null;
});
exports.updateRating = updateRating;
const deleteRating = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const rating = yield models_1.Rating.findByPk(id);
    if (rating) {
        yield rating.destroy();
        return true;
    }
    return false;
});
exports.deleteRating = deleteRating;
//# sourceMappingURL=ratingService.js.map