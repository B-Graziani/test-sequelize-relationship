const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./src/db/sequelize");
// const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
// .use(cors());

sequelize.initDb();

app.get("/", (req, res) => {
  res.json("test home");
});

require("./src/routes/userRoutes/createUser")(app);
require("./src/routes/articleRoutes/createArticle")(app);

app.listen(port, () => {
  console.log(`je fonctionne sur le port : ${port}`);
});
