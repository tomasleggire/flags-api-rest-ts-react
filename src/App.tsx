import "./App.css";
import useApi from "./hooks/useApi";
import useToggleTheme from "./hooks/useToggleTheme";
import Navbar from "./containers/Navbar";

function App() {
  const { data } = useApi();
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}

export default App;
