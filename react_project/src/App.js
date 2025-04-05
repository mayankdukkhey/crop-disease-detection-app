import React from "react";
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import DiseaseDetection from "./components/DiseaseDetection";
import Features from "./components/Features";
import FertilizerGuide from "./components/FertilizerGuide";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

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
