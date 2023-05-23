import "./App.css";
import useApi from "./hooks/useApi";

function App() {
  const { data } = useApi();

  return (
    <div className="App">
      <h1>hola</h1>
    </div>
  );
}

export default App;
