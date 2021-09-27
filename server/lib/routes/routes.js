"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(app) {
  var vitamins = require("../controllers/vitaminsController.js");

  app.get("/api/vitamins/:vitaminId", vitamins.findByVitaminId);
  app.post("/api/vitamins", vitamins.createVitamin);
};

exports["default"] = _default;