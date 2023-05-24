import { useState, useEffect } from "react";

export default function useApi() {
  const [data, setData] = useState([]);
  const [api, setApi] = useState<string>(
    "https://restcountries.com/v3.1/independent?status=true&fields=name,capital,region,population,subregion,languages,currencies,borders"
  );

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [api]);

  console.log(data);

  return {
    data,
  };
}
//
