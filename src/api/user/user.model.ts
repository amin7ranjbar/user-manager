import sequelizeConnection from "../../common/helpers/database";
import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  id: number;
  name: string;
  age: number;
  mobile: string;
  password: string;
}

const UserModel = sequelizeConnection.define<UserModel>(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: false,
    timestamps: false,
    tableName: "users",
  }
);

export default UserModel;
