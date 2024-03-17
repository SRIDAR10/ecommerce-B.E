const mongoose = require("mongoose");


function connectToDb() {
    mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection.on("connected", () => {
    console.log("Connection to MongoDB successful");
  });

  mongoose.connection.on("error", () => {
    console.log("An error occured");
  });
};

module.exports = { connectToDb };