// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var User = sequelize.define("user", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,

  username: Sequelize.STRING,

  email: Sequelize.DATE

  password: Sequelize.STRING,
});

// Syncs with DB
User.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = User;

