const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageUrl: String
})
const Book = mongoose.model('Book', booksSchema);

module.exports = Book;