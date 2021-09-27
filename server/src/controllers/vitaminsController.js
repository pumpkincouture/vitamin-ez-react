import { VitaminRepository } from '../db/vitaminRepository';
import { Dao } from '../db/dao';

const dao = new Dao();
const repository = new VitaminRepository(dao);

const findByVitaminId = (req, res) => {
  repository.getById(req.params.id, (err, data) => {
    if (err) {
      res.status(404).send({
        message: `Not found vitamin with id ${req.params.vitaminId}.`
      });
    } else {
       res.send({
         "id": data.id,
         "name": data.name,
         "description": data.description
       });
     }
  });
}

const createVitamin = (req, res) => {
  console.log('this is the req', req);
  console.log('this is the body', req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  repository.create(body.name, body.description, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Vitamin."

      });
    } else res.send(data);
  });
}

export { findByVitaminId, createVitamin };

