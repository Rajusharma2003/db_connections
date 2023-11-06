
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





const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient('mongodb://localhost:27017');

client.connect(async (err, db) => {
  if (err) {
    console.log(err);
    return;
  }

  const collection = db.collection('users');

  const document = { email: 'example@email.com' };

  const result = await collection.insertOne(document);

  if (result.insertedCount === 1) {
    console.log('Document inserted successfully!');
  } else {
    console.log('Error inserting document.');
  }

  client.close();
});






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
