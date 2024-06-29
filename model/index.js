// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("players", "root", "Ri8483@tik", {
//   host: "localhost",
//   dialect: "mysql",
// });

// try {
//   sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

// module.exports = sequelize

// // dialect means which DB
// //model represent a table in mySql

//SECOND METHOD
const { Sequelize, DataTypes } = require("sequelize");
const contact = require("./contact");
const user = require("./user");

const sequelize = new Sequelize("players", "root", "Ri8483@tik", {
  host: "localhost",
  logging: false, //to hide quesries executing in terminal
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  contact: contact(DataTypes, sequelize),
  user: user(DataTypes, sequelize),
};

sequelize.sync(); //it creates all tables at once

module.exports = db;

// dialect means which DB
//model represent a table in mySql
