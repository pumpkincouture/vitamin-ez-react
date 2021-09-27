"use strict";

var _setup = require("./db/setup");

(0, _setup.initialize)();

var express = require("express");

var app = express(); // simple route

app.get("/", function (req, res) {
  res.json({
    message: "Welcome to bezkoder application."
  });
});

require("./routes/routes.js")["default"](app); // set port, listen for requests


var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT, "."));
});