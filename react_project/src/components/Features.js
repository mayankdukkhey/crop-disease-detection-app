import React from "react";
import "./Features.css";

function Features() {
    const features = [
        {
            title: "Disease Detection",
            img: "https://i.ytimg.com/vi/90SY5wAZdbc/maxresdefault.jpg",
            description: "Upload crop images to identify diseases in real-time using AI technology.",
        },
        {
            title: "Fertilizer Recommendations",
            img: "https://eos.com/wp-content/uploads/2021/12/false-smut-in-rice.jpg.webp",
            description: "Receive tailored fertilizer suggestions for specific crops to boost productivity.",
        },
        {
            title: "Chatbot",
            img: "https://i.ytimg.com/vi/NOxgomDf5yg/hq720.jpg",
            description: "Get instant crop-related assistance through our AI-powered chatbot.",
        },
        {
            title: "Expert Blogs",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXUp_BSxaGUxhtfPytyYwhAN9hoaXalWVDg&s",
            description: "Read expert-written tips and guides to improve crop health and manage diseases.",
        },
    ];

    return (
        <section id="features">
            <h2>Features</h2>
            <div className="feature-grid">
                {features.map((feature, index) => (
                    <div className="feature" key={index}>
                        <h3>{feature.title}</h3>
                        <img src={feature.img} alt={feature.title} />
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
