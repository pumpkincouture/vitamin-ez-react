"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = void 0;

var _bluebird = require("bluebird");

var _dao = require("./dao");

var _vitaminRepository = require("./vitaminRepository");

// import { initialize as initializeDb } from "./connection";
// import { initialize, close } from "./connection";
var express = require("express");

var PORT = process.env.PORT || 3001;
var app = express();
var dao = new _dao.Dao();
dao.initializeDbConnection(); // initialize(db);

var repository = new _vitaminRepository.VitaminRepository(dao);

var initialize = function initialize() {
  repository.createTable().then(function (tasks) {
    console.log('doing stuff');
    repository.seedInitialData();
  });
  (0, _bluebird.resolve)('success') //     .then(() => initializeServer())
  ["catch"](function (err) {
    console.log('Error:', err);
  });
};

exports.initialize = initialize;

var initializeServer = function initializeServer() {
  app.get("/api/:id", function (req, res) {
    repository.getById(req.params.id, function (err, data) {
      if (err) {
        res.status(404).json({
          "error": "vitamin not found"
        });
      }

      res.json({
        "id": data.id,
        "name": data.name,
        "description": data.description
      });
    });
  });
  app.listen(PORT, function () {
    console.log("Example app listening at http://localhost:".concat(PORT));
  });
};