// DEPENDENCIES
const express = require('express');
const books = express.Router();
const Book = require('../models/book.js');

books.get('/', (req, res)=> {
    res.send('Welcome to the books route')
})

module.exports = books;