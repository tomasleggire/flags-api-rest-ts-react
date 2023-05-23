import "./App.css";
import useApi from "./hooks/useApi";

import Navbar from "./containers/Navbar";

function App() {
  const { data } = useApi();

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
