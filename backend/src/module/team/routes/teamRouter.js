import express from "express";
import { teamController } from "../controller/teamController.js";
const router = express.Router();

router.post("/create-team", teamController.createTeam);
router.get("/team/:id", teamController.getTeam);

export default router;
