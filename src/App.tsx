import "./App.css";
import useApi from "./hooks/useApi";
import useToggleTheme from "./hooks/useToggleTheme";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterBy from "./components/FilterBy";
import CountryContainer from "./components/CountryContainer";
import CountryLayout from "./containers/CountryLayout";

function App() {
  const { data, options, handleChange, selectedOption } = useApi();
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="main-div-bars">
        <SearchBar />
        <FilterBy
          className="filter"
          options={options}
          handleChange={handleChange}
          selectedOption={selectedOption}
        />
      </div>

      <CountryLayout>
        {data.map((country) => (
          <CountryContainer>
            <h5>Hola</h5>
          </CountryContainer>
        ))}
      </CountryLayout>
    </div>
  );
}

export default App;
