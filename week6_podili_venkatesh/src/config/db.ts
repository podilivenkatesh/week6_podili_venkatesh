import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  host: process.env.DB_HOST as string,
  dialect: process.env.DB_DIALECT as 'postgres',
  port: parseInt(process.env.DB_PORT as string, 10),
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

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
  }
);

export default sequelize;
