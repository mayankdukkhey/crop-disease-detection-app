import React from "react";
import "./About.css";

function About() {
    return (
        <section id="about">
            <h2>About AgroShield</h2>
            <p>
                AgroShield leverages advanced AI and Machine Learning technologies to assist
                farmers in diagnosing crop diseases, suggesting treatments, and providing insights on maintaining crop health.
            </p>
            <img
                src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/159143-fyoisazenw-1621239169.jpg"
                alt="Farmers in a field"
                className="responsive-img"
            />
        </section>
    );
}

export default About;
