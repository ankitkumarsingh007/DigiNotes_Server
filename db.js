const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://ankitsingh:huihui123@digi-notes.gkasz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to mongo succesfully");
  });
};

module.exports = connectToMongo;
