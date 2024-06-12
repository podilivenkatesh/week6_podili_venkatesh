import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import User from './User';
import Book from './Book';

class Review extends Model {
public id!: number;
public userId!: number;
public bookId!: number;
public content!: string;
}

Review.init({
id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
bookId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Book, key: 'id' } },
content: { type: DataTypes.TEXT, allowNull: false },
}, {
sequelize,
modelName: 'Review',
timestamps: true,
});

export default Review;