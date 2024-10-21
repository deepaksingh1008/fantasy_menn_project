import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./src/shared/config/dbConnection.js";
const app = express();
dotenv.config();

//middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on Port no ${port}`);
  dbConnection();
});
