const initialize = (connection) => {
  connection.initializeDbConnection();
  connection.createData();
}

const close = (connection) => {
  connection.closeDbConnection();
}

export { initialize, close };
