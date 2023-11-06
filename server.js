
// handle db connections

// the app Import from app.js file.
const app = require('./app.js');

// port
const PORT = process.env.PORT || 5000;


app.listen(PORT , () => {
    console.log(`server listening on port http://localhost:${PORT}`);
})
