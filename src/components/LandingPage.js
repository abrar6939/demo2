import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the new CSS file

const LandingPage = () => {
    return (
        <div className="container text-center mt-5">
            <div className="hero-section">
                <h1 className="display-4 company-name">Welcome to COLLAB-WITH-DOCS</h1> {/* Change the name and add a class */}
                <h2 className="mt-4">Real-Time Collaboration Tool</h2>
                <p className="lead mt-3">
                    COLLAB-WITH-DOCS is your go-to platform for seamless real-time collaboration. 
                    Work together on documents, share ideas, and communicate effortlessly with your team.
                </p>
                <div className="mt-4">
                    <Link to="/register" className="btn btn-primary btn-lg me-3">Get Started</Link>
                </div>
            </div>
            <div className="jumbotron bg-light p-5">
                <h2 className="mt-4">Features</h2>
                <p className="lead mt-3">
                    Whether you're working on a team project or just need to organize your thoughts, 
                    COLLAB-WITH-DOCS offers all the features you need to stay productive.
                </p>
                <hr className="my-4" />
                <p>
                    Seamless real-time collaboration, document sharing, and more.
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
