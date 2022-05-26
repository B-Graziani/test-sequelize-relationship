// const { DataTypes } = require("sequelize/types");
// const Country = require("../models/country");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Capital", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    capitalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
