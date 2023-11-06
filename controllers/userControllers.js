
const User = require('../models/userModel.js')

exports.home = (req, res) =>{
    res.send('This is a curd app demo');
}


//2. Lets save inside the database.
exports.createUser = async (req , res ) =>{

    try {

        // req handle
        const {name , email} = req.body

        // This is errow handeling for without name and email.
        // if(!name || !email){
        //     throw new Error("name and email is required");
        // }

        // error handeling for userExists.
        // const userExists = await User.findOne({email});

        // if(userExists !==null){
        //     throw new Error("User is already Exists")
        // }

      const user = await User.create({
          name,
          email
        })

        // res handle
        res.status(201).json({
            success : true,
            message : 'User created succesfully',
            user

        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}