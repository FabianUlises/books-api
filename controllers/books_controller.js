// DEPENDENCIES
const express = require('express');
const books = express.Router();
const books_Route = require('./../routes/bookRoutes.js');

// ROUTES
// /
books
    .route('/')
    .get(books_Route.findAllBooks)
    .post(books_Route.createBook)
// :id
books
    .route('/:id')
    .get(books_Route.findBook)
    .patch(books_Route.updateBook)
    .delete(books_Route.deleteBook)
// END OF ROUTES







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




// books.get('/', findAllBooks);
// GET ID
// books.get('/:id', findBook);
// POST /
// books.post('/', createBook);
// PATCH id
// books.patch('/:id', updateBook);
// DELETE id
// books.delete('/:id', deleteBook);
// END OF ROUTES


// EXPORTING MODULE
module.exports = books;