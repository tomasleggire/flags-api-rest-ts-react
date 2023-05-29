import "../styles/SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <div className="main-search-bar">
      <AiOutlineSearch className="search-bar-icon" />
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search for a country..."
      ></input>
    </div>
  );
}
