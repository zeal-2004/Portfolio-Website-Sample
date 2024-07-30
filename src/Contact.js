import logo from "./images/logo.png";
import soc from "./images/socials.png";
import send from "./images/filled.png";

export default function Contact() {
  const logoStyle = {
    fontFamily: "Lufga-logo",
    color: "white",
    fontSize: "20px",
  };
  return (
    <div
      style={{
        backgroundColor: "#272727",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
      class="p-5 mt-5"
    >
      <div class="row mb-5 justify-content-between">
        <div class="col-5">
          <h1 style={{ color: "white", fontFamily: "Lufga-logo" }}>
            Let's Connect there
          </h1>
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn rounded-5 py-2 px-4"
            style={{
              backgroundColor: "#FD853A",
              border: "none",
              color: "white",
              padding: "10px!important",
            }}
          >
            Hire Me ↗
          </button>
        </div>
      </div>
      <div
        style={{ borderBottom: "2px solid #475467", marginBottom: "50px" }}
      ></div>
      <div class="d-flex justify-content-around mb-4">
        <div class="w-50">
          <div>
            <div class="d-flex gap-2 mb-4">
              <img src={logo} height="25"></img>
              <a style={logoStyle}>JCREA</a>
            </div>
            <p style={{ color: "white", fontFamily: "Lufga" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>
          </div>
          <img src={soc}></img>
        </div>
        <div style={{ width: "max-content" }}>
          <p style={{ color: "#FD853A", fontFamily: "Lufga-logo" }}>
            Navigation
          </p>
          <div style={{ color: "white", fontFamily: "Lufga" }}>
            <p>Home</p>
            <p>About Us</p>
            <p>Service</p>
            <p>Resume</p>
            <p>Project</p>
          </div>
        </div>
        <div style={{ width: "max-content" }}>
          <p style={{ color: "#FD853A", fontFamily: "Lufga-logo" }}>Contact</p>
          <div style={{ color: "white", fontFamily: "Lufga" }}>
            <p>+91 7738443636</p>
            <p>Jaycrea36@gmail.com</p>
            <p>Portfolio-jcrea.com</p>
          </div>
        </div>
        <div style={{ width: "max-content" }}>
          <p style={{ color: "#FD853A", fontFamily: "Lufga-logo" }}>
            Get the latest information
          </p>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
              placeholder="Email Address"
            />
            <span
              class="input-group-text"
              style={{ backgroundColor: "#FD853A", border: "none" }}
            >
              <button style={{ border: "none", backgroundColor: "#FD853A" }}>
                <img src={send}></img>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ borderBottom: "2px solid #475467", marginBottom: "50px" }}
      ></div>
      <div
        style={{ color: "white", fontFamily: "Lufga" }}
        class="row justify-content-between"
      >
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
          <p class="m-0 p-0">Copyright© 2023 Jayesh. All Rights Reserved.</p>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12">
          <p class="m-0 p-0">User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
