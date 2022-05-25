const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("test home");
});

app.listen(port, () => {
  console.log(`je fonctionne sur le port : ${port}`);
});
