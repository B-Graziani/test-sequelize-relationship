const { Article } = require("../../db/sequelize");
const { User } = require("../../db/sequelize");

module.exports = (app) => {
  app.get("/api/article/:id", (req, res) => {
    let userId;
    Article.findByPk(req.params.id)
      .then((article) => {
        if (article === null) {
          const message = "l article n existe pas";
          return res.status(404).json({ message });
        }
        const message = "un article à bien ete trouvé";
        userId = article.dataValues.userId;
        res.json({ message, data: article });
      })
      .then(() => {
        return User.findByPk(userId).then((user) => {
          const message = "user recuperer";
          console.log(user);
          res.json({ message, data: user });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
