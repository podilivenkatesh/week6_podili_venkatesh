"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConfig = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: parseInt(process.env.DB_PORT, 10),
};
// Ensure that none of the required environment variables are undefined
if (!dbConfig.database) {
    throw new Error('DB_NAME must be defined');
}
if (!dbConfig.username) {
    throw new Error('DB_USER must be defined');
}
if (!dbConfig.password) {
    throw new Error('DB_PASSWORD must be defined');
}
if (!dbConfig.host) {
    throw new Error('DB_HOST must be defined');
}
if (!dbConfig.port) {
    throw new Error('DB_PORT must be defined and a valid number');
}
console.log('Database Config:', dbConfig); // Debug log to check the config
const sequelize = new sequelize_1.Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
});
exports.default = sequelize;
//# sourceMappingURL=db.js.map