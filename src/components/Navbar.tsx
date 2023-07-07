import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "../styles/Navbar.css";

interface MyProps {
  toggleTheme: React.MouseEventHandler<HTMLButtonElement>;
  theme: string;
}

export default function Navbar(props: MyProps) {
  return (
    <nav className="main-nav">
      <h3 className="nav-title">Where in the world???</h3>
      <button className="btn-mode" onClick={props.toggleTheme}>
        {props.theme === "light" ? (
          <BsFillMoonFill className="btn-mode-icon" />
        ) : (
          <BsFillSunFill className="btn-mode-icon" />
        )}
        <h5 className="nav-mode">
          {props.theme === "light" ? "Dark Mode" : "Light Mode"}
        </h5>
      </button>
    </nav>
  );
}
