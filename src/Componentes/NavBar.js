import logo from "./img/logo.svg";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-primary px-4">
      <div class="container-fluid">
        <img
          src={logo}
          alt=""
          width="40"
          height="40"
          class="d-inline-block align-text-top"
        />
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                % Off
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                SmartPhone's
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Notebook's
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Smart TV's
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
