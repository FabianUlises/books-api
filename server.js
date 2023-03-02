// Dependencies
require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
// Mongoose
const connect = async () => {
    try {
        // Connecting to mongoose
        mongoose.connect(process.env.MONGO_URI);
    } catch(err) {
        console.log(err, 'mongoose connection error');
    }
}
connect();
// Server on
app.listen(process.env.PORT, () => {
    console.log("Server is running.");
});