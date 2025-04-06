import React, { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

function Chatbot() {
    const [messages, setMessages] = useState([
        { text: "👋 Hello! I'm AgroBot. How can I help with your tomato crops today?", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const chatEndRef = useRef(null);

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages((prev) => [
                ...prev,
                { text: input.trim(), sender: "user" },
                { text: "🤖 I'm processing your query...", sender: "bot" } // Placeholder bot response
            ]);
            setInput("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSendMessage();
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <section id="chatbot">
            <div className="chat-header">
                <h3>💬 Chat with AgroBot</h3>
                <p>Your personal assistant for tomato crop care</p>
            </div>
            <div className="chat-container">
                <div className="chatbox">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`message ${msg.sender === "bot" ? "bot" : "user"}`}
                        >
                            {msg.text}
                        </div>
                    ))}
                    <div ref={chatEndRef} />
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </section>
    );
}

export default Chatbot;
