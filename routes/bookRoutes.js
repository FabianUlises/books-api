const { findByIdAndDelete } = require('../models/book.js');
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
        .catch(err=> console.log('err', err))
}


// GET SINGLE BOOK FOR :ID
exports.findBook = (req, res)=> {
    let id = Number(req.params.id);
    Book.findOne({ id: id })
        .then(foundBook => {
            res.json(foundBook);
        })
        .catch(err=> console.log('err', err))
};


// CREATE BOOK FOR /
exports.createBook = (req, res)=> {
    const newBook = req.body
    Book.create(newBook)
        .then(()=> {
            console.log(newBook)
            res.json({
                status: 'success',
                data: newBook
            })
        })
        .catch(err => {
            console.log('err', err)
        })
}


// UPDATE BOOK FOR ID
exports.updateBook = (req, res)=> {
    // res.send('update route reached')
    Book.findByIdAndUpdate(req.params.id, req.body,{new: true})
        .then(()=> {
            res.json({
                status: 'success',
                message: 'Item updated'
            })
        })
        .catch(err => {
            console.log('err', err)
        })
}
// DEELTE BOOK FOR ID
exports.deleteBook = (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(()=> {
            res.json({
                status: 'success',
                message: 'Item deleted'
            })
        })
        .catch(err => console.log('err', err))
}
// END OF ROUTE HANDLERS
