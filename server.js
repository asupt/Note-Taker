const express = require('express');
const api = require('./routes/index.js');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile('./public/index.js')
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile('.public/notes.js')
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

module.exports = router;
