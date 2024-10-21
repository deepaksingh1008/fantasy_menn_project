import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  players: [{ type: mongoose.Types.ObjectId, ref: "player" }],
});

export const teamModel = mongoose.model("team", teamSchema);
