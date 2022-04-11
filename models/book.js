// DEPENDENCIES
const mongoose = require('mongoose');
const { Schema } = mongoose;

// BOOKS SCHEMA
const booksSchema = new Schema ({
    title: { type: String, },
    description: String,
    year: Number,
    quantity: Number,
    imageUrl: String
});

// BOOKS MODEL
const Book = mongoose.model('Book', booksSchema);
// EXPORTING MODULE
module.exports = Book;