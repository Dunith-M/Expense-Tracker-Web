const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Dunith:Dunith123@expensetracker.2pboflf.mongodb.net/ExpenseTracker",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on("error", (err) => console.log(err));

connection.on("connected", () =>
  console.log("MongoDB connection is successful 🆗💚")
);
