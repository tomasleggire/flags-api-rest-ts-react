import React, { useState, useEffect } from "react";

export default function useApi() {
  const [data, setData] = useState<Array<Object>>([]);
  const [filterData, setFilterData] = useState<Array<Object>>([]);
  const [api, setApi] = useState<string>(
    "https://restcountries.com/v3.1/independent?status=true"
  );
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data));
    setSearchValue("");
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

  return {
    data,
    options,
    handleChange,
    selectedOption,
    searchValue,
    setSearchValue,
    filterData,
  };
}
//"https://restcountries.com/v3.1/independent?status=true&fields=name,capital,region,population,subregion,languages,currencies,borders,flag"
