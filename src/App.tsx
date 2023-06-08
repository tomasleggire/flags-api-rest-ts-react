import "./App.css";
import useApi from "./hooks/useApi";
import useToggleTheme from "./hooks/useToggleTheme";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterBy from "./components/FilterBy";
import CountryContainer from "./components/CountryContainer";
import CountryLayout from "./containers/CountryLayout";
import ReactLoading from "react-loading";

function App() {
  const {
    data,
    options,
    handleChange,
    selectedOption,
    searchValue,
    setSearchValue,
    filterData,
    loading,
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
      {loading && (
        <ReactLoading
          className="loading-img"
          type="bubbles"
          color="var(--black)"
        />
      )}
      <CountryLayout>
        {filterData.length === 0 && loading === false && searchValue != "" && (
          <h3 className="error-msj">
            No results for "<span>{searchValue}</span>""
          </h3>
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
