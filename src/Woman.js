import quote from "./images/quote.png";
import woman from "./images/woman.png";
import star from "./images/star.png";
import ring from "./images/ring2.png";

export default function () {
  const boxLeft = {
    width: "350px",
    fontFamily: "Lufga-logo",
    fontSize: "14px",
    color: "#344054",
  };

  const boxRight = {
    width: "350px",
    fontFamily: "Urbanist",
  };

  const womanImage = {
    position: "relative",
    top: "-100px",
    marginBottom: "-100px",
  };

  return (
    <div class="text-center">
      <div class="container d-flex justify-content-between align-items-start mt-5 text-center whole-section">
        <div style={boxLeft} class="mt-3 text-start box-left">
          <img src={quote} class="d-block woman-intro"></img>
          <p class="mt-4 text-left">
            Jenny’s Exceptional product design ensure our website’s success.{" "}
            <br /> Highly Recommended
          </p>
        </div>
        <div class="position-relative">
          <div class="woman-ring">
            <img
              src={woman}
              style={womanImage}
              class="intro-woman d-block"
            ></img>
            <img src={ring} height="650" class="overlay-ring"></img>
          </div>
          <div
            class="btn-group position-absolute glass-panel p-1 rounded-5"
            role="group"
            aria-label="Basic outlined example"
            style={{
              top: "400px",
              left: "320px",
              fontFamily: "Lufga",
            }}
          >
            <button
              type="button"
              class="btn btn-woman rounded-5"
              style={{
                color: "white",
                border: "1px solid rgba(255,255,255,0.4)!important;",
              }}
            >
              Portfolio
            </button>
            <button
              type="button"
              class="btn btn-woman rounded-5"
              style={{
                color: "white",
                border: "1px solid rgba(255,255,255,0.4)!important;",
              }}
            >
              Hire me
            </button>
          </div>
        </div>
        <div style={boxRight} class="text-center mt-3 box-right">
          <img src={star} height=""></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <div>
            <p
              class="p-0 mt-3 mb-0 text-center "
              style={{ fontWeight: "bold", fontSize: "50px" }}
            >
              10 Years
            </p>
            <p class="mt-0 text-center">Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
