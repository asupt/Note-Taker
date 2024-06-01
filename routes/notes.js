const app = require('express').Router();

// GET Route for retrieving all the feedback
app.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

module.exports = app;
