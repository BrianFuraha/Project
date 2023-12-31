import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL =
  "mongodb+srv://BrianFuraha:masharoy@cluster0.cq8srew.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3030;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log("Server Running on port: " + PORT))
  )
  .catch((error) => console.log(error.message));
