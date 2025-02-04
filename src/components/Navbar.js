import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the new CSS file

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    COLLAB-WITH-DOCS
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/register' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        {user && (
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={handleLogout}>{user.username} Logout</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
