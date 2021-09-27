const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird')
const filePath = './vitamins.db';

let connection;

class Dao {
  initializeDbConnection = () => {
    connection = new sqlite3.Database(filePath, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the database');
    });
  }
  
  closeDbConnection = () => {
    connection.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Closed the database connection');
    })
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      connection.run(sql, params, function (err) {
        if (err) {
          console.log('Error running sql ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve({ id: this.lastID })
        }
      })
    })
  }

  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      console.log('are we in the get');
      connection.get(sql, params, (err, result) => {
        if (err) {
          console.log('Error running sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          console.log('did we resolve', result);
          resolve(result)
        }
      })
    })
  }
}

export { Dao };