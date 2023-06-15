import { useEffect } from "react";
import "../styles/SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";

interface MyProps {
  searchValue: string;
  setSearchValue: () => void;
  inputRef: HTMLElement;
}

export default function SearchBar(props: MyProps) {
  return (
    <div className="main-search-bar">
      <AiOutlineSearch className="search-bar-icon" />
      <input
        type="text"
        maxLength="30"
        className="search-bar-input"
        placeholder="Search for a country..."
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        ref={props.inputRef}
      ></input>
    </div>
  );
}
