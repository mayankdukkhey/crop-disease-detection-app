import React, { useState } from "react";
import "./Header.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
            <div className="navbar-container">
                <h1>AgroShield</h1>

                <div className={`nav-links ${isOpen ? "open" : ""}`}>
                    <a href="#about">About</a>
                    <a href="#features">Features</a>
                    <a href="#disease-detection">Disease Detection</a>
                    <a href="#fertilizer">Fertilizer Guide</a>
                    <a href="#chatbot">Chatbot</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
        </header>
    );
}

export default Header;
