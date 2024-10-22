import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamDetails = ({ teamId }) => {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        const response = await axios.get(`/api/teams/${teamId}`);
        setTeam(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeamDetails();
  }, [teamId]);

  if (!team) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{team.name}</h2>
      <h3>Players</h3>
      <ul>
        {team.players.map((player) => (
          <li key={player._id}>
            {player.name} - {player.position} ({player.points} points)
          </li>
        ))}
      </ul>
      <h3>Total Points: {team.totalPoints}</h3>
    </div>
  );
};

export default TeamDetails;
