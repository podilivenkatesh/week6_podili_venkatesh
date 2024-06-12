"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/', authMiddleware_1.default, orderController_1.getOrders);
router.get('/:id', authMiddleware_1.default, orderController_1.getOrderById);
router.post('/', authMiddleware_1.default, orderController_1.createOrder);
router.put('/:id', authMiddleware_1.default, orderController_1.updateOrder);
router.delete('/:id', authMiddleware_1.default, orderController_1.deleteOrder);
exports.default = router;
//# sourceMappingURL=orderRoutes.js.map