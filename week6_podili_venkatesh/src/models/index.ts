import sequelize from '../config/db';
import Book from './Book';
import Author from './Author';
import User from './User';
import Review from './Review';
import Rating from './Rating';
import Order from './Order';

// Associations
Book.belongsToMany(Author, { through: 'BookAuthors' });
Author.belongsToMany(Book, { through: 'BookAuthors' });

User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(Review, { foreignKey: 'bookId' });
Review.belongsTo(Book, { foreignKey: 'bookId' });

User.hasMany(Rating, { foreignKey: 'userId' });
Rating.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(Rating, { foreignKey: 'bookId' });
Rating.belongsTo(Book, { foreignKey: 'bookId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(Order, { foreignKey: 'bookId' });
Order.belongsTo(Book, { foreignKey: 'bookId' });

sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
});

export { sequelize, Book, Author, User, Review, Rating, Order };
