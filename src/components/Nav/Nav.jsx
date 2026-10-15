import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link className="nav-link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/cart"}>
            Carrito
          </Link>
        </li>
      </ul>
    </nav>
  );
};
