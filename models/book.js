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
// const testBook = new Book({
//     title: 'test_book_1',
//     year: 2022
// });
// testBook
//     .save()
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => {
//         console.log('errlor :', err)
//     });
// EXPORTING MODULE
module.exports = Book;