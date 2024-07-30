import mail from "./images/sms.png";
import rate from "./images/rating1.png";
import award from "./images/award.png";
import tick from "./images/tick.png";

export default function Idea() {
  const headStyle = {
    color: "#344054",
    fontFamily: "Lufga-logo",
    fontSize: "50px",
  };
  const paraStyle = {
    fontFamily: "Lufga",
    fontSize: "15px",
  };
  return (
    <div class="container mt-5 text-center mb-5">
      <h1 style={headStyle}>
        Have an Awesome Project <br /> Idea?{" "}
        <span style={{ color: "#FD853A" }}>Let's Discuss</span>
      </h1>
      <div class="d-flex justify-content-center">
        <div
          class="input-group mb-3 p-2 w-50 rounded-5"
          style={{ border: "1px solid #E4E7EC" }}
        >
          <span
            class="input-group-text rounded-5 p-2"
            id="basic-addon1"
            style={{
              backgroundColor: "#FFEAD5",
              border: "none",
              width: "50px",
              height: "50px",
            }}
          >
            <img src={mail}></img>
          </span>
          <input
            type="text"
            class="form-control rounded-5"
            placeholder="Enter Email Address"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "none", color: "black" }}
          />
          <button
            type="button"
            class="btn rounded-5 py-2 px-4"
            style={{
              backgroundColor: "#FD853A",
              border: "none",
              color: "white",
              fontFamily: "Lufga",
            }}
          >
            Send
          </button>
        </div>
      </div>
      <div class="d-block mx-auto w-50">
        <div
          class="d-flex justify-content-around align-items-center"
          style={paraStyle}
        >
          <div class="d-flex align-items-center gap-1">
            <img src={rate}></img>
            <p class="m-0 p-0">4.9/5 Average Ratings</p>
          </div>
          <div class="d-flex align-items-center gap-1">
            <img src={award}></img>
            <p class="m-0 p-0">25+ Winnings Awards</p>
          </div>
          <div class="d-flex align-items-center gap-1">
            <img src={tick}></img>
            <p class="m-0 p-0">Certified Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
