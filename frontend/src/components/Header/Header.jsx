import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="logo">
                <h2 onClick={() => navigate('/')}>Fantasy App</h2>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create-team">Create Team</Link></li>
                    <li><Link to='/create-player'>Add Player</Link></li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;
