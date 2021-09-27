"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.initialize = void 0;

var initialize = function initialize(connection) {
  connection.initializeDbConnection();
  connection.createData();
};

exports.initialize = initialize;

var close = function close(connection) {
  connection.closeDbConnection();
};

exports.close = close;