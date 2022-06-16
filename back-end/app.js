const express = require('express')
const app = express()
app.use(express.json()); // do not forget!!!

// TEST
app.get('/', (req, res) => res.status(200).send('Hello World!'))
// TEST
// CREATE
app.post('/equipment', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})
app.post('/mission', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})

// READ FUNCTIONS
app.get('/equipment', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})
app.get('/equipment/:id', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})
app.get('/equipment/category', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})
app.get('/equipment/category/subcategory', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})  
app.get('/mission', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})
app.get('/mission/:id', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})
// UPDATE FUNCTIONS
app.patch('/mission/:id', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})
// DELETE FUNCTIONS
app.delete('/mission/:id', (req, res) => {
  console.log('deleting mission at id: ', req.params.id);
  res.status(200).send('Hello World!');
})

module.exports = app;

