require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)
app.get('/', (req, res) => {
    res.send('good job')
})
// controller
app.use('/books', require('./routes/books_router'));


app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`)
})