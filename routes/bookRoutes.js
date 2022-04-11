const Book = require('../models/book.js');


// ROUTE HANDLERS
// GET ALL BOOKS FOR ROOT
exports.findAllBooks = (req, res)=> {
    Book.find({})
        .then(foundBooks => {
            res.status(200).json({
                status: 'success',
                data: foundBooks
            })
        })
}
// GET SINGLE BOOK FOR :ID
exports.findBook = (req, res)=> {
    let id = Number(req.params.id);
    Book.findOne({ id: id })
        .then(foundBook => {
            res.json(foundBook);
        });
};
// CREATE BOOK FOR /
exports.createBook = (req, res)=> {
    const newBook = req.body
    console.log(newBook)
    res.send('done')
}
// UPDATE BOOK FOR ID
exports.updateBook = (req, res)=> {
    res.send('PUT route reached');
}
// DEELTE BOOK FOR ID
exports.deleteBook = (req, res) => {
    res.send('DELETE route reached');
}
// END OF ROUTE HANDLERS