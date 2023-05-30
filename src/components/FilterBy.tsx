import React, { useState } from "react";
import Select from "react-select";
import "../styles/FilterBy.css";

interface MyProps {
  options: Array<Object>;
  handleChange: () => void;
  selectedOption: Object;
}

export default function FilterBy(props: MyProps) {
  return (
    <div>
      <Select
        value={props.selectedOption}
        onChange={props.handleChange}
        options={props.options}
        placeholder="Filter by Region"
        isSearchable={false}
        isClearable
        styles={customStyles}
      />
    </div>
  );
}

const customStyles = {
  control: (base) => ({
    ...base,
    height: "40px",
    minHeight: "40px",
    borderRadius: "4px",
    borderColor: "transparent",
    boxShadow: "none",
    "&:hover": { borderColor: "transparent" }, // Elimina el efecto de hover
    "&:focus": { borderColor: "transparent" }, // Elimina el efecto de focus
    cursor: "pointer",
    backgroundColor: "var(--light-white)",
    boxShadow: "0px 0px 13px -7px rgba(0, 0, 0, 0.75)", // Agrega sombra al menú
    WebkitBoxShadow: "0px 0px 13px -7px rgba(0, 0, 0, 0.75)", // Agrega sombra al menú
    WebkitBoxShadow: "0px 0px 13px -7px rgba(0, 0, 0, 0.75)", // Agrega sombra al menú
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: "8px",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "var(--white)" : "var(--light-white)",
    cursor: "pointer",
    "&:active": { backgroundColor: "var(--white)" }, // Elimina el color celeste
    color: "var(--black)",
    fontFamily:
      '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--black)",
    fontFamily:
      '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "var(--light-white)",
    fontFamily:
      '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    boxShadow: "0px 0px 13px -7px rgba(0, 0, 0, 0.75)", // Agrega sombra al menú
    WebkitBoxShadow: "0px 0px 13px -7px rgba(0, 0, 0, 0.75)", // Agrega sombra al menú
    WebkitBoxShadow: "0px 0px 13px -7px rgba(0, 0, 0, 0.75)", // Agrega sombra al menú // Cambia el color de fondo de la lista que contiene las opciones
  }),
  placeholder: (base) => ({
    ...base,
    fontFamily:
      '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    color: "gray", // Cambia el color del texto del placeholder
  }),
};
