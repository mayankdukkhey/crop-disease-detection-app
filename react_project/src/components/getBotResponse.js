import axios from "axios";
import qaData from "../data/qaData";

const OPENAI_API_KEY = ""; // ❗ For testing only. Do not expose in production!

export async function getBotResponse(userInput) {
    const input = userInput.toLowerCase();

    // Check static QnA first
    for (let item of qaData) {
        const question = item.question.toLowerCase();
        if (input.includes("early blight") && question.includes("early blight")) return item.answer;
        if (input.includes("leaf curl") && question.includes("leaf curl")) return item.answer;
        if (input.includes("fertilizer") && question.includes("fertilizer")) return item.answer;
        if (input.includes("water") && question.includes("water")) return item.answer;
        if (input.includes("prevent") && question.includes("prevent")) return item.answer;
        if (input.includes("season") && question.includes("season")) return item.answer;
    }

    // If no match found, ask OpenAI
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are AgroBot, a helpful assistant for tomato crop care." },
                    { role: "user", content: userInput }
                ],
                max_tokens: 100,
                temperature: 0.7,
            },
            {
                headers: {
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data.choices[0].message.content.trim();
    } catch (err) {
        console.error("OpenAI error:", err);
        return "❗ Sorry, I couldn’t understand that. Try rephrasing or ask something else about tomato crops.";
    }
}
