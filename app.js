// Dependencies
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const app = express();
const booksController = require('./controllers/booksController');
// Middleware
app.use(cors());
app.use(compression());
app.use(express.json());
// Routes
app.get('/', (req, res) => {
    res.send('hello world');
});
app.use('/api/v1/books', booksController);
app.get('*', (req, res) => {
    res.send('page not found');
});
module.exports = app;