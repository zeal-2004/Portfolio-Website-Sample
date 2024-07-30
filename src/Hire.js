import woman from "./images/hire.png";
import ring from "./images/ring1.png";

export default function Hire() {
  const headStyle = {
    color: "#344054",
    fontFamily: "Lufga-logo",
  };
  const background = {
    backgroundColor: "#F2F4F7",
  };
  const paraStyle = {
    color: "#98A2B3",
    fontFamily: "Lufga",
    width: "375px",
  };
  return (
    <div
      class="mt-5 d-flex justify-content-around align-items-center rounded-5 p-5"
      style={background}
    >
      <div class="position-relative box-class">
        <img src={woman} height="500" class="hire-woman d-block"></img>
        <img src={ring} height="510" class="overlay-woman"></img>
      </div>
      <div class="text-start w-50">
        <h1 style={headStyle} class="mb-5">
          Why <span style={{ color: "#FD853A" }}>Hire Me?</span>
        </h1>
        <p style={paraStyle} class="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales{" "}
        </p>
        <div class="d-flex justify-content-between w-50 mb-5">
          <div>
            <h1 style={{ color: "#1D2939", fontFamily: "Lufga-logo" }}>450+</h1>
            <p style={{ color: "#667085", fontfamily: "Lufga" }}>
              Project Completed
            </p>
          </div>
          <div>
            <h1 style={{ color: "#1D2939", fontFamily: "Lufga-logo" }}>450+</h1>
            <p style={{ color: "#667085", fontfamily: "Lufga" }}>
              Project Completed
            </p>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-outline-dark py-3 px-5 rounded-4"
          style={{
            color: "#151515",
            fontFamily: "Lufga-logo",
            fontSize: "25px",
          }}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}
