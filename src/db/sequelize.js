const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("../models/user");
const ArticleModel = require("../models/article");

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

Article.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Article, { foreignKey: "userId" });

const initDb = () => {
  return sequelize.sync({ force: true }).then(() => {
    console.log("DB initialized");
  });
};

module.exports = {
  initDb,
  User,
  Article,
};
