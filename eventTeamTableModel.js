const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB.js");

class eventTeam extends Model {}

eventTeam.init(
  {
    eventName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    teamName: {
        type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

eventTeam.sync();
module.exports = eventTeam;
