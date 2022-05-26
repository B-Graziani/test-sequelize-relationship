const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("../models/user");
const ArticleModel = require("../models/article");
const CountryModel = require("../models/country");
const CapitalModel = require("../models/capital");

let sequelize;

sequelize = new Sequelize("relationship-sequelize", "root", "root", {
  port: 8889,
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: true,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connexion etablis");
  })
  .catch((error) => {
    console.log(error);
  });

const User = UserModel(sequelize, DataTypes);
const Article = ArticleModel(sequelize, DataTypes);
const Country = CountryModel(sequelize, DataTypes);
const Capital = CapitalModel(sequelize, DataTypes);

// User.hasOne(Article);
// Article.belongsTo(User);

const initDb = () => {
  return sequelize.sync({ force: true }).then(() => {
    console.log("DB initialized");
  });
};

module.exports = {
  initDb,
  User,
  Article,
  Country,
  Capital,
};
