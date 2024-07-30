import cards1 from "./images/mob1.png";
import cards2 from "./images/mob2.png";
import cards3 from "./images/mob3.png";

export default function Blog() {
  const btnStyle2 = {
    backgroundColor: "#F2F4F7",
    color: "black",
    borderRadius: "15px",
    padding: "5px 15px",
  };
  return (
    <div>
      <div class="d-flex container justify-content-between align-items-center mt-5 mb-4">
        <h1 style={{ color: "#344054", fontFamily: "Lufga-logo" }}>
          From my <br /> blog post
        </h1>
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
      <div class="d-flex container justify-content-between align-items-center">
        <div
          class="card position-relative"
          style={{ width: "18rem", border: "none" }}
        >
          <img src={cards1} class="card-img-top blog-card" />
          <button
            class="position-absolute btn-card"
            style={{
              top: "215px",
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
          <div class="card-body">
            <button class="btn" style={btnStyle2}>
              UI/UX Design
            </button>
            <div class="d-flex gap-5 mt-3" style={{ color: "#344054" }}>
              <p>
                <span style={{ color: "#FD853A" }}>•</span> Jayesh Patil
              </p>
              <p>
                {" "}
                <span style={{ color: "#FD853A" }}>•</span> 10 Nov, 2023
              </p>
            </div>
            <p
              class="card-text"
              style={{
                fontFamily: "Lufga-logo",
                color: "#344054",
                fontSize: "19px",
              }}
            >
              Design Unraveled: Behind the Scenes of UI/UX Magic
            </p>
          </div>
        </div>
        <div
          class="card position-relative"
          style={{ width: "18rem", border: "none" }}
        >
          <img src={cards2} class="card-img-top blog-card" />
          <button
            class="position-absolute btn-card"
            style={{
              top: "215px",
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
          <div class="card-body">
            <button class="btn" style={btnStyle2}>
              App Design
            </button>
            <div class="d-flex gap-5 mt-3" style={{ color: "#344054" }}>
              <p>
                <span style={{ color: "#FD853A" }}>•</span> Jayesh Patil
              </p>
              <p>
                {" "}
                <span style={{ color: "#FD853A" }}>•</span> 09 Oct, 2023
              </p>
            </div>
            <p
              class="card-text"
              style={{
                fontFamily: "Lufga-logo",
                color: "#344054",
                fontSize: "19px",
              }}
            >
              Sugee: Loan Management System for Rural Sector.
            </p>
          </div>
        </div>
        <div
          class="card position-relative"
          style={{ width: "18rem", border: "none" }}
        >
          <img src={cards3} class="card-img-top blog-card" />
          <button
            class="position-absolute btn-card"
            style={{
              top: "215px",
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
          <div class="card-body">
            <button class="btn" style={btnStyle2}>
              App Design
            </button>
            <div class="d-flex gap-5 mt-3" style={{ color: "#344054" }}>
              <p>
                <span style={{ color: "#FD853A" }}>•</span> Jayesh Patil
              </p>
              <p>
                {" "}
                <span style={{ color: "#FD853A" }}>•</span> 13 Aug, 2023
              </p>
            </div>
            <p
              class="card-text"
              style={{
                fontFamily: "Lufga-logo",
                color: "#344054",
                fontSize: "19px",
              }}
            >
              Cinetrade: Innovative way to invest in Digital Media
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
