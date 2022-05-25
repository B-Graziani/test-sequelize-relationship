const { Article } = require("../../db/sequelize");
const { User } = require("../../db/sequelize");

module.exports = (app) => {
  app.post("/api/article", (req, res) => {
    let userId;
    Article.create(req.body)
      .then((article) => {
        const message = "ca fonctionne !";
        // console.log(article.dataValues.userId);
        userId = article.dataValues.userId;
        res.json({ message, data: article });
      })
      // .then(() => {
      //   return User.findByPk(userId).then((user) => {
      //     const message = "user recuperer";
      //     console.log(user);
      //     res.json({ message, data: user });
      //   });
      // })
      .catch((error) => {
        console.log(error);
      });
  });
};
