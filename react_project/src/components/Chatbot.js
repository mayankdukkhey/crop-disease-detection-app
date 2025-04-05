import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you with your crops today?", sender: "bot" },
    ]);
    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput(""); // Clear input field
        }
    };

    return (
        <section id="chatbot">
            <h2>Chat with AgroBot</h2>
            <div id="chat-container">
                <div id="chatbox" className="chatbox">
                    {messages.map((message, index) => (
                        <p
                            key={index}
                            className={message.sender === "bot" ? "bot-message" : "user-message"}
                        >
                            {message.text}
                        </p>
                    ))}
                </div>
                <input
                    type="text"
                    id="user-input"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button id="send-message" onClick={handleSendMessage}>
                    Send
                </button>
            </div>
        </section>
    );
}

export default Chatbot;
