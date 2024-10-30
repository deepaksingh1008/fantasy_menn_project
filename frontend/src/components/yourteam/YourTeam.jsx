import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './yourTeam.css';
const TeamDisplay = () => {
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    const { teamId } = useParams();
    console.log(teamId)
    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await fetch(`https://fantasy-menn-project.vercel.app/api/team/${teamId}`);
                const data = await response.json();
                console.log("Data=>", data);
                if (data?.success) {
                    setTeam(data?.team);
                } else {
                    alert("Error fetching team details.");
                }
            } catch (error) {
                console.log("Error fetching team:", error);
            }
            setLoading(false);
        };

        fetchTeam();
    }, [teamId]);


    if (loading) return <p>Loading team details...</p>;

    if (!team) return <p>Team not found.</p>;

    return (
        <div className="team-display">
            <h2>{team.name}</h2>
            <h3>Total Points: {team.totalPoints}</h3>
            <ul>
                {team.players.map((player) => (
                    <li key={player._id}>
                        {player.name} - {player.position} - {player.point} points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamDisplay;
