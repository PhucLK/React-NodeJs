// Set up mongoose connection
const mongoose = require('mongoose');
let url = 'mongodb+srv://dbPhuc:dbPhucPassword@react-deluo.mongodb.net/todo?retryWrites=true&w=majority';
//let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    //process.exit();
  });

  module.exports = mongoose;