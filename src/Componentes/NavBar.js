import logo from "./img/logo.svg";

const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-primary px-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img
          src={logo}
          alt=""
          width="40"
          height="40"
          className="d-inline-block align-text-top"
        /></a>
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
              <a className="nav-link active" aria-current="page" href="#">
                % Off
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category/smartphones">
                SmartPhone's
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category/notebooks">
                Notebook's
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category/smartTv">
                Smart TV's
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
