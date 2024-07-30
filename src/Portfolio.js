import img from "./images/portimage.png";

export default function Portfolio() {
  const headStyle = {
    color: "#344054",
    fontFamily: "Lufga-logo",
    width: "400px",
  };
  const btnStyle1 = {
    color: "#FD853A",
    borderColor: "#FD853A",
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "20px",
    right: "20px",
  };
  const text1 = {
    fontFamily: "Lufga-logo",
    color: "#FFFAF5",
    position: "absolute",
    bottom: "0",
    fontSize: "40px",
    padding: "30px",
  };
  const btnStyle2 = {
    backgroundColor: "#F2F4F7",
    color: "black",
    borderRadius: "15px",
    padding: "5px 15px",
  };
  return (
    <div class="container">
      <div>
        <div class="d-flex justify-content-between my-5 align-items-center">
          <h1 style={headStyle}>
            Let's have a look at my{" "}
            <span style={{ color: "#FD853A" }}>Portfolio</span>
          </h1>
          <div>
            <button
              type="button"
              class="btn rounded-5 py-2 px-4"
              style={{
                backgroundColor: "#FD853A",
                border: "none",
                color: "white",
              }}
            >
              See All
            </button>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleAutoplaying3"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex justify-content-around align-items-center mb-5">
              <div class="contain">
                <img src={img} class="image-port d-block w-100"></img>
                <div style={text1} class="port-text">
                  Lirante
                </div>
                <div class="overlay text-start">
                  <p style={{ fontFamily: "Lufga-logo", fontSize: "40px" }}>
                    Lirante
                  </p>
                  <p style={{ fontFamily: "Lufga" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    congue interdum ligula a dignissim. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed lobortis orci
                    elementum egestas lobortis.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-5"
                    style={btnStyle1}
                  >
                    →
                  </button>
                </div>
              </div>
              <div class="contain">
                <img src={img} class="image-port d-block w-100"></img>
                <div style={text1} class="port-text">
                  Lirante
                </div>
                <div class="overlay text-start">
                  <p style={{ fontFamily: "Lufga-logo", fontSize: "40px" }}>
                    Lirante
                  </p>
                  <p style={{ fontFamily: "Lufga" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    congue interdum ligula a dignissim. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed lobortis orci
                    elementum egestas lobortis.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-5"
                    style={btnStyle1}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-around align-items-center mb-5">
              <div class="contain">
                <img src={img} class="image-port d-block w-100"></img>
                <div style={text1} class="port-text">
                  Lirante
                </div>
                <div class="overlay text-start">
                  <p style={{ fontFamily: "Lufga-logo", fontSize: "40px" }}>
                    Lirante
                  </p>
                  <p style={{ fontFamily: "Lufga" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    congue interdum ligula a dignissim. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed lobortis orci
                    elementum egestas lobortis.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-5"
                    style={btnStyle1}
                  >
                    →
                  </button>
                </div>
              </div>
              <div class="contain">
                <img src={img} class="image-port d-block w-100"></img>
                <div style={text1} class="port-text">
                  Lirante
                </div>
                <div class="overlay text-start">
                  <p style={{ fontFamily: "Lufga-logo", fontSize: "40px" }}>
                    Lirante
                  </p>
                  <p style={{ fontFamily: "Lufga" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    congue interdum ligula a dignissim. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed lobortis orci
                    elementum egestas lobortis.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-5"
                    style={btnStyle1}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-around align-items-center mb-5">
              <div class="contain">
                <img src={img} class="image-port d-block w-100"></img>
                <div style={text1} class="port-text">
                  Lirante
                </div>
                <div class="overlay text-start">
                  <p style={{ fontFamily: "Lufga-logo", fontSize: "40px" }}>
                    Lirante
                  </p>
                  <p style={{ fontFamily: "Lufga" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    congue interdum ligula a dignissim. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed lobortis orci
                    elementum egestas lobortis.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-5"
                    style={btnStyle1}
                  >
                    →
                  </button>
                </div>
              </div>
              <div class="contain">
                <img src={img} class="image-port d-block w-100"></img>
                <div style={text1} class="port-text">
                  Lirante
                </div>
                <div class="overlay text-start">
                  <p style={{ fontFamily: "Lufga-logo", fontSize: "40px" }}>
                    Lirante
                  </p>
                  <p style={{ fontFamily: "Lufga" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    congue interdum ligula a dignissim. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed lobortis orci
                    elementum egestas lobortis.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-5"
                    style={btnStyle1}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying3"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying3"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="d-flex justify-content-center align-items-center gap-3 mb-5">
        <button class="btn" style={btnStyle2}>
          Landing Page
        </button>
        <button class="btn" style={btnStyle2}>
          Product Design
        </button>
        <button class="btn" style={btnStyle2}>
          Animation
        </button>
        <button class="btn" style={btnStyle2}>
          Glassmorphism
        </button>
        <button class="btn" style={btnStyle2}>
          Cards
        </button>
      </div>
      <div class="d-flex justify-content-center align-items-center gap-4 mb-4">
        <h2 style={{ color: "#344054", fontFamily: "Lufga-logo" }}>
          Lirante - Food Delivery Solution
        </h2>
        <button
          type="button"
          class="btn btn-outline-primary rounded-5"
          style={{
            color: "white",
            borderColor: "#FD853A",
            backgroundColor: "#FD853A",
            width: "50px",
            height: "50px",
          }}
        >
          ↗
        </button>
      </div>
      <p
        style={{ fontFamily: "Lufga", color: "#344054" }}
        class="w-50 text-center mx-auto d-block mb-5"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
        interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed lobortis orci elementum egestas lobortis.
      </p>
    </div>
  );
}
