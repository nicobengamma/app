import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary px-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://images.vexels.com/media/users/3/214981/isolated/preview/7b8e4754b7104c5612588d7970273f36-icono-de-trazo-de-tienda.png"
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
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
                  <a className="nav-link">SmartPhone's</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/notebooks">
                  <a className="nav-link">Notebook's</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/smartTv">
                  <a className="nav-link">Smart TV's</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart">
                  <a className="nav-link">Carro</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
