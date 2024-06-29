// const { DataTypes } = require("sequelize");
// const sequelize = require("./index");

// const Contact = sequelize.define(
//   "Contact",
//   {
//     permanent_address: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     current_address: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     tableName: "contacts",
//   }
// );

// module.exports = Contact;


//SECOND METHOD
module.exports = (DataTypes, sequelize) => {
  const Contact = sequelize.define(
    "Contact",
    {
      permanent_address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      current_address: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "contacts",
    }
  );

  return Contact;
};
