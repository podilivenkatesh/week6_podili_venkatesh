"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const authorRoutes_1 = __importDefault(require("./routes/authorRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const reviewRoutes_1 = __importDefault(require("./routes/reviewRoutes"));
const ratingRoutes_1 = __importDefault(require("./routes/ratingRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const models_1 = require("./models");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/api/books', bookRoutes_1.default);
app.use('/api/authors', authorRoutes_1.default);
app.use('/api/users', authRoutes_1.default);
app.use('/api/reviews', reviewRoutes_1.default);
app.use('/api/ratings', ratingRoutes_1.default);
app.use('/api/orders', orderRoutes_1.default);
models_1.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
//# sourceMappingURL=app.js.map