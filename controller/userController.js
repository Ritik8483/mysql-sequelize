const db = require("../model");
const User = db.user;

//build method
// const addUser = async (req, res) => {
//   const payload = User.build({ firstName: "Vipin",lastName:"Chauhan" });
//   console.log(payload instanceof User); // true
//   console.log(payload.firstName); // "payload"
//   await payload.save();
//   console.log("payload was saved to the database!");
//   res.status(200).json(payload.toJSON());
// };

//create method
const addUser = async (req, res) => {
  const payload = await User.create({ firstName: "Sachin",lastName:"Singh" });
  res.status(200).json(payload.toJSON());
};

//set method to update a input value from some another value
// const addUser = async (req, res) => {
//   const payload = await User.create({
//     firstName: "Sachin123",
//     lastName: "Singh",
//   }); //input is sachin
//   payload.set({
//     //but we are replacing it with other values
//     firstName: "Ada",
//     lastName: "blue",
//   });
//   await payload.save();
//   res.status(200).json(payload.toJSON());
// };

//destroy : this entry was removed from the database
// const addUser = async (req, res) => {
//   const payload = await User.create({
//     firstName: "Sachin123",
//     lastName: "Singh",
//   });
//   await payload.destroy();    //it will not user to save data in DB
//   res.status(200).json(payload.toJSON());
// };

module.exports = { addUser };
