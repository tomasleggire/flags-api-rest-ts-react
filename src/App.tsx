import "./App.css";
import useApi from "./hooks/useApi";
import useToggleTheme from "./hooks/useToggleTheme";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterBy from "./components/FilterBy";
import CountryContainer from "./components/CountryContainer";
import CountryLayout from "./containers/CountryLayout";

function App() {
  const {
    data,
    options,
    handleChange,
    selectedOption,
    searchValue,
    setSearchValue,
    filterData,
  } = useApi();
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="main-div-bars">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <FilterBy
          className="filter"
          options={options}
          handleChange={handleChange}
          selectedOption={selectedOption}
        />
      </div>

      <CountryLayout>
        {filterData.length === 0 ? (
          <h3 className="error-msj">
            No se encontraron resultados para "<span>{searchValue}"</span>
          </h3>
        ) : (
          ""
        )}
        {filterData.map((country) => (
          <CountryContainer
            countryData={country}
            key={country.maps.googleMaps + " " + country.altSpellings[1]}
          />
        ))}
      </CountryLayout>
    </div>
  );
}

export default App;
