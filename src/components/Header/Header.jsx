import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <h1 className="header-logo">Against All Odds</h1>
            <h2 className="header-title">Masaya Fukai</h2>
            <nav className="header-nav">
                <ul className="header-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Passion</li>
                    <li>Strength</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <ul className="header-link-list">
                <li>Twitter</li>
                <li>Blog</li>
                <li>Qiita</li>
                <li>GitHub</li>
            </ul>
            <p className="scroll-line">
                <span>Scroll →</span>
            </p>
        </div>
    );
};

export default Header;