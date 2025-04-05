import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import DiseaseDetection from "./components/DiseaseDetection";
import FertilizerGuide from "./components/FertilizerGuide";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import "./App.css";

function App() {
    return (
        <div>
            <Header />
            <About />
            <Features />
            <DiseaseDetection />
            <FertilizerGuide />
            <Blog />
            <Gallery />
            <Chatbot />
            <Contact />
        </div>
    );
}

export default App;
