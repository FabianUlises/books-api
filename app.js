// DEPENDENCIES
const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');

// CONFIG
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// CONNECTING MONGOOSE
mongoose.connect(process.env.MONGO_URI, ()=> console.log(`mongoose connect at: ${process.env.MONGO_URI}`));


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





// START OF ROUTES
// ROOT
app.get('/', root);

// CATCH ALL
app.get('*', catchAll);
// END OF ROUTES





// APP LISTENING
app.listen(PORT, ()=> {
    console.log('app listening');
});