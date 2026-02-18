import TheoryBox from "./components/TheoryBox";
import CodeCompiler from "./components/CodeCompiler";
import AIChatBox from "./components/AIChatBox";

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.box}><TheoryBox /></div>
      <div style={styles.box}><CodeCompiler /></div>
      <div style={styles.box}><AIChatBox /></div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    height: "100vh",
    gap: "10px",
    padding: "10px"
  },
  box: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    overflow: "auto"
  }
};

export default App;
