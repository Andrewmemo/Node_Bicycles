const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(
      "mongodb://bicycles-server:TCyPIRRwTB5x3anHvAAz28Uercmh8WAJ5MUUbxogirDCtb7lJwBsvLXOZ2eUVhwUEApgdHv7WaWZXR8y6nV98Q==@bicycles-server.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@bicycles-server@",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connected to MongoDB"));
};
