import pfp from "./images/pfp.png";
import star from "./images/star.png";
import quote from "./images/quotedown.png";

export default function Testimonials() {
  const headStyle = {
    color: "white",
    fontFamily: "Lufga-logo",
    fontSize: "50px",
  };
  const paraStyle = {
    color: "white",
    fontFamily: "Lufga",
  };
  const box = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
  };
  return (
    <div className="testimonials p-5 text-center">
      <h1 class="mt-2 mb-3 lh-base" style={headStyle}>
        Testimonials That <br />
        Speak To <span style={{ color: "#FD853A" }}>My Results</span>
      </h1>
      <p class="w-50 text-center mx-auto d-block" style={paraStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
        interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed lobortis orci elementum egestas lobortis.
      </p>
      <div
        id="carouselExampleAutoplaying2"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div>
              <div
                class="w-50 text-start p-3 rounded-4 mt-5 d-block mx-auto test-card"
                style={box}
              >
                <div class="d-flex justify-content-between">
                  <div class="d-flex gap-3 mb-4">
                    <img src={pfp}></img>
                    <div>
                      <h4
                        style={{ color: "white", fontFamily: "Lufga-logo" }}
                        class="m-0 p-0"
                      >
                        Jayesh Patil
                      </h4>
                      <p
                        style={{ color: "white", fontFamily: "Lufga" }}
                        class="m-0 p-0"
                      >
                        CEO, Lirante
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={quote} height="70px"></img>
                  </div>
                </div>
                <div class="d-flex align-items-center gap-3 mb-3">
                  <div>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                  </div>
                  <h4
                    style={{ color: "white", fontFamily: "Lufga-logo" }}
                    class="m-0 p-0"
                  >
                    5.0
                  </h4>
                </div>
                <p style={{ color: "white", fontFamily: "Lufga" }}>
                  consectetur adipiscing elit. Sed congue interdum ligula a
                  dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed lobortis orci elementum egestas lobortis.Sed
                  lobortis orci elementum egestas lobortis.Sed lobortis orci
                  elementum egestas lobortis.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div>
              <div
                class="w-50 text-start p-3 rounded-4 mt-5 d-block mx-auto test-card"
                style={box}
              >
                <div class="d-flex justify-content-between">
                  <div class="d-flex gap-3 mb-4">
                    <img src={pfp}></img>
                    <div>
                      <h4
                        style={{ color: "white", fontFamily: "Lufga-logo" }}
                        class="m-0 p-0"
                      >
                        Jayesh Patil
                      </h4>
                      <p
                        style={{ color: "white", fontFamily: "Lufga" }}
                        class="m-0 p-0"
                      >
                        CEO, Lirante
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={quote} height="70px"></img>
                  </div>
                </div>
                <div class="d-flex align-items-center gap-3 mb-3">
                  <div>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                  </div>
                  <h4
                    style={{ color: "white", fontFamily: "Lufga-logo" }}
                    class="m-0 p-0"
                  >
                    5.0
                  </h4>
                </div>
                <p style={{ color: "white", fontFamily: "Lufga" }}>
                  consectetur adipiscing elit. Sed congue interdum ligula a
                  dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed lobortis orci elementum egestas lobortis.Sed
                  lobortis orci elementum egestas lobortis.Sed lobortis orci
                  elementum egestas lobortis.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div>
              <div
                class="w-50 text-start p-3 rounded-4 mt-5 d-block mx-auto test-card"
                style={box}
              >
                <div class="d-flex justify-content-between">
                  <div class="d-flex gap-3 mb-4">
                    <img src={pfp}></img>
                    <div>
                      <h4
                        style={{ color: "white", fontFamily: "Lufga-logo" }}
                        class="m-0 p-0"
                      >
                        Jayesh Patil
                      </h4>
                      <p
                        style={{ color: "white", fontFamily: "Lufga" }}
                        class="m-0 p-0"
                      >
                        CEO, Lirante
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={quote} height="70px"></img>
                  </div>
                </div>
                <div class="d-flex align-items-center gap-3 mb-3">
                  <div>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                  </div>
                  <h4
                    style={{ color: "white", fontFamily: "Lufga-logo" }}
                    class="m-0 p-0"
                  >
                    5.0
                  </h4>
                </div>
                <p style={{ color: "white", fontFamily: "Lufga" }}>
                  consectetur adipiscing elit. Sed congue interdum ligula a
                  dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed lobortis orci elementum egestas lobortis.Sed
                  lobortis orci elementum egestas lobortis.Sed lobortis orci
                  elementum egestas lobortis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying2"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying2"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
