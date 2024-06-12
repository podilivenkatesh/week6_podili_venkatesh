import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
}

User.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
}, {
  sequelize,
  modelName: 'User',
  timestamps: true,
});

export default User;
