"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVitamin = exports.findByVitaminId = void 0;

var _vitaminRepository = require("../db/vitaminRepository");

var _dao = require("../db/dao");

var dao = new _dao.Dao();
var repository = new _vitaminRepository.VitaminRepository(dao);

var findByVitaminId = function findByVitaminId(req, res) {
  repository.getById(req.params.id, function (err, data) {
    if (err) {
      res.status(404).send({
        message: "Not found vitamin with id ".concat(req.params.vitaminId, ".")
      });
    } else {
      res.send({
        "id": data.id,
        "name": data.name,
        "description": data.description
      });
    }
  });
};

exports.findByVitaminId = findByVitaminId;

var createVitamin = function createVitamin(req, res) {
  console.log('this is the req', req);
  console.log('this is the body', req.body);

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  repository.create(body.name, body.description, function (err, data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Vitamin."
      });
    } else res.send(data);
  });
};

exports.createVitamin = createVitamin;