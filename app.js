
// handle all routs its depend you.

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");


// database connected
const connectToDb = require('./config/db.js')



// Express middleware.
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

// init calling to db
connectToDb()  //calling


// Import router.
const userRoutes = require('./routes/userRoutes.js')
app.use('/' , userRoutes)   // the all router is work inside the userRoutes file.





// we are not use import statement so we can use modules.
module.exports = app;    // this is  for modules.
// export default app    // this is for import 