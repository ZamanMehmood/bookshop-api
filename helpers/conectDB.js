// const mongoose = require("mongoose");
// const {MongoClient} = require('mongodb');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected`);
//   } catch (err) {
//     console.error(err);
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const db_connection = mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log("Connection Error", err);
  });

module.exports = db_connection;