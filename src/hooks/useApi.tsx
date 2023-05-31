import React, { useState, useEffect } from "react";

export default function useApi() {
  const [data, setData] = useState<Array<Object>>([]);
  const [api, setApi] = useState<string>(
    "https://restcountries.com/v3.1/independent?status=true"
  );

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [api]);

  console.log(data);

  const [selectedOption, setSelectedOption] = React.useState(null);
  const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  function handleChange(selected) {
    setSelectedOption(selected);
    selected
      ? setApi(`https://restcountries.com/v3.1/region/${selected.value}`)
      : setApi("https://restcountries.com/v3.1/independent?status=true");
    console.log(selected);
  }

  return {
    data,
    options,
    handleChange,
    selectedOption,
  };
}
//"https://restcountries.com/v3.1/independent?status=true&fields=name,capital,region,population,subregion,languages,currencies,borders,flag"
