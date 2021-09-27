"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VitaminRepository = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VitaminRepository = /*#__PURE__*/function () {
  function VitaminRepository(dao) {
    _classCallCheck(this, VitaminRepository);

    this.dao = dao;
  }

  _createClass(VitaminRepository, [{
    key: "createTable",
    value: function createTable() {
      var sql = "\n    CREATE TABLE IF NOT EXISTS vitamins (\n      id INTEGER PRIMARY KEY AUTOINCREMENT,\n      name TEXT,\n      description TEXT)";
      return this.dao.run(sql);
    }
  }, {
    key: "seedInitialData",
    value: function seedInitialData() {
      var sql = "\n    INSERT INTO vitamins(name, description) VALUES(?, ?)\n    ";
      var values = ['Vitamin A', 'One type comes from animal sources of food. It helps you see at night, make red blood cells, and fight off infections. The other type is in plant foods. It helps prevent damage to cells and an eye problem called age-related macular degeneration. (But too much vitamin A can hurt your liver.) Eat orange veggies and fruits like sweet potato and cantaloupe, spinach and other greens, dairy foods, and seafood such as shrimp and salmon.'];
      console.log('did we seed');
      return this.dao.run(sql, values);
    }
  }, {
    key: "getById",
    value: function getById(id) {
      return this.dao.get("SELECT * FROM vitamins WHERE id = ?", [id]);
    }
  }, {
    key: "create",
    value: function create(name, description) {
      return this.dao.run('INSERT INTO vitamins (name, description) VALUES (?, ?)', [name, description]);
    }
  }]);

  return VitaminRepository;
}();

exports.VitaminRepository = VitaminRepository;