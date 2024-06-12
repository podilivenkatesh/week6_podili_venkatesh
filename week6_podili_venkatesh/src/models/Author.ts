import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Author extends Model {
  public id!: number;
  public name!: string;
  public bio!: string;
  public birthdate!: Date;
  public isSystemUser!: boolean;
}

Author.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  bio: { type: DataTypes.TEXT, allowNull: true },
  birthdate: { type: DataTypes.DATE, allowNull: false },
  isSystemUser: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  sequelize,
  modelName: 'Author',
  timestamps: true,
});

export default Author;
