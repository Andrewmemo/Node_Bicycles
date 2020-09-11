const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(
      "mongodb://server-bicycle:lLIL440lGJClK6I66z4s6QnO061TkAbyq7aVg9bUGdsnyBLNg3Kx3kTX4eP80HfMeo0nOfigo9DNvbxikULG6w==@server-bicycle.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@server-bicycle@",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connected to MongoDB"));
};
