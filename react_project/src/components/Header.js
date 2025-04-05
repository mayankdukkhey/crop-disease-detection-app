import React from "react";
import "./Header.css";

function Header() {
    return (
        <header>
            <h1>AgroShield: Smart Crop Disease Detection</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#disease-detection">Disease Detection</a>
                <a href="#fertilizer">Fertilizer Guide</a>
                <a href="#blog">Crop Care Tips</a>
                <a href="#gallery">Gallery</a>
                <a href="#chatbot">Chatbot</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
