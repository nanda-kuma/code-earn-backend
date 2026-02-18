import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

function CodeCompiler() {
  const [code, setCode] = useState("// Write JS code here");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    try {
      const res = await axios.post("https://your-render-backend-url/run", {
        code: code,
        language: "javascript"
      });

      setOutput(res.data.output);
    } catch (err) {
      setOutput("Error running code");
    }
  };

  return (
    <div>
      <h2>💻 Compiler</h2>

      <Editor
        height="300px"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value)}
      />

      <button onClick={runCode}>Run</button>

      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
}

export default CodeCompiler;
