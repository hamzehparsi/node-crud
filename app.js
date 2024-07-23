import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import userRoute from "./routes/userRoute.js";

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGOURL;

const app = express();
app.use(bodyParser.json());

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("data base in connected");
    app.listen(PORT, () => {
      console.log(`server is running in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/user", userRoute);
