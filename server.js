const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config({ path: "./config/.env" });
const user = require("./routes/user");

const app = express();

connectDB();

app.use(express.json());
app.use("/user", user);

const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server running on port PORT ${PORT} ...`);
});
