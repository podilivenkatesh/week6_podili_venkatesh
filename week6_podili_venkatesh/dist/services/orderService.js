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
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrderById = exports.getAllOrders = void 0;
const models_1 = require("../models");
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Order.findAll({ include: [models_1.User, models_1.Book] });
});
exports.getAllOrders = getAllOrders;
const getOrderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Order.findByPk(id, { include: [models_1.User, models_1.Book] });
});
exports.getOrderById = getOrderById;
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Order.create(orderData);
});
exports.createOrder = createOrder;
const updateOrder = (id, orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield models_1.Order.findByPk(id);
    if (order) {
        return order.update(orderData);
    }
    return null;
});
exports.updateOrder = updateOrder;
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield models_1.Order.findByPk(id);
    if (order) {
        yield order.destroy();
        return true;
    }
    return false;
});
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=orderService.js.map