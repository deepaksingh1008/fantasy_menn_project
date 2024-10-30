import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./src/shared/config/dbConnection.js";
import playerRouter from "./src/module/player/routes/playerRoute.js";
import teamRouter from "./src/module/team/routes/teamRouter.js";
const app = express();
dotenv.config();

//middleware
app.use(express.json());
app.use(cors());

//routes

app.use("/api/v1/", playerRouter);
app.use("/api", teamRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on Port no ${port}`);
  dbConnection();
});
