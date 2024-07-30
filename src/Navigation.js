import logo from "./images/logo.png";

export default function Navigation() {
  const logoStyle = {
    fontFamily: "Lufga-logo",
    color: "white",
    fontSize: "20px",
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
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
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div class="d-flex justify-content-center gap-2">
                    <img src={logo} height="25"></img>
                    <a style={logoStyle}>JCREA</a>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
