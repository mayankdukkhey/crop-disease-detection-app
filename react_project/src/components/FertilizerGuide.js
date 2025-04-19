import React from "react";
import "./FertilizerGuide.css";

function FertilizerGuide() {
    return (
        <section id="fertilizer">
            <div className="fertilizer-header">
        <h2>Fertilizer Guide</h2>
        <p>Find the best fertilizer recommendations for your crop and soil type.</p>
    </div>
            <div className="fertilizer-content">
                <h3>Common Fertilizers and Their Uses</h3>
                <table className="fertilizer-table">
                    <thead>
                        <tr>
                            <th>Fertilizer</th>
                            <th>Primary Nutrient</th>
                            <th>Recommended For</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Urea</td>
                            <td>Nitrogen (N)</td>
                            <td>Leafy growth in crops like rice, wheat</td>
                        </tr>
                        <tr>
                            <td>Single Super Phosphate (SSP)</td>
                            <td>Phosphorus (P)</td>
                            <td>Root development, pulses, oilseeds</td>
                        </tr>
                        <tr>
                            <td>Muriate of Potash (MOP)</td>
                            <td>Potassium (K)</td>
                            <td>Fruit quality in crops like tomato, banana</td>
                        </tr>
                        <tr>
                            <td>Vermicompost</td>
                            <td>Organic Matter</td>
                            <td>All crops – improves soil health</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Tips for Fertilizer Usage</h3>
                <ul className="fertilizer-tips">
                    <li>Test your soil before applying any fertilizer.</li>
                    <li>Apply fertilizers at the right stage of crop growth.</li>
                    <li>Do not overuse chemical fertilizers – mix with organic options.</li>
                    <li>Use drip irrigation for better fertilizer efficiency in vegetables.</li>
                </ul>
            </div>
        </section>
    );
}

export default FertilizerGuide;
