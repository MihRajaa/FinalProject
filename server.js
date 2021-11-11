const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config({ path: "./config/.env" });
const user = require("./routes/user");
const todos = require("./routes/todos");

const app = express();

connectDB();

app.use(express.json());
app.use("/user", user);

app.use("/task", todos);

const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server running on port PORT ${PORT} ...`);
});
