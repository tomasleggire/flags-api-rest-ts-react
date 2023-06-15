import "./App.css";
import useApi from "./hooks/useApi";
import useToggleTheme from "./hooks/useToggleTheme";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterBy from "./components/FilterBy";
import CountryContainer from "./components/CountryContainer";
import CountryLayout from "./containers/CountryLayout";
import ReactLoading from "react-loading";
import ModalCountry from "./containers/ModalCountry";
import useObserver from "./hooks/useObserver";
import ButtonToTop from "./components/ButtonToTop";

function App() {
  const {
    options,
    handleChange,
    selectedOption,
    searchValue,
    setSearchValue,
    filterData,
    loading,
    toggleModal,
    modalValue,
    focusCountry,
    changeFocusCountry,
    changeFocusCountryBorders,
    loadingModal,
  } = useApi();
  const { theme, toggleTheme } = useToggleTheme();

  const { isVisible, inputRef } = useObserver();

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <ModalCountry
        toggleModal={toggleModal}
        modalValue={modalValue}
        focusCountry={focusCountry}
        changeFocusCountryBorders={changeFocusCountryBorders}
        loadingModal={loadingModal}
      />

      <div className="main-div-bars">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          inputRef={inputRef}
        />
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
            id={`${country.maps.googleMaps} ${country.altSpellings[1]}`}
            toggleModal={toggleModal}
            changeFocusCountry={changeFocusCountry}
          />
        ))}
      </CountryLayout>

      <ButtonToTop isVisible={isVisible} />
    </div>
  );
}

export default App;
