const express = require('express')

// import userControllers form controllers file.
const {home, createUser} = require("../controllers/userControllers.js")


// made router form using express.
const router = express.Router();  //you always remember (Router = 'R' is capital)

router.get('/' , home)
router.post('/createuser' , createUser)
module.exports = router