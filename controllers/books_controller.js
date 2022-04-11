// DEPENDENCIES
const express = require('express');
const books = express.Router();
const Book = require('../models/book.js');

    // SAMPLE SEED DATA
// books.get('/seed', (req, res) => {
//     Book.insertMany([{
//         "title": "The Shinobi Initiative",
//         "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
//         "year": 2014,
//         "quantity": 10,
//         "imageURL": "https://imgur.com/LEqsHy5.jpeg"
//       },
//       {
//         "title": "Tess the Wonder Dog",
//         "description": "The tale of a dog who gets super powers",
//         "year": 2007,
//         "quantity": 3,
//         "imageURL": "https://imgur.com/cEJmGKV.jpg"
//       },
//       {
//         "title": "The Annals of Arathrae",
//         "description": "This anthology tells the intertwined narratives of six fairy tales.",
//         "year": 2016,
//         "quantity": 8,
//         "imageURL": "https://imgur.com/VGyUtrr.jpeg"
//       },
//       {
//         "title": "W∀RP",
//         "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
//         "year": 2010,
//         "quantity": 4,
//         "imageURL": "https://imgur.com/qYLKtPH.jpeg"
//       }])
//         .then(res.status(200).json({
//             message: 'Seed successful'
//         }))
//         .catch(res.status(400).json({
//             message: 'Seed unsuccessful'
//         }))
// })

// ROUTE HANDLERS
// GET ALL BOOKS FOR ROOT
const findAllBooks = (req, res)=> {
    Book.find({})
        .then(foundBooks => {
            res.json(foundBooks);
        });
}
// GET SINGLE BOOK FOR :ID
const findBook = (req, res)=> {
    let id = Number(req.params.id);
    Book.findOne({ id: id })
        .then(foundBook => {
            res.json(foundBook);
        });
};
// END OF ROUTE HANDLERS




// ROUTES
books.get('/', findAllBooks);

books.get('/:id', findBook);
// END OF ROUTES

module.exports = books;