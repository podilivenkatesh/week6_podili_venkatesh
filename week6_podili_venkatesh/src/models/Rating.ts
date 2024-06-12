import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import User from './User';
import Book from './Book';

class Rating extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public rating!: number;
}

Rating.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
  bookId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Book, key: 'id' } },
  rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
}, {
  sequelize,
  modelName: 'Rating',
  timestamps: true,
});

export default Rating;
