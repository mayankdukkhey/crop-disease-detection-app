import React, { useRef, useState } from "react";
import classToCureMap from "../data/classToCureMap"; // adjust path if needed
import tomatoCures from "../data/tomatoCures"; // adjust path if needed
import "./DiseaseDetection.css";

function DiseaseDetection() {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [cure, setCure] = useState("");
    const [language, setLanguage] = useState("english");

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setPrediction(null);
            setCure("");
        }
    };

    const handleConfirmUpload = async () => {
        if (!selectedImage) return alert("Please select an image first!");

        const formData = new FormData();
        formData.append("image", selectedImage);

        try {
            const response = await fetch("http://localhost:5000/predict", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setPrediction(data);

            const readableKey = classToCureMap[data.predicted_class];
            const hindiCure = tomatoCures[readableKey]?.hindi || "कोई इलाज नहीं मिला।";
            const englishCure = tomatoCures[readableKey]?.english || "No cure found.";

            setCure(language === "hindi" ? hindiCure : englishCure);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setLanguage(newLang);

        if (prediction) {
            const readableKey = classToCureMap[prediction.predicted_class];
            const hindiCure = tomatoCures[readableKey]?.hindi || "कोई इलाज नहीं मिला।";
            const englishCure = tomatoCures[readableKey]?.english || "No cure found.";

            setCure(newLang === "hindi" ? hindiCure : englishCure);
        }
    };

    const handleSpeak = () => {
        if (!cure) return;
        const utterance = new SpeechSynthesisUtterance(cure);
        utterance.lang = language === "hindi" ? "hi-IN" : "en-US";
        speechSynthesis.speak(utterance);
    };

    return (
        <section id="disease-detection">
            <h2>Disease Detection</h2>
            <p>Upload an image of your crop, and AgroShield will analyze it to detect potential diseases.</p>

            <div className="upload-container">
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="custom-file-input"
                    style={{ display: "none" }}
                />

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
                    {selectedImage && (
                        <button className="confirm-btn" onClick={handleConfirmUpload}>
                            Confirm
                        </button>
                    )}
                    <button className="upload-btn" onClick={handleFileClick}>
                        Upload Image
                    </button>
                </div>
            </div>

            {prediction && (
                <div className="result-container">
                    <h3>Prediction:</h3>
                    <p><strong>Class:</strong> {prediction.predicted_class}</p>

                    {cure && (
                        <>
                            <h4>इलाज (Cure):</h4>
                            <p className="cure-text">{cure}</p>

                            <div style={{ display: "flex", gap: "10px", marginTop: "15px", flexWrap: "wrap" }}>
                                <select onChange={handleLanguageChange} value={language} className="upload-btn" style={{ backgroundColor: "#ffc107", color: "#000" }}>
                                    <option value="english">English</option>
                                    <option value="hindi">हिंदी</option>
                                </select>

                                <button className="upload-btn" style={{ backgroundColor: "#28a745", color: "#fff" }} onClick={handleSpeak}>
                                    Speak Cure 🔊
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </section>
    );
}

export default DiseaseDetection;
