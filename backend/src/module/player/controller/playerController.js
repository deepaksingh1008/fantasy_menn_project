import { playerModel } from "../model/PlayerModel.js";

export const playerController = {
  async createPlayer(req, res) {
    try {
      const { name, position, team } = req.body;
      if (!name) {
        return res
          .status(400)
          .json({ success: false, message: "Name is required" });
      }
      if (!position) {
        return res
          .status(400)
          .json({ success: false, message: "Position is required" });
      }
      if (!team) {
        return res
          .status(400)
          .json({ success: false, message: "Team is required" });
      }
      const player = new playerModel({ name, position, team });
      await player.save();
      res
        .status(201)
        .json({ success: true, message: "Player created successfully" });
    } catch (err) {
      console.log("error in create player api", err);
      res.status(500).send({ success: false, message: err });
    }
  },
  async getPlayers(req, res) {
    try {
      const players = await playerModel.find({});
      res
        .status(200)
        .json({ success: true, message: "player fetch successfully", players });
    } catch (err) {
      console.log("Error in get players api", err);
    }
  },
};
