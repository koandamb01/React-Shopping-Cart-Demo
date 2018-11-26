const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/keys").mongoUrl;
const items = require("./routes/api/items");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB connect with mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use routes
app.use("/api/items", items);
// run server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
