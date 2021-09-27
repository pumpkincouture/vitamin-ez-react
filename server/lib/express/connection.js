"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeServer = void 0;

var initializeServer = function initializeServer(express) {
  app.get("/api/:id", function (req, res) {
    res.json({
      "id": req.params.id,
      "name": "Dumb",
      "description": "Another dumb thing"
    });
  });
  app.listen(PORT, function () {
    console.log("Example app listening at http://localhost:".concat(PORT));
  });
};

exports.initializeServer = initializeServer;