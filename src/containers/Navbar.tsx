import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "../styles/Navbar.css";

export default function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="main-nav">
      <h3 className="nav-title">Where in the world?</h3>
      <button className="btn-mode" onClick={toggleTheme}>
        {theme === "light" ? (
          <BsFillMoonFill className="btn-mode-icon" />
        ) : (
          <BsFillSunFill className="btn-mode-icon" />
        )}
        <h5 className="nav-mode">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </h5>
      </button>
    </nav>
  );
}
