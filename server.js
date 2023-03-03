// Dependencies
require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
// Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then((conn) => {
        console.log(`connected to db: ${process.env.MONGO_URI}`);
    })
    .catch((err) => {
        console.log('Unable to connect to mongoose', err);
    })
// Server on
app.listen(process.env.PORT, () => {
    console.log("Server is running.");
});
// const connect = async () => {
//     try {
//         // Connecting to mongoose
//         mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             UseUnifiedTopology: true
//         });
//         // Test console log
//         console.log(`mongoose connected to db: ${process.env.MONGO_URI}`);
//     } catch(err) {
//         // Test console log
//         console.log(err, 'Mongoose connection error');
//     }
// }
// connect();