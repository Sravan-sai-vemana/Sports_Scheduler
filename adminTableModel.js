const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB.js");

class admin extends Model {}

admin.init(
  {
    // Model attributes are defined here
    eventName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sportName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    noPlayers: {
      type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

admin.sync();
module.exports = admin;
