const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const productRouter = require("./routes/product.router");

const app = express();

const start = async () => {
  await dbConnect();

  app.listen(4000, () => {
    console.log("server up and running");
  });
};

start();
