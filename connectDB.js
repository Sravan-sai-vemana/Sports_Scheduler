const Sequelize = require("sequelize");

const database = "sport_scheduler_db";
const username = "postgres";
const password = "sai85007";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

const connect = async () => {
  return sequelize.authenticate();
}

module.exports = {
  connect,
  sequelize
}