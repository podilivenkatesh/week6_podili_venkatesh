import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes';
import authorRoutes from './routes/authorRoutes';
import userRoutes from './routes/authRoutes';
import reviewRoutes from './routes/reviewRoutes';
import ratingRoutes from './routes/ratingRoutes';
import orderRoutes from './routes/orderRoutes';
import { sequelize } from './models';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/orders', orderRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
