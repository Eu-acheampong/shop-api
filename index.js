const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const authRouter = require("./routes/auth.router");
const productRouter = require("./routes/product.router");

const app = express();
app.use(express.json());

app.use("/auth", authRouter);
app.use("/products", productRouter);

const start = async () => {
  await dbConnect();

  app.listen(4000, () => {
    console.log("server up and running");
  });
};

start();
