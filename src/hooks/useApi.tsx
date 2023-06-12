import React, { useState, useEffect } from "react";

export default function useApi() {
  const [data, setData] = useState<Array<Object>>([]);
  const [filterData, setFilterData] = useState<Array<Object>>([]);
  const [api, setApi] = useState<string>(
    "https://restcountries.com/v3.1/independent?status=true"
  );
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [modalValue, setModalValue] = useState<boolean>(false);
  const [focusCountry, setFocusCountry] = useState<Object | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(api);
      const data = await res.json();
      setData(data);
      setSearchValue("");
      setLoading(false);
    };
    fetchData();
  }, [api]);

  //console.log(filterData);

  const [selectedOption, setSelectedOption] = React.useState(null);
  const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  function handleChange(selected: string | null): void {
    setSelectedOption(selected);
    selected
      ? setApi(`https://restcountries.com/v3.1/region/${selected.value}`)
      : setApi("https://restcountries.com/v3.1/independent?status=true");
    console.log(selected);
    setSearchValue("");
  }

  const filtrarPorNombre = (array, filtro) => {
    return array.filter((obj) =>
      obj.name.common.toLowerCase().startsWith(filtro.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchValue) {
      let newData = filtrarPorNombre(data, searchValue);
      setFilterData(newData);
    } else {
      setFilterData(data);
    }
  }, [searchValue]);

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const toggleModal = (): void => {
    setModalValue(!modalValue);
  };

  const changeFocusCountry = (id): void => {
    const res = filterData.filter(
      (country) =>
        country.maps.googleMaps + " " + country.altSpellings[1] === id
    );
    setFocusCountry(res[0]);
    console.log(res[0]);
  };

  return {
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
  };
}
//"https://restcountries.com/v3.1/independent?status=true&fields=name,capital,region,population,subregion,languages,currencies,borders,flag"
