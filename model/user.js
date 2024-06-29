// // const { Sequelize, DataTypes } = require("sequelize");
// // const sequelize = new Sequelize("sqlite::memory:");
// // const sequelizeModel = require("./index");

// // w/o sqlite
// const { DataTypes } = require("sequelize");
// const sequelize = require("./index");

// const User = sequelize.define(
//   "User",
//   {
//     // Model attributes are defined here
//     firstName: {
//       //first column
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique:true,      //name should be unique
//       //   defaultValue:"John Doe"       //to make default value prefilled on creating a table
//       //   defaultValue:DataTypes.NOW      //take current date and time as default value
//     },
//     lastName: {
//       //second column
//       type: DataTypes.STRING,
//       // allowNull defaults to true
//     },
//   },
//   {
//     // Other model options go here
//     tableName: "users",     //name which goes on DB
//     // timestamps: false, //to remove created/updated at
//     // createdAt:false,    //to only hide created at
//     // updatedAt:"NewUpdateName"   //changing name of updated at
//   }
// );

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
// module.exports = User;

// // sequelize.define(modelName, attributes, options)
// //`id` INTEGER NOT NULL auto_increment (takes it automatic and make it primary key)



//SECOND METHOD
module.exports = (DataTypes, sequelize) => {
  const User = sequelize.define(
    "User",
    {
      // Model attributes are defined here
      firstName: {
        //first column
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, //name should be unique
        //   defaultValue:"John Doe"       //to make default value prefilled on creating a table
        //   defaultValue:DataTypes.NOW      //take current date and time as default value
      },
      lastName: {
        //second column
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
      tableName: "users", //name which goes on DB
      // timestamps: false, //to remove created/updated at
      // createdAt:false,    //to only hide created at
      // updatedAt:"NewUpdateName"   //changing name of updated at
    }
  );

  return User;
};
