import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  players: [{ type: mongoose.Types.ObjectId, ref: "player" }],
  totalPoints: { type: Number, default: 0 },
});

export const teamModel = mongoose.model("team", teamSchema);
