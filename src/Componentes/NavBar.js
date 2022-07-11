import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary px-4">
        <div className="container-fluid">
          <Link to="/">
            <navlink className="navbar-brand">
              <img
                src="https://images.vexels.com/media/users/3/214981/isolated/preview/7b8e4754b7104c5612588d7970273f36-icono-de-trazo-de-tienda.png"
                alt="imagen tienda de ropa"
                width="40"
                height="40"
                className="d-inline-block align-text-top"
              />
            </navlink>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/category/smartphones">
                  <navlink className="nav-link">SmartPhone's</navlink>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/notebooks">
                  <navlink className="nav-link">Notebook's</navlink>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/smartTv">
                  <navlink className="nav-link">Smart TV's</navlink>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <span>
          <Link to="/cart">
            <navlink className="nav-link">
              <CartWidget />
            </navlink>
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
