require("dotenv").config({});
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const thoughtRoutes = require("./routes/thoughtRoutes.js");
const connectDB = require("./db/connectDB");
const { errorConverter, errorHandler } = require("./middlewares/error");
const notFound = require("./middlewares/not-found");

const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use(cors());
app.use(xss());

app.use("/api/thought", thoughtRoutes);

//error handling
app.use(notFound);
app.use(errorConverter);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    app.listen(PORT, console.log(`server is running on ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
