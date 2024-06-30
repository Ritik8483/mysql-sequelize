// const db = require("../model");
// const User = db.user;

// //build method
// // const addUser = async (req, res) => {
// //   const payload = User.build({ firstName: "Vipin",lastName:"Chauhan" });
// //   console.log(payload instanceof User); // true
// //   console.log(payload.firstName); // "payload"
// //   await payload.save();
// //   console.log("payload was saved to the database!");
// //   res.status(200).json(payload.toJSON());
// // };

// //create method
// const addUser = async (req, res) => {
//   const payload = await User.create({ firstName: "Sachin",lastName:"Singh" });
//   res.status(200).json(payload.toJSON());
// };

// //set method to update a input value from some another value
// // const addUser = async (req, res) => {
// //   const payload = await User.create({
// //     firstName: "Sachin123",
// //     lastName: "Singh",
// //   }); //input is sachin
// //   payload.set({
// //     //but we are replacing it with other values
// //     firstName: "Ada",
// //     lastName: "blue",
// //   });
// //   await payload.save();
// //   res.status(200).json(payload.toJSON());
// // };

// //destroy : this entry was removed from the database
// // const addUser = async (req, res) => {
// //   const payload = await User.create({
// //     firstName: "Sachin123",
// //     lastName: "Singh",
// //   });
// //   await payload.destroy();    //it will not user to save data in DB
// //   res.status(200).json(payload.toJSON());
// // };

// module.exports = { addUser };

//SECOND PHASE
const db = require("../model");
const User = db.user;

//create method
const addUser = async (req, res) => {
  const payload = await User.create({ firstName: "Sachin", lastName: "Singh" });
  res.status(200).json(payload.toJSON());
};

const postUsers = async (req, res) => {
  console.log(req.body);
  if (Array.isArray(req.body) && req.body.length > 1) {
    const payload = await User.bulkCreate(req.body); //req.body accepts only object not array of objects
    res.status(200).json({ data: payload });
  } else {
    const payload = await User.create(req.body); //req.body accepts only object not array of objects
    res.status(200).json(payload.toJSON());
  }
};

const getUsers = async (req, res) => {
  const data = await User.findAll();
  res.status(200).json({ data: data });
};

const getSingleUser = async (req, res) => {
  console.log("req", req.params.id);
  const data = await User.findOne({
    where: { id: req.params.id },
  });
  res.status(200).json({ data: data });
};

const deleteUser = async (req, res) => {
  console.log("req", req.params.id);
  const data = await User.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({ data: "deleted" });
};

const updateUser = async (req, res) => {
  console.log("req", req.params.id);
  const data = await User.update(req.body, {    //json
    where: { id: req.params.id },           //id
  });
  res.status(200).json({ data: data });
};

module.exports = {
  addUser,
  getUsers,
  getSingleUser,
  postUsers,
  deleteUser,
  updateUser,
};
