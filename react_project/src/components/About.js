import React from "react";
import "./About.css";

function About() {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-text">
                    <h2>About AgroShield</h2>
                    <p>
                        <strong>AgroShield</strong> is an innovative platform that harnesses the power of Artificial Intelligence and Machine Learning to revolutionize the way farmers manage crop health. We offer a seamless and intuitive solution that detects diseases in crops and suggests the best treatments in real-time.
                    </p>
                    <p>
                        Whether you're dealing with pests, fungal infections, or nutrient deficiencies, AgroShield equips you with the tools and knowledge to make informed decisions—maximizing productivity and ensuring sustainability.
                    </p>
                    <p>
                        Our mission is to bridge the gap between technology and traditional farming. With features like crop disease detection, fertilizer guides, weather tips, and chatbot support, AgroShield becomes your digital farming assistant.
                    </p>
                </div>
                <div className="about-image">
                    <img
                        src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/159143-fyoisazenw-1621239169.jpg"
                        alt="Farmers in a field"
                        className="responsive-img"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
