import "../styles/Navbar.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <h3 className="nav-title">Where in the world?</h3>
      <button className="btn-mode">
        <BsFillMoonFill className="btn-mode-icon" />
        <h5 className="nav-mode">Dark Mode</h5>
      </button>
    </nav>
  );
}
