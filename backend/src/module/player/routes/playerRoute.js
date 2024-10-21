import express from "express";
import { playerController } from "../controller/playerController.js";
const router = express.Router();

router.post("/create-player", playerController.createPlayer);
router.get("/get-player", playerController.getPlayers);

export default router;
