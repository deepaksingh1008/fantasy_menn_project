import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  team: { type: String, required: true },
});

export const playerModel = mongoose.model("player", playerSchema);
