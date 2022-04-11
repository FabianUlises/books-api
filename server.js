const app = require('./app');
const PORT = process.env.PORT;

// ROUTE HANDLERS 
// ROOT
const root = (req, res)=> {
    res.status(200).send('Welcome to the books api!');
};
// CATCH ALL
const catchAll = (req, res)=> {
    res.status(404).send('404 Page not found');
};
// END OF ROUTE HANDLERS



// ROOT
app.get('/', root);
// CATCH ALL
app.get('*', catchAll);

// APP LISTENING
app.listen(PORT, ()=> {
    console.log('app listening');
});