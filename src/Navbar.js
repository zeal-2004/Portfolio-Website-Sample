import logo from "./images/logo.png";

export default function Navbar() {
  function logo_change() {
    document.querySelector(".logo-text").innerHTML =
      "<p class='top-text m-0 p-0'>Made By</p><p class='bot-text m-0 p-0'>Jayesh Patil</p>";
  }
  function logo_default() {
    document.querySelector(".logo-text").innerHTML =
      "<div class='logo-text'>JCREA</div>";
    console.log("Mouse Left Logged");
  }
  return (
    <div>
      <nav class="navbar navbar-custom navbar-expand-lg w-75 d-block mx-auto my-4 py-2 rounded-pill">
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
            <ul class="navbar-nav w-100 justify-content-center">
              <div class="row justify-content-between w-100 text-center align-items-center">
                <div class="col">
                  <li class="nav-item">
                    <a
                      class="nav-link active rounded-5 py-3"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                </div>
                <div class="col">
                  <li class="nav-item">
                    <a class="nav-link rounded-5 py-3" href="#">
                      About
                    </a>
                  </li>
                </div>
                <div class="col">
                  <li class="nav-item">
                    <a class="nav-link rounded-5 py-3" href="#">
                      Service
                    </a>
                  </li>
                </div>
                <div class="col">
                  <li class="nav-item">
                    <a
                      class=" d-flex align-items-start gap-2 justify-content-center logo"
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontFamily: "Lufga-logo",
                      }}
                    >
                      <img
                        src={logo}
                        height="30"
                        class=" align-self-center"
                      ></img>
                      <div
                        class="p-0 m-0 align-self-center logo-text"
                        onMouseEnter={logo_change}
                        onMouseLeave={logo_default}
                      >
                        JCREA
                      </div>
                    </a>
                  </li>
                </div>
                <div class="col">
                  <li class="nav-item">
                    <a class="nav-link rounded-5 py-3" href="#">
                      Resume
                    </a>
                  </li>
                </div>
                <div class="col">
                  <li class="nav-item">
                    <a class="nav-link rounded-5 py-3" href="#">
                      Project
                    </a>
                  </li>
                </div>
                <div class="col">
                  <li class="nav-item">
                    <a class="nav-link rounded-5 py-3" href="#">
                      Contact
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
