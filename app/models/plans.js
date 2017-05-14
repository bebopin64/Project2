// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Plan = sequelize.define("plan", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,

  title: Sequelize.STRING,

  time: Sequelize.DATE,

  details: Sequelize.STRING
});

// Syncs with DB
Plan.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Plan;
