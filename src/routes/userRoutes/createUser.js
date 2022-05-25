const { User } = require("../../db/sequelize");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  app.post("/api/user", (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    bcrypt
      .hash(password, 10)
      .then((hash) =>
        User.create({ username: username, email: email, password: hash })
      )
      .then((user) => {
        const message = `le user ${user.username} à bien ete creer ! `;
        res.json({ message, data: user });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
