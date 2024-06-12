import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import User from './User';
import Book from './Book';

class Order extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public amount!: number;
  public status!: string;
  public createdAt!: Date;
}

Order.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
  bookId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Book, key: 'id' } },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  sequelize,
  modelName: 'Order',
  timestamps: false,
});

export default Order;
