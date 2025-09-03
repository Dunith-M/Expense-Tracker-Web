const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();
const port = 5000;
app.use(express.json());
const userRoutes = require("./routes/usersRoutes");

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} ✅🚀`);
});
