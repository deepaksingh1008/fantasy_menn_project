import React from 'react'
import Hero from "../assets/hero.png";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    return (
        <main className="home">
            <div className="home-content">
                <h1>Welcome to Fantasy Game</h1>
                <p>
                    Create your own fantasy team and compete with others to win exciting
                    rewards.
                </p>
                <button className="btn-create" onClick={() => navigate('/create-team')}>Create Your Team</button>
            </div>
            <div className="home-image">
                <img src={Hero} alt="Fantasy Game" />
            </div>
        </main>
    )
}

export default Home