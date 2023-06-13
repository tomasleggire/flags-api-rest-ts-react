import React from "react";
import "../styles/DataCountry.css";

interface MyProps {
  title: string;
  info: string;
}

export default function DataCountry(props: MyProps) {
  return (
    <h6 className="texts-h6">
      {props.title}:
      <span className="texts-span">
        <span> </span>
        {props.info}
      </span>
    </h6>
  );
}
