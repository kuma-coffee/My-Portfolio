const express = require("express");
const db = require("./database/db");

const app = express();

//middleware
app.use(express.static("assets"));
app.use(express.json());
app.use(express.urlencoded());

//view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { items: db });
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is runnning on port ${port}`);
});
