import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Book extends Model {
  public id!: number;
  public bookCode!: string;
  public title!: string;
  public description!: string;
  public publishedYear!: number;
  public price!: number;
  public externalId!: string;
}

Book.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  bookCode: { type: DataTypes.STRING, allowNull: false, unique: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  publishedYear: { type: DataTypes.INTEGER, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  externalId: { type: DataTypes.STRING, allowNull: true },
}, {
  sequelize,
  modelName: 'Book',
  timestamps: true,
});

export default Book;
