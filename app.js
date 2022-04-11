// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');

// CONFIG
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// CONNECTING MONGOOSE
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log(process.env.MONGO_URI));



// MIDDLEWARE
app.use(express.json());






// ROUTE HANDLERS 
// ROOT
const root = (req, res)=> {
    res.send('Welcome!');
};
// CATCH ALL
const catchAll = (req, res)=> {
    res.status(404).send('404 Page not found');
};
// END OF ROUTE HANDLERS





// START OF ROUTES AND CONTROLLER
// BOOKS CONTROLLER
const books_controller = require('./controllers/books_controller.js');
app.use('/books', books_controller);
// ROOT
app.get('/', root);

// CATCH ALL
app.get('*', catchAll);
// END OF ROUTES





// APP LISTENING
app.listen(PORT, ()=> {
    console.log('app listening');
});