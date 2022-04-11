// CONFIG
require('dotenv').config();
// DEPENDENCIES
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// CONNECTING MONGOOSE
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log(process.env.MONGO_URI));


// MIDDLEWARE
app.use(express.json());
app.use(cors());
// app.get('/products/:id', function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for all origins!'})
//   })


// START OF CONTROLLERS
// BOOKS CONTROLLER
const books_controller = require('./controllers/books_controller.js');
app.use('/books', books_controller);


module.exports = app;