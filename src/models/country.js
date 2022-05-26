module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Country", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
