import React from 'react'
import Hero from "../assets/hero.png";
const Home = () => {
    return (
        <main className="home">
            <div className="home-content">
                <h1>Welcome to Fantasy Game</h1>
                <p>
                    Create your own fantasy team and compete with others to win exciting
                    rewards.
                </p>
                <button className="btn-create">Create Your Team</button>
            </div>
            <div className="home-image">
                <img src={Hero} alt="Fantasy Game" />
            </div>
        </main>
    )
}

export default Home