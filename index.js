const express = require("express");
const sequelize = require("./model/index");
const app = express();
const port = 8080;
const cors = require("cors");
const User = require("./model/user");
const Contact = require("./model/contact");

app.use(cors()); //cors policy for frontend
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// User.sync();    //creating a table
// User.drop();    //droping a table
// Contact.sync();
// Contact.drop();
// sequelize.drop()     //to drop all tables inside the table
// sequelize.sync(); //to sync all files at once

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
