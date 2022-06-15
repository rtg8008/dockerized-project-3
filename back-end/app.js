const express = require('express')
const app = express()
app.use(express.json()); // do not forget!!!

app.get('/', (req, res) => res.send('Hello World!'))


module.exports = app;

