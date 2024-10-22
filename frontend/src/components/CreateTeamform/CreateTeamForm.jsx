


import React, { useState, useEffect } from "react";
import PlayerList from "../PlayerList/PlayerList";
import "./CreateTeamForm.css";

const CreateTeamForm = () => {

    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [teamName, setTeamName] = useState("");
    const [totalPoints, setTotalPoints] = useState(0);

    // Fetch players from backend (replace with your API)
    useEffect(() => {
        const fetchPlayers = async () => {
            const response = await fetch("http://localhost:5000/api/v1/get-player"); // Example API call
            const data = await response.json();
            if (data.success)
                setPlayers(data.players);
            else {
                alert('Something Wrong')
            }
        };

        fetchPlayers();
    }, []);

    // Update total points whenever selected players change
    useEffect(() => {
        const points = selectedPlayers.reduce((sum, player) => sum + player.point, 0);
        setTotalPoints(points);
    }, [selectedPlayers]);

    const handlePlayerSelect = (selectedPlayers) => {
        setSelectedPlayers(selectedPlayers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedPlayers.length !== 11) {
            console.log("p->", selectedPlayers);
            alert("Please select exactly 11 players.");
            return;
        }

        const teamData = {
            name: teamName,
            players: selectedPlayers,
            totalPoints,
        };

        // Submit the team (replace with your API call)
        let response = await fetch("http://localhost:5000/api/create-team", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(teamData),
        });
        response = await response.json();
        if (response.success) {
            alert("Team created successfully!");
            setTeamName("");
            setSelectedPlayers([]);
        } else {
            alert("Error creating team.");
        }
    };

    return (
        <>

            <form className="create-team-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="teamName">Team Name</label>
                    <input
                        type="text"
                        id="teamName"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        required
                    />
                </div>

                <PlayerList players={players} onPlayerSelect={handlePlayerSelect} />

                <div className="selected-team">
                    <h2>Your Team</h2>
                    {selectedPlayers.length > 0 ? (
                        <ul>
                            {selectedPlayers.map((player) => (
                                <li key={player._id}>
                                    {player.name} - {player.role} - {player.point} points
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No players selected yet.</p>
                    )}
                    <h3>Total Points: {totalPoints}</h3>
                </div>

                <button type="submit" className="btn-submit">
                    Create Team
                </button>
            </form>
        </>
    );
};

export default CreateTeamForm;
