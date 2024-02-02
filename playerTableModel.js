const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB.js");

class player extends Model {}

player.init(
  {
    // Model attributes are defined here
    playerId: {
        type: DataTypes.STRING,
    },
    eventName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    teamName: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

player.sync();
module.exports = player;
