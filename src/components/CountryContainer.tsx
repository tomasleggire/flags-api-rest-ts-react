import React from "react";
import "../styles/CountryContainer.css";

interface MyProps {
  countryData: Object;
}

export default function CountryContainer(props: MyProps) {
  return (
    <div className="country-main">
      <div className="country-flag-div">
        <img
          className="country-flag"
          src={props.countryData.flags.png}
          alt={props.countryData.flags.alt}
        />
      </div>
    </div>
  );
}
