import React from 'react';
import './Footer.css'; // Import the new CSS file

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white text-center py-3">
            <div className="container">
                <p>&copy; WEEK 1 SUBMISSION</p> {/* Change the text here */}
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
