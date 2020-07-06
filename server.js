const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// set up express server
const PORT = 3000;
const app = express();

// use morgan logger
app.use(logger("dev"));

// middleware - compression, parsing & serving static files
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// connect to mongodb database
mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// require routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});