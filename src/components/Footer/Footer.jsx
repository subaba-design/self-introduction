import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer">
            <h1 className="footer-logo">Against All Odds</h1>
            <nav className="footer-nav">
                <ul className="footer-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Passion</li>
                    <li>Strength</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;