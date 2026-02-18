import { useState } from "react";
import axios from "axios";

function AIChatBox() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const askAI = async () => {
    const res = await axios.post("https://your-render-backend-url/ai", {
      question: question
    });

    setResponse(res.data.answer);
  };

  return (
    <div>
      <h2>🤖 AI Assistant</h2>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your doubt..."
      />

      <button onClick={askAI}>Ask</button>

      <p>{response}</p>
    </div>
  );
}

export default AIChatBox;
