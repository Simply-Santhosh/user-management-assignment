const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    company_name: {
      type: DataTypes.STRING,
    },

    role: {
      type: DataTypes.STRING,
    },

    country: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  },
);

module.exports = User;
