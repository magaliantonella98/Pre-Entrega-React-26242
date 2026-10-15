import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Nav } from "../Nav/Nav.jsx";
import "./Header.css";

export const Header = () => {
  return (
    <header className="nav-container">
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="Logo"></img>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
