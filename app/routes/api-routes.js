// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var User = require("../models/user.js");
var Plan = require("../models/plans.js");

// Routes
// =============================================================
module.exports = function(app) {



  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var user = req.body;

    // Create a routeName
    //Rejax
    var routeName = user.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    User.create({
      routeName: routeName,
      username: user.username,
      email: user.email,
      password: user.password,
    });

  });


  // If a user sends data to add a new character...
  app.post("/api/newplan", function(req, res) {

    // Take the request...
    var plan = req.body;

    // Create a routeName
    //Rejax
    var routeName = plan.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Plan.create({
      routeName: routeName,
      title: plan.title,
      time: plan.time,
      details: plan.details,
    });

  });
};
