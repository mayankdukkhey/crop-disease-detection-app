import React, { useRef, useState } from "react";
import classToCureMap from "../data/classToCureMap"; // adjust path if needed
import tomatoCures from "../data/tomatoCures"; // adjust path if needed
import "./DiseaseDetection.css";

function DiseaseDetection() {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [cure, setCure] = useState("");

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
            const cureInHindi = tomatoCures[readableKey] || "कोई इलाज नहीं मिला।";
            setCure(cureInHindi);
        } catch (error) {
            console.error("Error:", error);
        }
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
                <button className="upload-btn" onClick={handleFileClick}>
                    Upload Image
                </button>
                {selectedImage && (
                    <button className="confirm-btn" onClick={handleConfirmUpload}>
                        Confirm
                    </button>
                )}
            </div>

            {prediction && (
                <div className="result-container">
                    <h3>Prediction:</h3>
                    <p><strong>Class:</strong> {prediction.predicted_class}</p>
                    <p><strong>Confidence:</strong> {prediction.confidence}%</p>
                    {cure && (
                        <>
                            <h4>इलाज (Cure):</h4>
                            <p className="cure-text">{cure}</p>
                        </>
                    )}
                </div>
            )}
        </section>
    );
}

export default DiseaseDetection;
