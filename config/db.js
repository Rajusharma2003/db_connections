
const mongoose = require("mongoose")

const connectToDb = async () =>{

    mongoose.connect(process.env.MONGO_URI)

    .then((conn) =>{
        console.log(`connected to db : ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log('err.message');
        process.exit(1)
    })
}



module.exports = connectToDb






// const mongoose = require("mongoose");

// const connectToDb = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`Connected to db :: ${conn.connection.host}`);
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectToDb;
