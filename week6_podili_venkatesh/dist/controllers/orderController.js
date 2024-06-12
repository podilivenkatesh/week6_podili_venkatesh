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
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrderById = exports.getOrders = void 0;
const models_1 = require("../models");
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield models_1.Order.findAll({ include: [models_1.User, models_1.Book] });
        res.json(orders);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getOrders = getOrders;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield models_1.Order.findByPk(req.params.id, { include: [models_1.User, models_1.Book] });
        if (order) {
            res.json(order);
        }
        else {
            res.status(404).json({ error: 'Order not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getOrderById = getOrderById;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield models_1.Order.create(Object.assign(Object.assign({}, req.body), { userId: req.userId }));
        res.status(201).json(order);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createOrder = createOrder;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield models_1.Order.findByPk(req.params.id);
        if (order) {
            yield order.update(req.body);
            res.json(order);
        }
        else {
            res.status(404).json({ error: 'Order not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateOrder = updateOrder;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield models_1.Order.findByPk(req.params.id);
        if (order) {
            yield order.destroy();
            res.status(204).json();
        }
        else {
            res.status(404).json({ error: 'Order not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=orderController.js.map