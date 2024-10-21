import { teamModel } from "../model/teamModel.js";

export const teamController = {
  async createTeam(req, res) {
    const { name, players } = req.body;
    try {
      if (!name) {
        return res
          .status(500)
          .send({ success: false, message: "Name is required" });
      }
      if (!players) {
        return res
          .status(500)
          .send({ success: false, message: "Players is required" });
      }
      const team = await teamModel.create({ name, players });
      return res
        .status(201)
        .send({ success: true, message: "team is created " });
    } catch (err) {
      console.log("Error in create team api", err);
      res
        .status(500)
        .send({ success: false, message: "Internal Server Error" });
    }
  },
  async getTeam(req, res) {
    try {
      const team = await Team.findById(req.params.id).populate("players");
      if (!team) {
        return res
          .status(404)
          .send({ success: false, message: "Team not found" });
      }
      res
        .status(200)
        .send({ success: true, message: "team fetch successfully", team });
    } catch (err) {
      console.log("Error in get team api", err);
      return res.send({ success: false, message: err });
    }
  },
};
