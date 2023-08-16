const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile} = require('../helper/fsUtils');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/', (req, res) => {
  
});

// DELETE Route to erase any notes
notes.delete('/:id', (req, res) => {
   
});


module.exports = notes;

