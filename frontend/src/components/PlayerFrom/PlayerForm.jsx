// src/components/PlayerForm.jsx
import React, { useState } from 'react';
import './PlayerForm.css'; // Optional: styling for the form

const PlayerForm = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [point, setPoint] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a player object
        const newPlayer = {
            name,
            position,
            point: Number(point), // Ensure point is a number
        };

        // Send a POST request to create a new player
        let response = await fetch('https://fantasy-menn-project.vercel.app/api/v1/create-player', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPlayer),
        });
        //  console.log('response->', response);
        response = await response.json();
        console.log('response->', response);
        if (response.success) {
            alert('Player created successfully!');
            // Reset form fields
            setName('');
            setPosition('');
            setPoint('');
        } else {
            alert('Error creating player. Please try again.');
        }
    };

    return (
        <div style={{ height: '85vh' }}>
            <form className="player-form" onSubmit={handleSubmit}>
                <h2>Add New Player</h2>
                <div className="form-group">
                    <label htmlFor="name">Player Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input
                        type="text"
                        id="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="point">Points</label>
                    <input
                        type="number"
                        id="point"
                        value={point}
                        onChange={(e) => setPoint(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn-submit">
                    Add Player
                </button>
            </form>
        </div>
    );
};

export default PlayerForm;
