import card1 from "./images/card1.png";
import card2 from "./images/card2.png";

export default function Services() {
  const head = {
    color: "white",
    fontFamily: "Lufga-logo",
    fontSize: "40px",
  };

  const para = {
    color: "white",
    fontFamily: "Lufga",
    fontSize: "18px",
    width: "560px",
  };

  const card = {
    color: "white",
    fontFamily: "Lufga",
    fontSize: "22px",
    width: "18rem",
    marginTop: "20px",
  };

  const carouselindicator = {
    backgroundColor: "#FD853A",
    borderRadius: "10px",
  };
  return (
    <div className="services p-5">
      <div class="d-flex justify-content-between align-items-center mt-4">
        <p style={head} class="">
          My <span style={{ color: "#FD853A" }}>Services</span>
        </p>
        <p style={para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales{" "}
        </p>
      </div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner mt-5">
          <div class="carousel-item active">
            <div class="row justify-content-center">
              <div class="col-3">
                <div
                  class="card glass-panel rounded-5 mb-5 position-relative"
                  style={card}
                >
                  <div class="card-body p-0">
                    <h5
                      class="card-title p-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      UI/ UX Design
                    </h5>
                  </div>
                  <img src={card1} class="card-img-top pt-4" />
                  <button
                    class="position-absolute btn-card"
                    style={{
                      top: "260px",
                      right: "3px",
                      backgroundColor: "#1D2939",
                      color: "white",
                      border: "none",
                      width: "80px",
                      height: "80px",
                      fontSize: "40px",
                      borderRadius: "50%",
                    }}
                  >
                    ↗
                  </button>
                </div>
              </div>
              <div class="col-3">
                <div
                  class="card glass-panel rounded-5 mb-5 position-relative"
                  style={card}
                >
                  <div class="card-body p-0">
                    <h5
                      class="card-title p-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      Web Design
                    </h5>
                  </div>
                  <img src={card2} class="card-img-top pt-4" />
                  <button
                    class="position-absolute btn-card"
                    style={{
                      top: "260px",
                      right: "3px",
                      backgroundColor: "#1D2939",
                      color: "white",
                      border: "none",
                      width: "80px",
                      height: "80px",
                      fontSize: "40px",
                      borderRadius: "50%",
                    }}
                  >
                    ↗
                  </button>
                </div>
              </div>
              <div class="col-3">
                <div
                  class="card glass-panel rounded-5 mb-5 position-relative"
                  style={card}
                >
                  <div class="card-body p-0">
                    <h5
                      class="card-title p-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      Landing Page
                    </h5>
                  </div>
                  <img src={card1} class="card-img-top pt-4" />
                  <button
                    class="position-absolute btn-card"
                    style={{
                      top: "260px",
                      right: "3px",
                      backgroundColor: "#1D2939",
                      color: "white",
                      border: "none",
                      width: "80px",
                      height: "80px",
                      fontSize: "40px",
                      borderRadius: "50%",
                    }}
                  >
                    ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-3">
                <div
                  class="card glass-panel rounded-5 mb-5 position-relative"
                  style={card}
                >
                  <div class="card-body p-0">
                    <h5
                      class="card-title p-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      UI/ UX Design
                    </h5>
                  </div>
                  <img src={card1} class="card-img-top pt-4" />
                  <button
                    class="position-absolute btn-card"
                    style={{
                      top: "260px",
                      right: "3px",
                      backgroundColor: "#1D2939",
                      color: "white",
                      border: "none",
                      width: "80px",
                      height: "80px",
                      fontSize: "40px",
                      borderRadius: "50%",
                    }}
                  >
                    ↗
                  </button>
                </div>
              </div>
              <div class="col-3">
                <div
                  class="card glass-panel rounded-5 mb-5 position-relative"
                  style={card}
                >
                  <div class="card-body p-0">
                    <h5
                      class="card-title p-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      Web Design
                    </h5>
                  </div>
                  <img src={card2} class="card-img-top pt-4" />
                  <button
                    class="position-absolute btn-card"
                    style={{
                      top: "260px",
                      right: "3px",
                      backgroundColor: "#1D2939",
                      color: "white",
                      border: "none",
                      width: "80px",
                      height: "80px",
                      fontSize: "40px",
                      borderRadius: "50%",
                    }}
                  >
                    ↗
                  </button>
                </div>
              </div>
              <div class="col-3">
                <div
                  class="card glass-panel rounded-5 mb-5 position-relative"
                  style={card}
                >
                  <div class="card-body p-0">
                    <h5
                      class="card-title p-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      Landing Page
                    </h5>
                  </div>
                  <img src={card1} class="card-img-top pt-4" />
                  <button
                    class="position-absolute btn-card"
                    style={{
                      top: "260px",
                      right: "3px",
                      backgroundColor: "#1D2939",
                      color: "white",
                      border: "none",
                      width: "80px",
                      height: "80px",
                      fontSize: "40px",
                      borderRadius: "50%",
                    }}
                  >
                    ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-3">
                <div
                  class="card glass-panel rounded-5 mb-5 position-relative"
                  style={card}
                >
                  <div class="card-body p-0">
                    <h5
                      class="card-title p-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      UI/ UX Design
                    </h5>
                  </div>
                  <img src={card1} class="card-img-top pt-4" />
                  <button
                    class="position-absolute btn-card"
                    style={{
                      top: "260px",
                      right: "3px",
                      backgroundColor: "#1D2939",
                      color: "white",
                      border: "none",
                      width: "80px",
                      height: "80px",
                      fontSize: "40px",
                      borderRadius: "50%",
                    }}
                  >
                    ↗
                  </button>
                </div>
              </div>
              <div class="col-3">
                <div
                  class="card glass-panel rounded-5 mb-5 position-relative"
                  style={card}
                >
                  <div class="card-body p-0">
                    <h5
                      class="card-title p-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      Web Design
                    </h5>
                  </div>
                  <img src={card2} class="card-img-top pt-4" />
                  <button
                    class="position-absolute btn-card"
                    style={{
                      top: "260px",
                      right: "3px",
                      backgroundColor: "#1D2939",
                      color: "white",
                      border: "none",
                      width: "80px",
                      height: "80px",
                      fontSize: "40px",
                      borderRadius: "50%",
                    }}
                  >
                    ↗
                  </button>
                </div>
              </div>
              <div class="col-3">
                <div
                  class="card glass-panel rounded-5 mb-5 position-relative"
                  style={card}
                >
                  <div class="card-body p-0">
                    <h5
                      class="card-title p-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      Landing Page
                    </h5>
                  </div>
                  <img src={card1} class="card-img-top pt-4" />
                  <button
                    class="position-absolute btn-card"
                    style={{
                      top: "260px",
                      right: "3px",
                      backgroundColor: "#1D2939",
                      color: "white",
                      border: "none",
                      width: "80px",
                      height: "80px",
                      fontSize: "40px",
                      borderRadius: "50%",
                    }}
                  >
                    ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
