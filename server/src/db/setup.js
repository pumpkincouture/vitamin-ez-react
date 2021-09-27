// import { initialize as initializeDb } from "./connection";
import { resolve } from "bluebird";
import { Dao } from "./dao";
// import { initialize, close } from "./connection";
import { VitaminRepository } from "./vitaminRepository";

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const dao = new Dao();
dao.initializeDbConnection();
// initialize(db);

const repository = new VitaminRepository(dao);

const initialize = () => {
  repository.createTable()
    .then((tasks) => {
      console.log('doing stuff')
      repository.seedInitialData()
    })
    resolve('success')
//     .then(() => initializeServer())
    .catch((err) => {
      console.log('Error:', err)
    })
}

const initializeServer = () => {
  app.get("/api/:id", (req, res) => {
    repository.getById(req.params.id, (err, data) => {
      if(err) {
	res.status(404).json({"error": "vitamin not found"});
      }
      res.json({
        "id": data.id,
        "name": data.name,
        "description": data.description
      });
    });
  });

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  });
}

export { initialize };