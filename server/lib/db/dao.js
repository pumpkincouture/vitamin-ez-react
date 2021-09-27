"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dao = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sqlite3 = require('sqlite3').verbose();

var Promise = require('bluebird');

var filePath = './vitamins.db';
var connection;

var Dao = /*#__PURE__*/function () {
  function Dao() {
    _classCallCheck(this, Dao);

    _defineProperty(this, "initializeDbConnection", function () {
      connection = new sqlite3.Database(filePath, function (err) {
        if (err) {
          return console.error(err.message);
        }

        console.log('Connected to the database');
      });
    });

    _defineProperty(this, "closeDbConnection", function () {
      connection.close(function (err) {
        if (err) {
          return console.error(err.message);
        }

        console.log('Closed the database connection');
      });
    });
  }

  _createClass(Dao, [{
    key: "run",
    value: function run(sql) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return new Promise(function (resolve, reject) {
        connection.run(sql, params, function (err) {
          if (err) {
            console.log('Error running sql ' + sql);
            console.log(err);
            reject(err);
          } else {
            resolve({
              id: this.lastID
            });
          }
        });
      });
    }
  }, {
    key: "get",
    value: function get(sql) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return new Promise(function (resolve, reject) {
        console.log('are we in the get');
        connection.get(sql, params, function (err, result) {
          if (err) {
            console.log('Error running sql: ' + sql);
            console.log(err);
            reject(err);
          } else {
            console.log('did we resolve', result);
            resolve(result);
          }
        });
      });
    }
  }]);

  return Dao;
}();

exports.Dao = Dao;